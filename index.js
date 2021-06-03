const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');

const employees = [];
const engineerQuestions = [
    {
        type: "input",
        message: "Enter Engineer name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Engineer ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Engineer Email",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Engineer GitHub",
        name: "github"
    },
    {
        type: "list",
        message: "what type of teammember would you like to add?",
        name: "member",
        choices: [
            "Engineer",
            "Intern",
            "I don't want anymore employees"
        ]
    }
];

async function getEmployees() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter Manager name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager ID",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager Email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Manager Office Number",
            name: "Office_number"
        },
        {
            type: "list",
            message: "what type of teammember would you like to add?",
            name: "member",
            choices: [
                "Engineer",
                "Intern",
                "I don't want anymore employees"
            ]
        }


    ])
    .then(async (answers) => {
        let choice = answers.member;
        const manager = new Manager(answers.name, answers.id, answers.email, answers.Office_number);
        console.log(manager);
        employees.push(manager);
        while (choice !== "I don't want anymore employees") {
            if (choice === "Engineer") {
                console.log("create employee object here");
                choice = await inquirer.prompt(engineerQuestions)
                    .then((answers) => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        return answers.member;
                    })
            } else if (choice === "Intern") {
                console.log("put interns here"); 
            }
        }
        console.log("generate html here");
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    });

}

getEmployees();