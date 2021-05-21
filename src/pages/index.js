import React from "react"
import { Link } from "gatsby"
import Product from "../templates/product"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import axios from 'axios';
//import { Router } from "express"

/*Router.get('/', function(req, res, next) {
  axios.get('').then(response => {
    //https://cors-anywhere.herokuapp.com
    res.send(response.data.result);
  }).catch(error => {
    res.send(error.message)
  })
});*/

/*let shoppingCart = [
  {
    "name": "Product 2",
    "quantity": 1,
    "unit_price": 149,
  },
  {
    "name": "Product 1",
    "quantity": 2,
    "unit_price": 97,
  },
]*/

function IndexPage({ data }) {
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [orderAmount, setOrderAmount] = React.useState(0);

  const addItemToBasket=(product) => {
    const productName = product.title[0].text;
    const found = shoppingCart.find( ({ name }) => name === productName );
    if(!found){
      const newItem = {
        "name": product.title[0].text,
        "quantity": 1,
        "unit_price": product.price,
      }
      shoppingCart.push(newItem);
    }else{
      found.quantity++;
    }
    setShoppingCart(shoppingCart);
    setOrderAmount(orderAmount+product.price);
  }

  const removeItemInBasket = (product) => {
    product.quantity--;
    if(product.quantity <= 0){
      let filtered = shoppingCart.filter(function(el) { return el.name != product.name; }); 
      setShoppingCart(filtered);
    }
    setOrderAmount(orderAmount - product.unit_price);
  }

  React.useEffect(() => {
    console.log("cart updated")
  }, [shoppingCart])

  return(
    <Layout>
      <SEO title="Home" />
      <h1>Produkter</h1>
      <p>Vi har för närvarande {data.allPrismicProduct.totalCount} produkter</p>
      <span>Varukorg</span><br />
      {shoppingCart.map(item => 
        <div key={item.name}>
          <span>{item.quantity} x {item.name} - {item.unit_price} kr. 
            <span style={{border: "1px solid black", cursor: "pointer"}} onClick={() => removeItemInBasket(item)}>-</span>
          </span>
          <br />
        </div>
      )}
      <p>Totalt: {orderAmount} kr</p>    
      <Link to={"/order"}>
        <p>Genomför köp</p>
      </Link>
      {data.allPrismicProduct.edges.map(({node}) => (
        <Product key={node.id} data={node} addItem={addItemToBasket} />
      ))}
    </Layout>
  );
}

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
