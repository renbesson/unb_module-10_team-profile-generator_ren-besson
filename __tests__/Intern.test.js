const Intern = require('../lib/Intern');

describe('Intern Class:', () => {
  describe('School Name:', () => {
    it('Should return a string.', () => {
      const intern = new Intern({
        name: 'jorge Aragao',
        id: 34683,
        email: 'jorgE.AraGao@email.com.br',
        school: 'U of NB',
      });
      expect(typeof intern.getSchool()).toBe('string');
    });
  });

  describe('Role:', () => {
    it('Should return the role Intern.', () => {
      const intern = new Intern({
        name: 'jorge Aragao',
        id: 34683,
        email: 'jorgE.AraGao@email.com.br',
        school: 'U of NB',
      });
      expect(intern.getRole()).toBe('Intern');
    });
  });
});
