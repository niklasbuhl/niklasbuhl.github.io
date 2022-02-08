/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

// const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: {frontmatter: {meta: {type: {ne: "other"}}}}) {
          edges {
            node {
              body
              frontmatter {
                meta {
                  type
                  slug
                }
              }
            }
          }
        }
      }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const pages = result.data.allMdx.edges
  // We'll call `createPage` for each result
  pages.forEach(({ node }, index) => {

    // Projects
    if (node.frontmatter.meta.type === 'project')  {
      // const projectPath = '/projects/' + node.frontmatter.meta.slug
      createPage({
        path: node.frontmatter.meta.slug,
        component: path.resolve(`./src/templates/ProjectTemplate.js`),
        context: { slug: node.frontmatter.meta.slug },
      })
    }

    // Articles
    if (node.frontmatter.meta.type === 'article')  {
      // const projectPath = '/projects/' + node.frontmatter.meta.slug
      createPage({
        path: node.frontmatter.meta.slug,
        component: path.resolve(`./src/templates/ArticleTemplate.js`),
        context: { slug: node.frontmatter.meta.slug },
      })
    }


    // Blogposts
    if (node.frontmatter.meta.type === 'blogpost')  {
      // const projectPath = '/projects/' + node.frontmatter.meta.slug
      createPage({
        path: node.frontmatter.meta.slug,
        component: path.resolve(`./src/templates/BlogpostTemplate.js`),
        context: { slug: node.frontmatter.meta.slug },
      })
    }


    // Pages
    if (node.frontmatter.meta.type === 'page')  {
      // const projectPath = '/projects/' + node.frontmatter.meta.slug
      createPage({
        path: node.frontmatter.meta.slug,
        component: path.resolve(`./src/templates/PageTemplate.js`),
        context: { slug: node.frontmatter.meta.slug },
      })
    }

    // Misc


  })
}
