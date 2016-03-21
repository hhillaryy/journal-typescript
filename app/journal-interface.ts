/// <reference path="browser-interfaces.ts" />
exports.Post = function(title, date, post) {
  this.date = date;
  this.title = title;
  this.post = post;
};

exports.Post.prototype.wordCount = function(){
  return this.post.split(' ').length;
};


CLASSES AND METHODS GO HERE (to-do-classes-interface.ts)
