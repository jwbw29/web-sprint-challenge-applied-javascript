import axios from "axios";
const Tabs = (topics) => {
  // # [x] TASK 3
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
  console.log(topicWrapper);
  return topicWrapper;
};
Tabs(["javascript", "json", "basketball"]);

const tabsAppender = (selector) => {
  // # TASK 4

  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.

  /*
  # Notes
  [x] need to do an axios.get('http://localhost:5001/api/topics')
  [x] find the array of topics inside the response
  [ ] append the tabs to the element in the DOM that matches

  */
  let element = document.querySelector(selector);
  axios
    .get("http://localhost:5001/api/topics")
    .then((res) => {
      /*
      What we're wanting to do here is:
      element.appendChild(topics[0])
      element.appendChild(topics[1])
      element.appendChild(topics[2])
      element.appendChild(topics[3])
      */
      res.data.topics.forEach((topic) => {
        //so far so good
        // [ ] call the function so that we can create the container
        // [ ] append what that function returns to the 'element' created here
        console.log(topic);

        element.appendChild(Tabs(topic));
        // console.log(element);
      });
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(element);
  return element;
};
tabsAppender("span");

export { Tabs, tabsAppender };
