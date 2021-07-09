const chalk = require("chalk");
const yargs = require("yargs");
const notesUtilities = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

//add , remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notesUtilities.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Remove a new note");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: () => {
    console.log("list a note");
  },
});
//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("read a note");
  },
});

// console.log(yargs.argv);
yargs.parse();
