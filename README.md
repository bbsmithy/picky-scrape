# Picky Scrape
Node.js CLI program for picky part of a site, extracting plain html and writing it to file. This is handy for copying plain content from one site to another with out having extract the data manaully and rewrite html.

### Installation
```sh
$ npm install -g picky-scrape
```

### Usage
```sh
$ picky-scrape [URL] [SELECTOR] [ELEMENT_INDEX] [OUTPUT_FILE] (Optional)
```
Example: 
On the page https://www.irishtimes.com/ find the first element with class=".trendingarticles" and print its contents to console
```sh
$ picky-scrape https://www.irishtimes.com/ .trendingarticles 0
```
Add the last argument option to write result to file
```sh
$ picky-scrape https://www.irishtimes.com/ .trendingarticles 0 trending-articles.html
```