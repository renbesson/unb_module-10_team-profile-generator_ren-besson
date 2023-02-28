const managerQuestions = [
  { message: `Please type the team manager's name:`, type: 'input', name: 'name' },
  { message: `Please type the team manager's employee ID:`, type: 'input', name: 'id' },
  { message: `Please type the team manager's email:`, type: 'input', name: 'email' },
  {
    message: `Please type the team manager's office number:`,
    type: 'input',
    name: 'officeNumber',
  },
];

const engineerQuestions = [
  { message: `Please type the new engineer's name:`, type: 'input', name: 'name' },
  { message: `Please type the new engineer's employee ID:`, type: 'input', name: 'id' },
  { message: `Please type the new engineer's email:`, type: 'input', name: 'email' },
  {
    message: `Please type the new engineer's github username:`,
    type: 'input',
    name: 'github',
  },
];

const internQuestions = [
  { message: `Please type the new intern's name:`, type: 'input', name: 'name' },
  { message: `Please type the new intern's employee ID:`, type: 'input', name: 'id' },
  { message: `Please type the new intern's email:`, type: 'input', name: 'email' },
  {
    message: `Please type the new intern's school name:`,
    type: 'input',
    name: 'school',
  },
];

const selectionQuestion = {
  message: 'What would you like to do next?',
  type: 'list',
  name: 'nextAction',
  choices: [
    { name: 'Add Engineer', value: 'engineer' },
    { name: 'Add Intern', value: 'intern' },
    { name: 'Finish', value: 'finish' },
  ],
};

module.exports = {
  selectionQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
