const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your application:'
    },
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Would you like other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the guidelines for how developers can contribute:',
        when: ({ confirmContributors }) => {
            if (confirmContributors) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your application:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the type of license you would like:',
        choices: ['GPL', 'MIT', 'Apache License 2.0', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();

inquirer.prompt(questions).then(data => {
    console.log(data);
});