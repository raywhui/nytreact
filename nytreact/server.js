const express = require('express');
const mongoose = require("mongoose");
const request = require('request');
const cheerio = require('cheerio');
const routes = require("./routes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;



const db = require("./models");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


mongoose.Promise = global.Promise;
//connects to mongodb
var promise = mongoose.connect('mongodb://localhost/nytreact', {
  useMongoClient: true,
  /* other options */
});


//Scraper with cheerio
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from NYT:" +
            "\n***********************************\n");
request("https://www.nytimes.com/section/politics?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Politics&WT.nav=page", function(error, response, html) {

  const $ = cheerio.load(html);


  $("li article").each(function(i, element) {
  	let results = {};

  	//nyt has an absurd amount of spacing after the newline regex: 20 spaces
    const title	= $(element).find('.story-body h2.headline').text().replace('\n                    ', '');
    const date = $(element).find('time').attr('datetime');
    const url = $(element).find('a').attr('href');

    //15 spaces, 8 spaces, another 8 spaces without \n
    results.title = title.replace('                ','').replace('\n        ','').replace('        ','');
    results.date = date;
    results.url = url;

    console.log(results);


		//push scraped data into db
		db.Articles.find({'url': url})
    .then(function(dbArticle){
    	if (dbArticle.length === 0){
    		console.log('NAH BREH');
    		db.Articles.create(results);
    	} else if (dbArticle.length === 1){
    		console.log('Article Exists');
    	};

 	  }).catch(function(err) {
      // If an error occurred, send it to the client
      console.log(err);
    });

	});
});




app.listen(port,function(){
	console.log('Now listening to PORT:', port);
})
