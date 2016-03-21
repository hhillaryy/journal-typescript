var Post = require('./../js/journal-interface.js').Post;
var moment = require('moment');

$(document).ready(function(){
  $("form#new-post").submit(function(event){

    var todayDate = $("#new-date").val();
    var postTitle = $("#new-post-title").val();
    var postEntry = $("#new-post-entry").val();
    var newPost = new Post(postTitle, todayDate, postEntry);
    var count = newPost.wordCount();

    $("#show-entry").show();
    $(".title").text(postTitle);
    $(".reformattedDate").text(moment().format('LL'));
    $(".entry").text(postEntry);
    $(".numberWords").text(count);

    event.preventDefault();
  });
});

exports.Post = function(title, date, post) {
  this.date = date;
  this.title = title;
  this.post = post;
};

exports.Post.prototype.wordCount = function(){
  return this.post.split(' ').length;
};
