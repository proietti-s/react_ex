import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px 5px;
`;

const AddCustomers = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(event);
    
    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';

  };

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="firstName"/>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastName"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
        <Button type="submit">Add Customer</Button>
      </Form>
    </Card>
  );
};

export default AddCustomers;
