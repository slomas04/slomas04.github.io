import {Chart} from 'chart.js/auto';
import { combDuplicateEntries, chartOptions } from './chartutils.ts';

const artistBtns = document.getElementById("artistBtnDiv").childNodes;
const albumBtns = document.getElementById("albumBtnDiv").childNodes;
const trackBtns = document.getElementById("trackBtnDiv").childNodes;

const artistCanvas = document.getElementById("topartists");
const albumCanvas = document.getElementById("topalbums");
const trackCanvas = document.getElementById("toptracks");

var avatarImages = [[],[],[]]

artistBtns.forEach( function(artistBtn) {
    artistBtn.onclick = function(e) {doRender(artistBtns, artistCanvas, artistBtn)}
});

albumBtns.forEach( function(albumBtn) {
    albumBtn.onclick = function(e) {doRender(albumBtns, albumCanvas, albumBtn)}
});

trackBtns.forEach( function(trackBtn) {
    trackBtn.onclick = function(e) {doRender(trackBtns, trackCanvas, trackBtn)}
});

function setupBarChart(canvas, data, pos, key){
    const config = {
        type: 'bar',
        data: {
            datasets: [{
                data: data,
                parsing: {
                    xAxisKey: key,
                    yAxisKey: "plays"
                },
                borderColor: '#bb4d00',
                backgroundColor: '#bb4d00'
            }],
        },
        options: chartOptions,
        plugins: [{
            id: 'barAvatarPlugin',
            afterDatasetsDraw(chart, args, pluginOptions){
                const {ctx, data} = chart;
                const meta = chart.getDatasetMeta(0);
                const barWidth = meta.data[0].width;

                meta.data.forEach((bar, index) => {
                    const img = avatarImages[pos][index];
                    if (img && img.complete) {
                        const width = barWidth - 2; 
                        const height = barWidth - 2;
                        
                        const x = bar.x - (width / 2);
                        
                        const y = bar.y - height - 10; 

                        ctx.drawImage(img, x, y, width, height);
                    }
                })
            }
        }]
    }

    new Chart(canvas, config);
}

async function doRender(btns, canvas, elem){
    btns.forEach( function(btn) {
        btn.classList.remove('underline');
    });
    elem.classList.add("underline");

    const dataID = elem.id.split('-')[1];
    const dataURL = `https://media.slom.fish/musicdata/${dataID}.json`

    // Comb duplicates then get top 10
    var listenData = combDuplicateEntries(
         await ( await fetch(dataURL) )
        .json(), dataID.split('_')[0])
        .slice(0,10);

    var currentChart = Chart.getChart(canvas.id);
    var key = Object.keys(listenData[0])[0];

    var pos = null;
    switch (dataID.split('_')[0]){
        case 'topartists':
            pos = 0;
            break;
        case 'topalbums':
            pos = 1;
            break;
        case 'toptracks':
            pos = 2;
            break;
    }
    avatarImages[pos] = []
    listenData.forEach( entry => {
        const img = new Image();
        img.src = entry['url'];
        avatarImages[pos].push(img);
    });

    if (currentChart == undefined){
        setupBarChart(canvas, listenData, pos, key)
    } else {
        currentChart.data.datasets.pop();
        currentChart.data.datasets.push({
            data: listenData,
            //labels: labels,
            parsing: {
                xAxisKey: key,
                yAxisKey: "plays"
            },
            borderColor: '#bb4d00',
            backgroundColor: '#bb4d00'
        });
        currentChart.update();
    }

}

Chart.defaults.color = "#d8d8d0";

doRender(albumBtns, albumCanvas, albumBtns[0]);
doRender(artistBtns, artistCanvas, artistBtns[0]);
doRender(trackBtns, trackCanvas, trackBtns[0]);