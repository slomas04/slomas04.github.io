import"https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();var r,c;function h(){r=document.getElementById("clock"),c=new Intl.DateTimeFormat([],{timeZone:"Europe/London",hour:"numeric",minute:"numeric",hour12:!0,timeZoneName:"short"}),a(),setInterval(a,5e3)}function a(){var i=c.format(new Date);i=i.replace(" ",""),r.innerHTML=i}const g=`
<div class="flex flex-row h-full">
  <span class=" text-[#444444] border-r-2 w-9/12">
    Hi! I'm Sam, and this is my personal website.<br>
    The intention of this website is to inform you of who I am, what I know and what I do professionally.<br>
    I am a UK-based software engineer and data analyst, you can see more about my 
    <u><a href="skills.html">skills</a></u> and <u><a href="portfolio.html">portfolio</a></u> on their respective pages.<br>
  </span>
  <div class="flex flex-col justify-evenly border-[#444444] text-[#444444] py-2 w-3/12">
    <div class="w-full mx-2">
      <span>Favourite bands/musicians:</span>
      <ul class="list-disc">
        <li>LCD Soundsystem</li>
        <li>Talking Heads</li>
        <li>CASIOPEA</li>
        <li>Alvvays</li>
      </ul>
    </div>
    <hr class="mx-2 h-2 color-[#444444]">
    <div class="w-full mx-2">
      <span>Favourite video games:</span>
      <ul class="list-disc">
        <li>Metal Gear Solid 2 & 3</li>
        <li>Fallout New Vegas</li>
        <li>Garry's Mod</li>
        <li>Hitman 3</li>
      </ul>
    </div>
  </div>
</div>
`,v=`
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
        <li>C and C++</li>
        <li>C#</li>
        <li>Java</li>
        <li>Kotlin</li>
        <li>Haskell</li>
        <li>Python</li>
        <li>Bash</li>
      </ul>
    </div>
  </div>
  <div class="w-full mx-2 border-t-2 border-[#444444] text-[#444444] py-2">
    <span>I am also experienced with these technologies:</span>
    <ul class="list-disc">
      <li>Android Studio</li>
      <li>Unity Game Engine</li>
      <li>Git</li>
      <li>Windows versions XP through 11</li>
      <li>GNU + Linux (I daily drive Debian, but also am familliar with Arch and ChromeOS)</li>
      <li>OSX</li>
      <li>MySQL + SQLite</li>
      <li>LaTeX</li>
      <li>Jupyter notebooks</li>
      <li>Numpy + Pandas + Pytesseract</li>
    </ul>
  </div>
`,y=`
<span class=" text-[#444444]">
    Here I list a series of noteworthy projects that I have completed in the past:
  </span>
  <div class="w-full mx-2 text-[#444444]">
    <ul class="list-disc">
      <li>For my undergraduate dissertation, I developed the "Sociogram Analysis Toolkit"; 
        A web app built on Laravel + Livewire that is able to display quick and easy visualisations
         of scraped Instagram user data. Aimed at tracking the behaviour and connections of online radicalisers, 
         it utilises a variety of different SNA methods.<img id="graphgif" class="border-b-2 border-[#444444] pb-2 mb-2">
         <img id="graphBubble" class="w-2/5 inline-block border-r-2 border-[#444444] pr-8 mr-8"><img id="graph2" class="w-2/5 inline-block">
         <br>The source code for this project is currently closed. Please contact me if you wish to see a demo.</li>
    </ul>
  </div>
`,b=`
<div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
    <ion-icon name="mail-outline" class="text-6xl translate-y-5"></ion-icon>
    <span class="">: slomas04@outlook.com</span>
  </div>
  <div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
    <ion-icon name="logo-discord" class="text-6xl translate-y-5"></ion-icon>
    <span class="">: slomas04</span>
  </div>
`,d="/assets/graphgif-C85YoCv7.gif",u="/assets/graphbubble-CcEeunI8.png",m="/assets/graph2-pWDi74VD.png",x=[d,u,m];document.getElementById("headerBox");let s=document.getElementById("contentsBox"),w=document.getElementById("homeButton"),I=document.getElementById("skillsButton"),B=document.getElementById("portfolioButton"),L=document.getElementById("contactButton");w.addEventListener("click",p);I.addEventListener("click",k);B.addEventListener("click",S);L.addEventListener("click",T);function E(){x.forEach(i=>{var l=new Image;l.src=i})}function p(){s.innerHTML=g}function k(){s.innerHTML=v}function S(){s.innerHTML=y,document.getElementById("graphgif").src=d,document.getElementById("graph2").src=m,document.getElementById("graphBubble").src=u}function T(){s.innerHTML=b}h();E();p();
