var download = require("download");
var request = require('request');

var getRepo = (inputs, spiner) => {
  return new Promise(function(resolve, reject) {
    var auth = "Bearer " + inputs.pat;
	  
	const options = { "headers": {
	  "authorization": auth,
	  "accept": "application/zip",
	  "User-Agent": inputs.userAgent
	}}

	var uri ="https://github.com/"+inputs.org+"/"+inputs.repo+"/archive/"+inputs.branch+".zip"

    download(uri, './', options, function (err) {
      console.log(err)
    })
    spiner.stop();
   });
}



module.exports.getRepo = getRepo;