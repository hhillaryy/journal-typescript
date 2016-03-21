exports.Post = function(title, date, body) {
  this.date = date;
  this.title = title;
  this.body = body;
};

exports.Post.prototype.wordCount = function(){
  return this.body.split(' ').length;
};
