export const html = /*HTML*/`
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
</div>
`
// 360 x 180 Image size 2:1 ratio