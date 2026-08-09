---

title: Evil Tamagotchi
description: Virtual pet that feeds off WPA2 handshakes
date: February 2022
url: https://github.com/slomas04/TAMAGOTCHI04
technologies:
    - Python
    - Aircrack-ng
    - TKinterface

---

### NB: DO NOT USE THIS AROUND NETWORKS THAT YOU DON'T OWN. IT WILL DEAUTHENTICATE INDISCRIMINANTLY.

Created as coursework for my Computer Science A-Level, this evil virtual pet will deauthenticate nearby networks and feed off their WPA handshakes. Admittedly, I haven't run this in at least 5 years now, so I cannot promise you that it still functions as it used to!

<br>

This requires a linux-based operating system and a wireless interface capable of entering monitor mode.
Once the program is installed, please set your managed and monitor faces to their correct names in "tamagotchi.py" by changing the `interface` and `moninterface` variables.

## Installation (Debian)
### Prerequisites
`sudo apt install aircrack-ng python3 && pip install signal threading`

### Creating a folder
`git clone https://github.com/slomas04/TAMAGOTCHI04.git`

## How to Run
`cd TAMAGOTCHI04`

Make sure you are in the root directory of the repository

`python3 tamagotchi.py`