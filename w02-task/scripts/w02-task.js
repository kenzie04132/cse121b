/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Mackenzie Ash";
let currentYear = "2024";
let profilePicture = ("/w02-task/images/cse121b_me.png")

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.textContent = (`${currentYear}`);
imageElement.setAttribute("src", `${profilePicture}`);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let foods = ["Sushi", "Korean BBQ", "Mince Meat Pie", "Stromboli", "Mangoes"]

const favoriteFood = "Käsespätzle"
foods.push(favoriteFood);

foodElement.innerHTML += `<br>${foods}`;
foods.shift()
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;






