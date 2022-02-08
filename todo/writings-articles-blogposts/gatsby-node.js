// ---
// Create Slugs
// ---

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here

  if (node.internal.type === "Mdx") {
    // Get the specific item title slug thing, i.e. project-a, writing-b, blogpost
    const item = createFilePath({ node, getNode });

    // Get the parent, the content folder, which describes the item type - collection
    const parent = getNode(node.parent);

    // Get the name of the folder
    let collection = parent.sourceInstanceName;

    // Create the field with the "collection" type (project, writing or blogpost)
    createNodeField({
      node,
      name: "collection",
      value: collection,
    });

    if (collection === "mdxpages") {

      createNodeField({
        node, // Individual MDX node
        name: "slug", // Name of the field you are adding
        value: node.frontmatter.slug,
      });

    // Collection === projects, writings, blogposts

    }
    
    else if (collection === "blogposts") {

      createNodeField({
        node, // Individual MDX node
        name: "slug", // Name of the field you are adding
        value: `/blog${item}`,
      });

    }

    // Collection === projects, writings
    
    else {

      // Generate the slug from the collection type and item name
      createNodeField({
        node, // Individual MDX node
        name: "slug", // Name of the field you are adding
        value: `/${collection}${item}`,
      });

    }
  }
};

// ---
// Create Pages
// ---

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object

  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const edges = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  edges.forEach(({ node }, index) => {
    if (node.fields.collection === "projects") {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/ProjectTemplate.js`),
        context: { id: node.id },
      });
    }

    if (node.fields.collection === "writings") {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/WritingTemplate.js`),
        context: { id: node.id },
      });
    }

    if (node.fields.collection === "blogposts") {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/BlogPostTemplate.js`),
        context: { id: node.id },
      });
    }

    if (node.fields.collection === "mdxpages") {
      createPage({
        // path: node.frontmatter.slug,
        path: node.fields.slug,
        component: path.resolve(`./src/templates/MDXPageTemplate.js`),
        context: { id: node.id },
      });
    }
  });
};
