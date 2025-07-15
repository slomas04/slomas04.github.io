import "https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";
import { initClock } from "./clockComponent.js";
import * as homeContents from "./homeContents.js";
import * as skillsContents from "./skillsContents.js";
import * as portfolioContents from "./portfolioContents.js";
import * as contactContents from "./contactContents.js";

import graphGif from "../Media/graphgif.gif";
import graphBubble from "../Media/graphbubble.png";
import graph2 from "../Media/graph2.png";

// list of assets we want preloaded
const preloadQueue = [graphGif, graphBubble, graph2];

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
    document.getElementById("graphgif").src = graphGif;
    document.getElementById("graph2").src = graph2;
    document.getElementById("graphBubble").src = graphBubble;
}

function loadContacts(){
    contentsBox.innerHTML = contactContents.html;
}

initClock();
preloadAssets();
loadHome();