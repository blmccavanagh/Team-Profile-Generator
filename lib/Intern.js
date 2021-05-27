const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        if (this.school === '') {
            throw 'Enter name of school';
        }

        this.constructor = 'Intern';
    }

    getSchool = () => {
        this.school;
    }
}

module.exports = Intern;