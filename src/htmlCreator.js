const fs = require('fs');

const thirdRowDefiner = (el) => {
  if (el.getRole() === 'Manager') return `<td>Office Number: ${el.getOfficeNumber()}</td>`;
  if (el.getRole() === 'Engineer') return `<td>Github: <a target="_blank" href="https://github.com/${el.getGithub()}">${el.getGithub()}</a></td>`;
  if (el.getRole() === 'Intern') return `<td>School: ${el.getSchool()}</td>`;
};

const htmlCreator = (fileName, team) => {
  const content = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Team</title>
    <style>
    .navbar {
        background-color: red;
        height: 128px;
      }
      
      .navbar .title {
        color: white;
        text-align: center;
        line-height: 128px;
      }
      
      main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        margin: 64px auto;
        max-width: 1024px;
      }
      
      .card {
        background-color: green;
        width: 250px;
        height: 300px;
        box-shadow: 0px 5px 10px 2px gray;
        border-radius: 10px 0 10px 0;
      }
      
      .card-title {
        background-color: purple;
        border-radius: 10px 0 0 0;
        color: white;
        height: 80px;
        padding: 5px;
        margin: 0px;
        font-weight: 500;
        font-size: 1.5rem;
        white-space: pre-line;
      }
      
      table {
        color: aliceblue;
        border-collapse: collapse;
        margin: 32px auto;
      }
      
      table,
      tr,
      td {
        border: 1px solid black;
      }
      
    </style>
  </head>
  <body>
    <header>
      <div class="navbar">
        <h2 class="title">My Team</h2>
      </div>
    </header>
    <main>
    ${team
      .map((el) => {
        return `
      <div class="card">
      <div class="card-title">${el.getName()}\n${el.getRole()}</div>
      <table>
        <tr>
          <td>ID: ${el.getId()}</td>
        </tr>
        <tr>
          <td>Email: <a href="mailto:${el.getEmail()}">${el.getEmail()}</a></td>
        </tr>
        <tr>
        ${thirdRowDefiner(el)}
        </tr>
      </table>
    </div>
      `;
      })
      .join(' ')}
    </main>
  </body>
</html>
  `;

  fs.writeFile(fileName, content, (error) => {
    error ? console.error(error) : console.log('File Written successfully!');
  });
};

module.exports = htmlCreator;
