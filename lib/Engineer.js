const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;

        if (this.gitHub === '') {
            throw 'Enter GitHub username'
        }

        this.constructor = 'Engineer';
    }

    getGitHub = () => {
        this.gitHub;
    }

}

module.exports = Engineer;