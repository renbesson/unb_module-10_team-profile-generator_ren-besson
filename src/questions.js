const managerQuestions = [
  { message: `Please type the team manager's name:`, type: 'input', name: 'managerName' },
  { message: `Please type the team manager's employee ID:`, type: 'input', name: 'managerID' },
  { message: `Please type the team manager's email:`, type: 'input', name: 'managerEmail' },
  {
    message: `Please type the team manager's office number:`,
    type: 'input',
    name: 'managerOffice',
  },
  { message: 'Please type THE USAGE section:', type: 'input', name: 'usage' },
];

module.exports = {
  managerQuestions,
};
