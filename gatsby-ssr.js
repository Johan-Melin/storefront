/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    console.log("SSR");
}

exports.replaceRenderer = ({ bodyComponent }) => {
    console.log("SSR");
    return renderToString(bodyComponent);
  };
/*onPreRenderHTML {
    const fetch = require('node-fetch');
    fetch('https://api.playground.klarna.com/checkout/v3/orders/451599e3-7b77-68d7-97a7-be84c3621945', params)
    .then(res => res.json())
    .then(json => console.log(json));
}

export default fetchKlarna;*/

