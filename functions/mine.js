const fetch = require("node-fetch");
(async()=>{
 let randomWord=''
    const randomLink = `https://random-word-api.herokuapp.com/word?number=1`;
    randomWord = await fetch(randomLink, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => res[0])

      .catch((error) => error);
  console.log(randomWord)
})()