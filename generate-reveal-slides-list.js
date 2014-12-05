#!/usr/bin/env node

/*
    Usage:
    node generate-reveal-slides-list.js > slides/list.json

    Notes:
    All md files in subdirs of the slides dir will create vertical slides

    Lexical order of md files matters, to deal with it you can use new-order on npm
*/

'use strict';

var fs = require('fs');
var SLIDES_DIR = 'slides/';

var slides = [];
fs.readdir(SLIDES_DIR, function(err, files) {
  files.forEach(function(slide) {
    // skip list.json
    if ((/json$/).test(slide)) return;

    var stats = fs.lstatSync(SLIDES_DIR + slide);
    if (!stats.isDirectory()) return slides.push(slide);

    var subSlides = fs.readdirSync(SLIDES_DIR + slide);
    subSlides = subSlides.map(function(subSlide) {
        return slide + '/' + subSlide;
    });
    slides.push(subSlides);
  });
  console.log(JSON.stringify(slides, null, 4));
});
