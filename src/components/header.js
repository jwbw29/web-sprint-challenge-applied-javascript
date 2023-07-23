const Header = (title, date, temp) => {
  // [x] TASK 1
  // - Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // - The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // - The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // ?create the elements
  const container = document.createElement("div");
  const containerDate = document.createElement("span");
  const containerTitle = document.createElement("h1");
  const containerTemp = document.createElement("span");

  // ?create classes/attributes
  container.classList.add("header");
  containerDate.classList.add("date");
  containerTemp.classList.add("temp");

  // ?set the heirarchy
  container.appendChild(containerDate);
  container.appendChild(containerTitle);
  container.appendChild(containerTemp);

  // ?Add text content
  containerDate.textContent = date;
  containerTitle.textContent = title;
  containerTemp.textContent = temp;

  console.log(container);
  return container;
};

const headerAppender = (selector) => {
  // [x] TASK 2
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  // - HINT: querySelector can take in a string (ie querySelector("#wrapper")) but it can also take in a variable (ie querySelector(selector)).
  // We are taking care of passing in the correct selector on line 16, so all that you need to do is pass it into the querySelector method for the tests to work!
  let newSelector = document.querySelector(selector);
  newSelector.appendChild(Header("title", "date", "temp"));
  return newSelector;
};

export { Header, headerAppender };
