function timeSince(date) {

    date = Date.parse(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


function cards() {
console.log("in the javascript");	
//TODO Read JSON data from a URL
var data = '{ "project" : [' +
           '{"title":"B2C-SAST","date":"Fri Feb 5 07:59:37 MST 2016","issues":"652 issues"},' +
           '{"title":"B2B","date":"Thu Jan 4 1:4:35 MST 2016","issues":"26 issues"},' +
           '{"title":"B2E","date":"Thu Feb 4 15:54:35 MST 2016","issues":"5 issues"},' +
           '{"title":"Android","date":"Thu Feb 4 15:54:35 MST 2015","issues":"53 issues"},' +
           '{"title":"iOS","date":"Thu Feb 3 15:54:35 MST 2016","issues":"5 issues"},' +
           '{"title":"MobID","date":"Thu Feb 4 20:33:35 MST 2016","issues":"5 issues"},' +
           '{"title":"Quote","date":"Thu Feb 5 07:12:35 MST 2016","issues":"239 issues"} ]}';
//var data = $.getJSON("example.json", function() {
//	console.log("Got the JSON");
//	})

var mydata = JSON.parse(data);

var i;
var key = mydata.project.length;
var text = "";

for (i=0; i<key; i++) {

       var timeAgo = 0;
	   var status = "blue";


       timeAgo = timeSince(mydata.project[i].date);

       text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                status + '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + ' ago</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div> </div>';
}
document.getElementById("card").innerHTML = text;
}
