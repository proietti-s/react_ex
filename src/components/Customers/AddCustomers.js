import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styled from "styled-components";

//--------styling-------------//

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: nowrap;
  max-width: 100%;
  margin: 0 auto;

  & input {
    width: 70%;
    margin: 10px 0px;
    padding: 5px;
    border: none;
    border-radius: 10px;
  }

  & input:focus {
    outline: none;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & Button {
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    margin: 0 5px;
  }

  & Button:hover {

  }
`;

//-----------component-------------//

const validateEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const AddCustomers = (props) => {
  const [isVisible, setIsVisibile] = useState(false);
  const [error, setError] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      event.target[0].value.trim().length === 0 ||
      event.target[1].value.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and lastname (non-empty values).",
      });
      return;
    }

    if (
      event.target[2].value.trim().length === 0 ||
      !event.target[2].value.toLowerCase().match(validateEmail)
    ) {
      setError({
        title: "Invalid Email",
        message:
          "Please enter a valid email (non-empty values) in the correct format (mail@mail.it).",
      });
      return;
    }

    props.onAdd(event);
    setIsVisibile(false)

  };

  const cancelBtnHandler = (event) => {
    event.preventDefault();
    setIsVisibile(false)

  }

  const addNewCustomerHandler = (event) => {
    event.preventDefault()
    setIsVisibile(true)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        {isVisible && (<Form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" name="firstName" />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastName" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />

          <BtnWrapper style={{ justifyContent: "flex-end" }}>
            <Button type="button" onClick={cancelBtnHandler}>
              Cancel
            </Button>
            <Button type="submit">
              Add
            </Button>
          </BtnWrapper>
        </Form>)}
        {!isVisible && (<BtnWrapper>
          <Button type="button" onClick={addNewCustomerHandler}>Add New Customer</Button>
        </BtnWrapper>)}
      </Card>
    </div>
  );
};

export default AddCustomers;
