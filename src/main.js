import chalk from "chalk";
import figlet from "figlet";

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



async function main() {
    const text = await figlet.text("Task-manager'");
    console.log(text);

    const log = console.log

    log(chalk.gray('Welcome to Task Manager!'));
    log(chalk.gray('\t1. create a task'));
    log(chalk.green('\t2. Show all tasks'));
    log(chalk.yellow('\t3. Update a task'));
    log(chalk.red('\t4. Delete a task'));
    log(chalk.white('Enter your choice : '));

}

main();

