const Intern = require('../lib/Intern');

describe('Intern Class:', () => {
  describe('School Name:', () => {
    it('Should return a string.', () => {
      const intern = new Intern('jorge Aragao', 34683, 'jorgE.AraGao@email.com.br', 'U of NB');
      expect(typeof intern.getSchool()).toBe('string');
    });
  });

  describe('Role:', () => {
    it('Should return the role Intern.', () => {
      const intern = new Intern('jorge Aragao', 34683, 'jorgE.AraGao@email.com.br', 'U of NB');
      expect(intern.getRole()).toBe('Intern');
    });
  });
});
