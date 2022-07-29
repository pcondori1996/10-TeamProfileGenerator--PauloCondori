function internCard(intern) {
    return `
    <div class="col-4 d-flex justify-content-center text-center">
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h1 id="name1">${intern.name}</h1>
        <h3 id="ocupation1">${intern.getRole()}</h3>
  
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-success" >${intern.id}</li>
          <li class="list-group-item list-group-item-success" >${intern.email}</li>
          <li class="list-group-item list-group-item-success" >${intern.School}</li>
        </ul>
  
      </div>
    </div>
  </div>

    `
}

module.exports = internCard;