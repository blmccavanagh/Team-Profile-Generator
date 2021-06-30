const Intern = require('../lib/Intern');

test('The name property of the Employee to be a string', () => {
    const intern = new Intern('Jane Doe', 1, 'janedoe@email.com', 'UWA');

    expect(intern.name).toEqual('Jane Doe');
});

test('The id property of the Intern to be a number', () => {
    const intern = new Intern('Jane Doe', 1, 'janedoe@email.com', 'UWA');

    expect(intern.id).toEqual(1);
});

test('The email property of the Intern to be a string', () => {
    const engineer = new Intern('Jane Doe', 1, 'janedoe@email.com', 'UWA');

    expect(engineer.email).toEqual('janedoe@email.com');
});

test('The school property of the Intern to be a string', () => {
    const intern = new Intern('Jane Doe', 1, 'janedoe@email.com', 'UWA');

    expect(intern.school).toEqual('UWA');
});