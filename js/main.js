import "https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";
import { initClock } from "./clockComponent.js";
import * as homeContents from "./homeContents.js";
import * as skillsContents from "./skillsContents.js";
import * as portfolioContents from "./portfolioContents.js";
import * as contactContents from "./contactContents.js";

import shamanReload from "../Media/shaman_reload_m.mp4"
import shamanShoot from "../Media/shaman_shoot_m.mp4"

// list of assets we want preloaded
const preloadQueue = [shamanReload, shamanShoot];

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

function preloadAssets(){
    preloadQueue.forEach(element => {
        var img = new Image();
        img.src = element;
    });
}

function loadHome(){
    contentsBox.innerHTML = homeContents.html;
}

function loadSkills(){
    contentsBox.innerHTML = skillsContents.html;
}

function loadPortfolio(){
    contentsBox.innerHTML = portfolioContents.html;
    document.getElementById("shaman_shoot").src = shamanShoot;
    document.getElementById("shaman_reload").src = shamanReload;
}

function loadContacts(){
    contentsBox.innerHTML = contactContents.html;
}

initClock();
preloadAssets();
loadHome();