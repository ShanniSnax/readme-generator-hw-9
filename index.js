const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user - adjust qs for readmes  
const questions = [
    {
        type: "input",
        name: "githubUser",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose License type:",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ],
    },
    {
        type: "input",
        name: "installCommand",
        message: "What command should be run to install dependencies?",
        default: 'npm i',
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
];

// function to write README file
function writeToFile(fileName, data) {

    

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {})

}

// function call to initialize program
init();





 
