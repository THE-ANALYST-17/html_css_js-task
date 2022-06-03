//Function to create Element using javascript
function createStarIcon() {
  let element = document.createElement("i");
  element.classList.add("stars");
  element.innerHTML = "&#9734";
  return element;
}
//Function to append child

function appendChildren(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}
let mystar = document.getElementById("root");

//Invoking and storing the created element in here

let allStars = [
  createStarIcon(),
  createStarIcon(),
  createStarIcon(),
  createStarIcon(),
  createStarIcon(),
];

appendChildren(mystar, allStars);

//For Changing star from  regular to bold("clickeed")
allStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let current_star_index = index + 1;
    allStars.forEach((star, j) => {
      current_star_index >= j + 1
        ? (star.innerHTML = "&#9733")
        : (star.innerHTML = "&#9734");

    });
  });
});
