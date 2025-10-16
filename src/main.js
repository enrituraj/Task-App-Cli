import chalk from "chalk";
import figlet from "figlet";
import { input,rawlist } from '@inquirer/prompts';
import { select, Separator } from '@inquirer/prompts';

// //Login (optional)
// const username = process.argv[2] || 'john';
// const password = process.argv[3] || 1234;

// if(!username && !password){
//     console.log(chalk.red("please enter your username and password"))
// }

function enterTask(task){
    // take the task and store in the db
}

function showTask(){
    // fetch all the task and show it back to user
}

function updateTask(taskId){
    // update the single task
}

function deleteTask(taskId){
    // delete the single task
}

async function main_menu(){

    const answer1 = await rawlist({
    message: 'Enter your choice : ',
    choices: [
        { value: chalk.gray('Welcome to Task Manager!'), name: null },
        { value: chalk.gray('1. create a task'), name: '1' },
        { value: chalk.green('2. Show all tasks'), name: '2' },
        { value: chalk.yellow('3. Update a task'), name: '3' },
        { value: chalk.red('4. Delete a task'), name: '4' },
        { value: chalk.redBright('5. Exit'), name: '5' },
    ],
    });

    console.log(chalk.white('Your choice is : ') + chalk.green(answer1))
}

async function main() {
    const text = await figlet.text("Task-manager'");
    console.log(text);

    await main_menu();

    const answer = await input({ message: 'Enter your name',default:"john" });
    console.log(chalk.white('Your choice is : ') + chalk.green(answer))
  


    const answer1 = await rawlist({
    message: 'Select a package manager',
    choices: [
        { name: 'npm', value: 'npm' },
        { name: 'yarn', value: 'yarn' },
        { name: 'pnpm', value: 'pnpm' },
    ],
    });

    console.log(chalk.white('Your choice is : ') + chalk.green(answer1))


// Or
// import select, { Separator } from '@inquirer/select';

const answer2 = await select({
  message: 'Select a package manager',
  choices: [
    {
      name: 'npm',
      value: 'npm',
      description: 'npm is the most popular package manager',
    },
    {
      name: 'yarn',
      value: 'yarn',
      description: 'yarn is an awesome package manager',
    },
    new Separator(),
    {
      name: 'jspm',
      value: 'jspm',
      disabled: true,
    },
    {
      name: 'pnpm',
      value: 'pnpm',
      disabled: '(pnpm is not available)',
    },
  ],
});


console.log(answer2)

}

main();

