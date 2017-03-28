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
		this.num_truth = 0;
		this.num_false = 0;
	}

	addResponse(response) {
		if (response) this.num_truth += 1;
		if (!response) this.num_false += 1;
		this.responses.push(response);
	}

	truthRate() {
		return this.num_truth/(this.num_truth + this.num_false);
	}

}


