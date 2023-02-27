class Employee {
  constructor(name, id, email) {
    this.name = name.toLowerCase();
    this.id = id;
    this.email = email.toLowerCase();
  }

  getName() {
    const nameSeparated = this.name.split(' ');

    const capitalizeAll = nameSeparated.map((name) => {
      const firstLetter = name.charAt(0);
      const remainingLetters = name.slice(1);
      const capitalized = firstLetter.toUpperCase() + remainingLetters;
      return capitalized;
    });
    return capitalizeAll.join(' ');
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
