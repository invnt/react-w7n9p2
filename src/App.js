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

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">LIBERTY LEAD</h5>
            <p class="card-text">
              * Please verify with Client as you populate these fields.
            </p>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                id="name"
                aria-label="name"
                required
              ></input>
              <input
                type="text"
                class="form-control"
                placeholder="Surname"
                aria-label="Surname"
                id="surname"
              ></input>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Idnumber"
                aria-label="Idnumber"
                id="id"
              ></input>
              <input
                type="text"
                class="form-control"
                placeholder="Cellnumber"
                aria-label="Cellnumber"
                id="cellnumber"
              ></input>
            </div>

            <p class="card-text">* Please verify with Client Marital Status.</p>
            <hr></hr>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="maritalstatus"
                id="flexRadioDefault1"
                value="married"
                checked
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Married
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="maritalstatus"
                id="flexRadioDefault2"
                value="single"
              ></input>
              <label class="form-check-label" for="flexRadioDefault2">
                Single
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="maritalstatus"
                id="flexRadioDefault3"
                value="divorced"
              ></input>
              <label class="form-check-label" for="flexRadioDefault2">
                Divorced
              </label>
            </div>
            <br></br>
            <div class="input-group mb-3">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="dependants"
                  placeholder="Number of dependants"
                ></input>
              </div>
            </div>

            <p class="card-text">* Please verify with Client Income Source.</p>
            <hr></hr>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="incomesource"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Business
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="incomesource"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Employed
              </label>
            </div>
            <br></br>
            <div class="input-group mb-3">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Type of occupation"
                ></input>
              </div>
            </div>
            <p class="card-text">* Please verify with Client Their Province.</p>
            <hr></hr>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Eastern Cape
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Free State
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Gauteng
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                KwaZulu-Natal
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Limpopo
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Mpumalanga
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Northern Cape
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                North West
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="province"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Western Cape
              </label>
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

            <div class="input-group mb-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Please verify with Client If they belong to any professional
                  Association
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
              * Please verify with Client their Salary bracket per month.
            </p>
            <hr></hr>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="salarybracket"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Less than R45000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="salarybracket"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                More than R45000
              </label>
            </div>
            <br></br>
            <p class="card-text">
              * Please verify with Client their Current Insurance Products.
            </p>
            <hr></hr>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                Sort Term Insurance
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              ></input>
              <label class="form-check-label" for="flexCheckChecked">
                Life Cover
              </label>
            </div>
            <div class="input-group mb-3">
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="currentinsurer"
                  placeholder="Current Insurance Company"
                ></input>
              </div>
            </div>

            <p class="card-text">
              * Please verify with Client if they are smokers or non smokers
            </p>
            <hr></hr>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="smoker"
                value="smoker"
                required
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Smoker
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="smoker"
                value="non smoker"
                required
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Non Smoker
              </label>
            </div>

            <br></br>
            <a href="#" class="btn btn-primary" onClick={handleClick}>
              Create Lead
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
