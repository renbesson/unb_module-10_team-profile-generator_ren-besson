const Manager = require('../lib/Manager');

describe('Manager Class:', () => {
  describe('Office Number:', () => {
    it('Should return a double digit integer.', () => {
      const manager = new Manager({
        name: 'ricardo ferreira',
        id: 34920,
        email: 'ricardo.ferreira@email.com.br',
        officeNumber: 12,
      });
      expect(manager.getOfficeNumber().toString().length).toBe(2);
    });
  });

  describe('Role:', () => {
    it('Should return the role Manager.', () => {
      const manager = new Manager({
        name: 'ricardo ferreira',
        id: 34920,
        email: 'ricardo.ferreira@email.com.br',
        officeNumber: 12,
      });
      expect(manager.getRole()).toBe('Manager');
    });
  });
});
