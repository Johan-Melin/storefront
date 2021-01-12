import React from "react"
const fetch = require('node-fetch');

//const axios = require('axios');
const params = {
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
  }
}
let klarnaResponse;

/*axios.get('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    klarnaResponse = response;
  })
  .catch(error => {
    console.log(error);
  });*/

  fetch('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945', params)
    .then(res => res.json())
    .then(json => console.log(json));


const Order = () => (
    <p>d</p>
)

export default Order
