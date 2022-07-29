const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./libs/Manager');
const internConst = require('./libs/Intern');
const engineerConst = require('./libs/Engineer');
const EngineerNIntern = require('./Eng&Int');
const BodyCard = require('./src/body');
const engineerCard = require('./src/engineerCard');
const managerCard = require('./src/managerCard');
const internCard = require('./src/internCard');

//element pulled
// const managerNameH = document.querySelector('#name1');
// const managerOcupH = document.getElementById('ocupation1');
// const managerIDH = document.getElementById('iD1');
// const managerEmailH = document.getElementById('email1');
// const managerOfNumH = document.getElementById('ofNum1');



const employees = [];
  




const managerInputs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name:',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is your ID:',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'What is your email:',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is your office number:',
            name: 'managerOfficeNum',
        },
    ]).then(response => {
       


        const manager1 = new Manager(response.managerID, response.managerEmail, response.managerName, response.managerOfficeNum);
        employees.push(manager1)

        // do{
        menubar();
        // } while(!(occupation.employeeType === 'Quit'));


    })
};



function menubar() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your employees occupation?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Quit']

        }
    ]).then(occupation => {

        if (occupation.employeeType === 'Engineer') {
            EngineerNIntern.AddEngineerInfo(menubar, employees);
        }

        if (occupation.employeeType === 'Intern') {
            EngineerNIntern.AddInternInfo(menubar, employees);
        }

        if (occupation.employeeType === 'Quit') {
            createdHTML();
        }
    })


}


function createdHTML() {
 console.log(employees);
 let cards = ''
 for (i = 0; i < employees.length ;i++) {
    if(employees[i].getRole() === 'Manager') {
        cards = cards+ managerCard(employees[i]);
    }
    if(employees[i].getRole() === 'Engineer') {
        cards = cards+ engineerCard(employees[i]);
    }
    if(employees[i].getRole() === 'Intern') {
        cards = cards+ internCard(employees[i]);
    }
    
 }

 fs.writeFileSync('./dist/allCards.html', BodyCard(cards))
}

console.log('As a manager please enter your information:')
managerInputs();
