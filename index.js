const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

const run = async () => {
  clear();
  
  console.log(
    chalk.yellow(
      figlet.textSync('Tarball Getter', { horizontalLayout: 'full' })
    )
  );


  const credentials = await inquirer.askGithubCredentials();
  console.log("credentials: ", credentials);
}

run();
