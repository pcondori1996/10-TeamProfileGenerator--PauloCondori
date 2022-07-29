function bodyHTML(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</head>

<body>
  <div class="jumbotron jumbotron-fluid" style="background-color: rgba(220, 20, 60, 0.642);"">
        <div class=" container">
    <h1 class="display-4">My Team</h1>
  </div>
  </div>


  <!--------Row1 Cards-->

  <div class="row">
  ${cards}
  </div>


  <script src="../index.js"></script>
  </body>
  
  </html>
    `
}

module.exports = bodyHTML;