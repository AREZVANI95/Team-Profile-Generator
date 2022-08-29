//Include
const inquirer = require('inquirer')
const template = require('./src/page-template')
const { writeFile, copyFile } = require('./src/generate-team')

//Question array for employee types.
const { Engineer, engQuestions } = require('./lib/Engineer');
const { Intern, internQuestions } = require('./lib/Intern');
const { Manager, managerQuestions } = require('./lib/Manager');
const { inheritInnerComments } = require('@babel/types');

//Hold employee type objects.
const employeesArray = []

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
        .then(answer => {
            if (answer.employeeType === 'addEngineer') {
                engQuestions();
            }
            if (answer.employeeType === 'addIntern') {
                internQuestions();
            };
            if (answer.employeeType === 'addManager') {
                managerQuestions();
            };
            if (answer.employeeType === 'done') {
                let html = template(employeesArray)
                console.log('...');

                writeFile(html);

            }

        })
}



init()