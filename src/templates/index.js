import React from 'react';
import { graphql } from "gatsby";

const Index = (props) => {

  console.log("index page data", props.data);

  return (
    <div>index page</div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allDrink {
      nodes {
        idDrink
        strDrink
        strDrinkThumb
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Index; 