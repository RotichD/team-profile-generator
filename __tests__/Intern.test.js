const Intern = require('../lib/Intern');

test("extends employee, adds school, changes role to intern", () => {
    const name = "dylan";
    const id = 2;
    const email = "bob@gmail.com";
    const school = "UCSC";
    const intern = new Intern(name, id, email, school);
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
    expect(intern.getRole()).toBe("Intern");
})