const Employee = require('../lib/Employee');

test('Generates New Employee', () => {
    const employee = new Employee('Amir Rezvani', 5654, 'AmirR@Gmail.com');

    expect(employee.name).toBe("Amir Rezvani");
    expect(employee.id).toEqual(5654);
    expect(employee.email).toBe('AmirR@Gmail.com');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})