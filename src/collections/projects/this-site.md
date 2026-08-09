---

title: This website
description: The very website that you are on right now!
date: June 2026
url: https://gitlab.com/slomfish/slomfish-pages
technologies:
    - Astro
    - GLSL
    - Chart.js

---

## Introduction

I'm well aware that I also own <ins>[samsthings.org](https://samsthings.org)</ins>. However, the allure of owning a website with the TLD of _.fish_ was too much. So, I'll use this site as a more personal and general-purpose site while the old domain will be a strictly-portfolio version of this site.

## The Astro framework

My main methods for web programming in the past have either been in plain html/css/js, or using full-stack server-side rendering with a framework like Laravel. The former was very low-level and annoying to interpret, while the latter was a maze of documentation, plugins and frameworks.

<br>

Astro finds a nice balance between these methods as you are structuring your site with an abstracted form of HTML suitable for pre-rendering, you are able to use tailwind for easier CSS, and Javascript can either be used to prerender or can be loaded at runtime alongside other frameworks such as Node.

<br>

To make the experience even more comfortable, you are able to define <ins>[content collections](https://docs.astro.build/en/guides/content-collections/)</ins> that are automatically compiled and rendered at build-time. Instead of writing hundreds of blog posts manually you are instead able to define a renderer for the blog, and write the blog posts in markdown to be rendered later.

## Hosting

Due to hosting fees and the ease of having a CI/CD pipeline managed for you, I decided to host the site on Gitlab Pages. Gitlab already has a template for Astro projects, so this was really simple to get set up. 

<br>

However, Gitlab has a hard limit of 100mb per project for non-paying users. To get around this, I looked to the Hetzner server in Finland that I spun up for a custom VPN. I was able to transform this into a media server for hosting all of my site's static content, and it is now located at <ins>[media.slom.fish](https://media.slom.fish/)</ins>. Moreover, having a dedicated server for media hosting came in handy when I made my <ins>[LastFM API aggregator](/projects/lastfm-compiler)</ins> script for this site's music page. This simply runs on a cron job to fetch new listens nightly.
