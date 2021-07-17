const qs = require("querystring");
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { query } = qs.parse(event.body);
  let randomWord = query;
  if (!query) {
    const randomLink = `https://random-word-api.herokuapp.com/word?number=1`;
    randomWord = await fetch(randomLink, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => res[0])
      .then((main) => console.log(main))
      .catch((error) => error);
  }
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query || randomWord}`,
    {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  const firstResult = response.results[0];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "text/html",
    },
    body: JSON.stringify(response),
    body: `
       <img
         src="${firstResult.urls.regular}"
         alt="${firstResult.alt_description}"
       />
     `,
  };
};
