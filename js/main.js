import "https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";
import * as homeContents from "./homeContents.js";
import * as skillsContents from "./skillsContents.js";
import * as portfolioContents from "./portfolioContents.js";
import * as contactContents from "./contactContents.js";

// Get Important elements
let headerbox = document.getElementById('headerBox');
let contentsBox = document.getElementById('contentsBox');
let homeButton = document.getElementById("homeButton");
let skillsButton = document.getElementById("skillsButton");
let portfolioButton = document.getElementById("portfolioButton");
let contactButton = document.getElementById("contactButton");

homeButton.addEventListener("click", loadHome);
skillsButton.addEventListener("click", loadSkills);
portfolioButton.addEventListener("click", loadPortfolio);
contactButton.addEventListener("click", loadContacts);

function loadHome(){
    contentsBox.innerHTML = homeContents.html;
}

function loadSkills(){
    contentsBox.innerHTML = skillsContents.html;
}

function loadPortfolio(){
    contentsBox.innerHTML = portfolioContents.html;
}

function loadContacts(){
    contentsBox.innerHTML = contactContents.html;
}

loadHome();