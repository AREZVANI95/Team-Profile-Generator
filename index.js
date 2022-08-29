//Include
const inquirer = require('inquirer')
const template = require('./src/page-template')
const { writeFile, copyFile } = require('./src/generate-team')

//Question array for employee types.
const { Engineer, engineerQuestions } = require('./lib/Engineer');
const { Intern, internQuestions } = require('./lib/Intern');
const { Manager, managerQuestions } = require('./lib/Manager');
const { inheritInnerComments } = require('@babel/types');

//Hold employee type objects.
const employeesArray = []

// initialises the app.
const init = () => { employeePrompt() }
//Asks user which type of Employee they would like to their team.
const employeePrompt = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'employeeType',
            message: "What kind of team member would you like to add?",
            choices: [{
                    name: 'Engineer',
                    value: "addEngineer"
                },
                {
                    name: 'Intern',
                    value: "addIntern"
                },
                {
                    name: 'Manager',
                    value: "addManager"
                },
                {
                    name: 'DONE',
                    value: "done"
                }
            ]
        }])
        .then( answer => {
            if (answer.employeeType === 'addEngineer') { engQuestions(); }
            if (answer.employeeType === 'addIntern') { intQuestions(); }
            if (answer.employeeType === 'addManager') { manQuestions(); };
            if (answer.employeeType === 'done') {
                let html = template(employeesArray)
                console.log('...');
                writeFile(html);
            }

        })
}

// prompts engineers questions
const engQuestions = () => {
    inquirer.prompt(engineerQuestions)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

// prompts interns questions
const intQuestions = () => {
    inquirer.prompt(internQuestions)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

// prompts managers questions
const manQuestions = () => {
    inquirer.prompt(managerQuestions)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArray.push(answers);
        return employeePrompt();
    })
}

init()