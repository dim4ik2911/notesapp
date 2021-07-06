const validator = require("validator");
const getNotes = require("./notes.js");
const life = getNotes();
console.log(life);

console.log(validator.isEmail("@gmail.com"));

console.log(validator.isURL("google.com"));
