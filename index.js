//Include
const inquirer = require('inquirer')
const template = require('./src/page-template')
const { writeFile, copyFile } = require('./src/generate-team')

//Question array for employee types.
const { Engineer, engQuestions } = require('./lib/Engineer');
const { Intern, internQuestions } = require('./lib/Intern');
const { Manager, managerQuestions } = require('./lib/Manager');

//Hold employee type objects.
const employeesPromt = []


