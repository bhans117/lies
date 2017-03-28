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
	
	if(trueOrFalse == "true") post = new Post(text, trueOrFalse);
	else post = new Post(text, trueOrFalse)
	post.setColor();
}


class Post {
	constructor(text, tf) {
		this.text = text;
		this.tf = tf;
		this.timestamp = date.getTime();
		this.postID = generatePostID();
		this.color;
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


