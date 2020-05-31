module.exports = {
  siteMetadata: {
    title: `theClock`,
    description: `A deconstructed grandfather clock.`,
    author: `@ShaunBrazzoni`,
  },

  pathPrefix: "/theClock",

  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `adf1efcba8f7ba09f99cc847a340bf76aca9d598`,
        },
      },
    },
  ],
  //   plugins: [
  //     `gatsby-plugin-react-helmet`,
  //     {
  //       resolve: `gatsby-source-filesystem`,
  //       options: {
  //         name: `images`,
  //  //       path: `${__dirname}/src/images`,
  //       },
  //     },
  //     `gatsby-transformer-sharp`,
  //     `gatsby-plugin-sharp`,
  //     {
  //       resolve: `gatsby-plugin-manifest`,
  //       options: {
  //         name: `theClock`,
  //         short_name: `starter`,
  //         start_url: `/`,
  //         background_color: `#663399`,
  //         theme_color: `#663399`,
  //         display: `minimal-ui`,
  //         //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //       },
  //     },
  //     // this (optional) plugin enables Progressive Web App + Offline functionality
  //     // To learn more, visit: https://gatsby.dev/offline
  //     // `gatsby-plugin-offline`,
  //   ],
}
