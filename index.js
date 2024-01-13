const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: "input", name: "title", message: "Project title:" },
  { type: "input", name: "description", message: "Description:" },
  { type: "input", name: "installation", message: "Installation:" },
  { type: "input", name: "usage", message: "Usage:" },
  { type: "input", name: "credits", message: "Credits:" },
  {
    type: "list",
    name: "license",
    message: "License:",
    choices: ["MIT", "Apache"],
  },
  { type: "input", name: "badges", message: "Badges:" },
  { type: "input", name: "features", message: "Features:" },
  { type: "input", name: "contributing", message: "Contributoing:" },
  { type: "input", name: "tests", message: "Tests:" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./result/${fileName}`, data, (err) => {
    console.log(err);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
