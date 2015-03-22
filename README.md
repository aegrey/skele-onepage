# skeleOnePage
### Responsive One Page Skeleton using Gulp, Jade, Sass
----
This is a skeleton originally built for my own portfolio, [http://www.anneliesegrey.com](http://www.anneliesegrey.com). I've got further customizations planned, but for now it's a great simple base that uses Bootstrap for responsiveness (of course, actual responsiveness depends on how you define the content you put within each page).

I am working on functionality to have the pages "snap" on scroll however this isn't yet in place. I'm building this out custom due to the fact that for responsiveness (as well as in general) content in a section may go over the screen height and no current single page scrolling libraries address this. 

----
#### Computer Requirements
 * Ruby - https://www.ruby-lang.org/
 * Ruby Gems - http://rubygems.org/
 * Compass:

	```
	gem update --system
	gem install compass
	```

 * Node.js - http://nodejs.org/
 * Gulp & Bower:
	
	```
	sudo npm install -g gulp && sudo npm install -g bower 
	```

#### Setup
To setup application, from the application root directory, run:

	```
	npm install && bower install && gulp build
	```
----
### Config
Configuration located in app/views/includes/config.jade. Carried over into JS. Set pages here, update index.html with sections (no var ability for Jade to iterate this for the time being, may redo using mixins or fork Jade).

### Scripts
All JS scripts included in app/views/includes/scripts.jade. Nav items have Google Analytics event tags - you can remove these if you wish from header.jade, global.js, scripts.jade

### Pages
All pages in pages/directory as separate Jade files. Comments in here/throughout code guide to some basic styles.

----
#### IN DEVELOPMENT:
- **Fix Navigation/Scrolling:** Adding a smooth scrolling, better algorithm for page detection and fixing page snap functionality.

