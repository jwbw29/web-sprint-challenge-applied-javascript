import axios from "axios";
const Tabs = (topics) => {
  // [x]TASK 3
  /*
  - Implement this function which takes an array of strings ("topics") as its only argument.
  - As an example, if the topics passed are ['javascript', 'bootstrap', 'technology'] then the function returns the markup below.
  - The tags used, the hierarchy of elements and their attributes must match the provided markup!
  - The text inside elements will be set using their `textContent` property (NOT `innerText`).
  */
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicWrapper = document.createElement("div");

  topicWrapper.classList.add("topics");
  topics.forEach((topic) => {
    const title = document.createElement("div");
    title.classList.add("tab");
    title.textContent = topic;
    topicWrapper.appendChild(title);
  });
  return topicWrapper;
};
Tabs(["javascript", "json", "basketball"]);

const tabsAppender = (selector) => {
  // [ ]TASK 4

  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.

  // *Code here
  /*
  # Notes
  - need to do an axios.get('http://localhost:5001/api/topics')

  */
  axios
    .get("http://localhost:5001/api/topics")
    .then((res) => {
      let newSelector = document.querySelector(selector);
      topics.forEach((topic) => {
        newSelector.appendChild(Tabs(topics));
      });
      return newSelector;
    })
    .catch((err) => {
      console.log("error");
    });
};

export { Tabs, tabsAppender };
