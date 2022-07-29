const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./libs/Engineer');
const Intern = require('./libs/Intern');
const internConst = require('./libs/Intern');


function AddEngineerInfo(menubar, employees) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer name:',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Their ID:',
            name: 'engineerID',
        },
        {
            type: 'input',
            message: 'What is your email:',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is their Github:',
            name: 'github',
        },

    ]).then(eResponses => {

        const Engineer1 = new Engineer(eResponses.engineerID, eResponses.engineerEmail, eResponses.engineerName, eResponses.github);
        employees.push(Engineer1);
        menubar(); 
    })
}


function AddInternInfo(menubar, employees) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern name:',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Their ID:',
            name: 'internID',
        },
        {
            type: 'input',
            message: 'What is your email:',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What School do they go to:',
            name: 'internSchool',
        },
    ]).then(iResponses => {
        const intern1 = new Intern(iResponses.internID, iResponses.internEmail, iResponses.internName, iResponses.internSchool);
        employees.push(intern1);
        menubar();
    })
}


module.exports = { AddEngineerInfo, AddInternInfo };