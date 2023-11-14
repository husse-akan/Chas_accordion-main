let sections = 5;

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

let accordion = document.querySelector(".accordion");
console.log(accordion);

async function getList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const list = await response.json();
  console.log(list);
  list.forEach((item) => {
    sections++;

    const body = item.body;
    const title = item.title;
    console.log(body, title);
    console.log(`body: ${body}, title: ${title}`);

    let div = document.createElement("div");
    div.textContent = title;
    accordion.appendChild(div);
    div.setAttribute("class", "title");
    div.setAttribute("id", `section${sections}`);
    div.addEventListener("click", toggle);

    let div2 = document.createElement("div");
    div2.textContent = body;
    accordion.appendChild(div2);
    div2.setAttribute("class", "description");
    if (sections % 2 === 0) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "green";
    }
  });
  console.log(list);
  return list;
}
getList();
