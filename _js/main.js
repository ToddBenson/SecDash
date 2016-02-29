$(document).ready(function(){
    cards();

var sastStatus = "blue";
var waStatus = "blue";
/* Status
   Full Security Test
       Blue = has been tested within the last 2 months
       Green = has been tested within the last 2 months
       Yellow = has not been tested in the last 6 months
       Red = has not been tested in the last 2 years
       Grey = has not been tested
   Static Code - Automated
       Green = has been tested in the last 5 days
       Yellow = has not been tested in the last 5 days
       Red = has not been tested within the last 2 months 
*/ 


function timeSince(date) {

    date = Date.parse(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
	waStatus = "red";
	sastStatus = "red";
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        if (interval > 5) { 
            waStatus = "yellow"; 
        } else { 
            waStatus = "green" 
        }
        sastStatus = "red";
    return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        waStatus = "blue";
        if (interval > 5) { 
           sastStatus = "yellow"; 
        } else { 
           sastStatus = "green"; 
        }
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        waStatus = "blue";
        sastStatus = "green";
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        waStatus = "blue";
        sastStatus = "green";
        return interval + " minutes";
    }
    waStatus = "blue";
    return Math.floor(seconds) + " seconds";
}


function cards() {
    $.getJSON("./json/secTests.json",function(mydata) {
	var i;
	var key = mydata.project.length;
	var text = "";

	for (i=0; i < key; i++) {
           var timeAgo = 0;
           timeAgo = timeSince(mydata.project[i].date);
           timeAgo = timeAgo + " ago";
           if (timeAgo.search("NaN") > -1) {
                waStatus = "grey";
                timeAgo = "TBT";
           }
           text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                waStatus+ '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + '</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div> </div>';
        }
        document.getElementById("card").innerHTML = text;
        })

    $.getJSON("./json/jenkins1.json",function(mydata) {
	var i;
	var key = mydata.project.length;
	var text = "";

	for (i = 0; i < key - 1; i++) {

           var timeAgo = 0;
           timeAgo = timeSince(mydata.project[i].date);
           text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                sastStatus + '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + ' ago</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div></div>';
        }
        document.getElementById("card2").innerHTML = text;
        })
}
});
