const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');
const Employee = require('./lib/Employee');

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch (error) {
    console.error(error);
  }
};

//init();

const newEmployee = new Employee('joao silva', 21212, 'joao.silva@email.com.br');

console.log(newEmployee.getName());
