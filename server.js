const inquirer = require('inquirer');
const addEmployeeInquirer = require('./src/addEmployeeFunctions');
const htmlCreator = require('./src/htmlCreator');
const questions = require('./src/questions');

const team = [];
nextAction = null;

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
const nextActionLoop = async () => {
  try {
    do {
      nextAction = await nextActionInquirer();

      const newEmployee = await addEmployeeInquirer(nextAction);
      if (newEmployee) team.push(newEmployee);
    } while (nextAction !== 'finish');
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Initiates the application
///////////////////////////////////////////////////////////////////////////////
const init = async () => {
  const newManager = await addEmployeeInquirer('manager');
  team.push(newManager);
  await nextActionLoop();
  htmlCreator('./dist/index.html', team);
};

init();
