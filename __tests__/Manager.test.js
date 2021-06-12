const Manager = require('../lib/Manager');

test('extends employee, add office manager, changes role to manager', () => {
    const name = "dylan";
    const id = 2;
    const email = "bob@gmail.com";
    const officeNumber = "UCSC";
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.getRole()).toBe("Manager");
})