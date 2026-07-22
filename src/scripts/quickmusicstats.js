
const e_topalbum_img    = document.getElementById("topalbum_img")
const e_topalbum_title  = document.getElementById("topalbum_name")
const e_topalbum_artist = document.getElementById("topalbum_artist")

const e_total_listens = document.getElementById("total_listens"); 
const e_avg_per_day = document.getElementById("avg_per_day");
const e_unique_artists = document.getElementById("unique_artists");
const e_unique_albums = document.getElementById("unique_albums");
const e_busiest_hour = document.getElementById("busiest_hour");
const e_busiest_hour_tz = document.getElementById("busiest_hour_tz");

Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

async function getTopRelease (mode) {
    const dataURL = `https://media.slom.fish/musicdata/top${mode}s_1month.json`
    const records = await ( await fetch(dataURL) ).json();
    const top = records[0];

    document.getElementById(`top${mode}_img`).src = top['url'];
    document.getElementById(`top${mode}_name`).textContent = top[`${mode}_name`];
    document.getElementById(`top${mode}_artist`).textContent = top['artist_name'];
    document.getElementById(`top${mode}_plays`).textContent = `${top['plays']} plays`;
}

async function getAggData(){
    const dataURL = `https://media.slom.fish/musicdata/aggregated.json`
    const records = await ( await fetch(dataURL) ).json();
    const monthly = records["1month"];

    e_total_listens.textContent = monthly[`total_listens`];
    e_avg_per_day.textContent = monthly[`avg_per_day`];
    e_unique_artists.textContent = monthly[`unique_artists`];
    e_unique_albums.textContent = monthly[`unique_albums`];

    const bst = (new Date()).isDstObserved();
    e_busiest_hour_tz.textContent = (bst) ? "(bst)" : "(gmt)";
    const indexOfBusiest = monthly["listen_hours"].reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    var busiest = indexOfBusiest + ((bst) ? 1 : 0);
    if (busiest == 24) busiest = 0;
    console.log(busiest)
    e_busiest_hour.textContent = String(busiest).padStart(2, '0') + ":00\xa0";
}

getAggData();
getTopRelease("album");