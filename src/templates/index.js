/** @jsxImportSource @compiled/react */
import React from 'react';
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Index = (props) => {
  const { allDrink } = props.data

  return (
    <div css={{
        width: "100%",
      }}
    >
      <h1 css={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "40px",
          marginBottom: "40px"
        }}
      >
        Cocktails
      </h1>
      <div css={{
        width: "100%",
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <div css={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          // gridTemplateRows: "500px",
          gridAutoFlow: "row dense",
          gap: "40px 20px",
          "@media (max-width: 1200px)": {
            gridTemplateColumns: "1fr 1fr 1fr"
          },
          "@media (max-width: 991px)": {
            gridTemplateColumns: "1fr 1fr"
          },
          "@media (max-width: 479px)": {
            gridTemplateColumns: "1fr"
          }

        }}>
          {allDrink.nodes.map((item, index) => (
            <div key={index}>
              <div css={{
                width: "100%",
                height: "400px",
                position: "relative",
                borderRadius: "16px",
                boxShadow: "4px 5px 8px #00000020"
              }}>
                <GatsbyImage css={{
                    width: "100%", 
                    height: "100%",                 
                    borderRadius: "16px"
                  }} 
                  image={item?.image?.childImageSharp?.gatsbyImageData ? 
                      item.image.childImageSharp.gatsbyImageData : 
                      item.image.publicURL
                    } 
                />
              </div>
              <p css={{
                  fontSize: "24px",
                  lineHeight: "1.5",
                  fontWeight: 500,
                  marginLeft: "16px",
                  marginTop: "5px",
                  fontFamily: "sans-serif"
                }}
              >
                {item.strDrink}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
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