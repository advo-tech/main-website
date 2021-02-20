import React from "react"
import Layout from "../components/layout"
import FeaturedArticlesComponent from "../components/featured_articles"
import { graphql } from "gatsby"
import Archive from "../components/archive";

export const query = graphql`
query($section: String!, $issue_full_name: String!) {
    top_five_articles: allMarkdownRemark(filter: {frontmatter: {section: {eq: $section}}}, limit: 5, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date
            authors
            slug
            section
            images
          }
          excerpt(pruneLength: 2000)
        }
      }
    },
    archive_articles: allMarkdownRemark(filter: {frontmatter: {section: {eq: $section}, issue_full_name: {eq: $issue_full_name}}}) {
        edges {
            node {
            id
            frontmatter {
                title
                slug
                authors
                images
                section
                year
            }
            excerpt(pruneLength: 2000)
            }
        }
    },
    issue_full_names: allMarkdownRemark {
      distinct(field: frontmatter___issue_full_name)
    }
}
`

export default ({data, pageContext}) => (
  <Layout
    pageMeta={{
      title:pageContext.section.charAt(0).toUpperCase() + pageContext.section.slice(1)
  }}
  >
      <FeaturedArticlesComponent articles={data.top_five_articles.edges} metadata={data.metadata}/>
      <Archive  section={pageContext.section}
                issue_full_name={pageContext.issue_full_name}
                issue_full_names={data.issue_full_names}
                articles={data.archive_articles.edges}/>
  </Layout>
)