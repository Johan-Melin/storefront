import React from "react"
const fetch = require('node-fetch');

const axios = require('axios');
const params = {
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'username': 'PK33740_a100fe7a5257',
        'password': 'XY3Xd86H7xzQAUGK',
        'mode': 'no-cors'
  }
}
let klarnaResponse;

axios.post('https://api.playground.klarna.com/checkout/v3/orders', {params})
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    klarnaResponse = response;
  })
  .catch(error => {
    console.log(error);
  });

  fetch('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945', {params})
    .then(res => res.json())
    .then(json => console.log(json));


const Order = () => (
    <p>d</p>
)

export default Order
