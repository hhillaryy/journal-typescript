/// <reference path="journal-interface.ts" />

$(document).ready(function(){
  $("form#new-post").submit(function(event){

    var todayDate = $("#new-date").val();
    var postTitle = $("#new-post-title").val();
    var postEntry = $("#new-post-entry").val();
    var newPost = new MyJournal.Post(postTitle, todayDate, postEntry);
    var count = newPost.wordCount();

    $("#show-entry").show();
    $(".title").text(postTitle);
    $(".reformattedDate").text(moment().format('LL'));
    $(".entry").text(postEntry);
    $(".numberWords").text(count);

    event.preventDefault();
  });
});

// JQeury(ish) & Variables go here (file:to-do-create-tasks.ts)
// modules/ businessy logic can go here too(maybe?)
