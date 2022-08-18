import React from 'react';
import './style.css';

const handleClick = (e) => {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var idnumber = document.getElementById('idnumber').value;
  var cellnumber = document.getElementById('cellnumber').value;
  var select = document.getElementById('marital');
  var marital = select.options[select.selectedIndex].value;

  alert(name + surname + idnumber + cellnumber + marital);
};

export default function App() {
  return (
    <div>
      <div class="container">
        <br></br>
        <div class="card">
          <div class="card-header">LIBERTY</div>
          <div class="card-body">
            <h5 class="card-title">Clients Details</h5>
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
                <select class="form-select" aria-label="Default select example">
                  <option selected>How many Children do you have</option>
                  <option value="1">Zero</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                  <option value="1">Three</option>
                  <option value="2">Four</option>
                  <option value="3">Six</option>
                  <option value="1">Seven</option>
                  <option value="2">Eight</option>
                  <option value="3">Nine</option>
                  <option value="3">Ten</option>
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
