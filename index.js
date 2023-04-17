 const inquirer =  require('inquirer');
 const fs = require('fs');

 inquirer
 .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Do you have anyone that you need to give credit to?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['Apache License 2.0, GNU General Public License v3.0, MIT LicenseBSD, 2-Clause "Simplified" LicenseBSD, 3-Clause "New" or "Revised" LicenseBoost Software License 1.0, Creative Commons Zero v1.0 UniversalEclipse Public License 2.0, GNU Affero General Public License v3.0, GNU General Public License v2.0, GNU Lesser General Public License v2.1, Mozilla Public License 2.0, The Unlicense'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
 ])
 .then((answers) => {
    fs.writeFile("README.md", readmetxt(answers), (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('success!');
    });
 });