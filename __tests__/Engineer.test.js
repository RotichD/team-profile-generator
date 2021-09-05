const Engineer = require('../lib/Engineer');

test('Engineer extends Employee, adds github and changes role', () => {
    const name = "dylan";
    const id = 2;
    const email = "bob@gmail.com";
    const github = "drotich";
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
    expect(engineer.getRole()).toBe("Engineer");
})