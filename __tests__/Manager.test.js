const { Manager } = require('../lib/Manager');

test('Generates New Manager', () => {
    const employee = new Manager('Amir Rezvani', 5654, 'AmirR@Gmail.com', 56544546);

    expect(employee.name).toBe("Amir Rezvani");
    expect(employee.id).toEqual(5654);
    expect(employee.email).toBe("AmirR@Gmail.com");
    expect(employee.officeNumber).toEqual(expect.any(Number));
})