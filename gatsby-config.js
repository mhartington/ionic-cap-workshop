module.exports = {
  pathPrefix: '/ionic-cap-workshop',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '',
      },
    },
  ],
}
