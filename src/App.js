import React from 'react';
import './style.css';

const handleClick = (e) => {
  e.preventDefault();

  var smoker = document.querySelector('input[name="smoker"]:checked').value;

  var maritalstatus = document.querySelector(
    'input[name="maritalstatus"]:checked'
  ).value;
};

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  * P3 LEADS SYSTEM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <br></br>
        <form class="row g-3 was-validated">
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            ></input>
            <div class="invalid-feedback">Please provide First name</div>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
            ></input>
            <div class="invalid-feedback">Please provide Last name</div>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              Idnumber
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div class="invalid-feedback">
                Please provide valid SA idnumber.
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <label for="validationCustomUsername" class="form-label">
              Cellnumber
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div class="invalid-feedback">
                Please provide valid SA Cellnumber.
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              City
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Bellville</option>
              <option>Cape Town</option>
              <option>Constantia</option>
              <option>George</option>
              <option>Hopefield</option>
              <option>Oudtshoorn</option>
              <option>Paarl</option>
              <option>Simon’s Town</option>
              

            </select>
            <div class="invalid-feedback">Please select a valid City.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Province
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Gauteng</option>
              <option>Kwazulu Natal</option>
              <option>Free State</option>
              <option>Western Cape</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">
              Postal Code
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            ></input>
            <div class="invalid-feedback">
              Please provide a valid Postal Code.
            </div>
          </div>
          <hr></hr>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Marital Status
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
            </select>
            <div class="invalid-feedback">Please select Marital Status.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Number of Kids
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Zero</option>
              <option>One</option>
              <option>Two</option>
            </select>
            <div class="invalid-feedback">
              Please select the number off kids.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Income Source
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Business</option>
              <option>Employed</option>
            </select>
            <div class="invalid-feedback">
              Please Select the clients Income Source
            </div>
          </div>
          <hr></hr>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Type of Job
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Business</option>
              <option>Employed</option>
            </select>
            <div class="invalid-feedback">Please Select the clients Job</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Proffesional Association
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Non</option>
              <option></option>
            </select>
            <div class="invalid-feedback">
              Please Select the clients Proffesional Association
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Income
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Less than R45000</option>
              <option>More than R45000</option>
            </select>
            <div class="invalid-feedback">
              Please Select the clients Income Amount
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Current Insurance
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Life Cover</option>
              <option>Disablity</option>
            </select>
            <div class="invalid-feedback">
              Please Select the clients Current Insurance Cover
            </div>
          </div>
          <hr></hr>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Insurance Company
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Non</option>
              <option>Other</option>
              <option>Discovery</option>
              <option>Old Mutual</option>
              <option>Sanlam</option>
              <option>Santam</option>
            </select>
            <div class="invalid-feedback">
              Please Select the clients Current Insurance Company
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Smoker
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Non Smoker</option>
              <option>Smoker</option>
            </select>
            <div class="invalid-feedback">
              Please Select if the Client is a Smoker or not
            </div>
          </div>
          <hr></hr>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              ></input>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
          <hr></hr>
        </form>
      </div>
    </div>
  );
}
