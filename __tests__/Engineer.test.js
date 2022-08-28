const { engineer, Engineer } = require('../lib/Engineer')

test('Generates New Engineer', () => {
    const employee = new Engineer('Amir Rezvani', 5654, 'AmirR@Gmail.com', 'AREZVANI');

    expect(employee.name).toBe("Amir Rezvani")
    expect(employee.id).toEqual(5654)
    expect(employee.email).toBe("AmirR@Gmail.com")
    expect(employee.github).toBe("AREZVANI")
    expect(employee.getRole()).toBe('Engineer');
})