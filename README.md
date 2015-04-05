# skeleOnePage
### Responsive One Page Skeleton using Gulp, Jade, Sass
----
This is a skeleton originally built for my own portfolio, [http://www.anneliesegrey.com](http://www.anneliesegrey.com). I've got further customizations planned, but for now it's a great simple base that uses Bootstrap for responsiveness (of course, actual responsiveness depends on how you define the content you put within each page).
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

### Section Pages
All sections are in stored pages/ directory. 
