<template>
    <div class="d-flex p-5">
      <div class="col primary">
        <div class="row">
          <div class="col text-start m-3">
            <input type="search" name="search-contact" id="" placeholder="Search...">
          </div>
          <div class="col text-end m-3">
            <select name="10" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div class="row p-3">
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>PLAN</th>
                <th>DOMAINE</th>
                <th>PRIX</th>
                <th>EXPIRE LE:</th>
                <th>CREER LE:</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ index }}</td>
                <td>{{ nom }}</td>
                <td>{{ prenom }}</td>
                <td>{{ pays }}</td>
                <td>{{ nid }}</td>
                <td>{{ adresse }}</td>
                <td>{{ code }}</td>
                <td>{{ tel }}</td>
                <td>{{ email }}</td>
                <td>{{ date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <!-- Actions supplémentaires si nécessaire -->
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .primary {
    border: 1px solid;
    border-radius: 5px;
    box-shadow: 1px 3px 3px rgb(92, 88, 88);
  }
  
  select {
    width: 4rem;
    padding: .5rem;
    border-radius: 5px;
  }
  
  input {
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
  }
  
  th {
    padding: 1rem;
    background-color: #eaecf0;
    border-bottom: 1px solid;
  }
  
  table {
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }
  
  td, th {
    padding: 0.75rem;
    text-align: left;
  }
  
  @media (max-width: 768px) {
    .col {
      flex: 1 0 100%;
      max-width: 100%;
    }
  
    select {
      width: auto;
    }
  
    table {
      width: 100%;
      display: block;
      overflow-x: auto;
    }
  
    th, td {
      display: block;
      text-align: left;
      width: 100%;
      box-sizing: border-box;
    }
  
    th {
      background-color: #f1f1f1;
    }
  }
  </style>
  