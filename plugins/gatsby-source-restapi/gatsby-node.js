const axios = require('axios');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onPreInit = () => {
    console.log("Loading gatsby-source-rest-api plugin");
}


exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}) => {
    const { createNode } = actions
    let data;

    try {
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        data = result.data;
        // console.log(data.data); 
    } catch (error) {
        console.log('error', error);
        return;
    }

    const DRINK_NODE_TYPE = `Drink`
    // Recurse through data and create Gatsby nodes.
    data.drinks.forEach(drink => {

        // console.log("drink", drink);
        return createNode({
            ...drink,
            id: createNodeId(`${DRINK_NODE_TYPE}-${drink.idDrink}`),
            parent: null,
            children: [],
            internal: {
                type: DRINK_NODE_TYPE,
                content: JSON.stringify(drink),
                contentDigest: createContentDigest(drink),
            },
        })}
    )
    return
}    



exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
}) => {
    const { createNode } = actions;
   
    const resolvers = {
        Drink: {
            image: {
            type: 'File',
            resolve: async (source) => {

                const fileNode = await createRemoteFileNode({
                // The remote image URL for which to generate a node.
                    url: `${source.strDrinkThumb}`,
                    parentNodeId: source.id,
                    createNode,
                    createNodeId,
                    cache,
                    reporter
                })

                return fileNode;
   
              
            },
          },
          },
        };
    
        createResolvers(resolvers);
    };