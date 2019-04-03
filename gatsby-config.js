var autoprefixer = require('autoprefixer')
var browserslist = require('browserslist')

module.exports = {
  siteMetadata: {
    siteUrl: `https://torchbox.com`,
    title: `Torchbox`,
    description: `The digital product agency for tomorrow's non-profits`,
    author: `@Torchbox`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/preview"],
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          navigateFallbackWhitelist: [/\/$/],
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/fonts/'],
        postCssPlugins: [
          autoprefixer({
            grid: 'autoplace',
            browsers: browserslist()
          }),
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `torchbox`,
        short_name: `Torchbox`,
        start_url: `/`,
        background_color: `#2f128d`,
        theme_color: `#fd5765`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wagtail",
        fieldName: 'wagtail',
        url: process.env.GATSBY_WAGTAIL_ENDPOINT || 'http://localhost:8000/graphql/',
        // refetchInterval: 10,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: true,             // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox even when doing so is possible (default)
          cleanupIDs: false,    // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`query-string`, `strict-uri-encode`]
      }
    },
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-K5HPMR",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
    },
  },
  ],
}
