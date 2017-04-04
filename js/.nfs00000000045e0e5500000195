'use strict';
// global
var date = new Date();
var nextPostID = 0;

function error(string) {
	alert("Error: " + string);
	console.log("Error: " + string);
}

// returns unique post ID
function generatePostID() {
	var postID = nextPostID;
	nextPostID += 1;
	return nextPostID;
}

function createNewPost()
{
	// alert("Hello World");
	var text = window.prompt("Enter a post.", "");
	var trueOrFalse;
	var post;
	try
	{
		trueOrFalse = confirm("True?");
	}
	catch(err) 
	{
		trueOrFalse = false;
	}
	
	post = new Post(text, trueOrFalse)
	post.setColor();
}


class Post {
	constructor(text, tf) {
		this.text = text;
		this.tf = tf;
		this.timestamp = date.getTime();
		this.postID = generatePostID();
		this.responses = {};
		this.num_truth = 0;
		this.num_false = 0;
		this.color = "black";
	}

	addResponse(userID, response) {
		if (response) this.num_truth += 1;
		if (!response) this.num_false += 1;
		this.responses[userID] = response;
	}

	truthRate() {
		return this.num_truth/(this.num_truth + this.num_false);
	}
	setColor(tf)
	{
		if(tf) this.color = "blue";
		else this.color = "red";
	}

}




	//Move to Board Class when we have one. 
	// addPost()
	// {
	// 	var table = document.getElementById("main_table");
	// 	var rowCount = table.rows.length;
	// 	var newRow = table.insertRow(rowCount);
	// 	newRow.id = "main_table_row_" + rowCount;
	// 	var newCell = newRow.insertCell(0);
	// 	newCell.innerHTML = newCell.innerHTML + '<hr><p>' + this.text + '</p>';
	// 	if(this.tf == true) document.getElementById(newRow.id).style.color = "blue";
	// 	else document.getElementById(newRow.id).style.color = "red";
	// }	


