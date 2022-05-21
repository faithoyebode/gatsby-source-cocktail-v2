module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem', 
            options: { 
              name: `pages`,
              path: `${__dirname}/src/pages`,
              ignore: [`**/.*`],
             },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-source-restapi`
    ]
}