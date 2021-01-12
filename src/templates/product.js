import React from "react"
import Image from "../components/image"
import { Link } from "gatsby"

export default function Product({ data, addItem }) {
  const product = data.data
  return (
    <div style={product_style}>
        <div>
            <h2>{product.title[0].text}</h2>
            <p>pris: {product.price} kr</p>
            <p>{product.paragraph[0].text}</p>
            <p onClick={() => addItem(product)} style={{color: "blue", cursor: "pointer"}}>Lägg till</p>
        </div>
        <div style={image_style}>
            <Image />
        </div>
    </div>
  )
}

const product_style = {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginBottom: "1rem", 
    padding: "1rem",
    border: "1px solid black"
}

const image_style = {
    flex: 1, 
    maxWidth: "200px",
    border: "1px solid black"
};

