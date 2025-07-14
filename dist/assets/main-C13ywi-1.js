import"https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const r=`
<span class=" text-[#444444]">
    Hi! I'm Sam, and this is my personal website.<br>
    The intention of this website is to inform you of who I am, what I know and what I do professionally.<br>
    I am a UK-based software engineer and data analyst, you can see more about my 
    <u><a href="skills.html">skills</a></u> and <u><a href="portfolio.html">portfolio</a></u> on their respective pages.<br>
  </span>
  <div class="flex flex-row border-t-2 border-[#444444] text-[#444444] py-2">
    <div class="w-1/2 border-r-2 mx-2">
      <span>Favourite bands/musicians:</span>
      <ul class="list-disc">
        <li>LCD Soundsystem</li>
        <li>Talking Heads</li>
        <li>CASIOPEA</li>
        <li>Alvvays</li>
      </ul>
    </div>
    <div class="w-1/2 mx-2">
      <span>Favourite video games:</span>
      <ul class="list-disc">
        <li>Metal Gear Solid 2 & 3</li>
        <li>Fallout New Vegas</li>
        <li>Garry's Mod</li>
        <li>Hitman 3</li>
      </ul>
    </div>
  </div>
`,d=`
<div class="flex flex-row text-[#444444] py-2">
    <div class="w-1/2 border-r-2 mx-2">
      <span>Web Dev skills:</span>
      <ul class="list-disc">
        <li>HTML5 and CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>Blade</li>
        <li>Laravel</li>
        <li>Livewire</li>
      </ul>
    </div>
    <div class="w-1/2 mx-2">
      <span>I also know these languages:</span>
      <ul class="list-disc">
        <li>Python</li>
        <li>Java</li>
        <li>Kotlin</li>
        <li>C and C++</li>
        <li>C#</li>
        <li>Haskell</li>
        <li>Prolog</li>
        <li>Bash</li>
      </ul>
    </div>
  </div>
  <div class="w-full mx-2 border-t-2 border-[#444444] text-[#444444] py-2">
    <span>I am also experienced with these technologies:</span>
    <ul class="list-disc">
      <li>Windows versions XP through 11</li>
      <li>GNU + Linux (I daily drive Debian, but also am familliar with Arch and ChromeOS)</li>
      <li>OSX</li>
      <li>MySQL + SQLite</li>
      <li>Git</li>
      <li>Android Studio</li>
      <li>Unity Game Engine</li>
      <li>LaTeX</li>
      <li>Jupyter notebooks</li>
      <li>Numpy + Pandas + Pytesseract</li>
    </ul>
  </div>
`,c=`
<span class=" text-[#444444]">
    Here I list a series of noteworthy projects that I have completed in the past:
  </span>
  <div class="w-full mx-2 text-[#444444]">
    <ul class="list-disc">
      <li>For my undergraduate dissertation, I developed the "Sociogram Analysis Toolkit"; 
        A web app built on Laravel + Livewire that is able to display quick and easy visualisations
         of scraped Instagram user data. Aimed at tracking the behaviour and connections of online radicalisers, 
         it utilises a variety of different SNA methods.<img class="border-b-2 border-[#444444] pb-2 mb-2" src="Media/graphgif.gif">
         <img class="w-2/5 inline-block border-r-2 border-[#444444] pr-8 mr-8" src="Media/graphbubble.png"><img class="w-2/5 inline-block" src="Media/graph2.png">
         <br>The source code for this project is currently closed. Please contact me if you wish to see a demo.</li>
    </ul>
  </div>
`,u=`
<div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
    <ion-icon name="mail-outline" class="text-6xl translate-y-5"></ion-icon>
    <span class="">: slomas04@outlook.com</span>
  </div>
  <div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
    <ion-icon name="logo-discord" class="text-6xl translate-y-5"></ion-icon>
    <span class="">: slomas04</span>
  </div>
`;document.getElementById("headerBox");let t=document.getElementById("contentsBox"),m=document.getElementById("homeButton"),p=document.getElementById("skillsButton"),f=document.getElementById("portfolioButton"),h=document.getElementById("contactButton");m.addEventListener("click",a);p.addEventListener("click",v);f.addEventListener("click",y);h.addEventListener("click",b);function a(){t.innerHTML=r}function v(){t.innerHTML=d}function y(){t.innerHTML=c}function b(){t.innerHTML=u}a();
