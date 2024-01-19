const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { generateMarkdown, badges } = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: "input", name: "title", message: "Project title:" },
  { type: "input", name: "description", message: "Description:" },
  { type: "input", name: "installation", message: "Installation:" },
  { type: "input", name: "usage", message: "Usage:" },
  {
    type: "list",
    name: "license",
    message: "License:",
    choices: Object.keys(badges),
  },
  { type: "input", name: "contributing", message: "Contributing:" },
  { type: "input", name: "tests", message: "Tests:" },
  { type: "input", name: "github", message: "GitHub username:" },
  { type: "input", name: "email", message: "Email address:" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./result/${fileName}`, data, () => {
    console.log(
      "README created succesfully. Check the result folder to view the file"
    );
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
