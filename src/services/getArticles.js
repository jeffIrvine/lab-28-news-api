/* eslint-disable max-len */

export const getArticlesList = (text) => {
  return fetch(`http://newsapi.org/v2/everything?q=${text}&sortBy=popularity&apiKey=ee513ee17dcb45da92bc2268277c84d1`)
    .then(res => res.json())
    .then(json => json.articles);
};
