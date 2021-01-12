import React from "react"
import { Link } from "gatsby"
import Product from "../templates/product"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Produkter</h1>
    <p>Vi har för närvarande {data.allPrismicProduct.totalCount} produkter</p>
    <p>Varukorg</p>
    <p>Totalt: 0 kr</p>    
    <Link to={"/order"}>
      <p>Genomför köp</p>
    </Link>
    {data.allPrismicProduct.edges.map(({node}) => (
      <Product key={node.id} data={node} />
    ))}
  </Layout>
)

export const IndexQuery = graphql`
  query MyQuery {
    allPrismicProduct {
      totalCount
      edges {
        node {
          data {
            title {
              text
            }
            price
            paragraph {
              text
            }
            image {
              url
            }
          }
          id
        }
      }
    }
  }
`

export default IndexPage
