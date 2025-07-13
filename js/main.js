import "https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";

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
    loadSnippet("snippets/home_snip.html", contentsBox);
}

function loadSkills(){
    loadSnippet("snippets/skills_snip.html", contentsBox);
}

function loadPortfolio(){
    loadSnippet("snippets/portfolio_snip.html", contentsBox);
}

function loadContacts(){
    loadSnippet("snippets/skills_snip.html", contentsBox);
}

function loadSnippet(url, target){
    console.log(url);
    target.innerHTML = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if (this.readyState !== 4 || this.status !== 200) return;
        target.innerHTML = this.responseText;
    }
    xhr.send();
}

loadHome();