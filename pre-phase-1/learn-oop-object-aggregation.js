class Employee {
    constructor(firstName, familyName) {
        this.firstName = firstName
        this.familyName = familyName
    }
}

class Group {
    constructor(manager, employee) {
        this.manager = manager
        this.employee = employee
    }
}

let employee = new Employee('beta', 'beti')
let group = new Group('managerName', employee)

console.log(group)