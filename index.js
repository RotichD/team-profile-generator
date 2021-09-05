const fs = require('fs');
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
const internQuestions = [
    {
        type: "input",
        message: "Enter Intern name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Intern ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Intern Email",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Intern School Name",
        name: "school"
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

let templateHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-light bg-dark justify-content-center h1">
        <span class="navbar-text text-white ">
          My Team
        </span>
    </nav>
    
    <div class="container" id="team-container">
        
        
    </div>
    
</body>
<script src="../index.js"></script> 
</html>
`;

const createCards = function() {
    let teamContainer = document.getElementById("team-container");

    for (let i = 0; i < employees.length; i++) {
        var node = document.createElement("div");
        var textnode;

        if (employees[i].role === "Manager") {
            textnode = document.createTextNode(`
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <h2 class="card-title text-center">${employees[i].name}</h2>
                    <h3 class="card-subtitle text-center">Manager</h3>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                    <li class="list-group-item">Office Number: ${employees[i].officeNumber}</li>
                    </ul>
                </div>
            </div>
            `);
        } else if (employees[i].role === "Intern") {
            textnode = document.createTextNode(`
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <h2 class="card-title text-center">${employees[i].name}</h2>
                    <h3 class="card-subtitle text-center">Intern</h3>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                    <li class="list-group-item">School: ${employees[i].school}</li>
                    </ul>
                </div>
            </div>
            `);
        } else if (employees[i].role === "Engineer") {
            textnode = document.createTextNode(`
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <h2 class="card-title text-center">${employees[i].name}</h2>
                    <h3 class="card-subtitle text-center">Engineer</h3>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employees[i].github}"${employees[i].github}</a></li>
                    </ul>
                </div>
            </div>
            `);
        }

        node.appendChild(textnode);
        teamContainer.appendChild(node);
    }
}


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
                        console.log(engineer);
                        employees.push(engineer);
                        return answers.member;
                    })
            } if (choice === "Intern") {
                console.log("create Intern object here"); 
                choice = await inquirer.prompt(internQuestions)
                    .then((answers) => {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        console.log(intern);
                        employees.push(intern);
                        return answers.member;
                    })
            } 
        }
        console.log("generate html here");
        console.log(employees);
        try {
            const data = fs.writeFileSync('./dist/index.html', templateHTML);
        } catch (err) {
            console.error(err)
        }
        
        
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
createCards();
