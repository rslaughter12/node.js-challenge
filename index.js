//  This is calling to two skills from node that is needed for this project. 
// Inquirer is what allows us to ask the questions and recieve answers in the user's terminal when the code is called.
// FS is what is used in order to generate the README.md file and is then populated using the readmetext function. 
 const inquirer =  require('inquirer');
 const fs = require('fs');

 inquirer 
//  this function below is using the inquirer node module to prompt the questions below.
// the answers that the user puts in their terminal here is what is then used to populate their readme file. 
 .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is the name of your project?',
        default: 'My Current Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your project about?',
        default: 'No Discription',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Do you have anyone that you need to give credit to?',
        default: 'No Other Contributors',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT LicenseBSD', '2-Clause "Simplified" LicenseBSD', '3-Clause "New" or "Revised" LicenseBoost Software License 1.0', 'Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        default: 'No license',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: 'No GitHub Username Provided',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: 'User has not provided their email',
    },
 ])
//  this function here is saying that when the user has completed their answers for the prompts above
// that then it is going to take those answers and create and popualate the readme file.
// if that is true the user will be met with success! in their terminal
// if there was an error the user will be presented that in their terminal.
 .then((answers) => {
    fs.writeFile("README.md", readmetxt(answers), (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('success!');
    });
 });
// This is the function that is being called above. 
// This function returns the standard readme format that is created below
// But it then fills in the blanks using the changing answers that the user has entered into their terminal. 
 function readmetxt(answers) {
    return `# ${answers.name}

## Description

${answers.description}

## Table of Contents

- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Credits

${answers.credit}

## License

This project is licensed under the ${answers.license} license.

## Questions

If you have any questions, please feel free to contact me:

- GitHub: ${answers.username}
- Email: ${answers.email}
`;
 }