/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const path = require('path')

// let dir = path.resolve();

//  console.log('dirname' __dirname)

const myCustomQueries = {
  md: '(max-width: 991px)',
  lg: '(max-width: 1440px)'
};

module.exports = {
  plugins: [
    `gatsby-plugin-react-svg`,
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     // implementation: require("sass"),
    //     data: `@use "${__dirname}/src/style/main.scss";`
    //   }
    // },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/styles/main.scss";`,
      }
    },
    // `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-loadable-components-ssr`,
    {
      resolve: "gatsby-plugin-breakpoints",
        options: {
            queries: myCustomQueries,
        },
    }
  ],
}
