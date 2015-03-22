
var project = {
	name 		: "Skele-OnePage"
	,url 	    : "https://github.com/aegrey/skele-onepage"
	,phase		: "development"
}

//For Deploy
var server = {
	type 		: 'sftp'
	, host 		: 'localhost'
	, user 		: 'user'
	, pass 		: 'pass'
	, path 		: '/var/www/'
};

module.exports.project = project;
module.exports.server = server;
