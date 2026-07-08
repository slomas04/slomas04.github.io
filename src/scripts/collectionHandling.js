
export async function getFormattedAlbumDict(rawDataObj){
    var formattedAlbums = []

    await Promise.all(rawDataObj.map(async e => {
        var req = `https://musicbrainz.org/ws/2/release/${e.id}?fmt=json&inc=artist-credits`
        var mbMetadata = await (await fetch(req, {
            headers: {
                'User-Agent': 'SlomFishAstro/0.4.2 (https://slom.fish)'
            }})).json();
        var req2 = `https://coverartarchive.org/release/${e.id}`
        var mbAlbumArt = await (await fetch(req2, {
            headers: {
                'User-Agent': 'SlomFishAstro/0.4.2 (https://slom.fish)'
            }})).json();
        formattedAlbums.push({
            url: mbAlbumArt.images[0].thumbnails['250'],
            rel_year: mbMetadata.date.split("-")[0],
            title: mbMetadata.title,
            artist: mbMetadata["artist-credit"][0].name,
            date_added: e.data["date_added"],
            favourite: e.data["favourite"],
            comment: e.data["comment"]
        });
    }));

    return formattedAlbums;
}