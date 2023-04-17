 const inquirer =  require('inquirer');
 const fs = require('fs');

 inquirer
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
 .then((answers) => {
    fs.writeFile("README.md", readmetxt(answers), (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('success!');
    });
 });

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