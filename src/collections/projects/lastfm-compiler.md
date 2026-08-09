---

title: LastFM API aggregator
description: Aggregates last.fm listening history into JSON files for export.
date: July 2026
url: https://gitlab.com/slomfish/lastfm-api-compiler
technologies:
    - Python
    - REST API

---

## The TIDAL API

If I could code everything myself, then I would be writing my own scrobbler and hosting it somewhere, as it sounds like a fun project. However, TIDAL's options for scrobbling are (painfully) limited. I quickly found out that the TIDAL API does not expose any endpoints for what you're currently listening to, nor for your listening history. Instead you must connect your TIDAL app to last.fm for each device that you're listening on.

<br>

Quite frankly, this sucks and is a bulky method of scrobbling. When I used Spotify, connecting a Last.fm account was a one-and-done deal. I initially connected it back in 2024 and it was still connected until I switched to TIDAL! Nevertheless, it is at least *some* form of scrobbling.

## The Last.fm API

I find it quite humorous how Last.fm requires its users to pay up for extended listening histories and aggregates. Especially when their free API allows you to do the exact same thing!
The script that I wrote to do this is quite simple. It runs an upsert on your listening history until it hits a listen already recorded. Then, it compiles your listening data into the following aggregates:

- `topalbums_[timeframe].json` <br> A descending list of top albums with the following values:
    - `album_name`: The name of the album
    - `artist_name`: The artist/s credited
    - `plays`: The number of times listened to within the timeframe
    - `url`: A link to the album art
- `topartists_[timeframe].json`<br> A descending list of top artists with the following values:
    - `artist_name`: The artist's name
    - `plays`: The number of times listened to within the timeframe
    - `url`: A link to the artist's profile image (almost always empty)
- `toptracks_[timeframe].json`<br> A descending list of top tracks with the following values:
    - `album_name`: The name of the track
    - `artist_name`: The artist/s credited
    - `plays`: The number of times listened to within the timeframe
    - `url`: A link to the track art
- `aggregated.json`
    - `[timeframe]`:
        - `total_listens`
        - `unique_artists`
        - `unique_albums`
        - `unique_tracks`
        - `avg_per_day`
        - `listen_hours` (array of GMT hours and how many listens were made in that hour)
    - `listen_days_6mo`: (array of days over last 6 months and how many listens were made on that day)

<br>

This aggregation is necessary to reduce the amount of information being sent to the user each time they open up the <ins>[music page](/music/)</ins>.

