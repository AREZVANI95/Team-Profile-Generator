const Employee = require("./Employee");

const internQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "Intern's school?"
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = { Intern, internQuestions };