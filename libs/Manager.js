const Employee = require('./Employee');

class Manager extends Employee {

    constructor(id, email, name, managerONum) {
        super(id, email, name);
        this.managerONum = managerONum;
    }
    
    getManager() {
        return this.managerONum;
    }

    getRole() {
        return 'Manager';// Returns Employee
    }
}

module.exports = Manager;