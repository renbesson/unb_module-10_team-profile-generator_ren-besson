const Employee = require('../lib/Employee');

describe('Employee Class:', () => {
  describe('Checking name:', () => {
    it('Should capitalize all first letters.', () => {
      const employee = new Employee('joao silva', 23043, 'joao.silva@emal.com.br');
      expect(employee.getName()).toBe('Joao Silva');
    });
  });

  describe('Checking ID:', () => {
    it('Should have exact 5 numeric digits', () => {
      const employee = new Employee('joao silva', 23043, 'joao.silva@emal.com.br');
      expect(employee.getId().toString().length).toBe(5);
    });
  });

  describe('Checking email:', () => {
    it('Should have a lowercase email address:', () => {
      const employee = new Employee('joao silva', 23043, 'Joao.SilvA@emaIl.cOm.br');

      expect(employee.getEmail()).toBe('joao.silva@email.com.br');
    });
  });
});
