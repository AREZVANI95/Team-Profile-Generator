const { Intern } = require('../lib/Intern');

test('Generates new Intern', () => {
    const employee = new Intern('Amir Rezvani', 5654, 'AmirR@Gmail.com', 'UCF');

    expect(employee.name).toBe("Amir Rezvani");
    expect(employee.id).toEqual(5654);
    expect(employee.email).toBe("AmirR@Gmail.com");
    expect(employee.school).toEqual(expect.any(String));
})
