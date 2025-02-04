import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

export default ({ data, pageContext }) => {
  console.log('data', data, pageContext);
  if (data.fiction.edges.length > 0) {
    console.log('YES!');
  }
  //NOTE FROM ALBERT: MUST INCLUDE COLUMNS - ISSUES WEBSITE DOESN'T ACCOMODATE THAT RN. 
  return (
    <Layout
      pageMeta={{
        title:pageContext.issue_full_name
    }}
    >
        <div class="container">
            <h1 class="header"> {pageContext.issue_full_name} </h1>
            <div class = "row">
                <div class="col-sm-6">
                    {/* <H2 class="subheader"> Buy this issue <u><Link to="/shop">here</Link></u></H2> */}
                    <figure>
                        <a href="/shop">
                            <Image name={convertToSlug(pageContext.issue_full_name) + ".png"}/>
                        </a>
                    </figure>
                </div>
                <div class="col-sm-6">
                    {/* conditionally rendering sections if content exists */}

                     {/* NOTES - aka Editor's notes */}
                     {data.notes.edges.length > 0 && 
                      <div>
                         <h2 class="subheader no_padding">Notes</h2>
                         <hr class="subheader-border"></hr>
                         {data.art.edges.map(edge => (
                              <div class="section-article">
                              <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                              {edge.node.frontmatter.authors.map(author => (
                                  <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                              ))}
                              </p>
                              </div>
                         ))}
                      </div>
                    }          

                    {/* FICTION */}
                    {data.fiction.edges.length > 0 && 
                      <div>
                        <h2 class="subheader no_padding">Fiction</h2>
                        <hr class="subheader-border"></hr>
                        {data.fiction.edges.map(edge => (
                            <div class="section-article">
                            <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                            {edge.node.frontmatter.authors.map(author => (
                                <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                            ))}
                            </p>
                            </div>
                        ))}
                      </div>
                    }
                    
                    {/* FEATURES */}
                    {data.features.edges.length > 0 && 
                      <div>
                        <h2 class="subheader no_padding">Features</h2>
                        <hr class="subheader-border"></hr>
                        {data.features.edges.map(edge => (
                            <div class="section-article">
                            <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                            {edge.node.frontmatter.authors.map(author => (
                                <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                            ))}
                            </p>
                            </div>
                        ))}
                      </div>
                    }

                    {/* POETRY */}
                    {data.poetry.edges.length > 0 && 
                      <div>
                         <h2 class="subheader no_padding">Poetry</h2>
                          <hr class="subheader-border"></hr>
                          {data.poetry.edges.map(edge => (
                              <div class="section-article">
                              <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                              {edge.node.frontmatter.authors.map(author => (
                                  <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                              ))}
                              </p>
                              </div>
                          ))}
                      </div>
                    }

                    {/* ART */}
                    {data.art.edges.length > 0 && 
                      <div>
                        <h2 class="subheader no_padding">Art</h2>
                        <hr class="subheader-border"></hr>
                        {data.art.edges.map(edge => (
                            <div class="section-article">
                            <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                            {edge.node.frontmatter.authors.map(author => (
                                <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                            ))}
                            </p>
                            </div>
                        ))}
                      </div>
                    }                           

                    {/* COLUMNS */}
                    {data.columns.edges.length > 0 && 
                      <div>
                         <h2 class="subheader no_padding">Columns</h2>
                         <hr class="subheader-border"></hr>
                         {data.columns.edges.map(edge => (
                              <div class="section-article">
                              <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                              {edge.node.frontmatter.authors.map(author => (
                                  <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                              ))}
                              </p>
                              </div>
                         ))}
                      </div>
                    }                           
                </div>
            </div>
        </div>
    </Layout>
  )
}
export const query = graphql`
query($issue_full_name: String!) {
    notes: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "notes"}}}) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                authors
                images
                section
                slug
                issue_full_name
              }
            }
          }
        }
    fiction: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "fiction"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              authors
              images
              section
              issue_full_name
              slug
            }
          }
        }
      },
    features: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "features"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            authors
            images
            section
            slug
            issue_full_name
          }
        }
      }
    },
    poetry: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "poetry"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            authors
            images
            section
            slug
            issue_full_name
          }
        }
      }
    },
    art: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "art"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            authors
            images
            section
            slug
            issue_full_name
          }
        }
      }
    },
    columns: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "columns"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            authors
            images
            section
            slug
            issue_full_name
          }
        }
      }
    }
  }
`