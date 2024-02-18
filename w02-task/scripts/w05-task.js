/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */

const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
          const articleElement = document.createElement("article");
        
          const h3Element = document.createElement("h3");
          h3Element.textContent = temple.templeName;
        
          const imgElement = document.createElement("img");
          imgElement.src = temple.imageUrl;
          imgElement.alt = temple.location;
        
          articleElement.appendChild(h3Element);
          articleElement.appendChild(imgElement);
        
          templesElement.appendChild(articleElement);
    });
};

const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
  
        const templeData = await response.json();
    
        templeList.push(...templeData);

        displayTemples(templeList);
  
    } catch (error) {
    console.error("Error fetching temple data:", error);
    }
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = ""; // Clears all <article> elements
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
  
    const filter = document.getElementById("filtered").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
    }
};

/* Event Listener */

const filteredElement = document.getElementById("filtered");

filteredElement.addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();