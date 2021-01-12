import React from "react"

let response;

fetch('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945')
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  response = data;
})
.catch((error) => {
  console.error('Error:', error);
});
const Order = () => (
    <p>{response}</p>
)

export default Order
