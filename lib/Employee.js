function validateEmailAddress(input) {
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
        return 1;
    } else {
        return -1;
    }
}

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (this.name === '') {
            throw 'Name must be entered to proceed';
        } else if (this.name < 2) {
            throw 'Name must be more than one character';
        }

        if (this.id === '') {
            throw 'Enter ID number';
        } else if (isNaN(this.id)) {
            throw 'ID must be a number';
        }

        if (email !== '' && validateEmailAddress(email) === -1) {
            throw 'Enter a valid email address to proceed';
        }

        this.constructor = 'Employee';
    }

    getName = () => {
        this.name;
    }

    getID = () => {
        this.id;
    }

    getEmail = () => {
        this.email;
    }

    getRole = () => {
        this.constructor;
    }
}