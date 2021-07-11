const generateHTML = require('./utils/generateHTML');
const createTeamMember = require('./src/createTeamMember')

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("index.html", generateHTML(data));
    });
}

// Function call to initialize app
init(); 
createTeamMember(); 