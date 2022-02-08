import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(filter: {frontmatter: {meta: {type: {in: ["article", "blogpost"]}}}}, limit: 3, sort: {fields: frontmatter___info___date___updated, order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                info {
                  title
                  date {
                    updated
                  }
                }
                meta {
                  slug
                }
              }
            }
          }
        }
      }
    `}

    render={data => {
      // console.log(data)

      // const latestWritings = data.allMdx.edges
      var latestWritings = []

      for(var i  = 0; i < data.allMdx.edges.length; i++) {
        // console.log(data.allMdx.edges[i])
        latestWritings.push(
          <Link
            className="clean-link"
            key={data.allMdx.edges[i].node.id}
            to={data.allMdx.edges[i].node.frontmatter.meta.slug}
          >
            <p>{data.allMdx.edges[i].node.frontmatter.info.title}</p>
          </Link>
        )
      }

      return(
        <>
          {latestWritings}
        </>
      )}
    }
  />
)
