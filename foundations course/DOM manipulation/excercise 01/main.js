/* Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/

const container = document.querySelector("#container")

const paragraph = document.createElement("p");
paragraph.setAttribute("style", "color: red");
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.setAttribute("style", "color:blue");
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

const innerContainer = document.createElement("div");
innerContainer.setAttribute("style", "border:2px solid black; background-color:pink");

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
innerContainer.appendChild(header1)

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
innerContainer.appendChild(paragraph2);

container.appendChild(innerContainer);

// events
const btn = document.createElement("button")
btn.textContent = "Click me"
innerContainer.appendChild(btn)
btn.addEventListener("click", function (e) {
  console.log(e.target);
});     

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
