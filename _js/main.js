$(document).ready(function(){
    cards();


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
    $.getJSON("./example.json", function(mydata) {

	var i;
	var key = mydata.project.length;
	var text = "";

	for (i=0; i<key; i++) {

           var timeAgo = 0;
	   var status = "blue";
           timeAgo = timeSince(mydata.project[i].date);
           text += '<div id="card" class="w3-card-4"><header class="w3-container w3-' +
                mydata.project[i].status + '"><h1><center>' +
                mydata.project[i].title + '</center></h1></header><br><div id="date_lable" class="w3-container">' +
                timeAgo + ' ago</div><div id="issue_lable" class="w3-container">' +
                mydata.project[i].issues + '</div> </div>';
        }
        document.getElementById("card").innerHTML = text;
     })
}
});
