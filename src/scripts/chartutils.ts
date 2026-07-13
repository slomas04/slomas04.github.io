const tooltipCallbacks = {
    title: (tooltipItem: any) => {
        let raw = tooltipItem[0]['raw']
        if ('track_name' in raw) return raw['track_name'];
        if ('album_name' in raw) return raw['album_name'];
        return raw["artist_name"];
    },
    afterTitle: (tooltipItem: any) => {
        let raw = tooltipItem[0]['raw']
        if ('track_name' in raw) return raw['artist_name'];
        if ('album_name' in raw) return raw['artist_name'];
        return "";
    },
    label: (tooltipItem: any) => {
        let raw = tooltipItem['raw'];
        return raw['plays'] + " plays";
    }
};

export const chartOptions = {
            animation: true,
            responsive: true,
            maintainAspectRatio: false,
            
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: tooltipCallbacks,
                }
            },
            scales: {
                y: {
                    grace: '50%',
                    grid: {
                        color: '#7b3306',
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                    }
                },
                x: {
                    grid: {
                        color: '#7b3306',
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    // Shorten tick length
                    afterTickToLabelConversion: function(chart: any) {
                        chart.ticks.forEach( function(tick: any){
                            tick["label"] = (tick["label"].length > 15)
                                ? tick["label"].substring(0,12) + "..."
                                : tick["label"];
                        })
                    }
                }
            }
        }

/*  Remove duplicate artists and albums from dataset
    Imported data will have the same album but with additional artists if there is a collab track
    This causes an overlap on the graph.
*/
export function combDuplicateEntries(listenData: any, dataID: any){
    if (dataID == "toptracks"){ // Don't bother for individual tracks
        return listenData;
    }

    var primaryNames = listenData.map( function(item: any) { // Filter down to just primary names
        return item["artist_name"].split(",")[0];
    });

    // recorded: array of non-duplicate values
    // duplicates: array of duplicate value pairs
    var recorded: any = [], duplicates = [];
    for (let i = 0; i < primaryNames.length; i++){
        (recorded.includes(primaryNames[i]))
            ? duplicates.push([recorded.indexOf(primaryNames[i]), i])
            : recorded.push(primaryNames[i]);
    }

    if (dataID == "topartists"){
        duplicates.forEach( function(pair){
            listenData[pair[0]]["plays"] += listenData[pair[1]]["plays"];
            listenData[pair[1]] = null;
        })
    } else if (dataID == "topalbums"){
        duplicates.forEach( function(pair){
            // Check that we aren't deleting different albums from the same musician
            if (listenData[pair[0]] !== null && listenData[pair[0]]["album_name"] == listenData[pair[1]]["album_name"]){
                listenData[pair[0]]["plays"] += listenData[pair[1]]["plays"];
                listenData[pair[1]] = null;
            }

        })
    }

    // Filter out nulls and re-sort the data (desc)
    return listenData
            .filter((item: any) => item !== null)
            .sort(function(a: any,b: any) {
                return (a['plays'] < b['plays'])
                        ? 1
                        : ((b['plays'] < a['plays'] ? -1 : 0));
            });
}