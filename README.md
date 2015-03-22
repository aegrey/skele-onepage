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
Configuration for the application is located in app/views/includes/config.jade. This file exists to add any account keys or variables you'll use throughout the page. These variables are also carried over into JS (via scripts.jade) for easy use for social media, etc. I've also set the section "pages" here that auto populates the nav, but you'll need to update index.html as well with each section as there's not the ability to set an include file name with a variable in Jade. I'm looking into this though, and may update with an alternative solution.

### Scripts
All javascript calls are defined in app/views/includes/scripts.jade. Google Analytics is pre-added, you can remove if you wish from header.jade, global.js, scripts.jade. See Gulpfile for specifics, I currently have scripts defined manually so they can be loaded in specific order. You can change this and set global JS vars in scripts.jade. 

### Section Pages
All sections are in stored pages/ directory. 

----
#### IN DEVELOPMENT:
- **Fix Navigation/Scrolling:** Adding a smooth scrolling, better algorithm for page detection and fixing page snap functionality.
- **Jade Include:** Determine a way to define an include during iteration, or rewrite code so variables can be used.
