#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

// Function to count words in a given string
function countWords(input: any) {
    const words = input.trim().split(/\s+/);
    return words.length;
}

// Inquirer prompt to get user inputm
const userAnswer = await inquirer.prompt([

    {
        type: "input",
        name: "text",
        message: chalk.blueBright("Enter a sentence or paragraph:")
    }

]);

const wordCount = countWords(userAnswer.text);
console.log(chalk.yellow(`Your word count is: ${wordCount}`));


