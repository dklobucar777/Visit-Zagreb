import React, { FC } from "react";

import "./SignUp.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const SignUp = () => (
  <MDBContainer
    fluid
    className="d-flex align-items-center justify-content-center bg-image"
    style={{
      backgroundImage:
        "url(https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ide3f53ddfd02b78d/version/1476963736/jarun-lake-zagreb.jpg)",
    }}
  >
    <div className="mask gradient-custom-3"></div>
    <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
      <MDBCardBody className="px-5">
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        <MDBInput
          wrapperClass="mb-4"
          label="Your Name"
          size="lg"
          id="form1"
          type="text"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Your Email"
          size="lg"
          id="form2"
          type="email"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          size="lg"
          id="form3"
          type="password"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Repeat your password"
          size="lg"
          id="form4"
          type="password"
        />
        <div className="d-flex flex-row justify-content-center mb-4">
          <MDBCheckbox
            name="flexCheck"
            id="flexCheckDefault"
            label="I agree all statements in Terms of service"
          />
        </div>
        <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
          Register
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
);

export default SignUp;