const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');
const Manager = require('./lib/Manager');

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch (error) {
    console.error(error);
  }
};

//init();

const newEmployee = new Manager('joao silva', 21212, 'joao.silva@email.com.br', 12);

console.log(newEmployee.getRole());
