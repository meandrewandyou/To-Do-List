


exports.getDate = function(){
let today = new Date();
let currentDay = today.getDay();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
return today.toLocaleDateString("en-US", options);

};

exports.getDay = function(){
let today = new Date();
let currentDay = today.getDay();
let options = {
  weekday: "long",
};
return today.toLocaleDateString("en-US", options);

};
