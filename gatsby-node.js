/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-source-cocktail");


const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
const { createPage } = actions
const indexPageTemplate = path.resolve(`src/templates/index.js`)
    createPage({
    // Path for this page — required
        path: "/",
        component: indexPageTemplate,
        context: {}
    });
}
