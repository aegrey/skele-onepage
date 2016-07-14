# skeleOnePage
### Responsive One Page Skeleton using Gulp, Jade, Sass
----

This is a skeleton I originally built for my portfolio. I'll customize it further in the future if requests are made or as I come across bugs, but for now it's a easy to use simple base for a single page or one page website that uses Bootstrap for responsiveness (I plan on replacing this soon). You can view the demo at http://aegrey.github.io/

----
#### Requirements
 This Library uses node.js & Gulp. If you do not have node.js or node package manager installed, visit http://nodejs.org/ for instructions.

Install Gulp & Bower:
	
	```
	sudo npm install -g gulp && sudo npm install -g bower 
	```

#### Setup Application
Run the following command from the root directory:

	```
	npm install && gulp build
	```
----
### Config
Configuration for the application is located in app/views/includes/config.jade. This file exists to add any account keys or variables you'll use throughout the page. These variables are also carried over into JS (via scripts.jade) for easy use for social media, etc. 

### Scripts
All javascript calls are defined in app/views/includes/scripts.jade. Google Analytics is pre-added, you can remove if you wish from header.jade, global.js, scripts.jade. See Gulpfile for specifics, I currently have scripts defined manually so they can be loaded in specific order. You can change this and set global JS vars in scripts.jade. 

Yes, this is using Bootstrap. I am not personally a fan, but it's easy to use for most people when doing content build out. Feel free to remove it if you like.

### Section Pages
All sections are in stored pages/ directory. 

---

<sup>Skele-OnePage is a quick startup for a one page website using Gulp build tool, Jade, and SASS.</sup>


