 // HTML Template
 const template = data => {
   return `
  <!DOCTYPE html>

  <html>
  
    <head>
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" 
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <link rel="stylesheet" href="../src/style.css">
      <source src="../page-template.js" type="page-template">
    </head>

    <body>

    <header>
    
      <div class="card">

        <div class = "team">
          <h1> My Team </h1>
        </div>

      </div>

    </header>

      <main>
      ${employeeSect(data)}
      </main>

    </body>

  </html>
`
 }

 // Engineer Template Section
 const engineer = engineerData => {
   return `
  <div id="${engineerData.getRole()}-card" class="box card">
    <div class="box name-role card-color">
      <h2>${engineerData.getName()}</h2>
      <h3>Role: ${engineerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`
 }
 // Inter Template
 const intern = internData => {
   return `
  <div id="${internData.getRole()}-card" class="box card">
    <div class="box name-role card-color">
      <h2>${internData.getName()}</h2>
      <h3>Role: ${internData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
        <li class="list-group-item">School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
`
 }

 // Manager Template
 const manager = managerData => {
   return `
  <div id="${managerData.getRole()}-card" class="box card">
    <div class="box name-role card-color">
      <h2>${managerData.getName()}</h2>
      <h3>Role: ${managerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
`
 }

   // Checks user input for to create each individual section for each Employee entered.

 const employeeSect = employeesArray => {
  let TeamHtml = ''

  for ( i = 0; i < employeesArray.length; i++ ) {
    if (employeesArray[i].getRole() === "Manager"){
      TeamHtml = TeamHtml + manager(employeesArray[i])
    }
    if (employeesArray[i].getRole() === "Engineer"){
      TeamHtml = TeamHtml + engineer(employeesArray[i])
    }
    if (employeesArray[i].getRole() === "Intern"){
      TeamHtml = TeamHtml + intern(employeesArray[i])
    }
  } return TeamHtml
}

 module.exports = template;