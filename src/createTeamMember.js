const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const teamDataArray = [];

async function createTeamMember() {
    const responseData = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            // all options will be listed in choices
            choices: [
                'Create Manager',
                'Create Engineer',
                'Create Intern',
                'Quit'
            ]
        }
    ]);

    switch (responseData.action) {
        // case for each answer and the function run based on that answer
        // case is the answer given by the user
        case 'Create Manager':
            createManager();
            break;

        case 'Create Engineer':
            createEngineer();
            break;

        case 'Create Intern':
            createIntern();
            break;

        case 'Quit':
            fs.writeFile("./dist/index.html", generateHTML(teamDataArray), (err) => {
                if (err) {
                    throw err;
                }
                console.log('Success!');
            });
            break;

        default:
            break;
    };
};

const employees = [
    {
        type: 'input',
        name: 'name',
        message: 'Full Name:',
    },
    {
        type: 'number',
        name: 'id',
        message: 'ID number:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            } else {
                return 'Please enter a valid email address!';
            }
        }
    },
];

async function createManager() {
    const manager = employees.concat(
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number:'
        },
    );
    const managerData = await inquirer.prompt(manager);
    const newManager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
    );
    teamDataArray.push(newManager);
    console.log(managerData);
    // console.log(newManager);

    createTeamMember();
};

async function createEngineer() {
    const engineer = employees.concat(
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username:',
        },
    );
    const engineerData = await inquirer.prompt(engineer);
    const newEngineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
    );
    teamDataArray.push(newEngineer);
    console.log(engineerData);
    createTeamMember();
};

async function createIntern() {
    const intern = employees.concat(
        {
            type: 'input',
            name: 'school',
            message: 'School:',
        },
    );
    const internData = await inquirer.prompt(intern);
    const newIntern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
    );
    teamDataArray.push(newIntern);
    console.log(internData);
    createTeamMember();
};

module.exports = createTeamMember;