
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

function start(URL, SELECTOR, ELEMENT_INDEX = 0, OUTPUT){
    request(URL, (error, response, html) => {
        if (!error && response.statusCode === 200) {
          const $ = cheerio.load(html);

          const resultHTML = $(SELECTOR).eq(ELEMENT_INDEX).html()
          if(resultHTML){
            const plainHTML = removeAttributes(resultHTML);
            if(OUTPUT){
              writeToFile(OUTPUT, plainHTML);
            }else{
                console.log(plainHTML)
            }
          }else{
              console.log(`No results found for selector [${SELECTOR}] with position [${ELEMENT_INDEX}]`);
          }
          
        } else {
          console.log(error)
        }
    });
}

function removeAttributes(html, callback){
    const cheerioFilter = cheerio.load(html);
    cheerioFilter('*').each(function() {
        this.attribs = {};
    });
    return cheerioFilter.html().replace(/\s\s+/g, '');
}

function writeToFile(OUTPUT, html){
    fs.writeFile(OUTPUT, html, function(err){
        if(err) throw err;
        console.log(`Results written to ${OUTPUT}`);
    })
}

module.exports = {
    start
};

// Load the html

// Try grab the element 
   // If failed get reason why it failed and output it

   //if succeeds
    //remove attributes from html and write to file if option exists otherwise just console.log
