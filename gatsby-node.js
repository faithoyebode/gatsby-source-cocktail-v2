const path = require(`path`);
var slugify = require("slugify");

exports.onPreInit = () => console.log("Loaded gatsby-source-cocktail");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const indexPageTemplate = path.resolve(`src/templates/index.js`)
    createPage({
    // Path for this page — required
        path: "/",
        component: indexPageTemplate,
        context: {}
    });
    const allDrinks = await graphql(`{
        allCocktail {
            nodes {
            id
            strDrink
            }
        }
    }`);

    console.log("allDrinks", allDrinks);

    allDrinks.data.allCocktail.nodes.forEach(drink => {
        console.log("each drink", `${slugify(drink.strDrink.toLowerCase())}`);
        createPage({
            path: `/drink/${slugify(drink.strDrink.toLowerCase())}`,
            component: path.resolve(`src/templates/single-cocktail.js`),
            context: {id: drink.id}
        })
    })
}


