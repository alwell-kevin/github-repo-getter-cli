const inquirer   = require('inquirer');
const files      = require('./files');



const askGithubCredentials = () => {
  const questions = [
    {
      name: 'path',
      type: 'input',
      message: 'Enter the simple path to your GitHub repository. Example: /<your_org>/<your_repo>',
      validate: function( value ) {
        if (value.length && !value.includes("api.github") && !value.includes("tarball")) {
          return true;
        } else {
          return 'Enter the simple path to your GitHub repository. (Do not include api.github or /tarball)';
        }
      }
    },
    {
      name: 'pat',
      type: 'password',
      message: 'Enter your valid GitHub Personal Access Token.',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Enter your valid GitHub Personal Access Token.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}

module.exports.askGithubCredentials = askGithubCredentials;