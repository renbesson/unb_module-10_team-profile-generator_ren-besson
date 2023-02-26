const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch (error) {
    console.error(error);
  }
};

init();

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
