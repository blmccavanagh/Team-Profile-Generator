const Manager = require('../lib/Manager');

test('The name property of the Manager to be a string', () => {
    const manager = new Manager('Jane Doe', 1, 'janedoe@email.com', 2);

    expect(manager.name).toEqual('Jane Doe');
});

test('The id property of the Manager to be a number', () => {
    const manager = new Manager('Jane Doe', 1, 'janedoe@email.com', 2);

    expect(manager.id).toEqual(1);
});

test('The email property of the Manager to be a string', () => {
    const manager = new Manager('Jane Doe', 1, 'janedoe@email.com', 2);

    expect(manager.email).toEqual('janedoe@email.com');
});

test('The office number property of the Manager to be a number', () => {
    const manager = new Manager('Jane Doe', 1, 'janedoe@email.com', 2);

    expect(manager.officeNumber).toEqual(2);
});