//index
// --------------------task 1-------------------------
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const inputEl = document.querySelector("#input");
// const buttonEl = document.querySelector("button");

// buttonEl.addEventListener("click", () => {
//   if (!inputEl.value) {
//     return;
//   }
//   inputEl.value = "Clicked!";
//   inputEl.style.color = getRandomHexColor();
// });

// --------------------task 2-------------------------

// const inputEl = document.querySelector("#input");
// const buttonEl = document.querySelector("button");

// buttonEl.addEventListener("click", () => {
//   alert(inputEl.value);
//   inputEl.value = "";
// });

// --------------------task 3-------------------------

// const inputFirstEl = document.querySelector("#first-input");
// const inputSecondEl = document.querySelector("#second-input");
// const buttonEl = document.querySelector("button");

// buttonEl.addEventListener("click", () => {
//   const valueSecond = inputSecondEl.value;
//   inputSecondEl.value = inputFirstEl.value;
//   inputFirstEl.value = valueSecond;
// });

// --------------------task 4-------------------------

// const buttonEl = document.querySelector("button");
// const paragEls = document.querySelectorAll("p");
// console.dir(paragEls);

// buttonEl.addEventListener("click", () => {
//   paragEls.forEach((el, idx) => {
//     el.textContent = `${idx + 1}`;
//   });
// });

// --------------------task 5-------------------------

// const inputTestEl = document.querySelector("#test");
// const inputResultEl = document.querySelector("#result");
// const buttonEl = document.querySelector("button");

// buttonEl.addEventListener("click", () => {
//   if (isNaN(Number(inputTestEl.value))) {
//     inputTestEl.value = "";
//     inputResultEl.value = "";
//     return alert("Input number!");
//   }
//   inputResultEl.value = inputTestEl.value ** 2;
// });
// --------------------task 6-------------------------
// const titleEl = document.querySelector("h1");
// const listEl = document.createElement("ul");

// titleEl.insertAdjacentElement("afterend", listEl);

// let itemText = prompt("Input item of list");

// while (itemText !== "" && itemText !== null) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = itemText;
//   listEl.appendChild(itemEl);
//   itemText = prompt("Input item of list");
// }

// --------------------task 7-------------------------

// const linksEls = document.querySelectorAll("a");

// linksEls.forEach((el) => {
//   el.addEventListener("mouseover", (event) => {
//     event.target.title = event.target.textContent;
//   });
// });

// --------------------task 8-------------------------

// const spansEls = document.querySelectorAll("span");

// const fillRedColor = (event) => {
//   event.target.style.backgroundColor = "#ab1414ff";
//   event.target.removeEventListener("click", fillRedColor);
//   event.target.addEventListener("click", fillGreenColor);
// };

// const fillGreenColor = (event) => {
//   event.target.style.backgroundColor = "#2aa536ff";
//   event.target.removeEventListener("click", fillGreenColor);
//   event.target.addEventListener("click", fillRedColor);
// };

// spansEls.forEach((span) => {
//   span.addEventListener("click", fillRedColor);
// });

// --------------------task 9-------------------------

// const listEl = document.querySelector("#ol");
// const itemsArr = document.querySelectorAll("li");
// const bittonEl = document.querySelector("#btn");

// itemsArr.forEach((item) => {
//   let hrefEl = document.createElement("a");
//   item.textContent = "";
//   hrefEl.href = "#";
//   hrefEl.textContent = "пункт";
//   item.append(hrefEl);
// });

// bittonEl.addEventListener("click", () => {
//   let linkEl = document.createElement("li");
//   let newHrefEl = document.createElement("a");
//   newHrefEl.href = "#";
//   newHrefEl.textContent = "пункт";
//   linkEl.append(newHrefEl);
//   listEl.appendChild(linkEl);
// });

// listEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   event.target.textContent = event.target.textContent.concat("!");
//   console.log("Hello");
// });

// --------------------task 10------------------------

// const btnLock = document.querySelector(".lock");
// const btnUnlock = document.querySelector(".unlock");
// const inputEl = document.querySelector("#input");

// btnLock.addEventListener("click", () => {
//   inputEl.disabled = true;
// });

// btnUnlock.addEventListener("click", () => {
//   inputEl.disabled = false;
// });

// --------------------task 11------------------------

// const inputFirstEl = document.querySelector("#input1");
// const inputSecondEl = document.querySelector("#input2");
// const resultEl = document.querySelector("#result");
// console.log(resultEl);
// const btnEl = document.querySelector("#btn");

// btnEl.addEventListener("click", () => {
//   if (isNaN(Number(inputFirstEl.value)) || isNaN(Number(inputSecondEl.value))) {
//     inputFirstEl.value = "";
//     inputSecondEl.value = "";
//       alert("Input correct numbers");
//       resultEl.textContent = "?";
//     return;
//   }
//   resultEl.textContent =
//     Number(inputFirstEl.value) + Number(inputSecondEl.value);
//   console.log(resultEl);
// });

// --------------------task 12------------------------
// const inputsArr = document.querySelectorAll("input");
// const textEl = document.querySelector("#test");

// inputsArr.forEach((input) => {
//   input.addEventListener("blur", (event) => {
//     console.log(event.target.value);
//     textEl.textContent = event.target.value;
//   });
// });

// --------------------task 13------------------------
// const inputEl = document.querySelector("input");
// const spanEl = document.querySelector("#show");

// inputEl.addEventListener("keydown", (event) => {
//   inputEl.value = "";
//   spanEl.textContent = event.code;
// });

// --------------------task 14------------------------

// const inputEl = document.querySelector("input");
// const spanEl = document.querySelector("#show");

// inputEl.addEventListener("keydown", (event) => {
//   inputEl.value = "";
//   spanEl.textContent = event.key;
//   console.log(event.code);
//   console.log(event.key);
// });
// -----------------------end--------------------------
