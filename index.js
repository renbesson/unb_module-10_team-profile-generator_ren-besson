const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];
nextAction = null;

///////////////////////////////////////////////////////////////////////////////
// Add Manager
///////////////////////////////////////////////////////////////////////////////
const addManagerInquirer = async () => {
  try {
    const answers = await inquirer.prompt(questions.managerQuestions);
    const manager = new Manager(answers);
    team.push(manager);
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Add Engineer
///////////////////////////////////////////////////////////////////////////////
const addEngineerInquirer = async () => {
  try {
    const answers = await inquirer.prompt(questions.engineerQuestions);
    const newEngineer = new Engineer(answers);
    team.push(newEngineer);
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Add Intern
///////////////////////////////////////////////////////////////////////////////
const addInternInquirer = async () => {
  try {
    const answers = await inquirer.prompt(questions.internQuestions);
    const newIntern = new Intern(answers);
    team.push(newIntern);
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Inquirer asking the next action
///////////////////////////////////////////////////////////////////////////////
const nextActionInquirer = async () => {
  try {
    const { nextAction } = await inquirer.prompt(questions.selectionQuestion);
    return nextAction;
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Perform the action based on nextActionInquirer's return
///////////////////////////////////////////////////////////////////////////////
const nextActionDecider = async () => {
  try {
    do {
      nextAction = await nextActionInquirer();

      switch (nextAction) {
        case 'engineer':
          await addEngineerInquirer();
          break;
        case 'intern':
          await addInternInquirer();
          break;
      }
    } while (nextAction !== 'finish');
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Initiates the application
///////////////////////////////////////////////////////////////////////////////
const init = async () => {
  await addManagerInquirer();
  await nextActionDecider();
  console.log(team);
};

await init();
