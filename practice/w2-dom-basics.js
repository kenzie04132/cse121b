//creates space for and prints a paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//creates space for image and links image
const newImage = document.createElement("img")
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

//creates a header
const newPSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
//adds h2 to section
newSection.appendChild(newH2);
//creates a new paragraph
const newP = document.createElement("p");
newH2.innertext = "Welcome to JavaScript Language"
//adds p to section
newSection.appendChild(newP);

//adds section to body
document.body.appendChild(newSection);


