'use strict';
// global
var date = new Date();
var nextPostID = 0;
var gusers = new Map();
var gposts = new Map();

var MongoClient = require('mongodb'); //.MongoClient;

MongoClient.connect("mongodb://localhost:27017/testDB", function(err, db) {
	if(!err)
	{
		console.log("We are connected.");
		var collection = db.collection("example");
		var doc = { name : 'Evan'};
		collection.insert(doc);
		collection.find({"name" : "Evan"}).forEach(function(obj)
			{
				console.log(obj._id)
			})
	}
	else
	{
		console.log("Connection Failure.");
	}
})



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
	var text = window.prompt("Enter a post.", "");
	var trueOrFalse;
	var post;
	
	//This is a really crufty way of doing "T/F boolean values. 
	//If the user presses ok on the confirm thing, it won't err out and 
	//return true, otherwise it will err out in which case we assign false. 
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

	addResponse(responderID, response) {
		if (response) this.num_truth += 1;
		if (!response) this.num_false += 1;
		this.responses[responderID] = response;
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

class User {
	constructor(userID, password, email) {
		this.userID = userID;
		this.password = password;
		this.email = email;
		this.num_tricked = 0;
		this.posts = new Map();
		this.reactedPosts = new Map();
	}

	addPost (post) {
		this.posts.set(post.postID,post);
		gposts
	}

	getPost (postID) {
		return this.posts.get(postID);
	}

	getPostIDs() {
		return this.posts.keys();
	}

	respondToPost(postID, tf) {
		this.reactedPosts.set(postID,tf); 
	}

	setUserID(userID) {
		this.userID = userID;
	}

	getUserID() {
		return this.userID;
	}

	setPassword(password) {
		this.password = password;
	}

	getPassword() {
		return this.password;
	}

	updateTricked(postID, response) {
		var post = posts.get(postID);
		if (post === undefined) {
			error(postID + " does not exist in " this.userID);
		}
		if (post.tf !== response) {
			this.setNumTricked(this.getNumTricked() + 1);
		}
	}

	setNumTricked (num) {
		this.posts.num_tricked = num;
	}

	getNumTricked() {
		return this.posts.num_tricked;
	}

}

var user1 = new User("bhans", "11462", "brhansen3@wisc.edu");
gusers.set(user1.getUserID, user1);
user1.addPost (new Post("hello I am Tim", false));


class Board {
	constructor(userID) {
		this.userID = userID;
		this.posts = gposts;
	}

	addLocalPost () {
		// make a call to server to add  to the local post list
	}

	makeNewPost () {
		// construct a post and add it to the user post list and global post list
		
	}

	getLocalPost (postID) {
		return this.posts.get(postID);
	}

	getLocalPostIDs() {
		return this.posts.keys();
	}

	respond(postID, postOwnerID, postResponderID, response) {
		var postOwner = users.get(postOwnerID);
		var postResponder = users.get(postResponderID);
		if (postOwner === undefined || postResponder === undefined) {
			error(userID + " does not exist");
		}
		var post = gposts.get(postID);
		if (post === undefined) {
			error(postID + " does not exist");
		}
		post.addResponse(postResponderID, response);
		postResponder.respondToPost(postID, response);
		postOwner.updateTricked(postID, response);
	}

	populatePost(postID)
	{
		var post = gposts.get(postID);
		if (post === undefined) {
			error(postID + " does not exist");
		}
		var table = document.getElementById("main_table");
		var rowCount = table.rows.length;
		var newRow = table.insertRow(rowCount);
		newRow.id = "main_table_row_" + rowCount;
		var newCell = newRow.insertCell(0);
		newCell.innerHTML = newCell.innerHTML + '<hr><p>' + post.text + '</p>';
		if(post.tf == true) document.getElementById(newRow.id).style.color = "blue";
		else document.getElementById(newRow.id).style.color = "red";
	}	
}


