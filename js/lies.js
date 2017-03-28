'use strict';
// global
var date = new Date();
var nextPostID = 0;

function error(string) {
	alert("Error: " + string);
}

// returns unique post ID
function generatePostID() {
	var postID = nextPostID;
	nextPostID += 1;
	return nextPostID;
}

function addPost()
{
	var userInput = window.prompt("Make a new post", "");
	
	var table = document.getElementById("main_table");
	var rowCount = table.rows.length;
	var newRow = table.insertRow(rowCount);

	var newCell = newRow.insertCell(0);

	newCell.innerHTML = newCell.innerHTML + '<hr> <p>' + userInput + '</p></hr>';


}




class Post {
	constructor(text, tf) {
		this.text = text;
		this.tf = tf;
		this.timestamp = date.getTime();
		this.postID = generatePostID();
		this.responses = [];
	}

	addResponse(response_tf) {
		responses.append({response_tf, data.getTime()});
	}

}


