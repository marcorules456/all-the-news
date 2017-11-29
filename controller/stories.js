var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var mongoose = require('mongoose');
var Promise = require("bluebird");

request("https://www.reddit.com/r/webdev", function(error, response, html) {

  var $ = cheerio.load(html);

  var results = [];

  $("p.title").each(function(i, element) {

    var title = $(element).text();

    var link = $(element).children().attr("href");
    
    results.push({
      title: title,
      link: link
    });
  });
  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});



module.exports= router;
