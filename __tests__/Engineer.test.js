const Engineer = require('../lib/Engineer');

describe('Engineer Class:', () => {
  describe('Git Hub User:', () => {
    it('Should return a string with no spaces.', () => {
      const engineer = new Engineer('Douglas santos', 34485, 'Douglas.Santos@email.com.br', 'dsantos');
      expect(engineer.getGithub().split(' ').length).toBe(1);
    });
  });

  describe('Role:', () => {
    it('Should return the role Engineer.', () => {
        const engineer = new Engineer('Douglas santos', 34485, 'Douglas.Santos@email.com.br', 'dsantos');
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});
