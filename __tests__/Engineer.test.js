const Engineer = require('../lib/Engineer');

describe('Engineer Class:', () => {
  describe('Git Hub User:', () => {
    it('Should return a string with no spaces.', () => {
      const engineer = new Engineer({
        name: 'Douglas santos',
        id: 34485,
        email: 'Douglas.Santos@email.com.br',
        github: 'dsantos',
      });
      expect(engineer.getGithub().split(' ').length).toBe(1);
    });
  });

  describe('Role:', () => {
    it('Should return the role Engineer.', () => {
      const engineer = new Engineer({
        name: 'Douglas santos',
        id: 34485,
        email: 'Douglas.Santos@email.com.br',
        github: 'dsantos',
      });
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});
