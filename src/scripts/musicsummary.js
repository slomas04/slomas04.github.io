import { Chart } from 'chart.js/auto';

const dataURL= "https://media.slom.fish/musicdata/aggregated.json";
const idxs = ["total_listens", "unique_tracks", "unique_artists", "unique_albums", "avg_per_day"];

var listenData = ( await ( await fetch(dataURL) ).json()) ['1month'];
idxs.forEach(function(e) {
    document.getElementById(e).textContent = listenData[e]
})

