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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notesUtilities.removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: () => {
    notesUtilities.listNotes();
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notesUtilities.readNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
