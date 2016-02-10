$(document).ready(function(){
    cards();

var status = "green";

function timeSince(date) {

    date = Date.parse(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
	status = "yellow";
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        status = "yellow";
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        if (interval > 5) { status = "yellow"; } else { status = "green" }
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        status = "green";
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        status = "green";
        return interval + " minutes";
    }
    status = "green";
    return Math.floor(seconds) + " seconds";
}


function cards() {
    $.getJSON("./json/secTests.json",function(mydata) {
	var i;
	var key = mydata.project.length;
	var text = "";

	for (i=0; i<key; i++) {
           var timeAgo = 0;
           timeAgo = timeSince(mydata.project[i].date);
	   if (timeAgo.search("month") > -1) {
	        status1 = "yellow";
           } else {
                status1 = "blue";
           }
           text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                status1+ '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + ' ago</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div> </div>';
        }
        document.getElementById("card").innerHTML = text;
        })
    $.getJSON("./json/jenkins1.json",function(mydata) {
	var i;
	var key = mydata.project.length;
	var text = "";

	for (i=0; i<key; i++) {

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
