import React from "react"

const axios = require('axios');

let klarnaResponse;

axios.get('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    klarnaResponse = response;
  })
  .catch(error => {
    console.log(error);
  });


const Order = () => (
    <p>{klarnaResponse}</p>
)

export default Order
