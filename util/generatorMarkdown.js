const inquirer = require("inquirer0"); 
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./util/generatorMarkdown');

// below is the array of questions for the user 

const questions = [{
        type: "input",
        message: "What is the title of the project?", 
        name: "Title" 
}, {
    type: "input",
        message: "What is the project about? Please explain your motivation & reasoning", 
        name: "Description" 
}, {
    type: "input",
        message: "Do you need a table of contents?", 
        name: "Table of contents" 
}, {
    type: "input",
        message: "What are the steps required to install your project?", 
        name: "Installation" 
}, {
    type: "input",
        message: "", 
        name: "Title" 
}, 


]