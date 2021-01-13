const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user - adjust qs for readmes  
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'body',
            message: 'What is your name?',
        },
        {
          type: 'list',
          name: 'icon',
          message: 'What is your preferred method of communication?',
          choices: ['email', 'phone', 'telekinesis'],
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





 
