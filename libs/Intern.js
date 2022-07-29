const Employee = require('./Employee');

class Intern extends Employee {

    constructor(id, email, name, School) {
        super(id, email, name);
        this.School = School;
    }

    getSchool() {
        return this.School;
    }

    getRole() {
        return 'Intern';// Returns Employee
    }
}

module.exports = Intern;