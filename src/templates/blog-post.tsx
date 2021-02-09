import React from "react"
import { Link, graphql } from "gatsby"

import Article from '../components/Article'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Sider from '../components/Sider'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const {
    site: {
      siteMetadata: {
        author: {
          name,
        },
      },
    },
    markdownRemark: {
      frontmatter: {
        date,
        description,
        tags,
        title,
      },
      excerpt,
      html,
    },
  } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <Sider />
      <main>
        <SEO
          title={title}
          description={description || excerpt}
        />
        <Article name={name} title={title} date={date} html={html} tags={tags ? tags.split(',') : []} display={1} />
        <nav style={{ marginBottom: 30 }}>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                {"<"} {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} {">"}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
      }
    }
  }
`
