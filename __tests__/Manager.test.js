const Manager = require('../lib/Manager');

describe('Manager Class:', () => {
  describe('Office Number:', () => {
    it('Should return a double digit integer.', () => {
      const manager = new Manager('ricardo ferreira', 34920, 'ricardo.ferreira@email.com.br', 12);
      expect(manager.getOfficeNumber().toString().length).toBe(2);
    });
  });

  describe('Role:', () => {
    it('Should return the role Manager.', () => {
      const manager = new Manager('ricardo ferreira', 34920, 'ricardo.ferreira@email.com.br', 12);
      expect(manager.getRole()).toBe('Manager');
    });
  });
});
