/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const sourceS3 = {
  resolve: 'gatsby-source-s3-image',
  options: {
    bucketName: 'theharvardadvocate'
  },
}

const analytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "UA-147260932-1",
  },
}

module.exports = {
  siteMetadata: {
    title: `The Harvard Advocate`,
    description: `The Harvard Advocate, founded in 1866, is the oldest continuously published collegiate literary magazine in the USA.`,
    author: `Daniel Inge`,
    current_issue: `Winter 2020`,
  },

  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/content`,
        name: 'content',
      }
    },
    sourceS3,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    analytics,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    }
  ]
}
