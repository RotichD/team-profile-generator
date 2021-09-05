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
        var node = document.createElement("DIV");
        var textnode;

        if (employees[i].role === "Manager") {
            textnode = document.createElement(`
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
            textnode = document.createElement(`
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
            textnode = document.createElement(`
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



module.exports = createCards;