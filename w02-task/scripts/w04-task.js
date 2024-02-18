/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Kenzie Ash',
    photo: "/w02-task/images/cse121b_me.png",
    favoriteFoods: ['Sushi', 'Korean BBQ', 'Mince Meat Pie', 'Stromboli', 'Mangoes', 'Käsespätzle'],
    hobbies: ['Watching Movies', 'Camping', 'Video Games', 'Reading',],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

let firstPlace = {
    place: 'Dallas, TX',
    length: '18 years'
};

myProfile.placesLived.push(firstPlace);

let secondPlace = {
    place: 'Rexburg, ID',
    length: '3 years'
};

myProfile.placesLived.push(secondPlace);


/* DOM Manipulation - Output */
/* Name */

let nameElement = document.getElementById('name');
nameElement.innerText = myProfile.name;

/* Photo with attributes */

let photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

let placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach(place => {
  let dt = document.createElement("dt");
  dt.textContent = place.place;

  let dd = document.createElement("dd");
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});

