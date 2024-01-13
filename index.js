const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: "input", name: "title", message: "What is your name?" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./result/${fileName}`, data, (err) => {
    console.log(err);
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init(writeToFile("README.md", "hello"));
