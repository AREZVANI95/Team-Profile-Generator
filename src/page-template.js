 // HTML Template
 const template = data => {
   return `
  <!DOCTYPE html>

  <html>
  
    <head>
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="../style.css"><source src="../page-template.js" type="page-template">
    </head>

    <body>

    <header>
    
      <div class="container">

        <div class = "my-team">
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

 module.exports = template;