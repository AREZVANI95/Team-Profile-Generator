const Employee = require("./Employee");

const managerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "Manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Manager's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number?"
    }

]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestions } ;