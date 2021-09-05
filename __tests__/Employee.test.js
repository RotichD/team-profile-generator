const Employee = require('../lib/Employee');

test('accepts inputs and stores them', () => {
    const name = "dylan";
    const id = 2;
    const email = "bob@gmail.com";
    const employee = new Employee(name, id, email);
    expect(employee.name).toBe("dylan");
    expect(employee.id).toBe(2);
    expect(employee.email).toBe("bob@gmail.com");
    expect(employee.getRole()).toBe("Employee");
    
})

