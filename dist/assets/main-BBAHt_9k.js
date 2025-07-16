import"https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function v(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=v(e);fetch(e.href,t)}})();var r,d;function g(){r=document.getElementById("clock"),d=new Intl.DateTimeFormat([],{timeZone:"Europe/London",hour:"numeric",minute:"numeric",hour12:!0,timeZoneName:"short"}),a(),setInterval(a,5e3)}function a(){var i=d.format(new Date);i=i.replace(" ",""),r.innerHTML=i}const w=`
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
`,x=`
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
`,b=`
<div class="text-[#444444] border-[#444444] w-full h-full overflow-x-none overflow-y-scroll">
  <div id="shaman-son" class="flex flex-row w-full justify-evenly border-b-2">
    <div class="w-1/3 m-2 p-2 flex-col justify-evenly">
      <span class="text-2xl font-bold">Revenge of the Shaman's Son</span> <br>
      <span>Made in unity, this is a short first-person shooter about managing a painstakingly realistic revolver through a series of treacherous dungeons.<br>
      Your gun, the colt single action army, has no shortcuts. You must scavenge the parts for the bullets from throughout the dungeon and craft them before performing a manual reload. <br>
      The dungeon is filled with snakes and skeletons that will operate with deadly precision to put you in the grave. Only when you kill all of the enemies in one dungeon can you move to the next level.
      </span>
      <br>
      <a class="underline font-bold text-[#444464]" href="https://github.com/slomas04/Unity-ShamansSon">View the project on github!</a>
    </div>
    <div class="w-1/3 m-2">
      <video width="540" height="1080" autoplay loop>
        <source id="shaman_shoot" type="video/mp4">
      </video>
    </div>
    <div class="w-1/3 m-2">
      <video width="540" height="1080" autoplay loop>
        <source id="shaman_reload" type="video/mp4">
      </video>
    </div>
  </div>

  <div id="sociogram" class="flex flex-row w-full justify-evenly border-b-2">
    <div class="w-2/3 m-2 flex flex-col">
      <video width="1080" height="540" autoplay loop>
        <source id="net_expand" type="video/mp4">
      </video>
      <video width="1080" height="540" autoplay loop>
        <source id="net_retract" type="video/mp4">
      </video>
    </div>
    <div class="w-1/3 m-2 p-2 flex-col justify-evenly">
      <span class="text-2xl font-bold">Sociogram Analysis Toolkit</span> <br>
      <span>This software toolkit gives you everything you need to scrape the data of extremist accounts from Instagram, and then analyse them live in a web-application. <br>
      Completed as my dissertation project, the analysis software includes multiple modern standards for social network analysis, such as community detection, 7 different centrality measures (including pagerank and eigenvector centrality), and layout algorithms such as force-atlas 2 and circle packing. <br>
      Made using sigma.js atop Laravel, this web app is easy to deploy. Please contact me if you wish to see a demo!
      </span>
      <br>
      <a class="underline font-bold text-[#444464]" href="https://github.com/slomas04/sociogram-analysis-toolkit">View the project on github!</a>
    </div>
  </div>

  <div id="shaman-son" class="flex flex-row w-full justify-evenly border-b-2">
    <div class="w-1/3 m-2">
      <img id="quiz_main">
    </div>
    <div class="w-1/3 m-2 p-2 flex-col justify-evenly">
      <span class="text-2xl font-bold">The Daily Quiz App</span> <br>
      <span>
        Made in android studio using kotlin, this simple app gives you a daily quiz of your choosing. The number of questions, their category and their difficulty can be chosen at any time, and you can opt to be notified daily to take the quiz. <br>
        With Google Firebase functionality implemented, you can store your scores remotely, and compare with your friends!
      </span>
      <br>
      <a class="underline font-bold text-[#444464]" href="https://github.com/slomas04/Daily-QuizApp">View the project on github!</a>
    </div>
    <div class="w-1/3 m-2">
      <img id="quiz_quiz">
    </div>
  </div>
</div>
`,I=`
<div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
  <ion-icon name="mail-outline" class="text-6xl translate-y-5"></ion-icon>
  <span class="">: slomas04@outlook.com</span>
</div>
<div class="flex-row text-2xl text-[#444444] -mt-6 mb-6">
  <ion-icon name="logo-discord" class="text-6xl translate-y-5"></ion-icon>
  <span class="">: slomas04</span>
</div>
`,c="/assets/shaman_reload_m-CLOZpAe9.mp4",u="/assets/shaman_shoot_m-d9r6YZtf.mp4",m="/assets/net_expand-DMSDOwdF.mp4",h="/assets/net_retract-DCg-w6qD.mp4",p="/assets/quiz_menu-C7pGun0A.png",f="/assets/quiz_quiz-Dt2ovYxJ.png",k=[c,u,m,h,p,f];document.getElementById("headerBox");let s=document.getElementById("contentsBox"),B=document.getElementById("homeButton"),L=document.getElementById("skillsButton"),E=document.getElementById("portfolioButton"),S=document.getElementById("contactButton");B.addEventListener("click",y);L.addEventListener("click",T);E.addEventListener("click",q);S.addEventListener("click",z);function _(){k.forEach(i=>{var o=new Image;o.src=i})}function y(){s.innerHTML=w}function T(){s.innerHTML=x}function q(){s.innerHTML=b,document.getElementById("shaman_shoot").src=u,document.getElementById("shaman_reload").src=c,document.getElementById("net_expand").src=m,document.getElementById("net_retract").src=h,document.getElementById("quiz_main").src=p,document.getElementById("quiz_quiz").src=f}function z(){s.innerHTML=I}g();_();y();
