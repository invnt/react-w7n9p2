import React from 'react';
import './style.css';

const handleClick = (e) => {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var id = document.getElementById('idnumber').value;
  var cellnumber = document.getElementById('cellnumber').value;
  var select = document.getElementById('marital');
  var marital = select.options[select.selectedIndex].value;
  var select2 = document.getElementById('dependants');
  var dependants = select2.options[select.selectedIndex].value;

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    name: name,
    surname: surname,
    cellnumber: cellnumber,
    marital: marital,
    dependants: dependants,
    incomesource: 'Business',
    occupation: 'Softaware Developer',
    province: 'Gauteng',
    city: 'Johannesburg',
    association: 'NON',
    salarybracket: '>45000',
    currentinsurance: 'Life',
    currentinsurer: 'Discovery',
    smoker: 'No',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://logan007005.pythonanywhere.com/Leads', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            P3 Leads System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <br></br>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">LIBERTY LEAD</h5>
            <p class="card-text">
              Please verify with Client as you populate these fields.
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name"
                ></input>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="surname"
                  placeholder="surname"
                ></input>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Idnumber
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="idnumber"
                  placeholder="idnumber"
                ></input>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cellnumber"
                  placeholder="cellnumber"
                ></input>
              </div>
            </div>

            <p class="card-text">Please verify with Client Marital Status.</p>
            <div class="input-group mb-3">
              <div class="mb-3">
                <select
                  id="marital"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Single">Single</option>
                </select>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client Number of Dependants.
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select
                  id="dependants"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>How many Children do you have</option>
                  <option value="0">Zero</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                </select>
              </div>
            </div>
            <p class="card-text">Please verify with Client Income Source.</p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Where do you get your income from</option>
                  <option value="1">Employed</option>
                  <option value="2">Business</option>
                </select>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client their current occupation or Business
              Type
            </p>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Current Occupation
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="occupation"
                  placeholder="occupation"
                ></input>
              </div>
            </div>
            <p class="card-text">Please verify with Client Thier Province.</p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Which is your Province</option>
                  <option value="1">Eastern Cape</option>
                  <option value="2">Free State</option>
                  <option value="1">Gauteng</option>
                  <option value="2">KwaZulu-Natal</option>
                  <option value="1">Limpopo</option>
                  <option value="2">Mpumalanga</option>
                  <option value="1">North West</option>
                  <option value="2">Northern Cape</option>
                  <option value="2">Western Cape</option>
                </select>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  City or Town
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="City"
                ></input>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client If they belong to any professional
              association.
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>
                    Do you belong professional association
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  professional association
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="association"
                  placeholder="Association"
                ></input>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client their Salary bracket.
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Salary Bracket</option>
                  <option value="1">Less than R45000</option>
                  <option value="2">Greater than R45000</option>
                </select>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client their Current Insurance Products.
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Insurance Products </option>
                  <option value="1">Life</option>
                  <option value="2">Disability</option>
                  <option value="2">Dreaded disease cover</option>
                </select>
              </div>
            </div>
            <p class="card-text">
              Please verify with Client if they are smokers or non smokers
            </p>

            <div class="input-group mb-3">
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Do you smoke</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
            </div>
            <a href="#" class="btn btn-primary" onClick={handleClick}>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
