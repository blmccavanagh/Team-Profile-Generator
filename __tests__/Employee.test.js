const Employee = require('../lib/Employee');

test('The name property of the Employee to be a string', () => {
    const employee = new Employee('Jane Doe', 1, 'janedoe@email.com');

    expect(employee.name).toEqual('Jane Doe');
});

test('The id property of the Employee to be a number', () => {
    const employee = new Employee('Jane Doe', 1, 'janedoe@email.com');

    expect(employee.id).toEqual(1);
});

test('The email property of the Employee to be a string', () => {
    const employee = new Employee('Jane Doe', 1, 'janedoe@email.com');

    expect(employee.email).toEqual('janedoe@email.com');
});