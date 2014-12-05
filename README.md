bin
===

Personal toolbox. Here's what it contains :

## generate-reveal-slides-list.js

https://github.com/slara/generator-reveal is a yeoman generator creating reveal.js presentation.

When using it with `grunt dist`, it reads info from `slides/list.json`.

`generate-reveal-slides-list.js` scan the `slides` dir and its direct subdirs : top level .md files become horizontal slides, sub .md files are grouped in vertical slides.

This way, the file system remains the single source of truth. Lexical order of slides can therefore be managed by https://github.com/Delapouite/new-order
