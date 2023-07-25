import axios from "axios";

const Card = (article) => {
  // # [x] TASK 5
  /*
   - Implement this function, which should return the markup you see below.
   - It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
   - The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
   - The text inside elements will be set using their `textContent` property (NOT `innerText`).
   - Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
*/
  //  *code here
  // [x] Create the elements
  const articleWrapper = document.createElement("div");
  const artHeadline = document.createElement("div");
  const artAuthorWrapper = document.createElement("div");
  const artImgContainer = document.createElement("div");
  const img = document.createElement("img");
  const artAuthorName = document.createElement("span");

  // [x] Create classes/attributes/content
  articleWrapper.classList.add("card");
  artHeadline.classList.add("headline");
  artHeadline.textContent = article.headline;
  artAuthorWrapper.classList.add("author");
  artImgContainer.classList.add("img-container");
  img.src = article.authorPhoto;
  artAuthorName.textContent = article.authorName;

  // [x] create hierarchy/append
  articleWrapper.appendChild(artHeadline);
  articleWrapper.appendChild(artAuthorWrapper);
  artAuthorWrapper.appendChild(artImgContainer);
  artAuthorWrapper.appendChild(artAuthorName);
  artImgContainer.appendChild(img);

  return articleWrapper;
};

const cardAppender = (selector) => {
  // # [ ] TASK 6
  /*
  [x] Implement this function that takes a css selector as its only argument.

  [x] It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).

  * However, the articles do not come organized in a single, neat array. Inspect the response closely!
      - Articles is an object, with each property being a topic
      - Each topic is an array of different articles
      - each index of the topic array is an object containing
        - authorName
        - authorPhoto
        - headline
        - id (which appears to be some sort of GUID)
      - that means each index, is almost equivalent to "article" that's getting passed in to the Card() function

  [ ] Create a card from each and every article object in the response, using the Card component.

  [ ] Append each card to the element in the DOM that matches the selector passed to the function.
  */
  // *CODE HERE

  axios
    .get("http://localhost:5001/api/articles")
    .then((res) => {
      const bootstrap = res.data.articles.bootstrap;
      const javascript = res.data.articles.javascript;
      const jquery = res.data.articles.jquery;
      const node = res.data.articles.node;
      const technology = res.data.articles.technology;

      const element = document.querySelector(selector);

      bootstrap.forEach((item) => {
        element.appendChild(Card(item));
      });
      javascript.forEach((item) => {
        element.appendChild(Card(item));
      });
      jquery.forEach((item) => {
        element.appendChild(Card(item));
      });
      node.forEach((item) => {
        element.appendChild(Card(item));
      });
      technology.forEach((item) => {
        element.appendChild(Card(item));
      });
      console.log(element);
      return element;
    })
    .catch((err) => {
      console.error(err);
    });
};

export { Card, cardAppender };
