import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styled from "styled-components";

//--------styling-------------//

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px 5px;
`;

//-----------component-------------//

const validateEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const AddCustomers = (props) => {
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

    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
  };

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
        <Form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" name="firstName" />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastName" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <Button type="submit">Add Customer</Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddCustomers;
