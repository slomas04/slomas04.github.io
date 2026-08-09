---

title: Wikipedia 2 GEXF
description: Run a BFS on a chosen Wikipedia article, get a resulting GEXF for analysis!
date: August 2025
url: https://github.com/slomas04/WikitoGexf
technologies:
    - Python
    - Gexf
    - Wikipedia

---
### *There's a converter for everything these days!*

Wiki2Gexf is a python (3.13.5) project that allows you to run a breadth-first search on a locally stored (and indexed) Wikipedia archive, and then export this search to a .gexf format.

<br>

Example renders made in Gephi:

<div class="w-full flex flex-row gap-2 justify-evenly">
    <div class="flex flex-col items-center">
        <img width="2048" height="2048" alt="chicory" src="https://github.com/user-attachments/assets/578afd5d-14b9-48c6-bdb2-edeca05b6b34" />
        <p>Chicory: A Colorful Tale</p>
    </div>
    <div class="flex flex-col items-center">
        <img width="2048" height="2048" alt="strange2" src="https://github.com/user-attachments/assets/34c9d903-f9ac-44e9-b693-0f404258cc3b" />
        <p>Wikipedia: Unusual Articles</p>
    </div>
</div>

<br>

## Setup/Install Guide
- To start, `clone` this repository. You will need to install the `NetworkX` package for Gexf functionality.
- Next: you will need to download two wikipedia archive files from [https://dumps.wikimedia.org/](https://dumps.wikimedia.org/). **MAKE SURE THEY HAVE THE SAME DATE**
  1. pages-articles-multistream.xml.bz2 --> The (heavily compressed) text archive of Wikipedia, should be well over 20GB. **Torrent if possible! DO NOT EXTRACT!**
  2. pages-articles-multistream-index.txt.bz2 --> The index of the byte offset for all articles in the multistream archive.
- Extract the index file
- Place both the index and the multistream files in the same directory as this repository.
- Run `indexWiki.py`. This creates a folder (`index/`) that splits the index file up and sorts the articles in the subfiles.
  - This may take a while, and due to open file limits it will NOT work on Windows. I suggest either running this in WSL or moving the index folder over to Windows from Linux if you must use Windows.

<br>

## Usage Guide
To create a gexf file for a search, run Wiki2Gexf.py. 
 - You can specify either an article name with `-n` or an article URL with `-u`
 - You can limit the depth of the search with `-d`. This defaults to 1, and any search with d>1 will result in a very large gexf file.
 - You need to specify an output file.