const Engineer = require('../lib/Engineer');

test('The name property of the Employee to be a string', () => {
    const engineer = new Engineer('Jane Doe', 1, 'janedoe@email.com', 'janedoe');

    expect(engineer.name).toEqual('Jane Doe');
});

test('The id property of the Engineer to be a number', () => {
    const engineer = new Engineer('Jane Doe', 1, 'janedoe@email.com', 'janedoe');

    expect(engineer.id).toEqual(1);
});

test('The email property of the Engineer to be a string', () => {
    const engineer = new Engineer('Jane Doe', 1, 'janedoe@email.com', 'janedoe');

    expect(engineer.email).toEqual('janedoe@email.com');
});

test('The GitHub property of the Engineer to be a string', () => {
    const engineer = new Engineer('Jane Doe', 1, 'janedoe@email.com', 'janedoe');

    expect(engineer.gitHub).toEqual('janedoe');
});