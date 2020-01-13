class Employee {
    constructor(firstName, familyName) {
        this.firstName = firstName
        this.familyName = familyName
    }
}

class Group {
    constructor(manager) {
        this.manager = manager
        this.employee = new Employee('anda', 'andi')
    }
}

// console.log(new Employee('beta', 'beti'))
console.log(new Group('managerName'))