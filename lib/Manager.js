const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        if (this.officeNumber === '') {
            throw 'Managers must have an office number - enter office number to proceed'
        } else if (isNaN(this.officeNumber)) {
            throw 'Office number must be a number! Enter office number to proceed'
        }

        this.constructor = 'Manager';
    }
}

module.exports = Manager;