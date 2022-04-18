import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              We are a group of students studying with Lambton College and 
              this application has been created as part of the project and shall not 
              be used for any other purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;