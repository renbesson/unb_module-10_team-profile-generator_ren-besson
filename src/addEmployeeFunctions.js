const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const { managerQuestions, engineerQuestions, internQuestions } = require('.././src/questions');

const addEmployeeInquirer = async (position) => {
  try {
    switch (position) {
      case 'manager': {
        const answers = await inquirer.prompt(managerQuestions);
        const manager = new Manager(answers);
        return manager;
      }
      case 'engineer': {
        const answers = await inquirer.prompt(engineerQuestions);
        const newEngineer = new Engineer(answers);
        return newEngineer;
      }
      case 'intern': {
        const answers = await inquirer.prompt(internQuestions);
        const newIntern = new Intern(answers);
        return newIntern;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = addEmployeeInquirer;
