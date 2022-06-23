const path = require(`path`);

exports.onPreInit = () => console.log("Loaded gatsby-source-cocktail");


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
