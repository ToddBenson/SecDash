$(document).ready(function(){
    cards();

var status = "green";
/* Status
   Full Security Test:
       Green = has been tested within the last 6 months
       Yellow = has not been tested in the last 6 months
       Red = has not been tested in the last 2 years
       Grey = has not been tested
   Static Code
       Green = has been tested in the last 5 days
       Yellow = has not been tested in the last 5 days
       Red = has not been tested within the last 2 months 
*/ 


function timeSince(date) {

    date = Date.parse(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
	status1 = "red";
	status = "red";
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        if (interval > 5) { 
            status1 = "yellow"; 
        } else { 
            status1 = "green" 
        }
        status = "red";
    return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        status1 = "green";
        if (interval > 5) { 
           status = "yellow"; 
        } else { 
           status = "green"; 
        }
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        status1 = "green";
        status = "green";
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        status1 = "green";
        status = "green";
        return interval + " minutes";
    }
    status1 = "green";
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
                status1 = "grey";
                timeAgo = "TBT";
           }
           text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                status1+ '"><h1><center>' +
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
                status + '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + ' ago</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div> </div>';
        }
        document.getElementById("card2").innerHTML = text;
        })

}
});
