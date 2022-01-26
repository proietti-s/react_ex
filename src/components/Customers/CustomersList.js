import React from "react";

import Card from "../UI/Card";

import styled from "styled-components";

const Content = styled.div`
background: white;
margin: 5px auto;
padding: 5px;
width: 70%;
border-radius: 20px 0px;
text-align: center;
`

const CustomersList = (props) => {
  /* const customers = props.data.map(customer => console.log(customer)) */
  return (
      <Card>
        {props.data.map((customer) => (
          <Content key={Math.random().toString() || customer.id}>
              <p>
                <b>Name:</b> {customer.firstName}
              </p>
              <p>
                <b>Lastname:</b> {customer.lastName}
              </p>
              <p>
                <b>Email:</b> {customer.email}
              </p>
          </Content>
        ))}
      </Card>
  );
};

export default CustomersList;