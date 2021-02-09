import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Sider from '../components/Sider'
import Article from '../components/Article'
import { getPartOfArticle } from '../utils/html-handle'
import { ArticleDisplay } from '../type'

const BlogIndex = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        author: {
          name,
        },
      },
    },
    allMarkdownRemark: {
      edges,
    },
  } = data

  return (
    <Layout>
      <Sider />
      <main>
        <SEO title="All posts" />
        {
          edges.map(({
            node: {
              frontmatter: {
                date,
                tags,
                title,
              },
              html,
              fields: {
                slug: url,
              }
            }
          }) => (
            <Article
              key={url}
              name={name}
              title={title}
              date={date}
              html={getPartOfArticle(html)}
              tags={tags ? tags.split(',') : []}
              url={url}
              display={ArticleDisplay.preview}
            />
          ))
        }
      </main>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
          }
          timeToRead
          html
        }
      }
    }
  }
`
