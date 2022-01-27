import React from "react";

import Card from "../UI/Card";
import CustomerItem from "./CustomerItem";
import styled from "styled-components";


const Paragraph = styled.p`
font-style: italic;
`
const Bold = styled.b`
font-size: 18px;
font-style: normal;
text-transform: uppercase;

`


const CustomersList = (props) => {
  return (
    <Card>
      {props.data.map((customer) => (
        <CustomerItem
          key={Math.random().toString()}
          id={customer.id}
          onDeleteItem={props.onDelete}
        >
          <div>
        <Paragraph>
          <Bold>Name:</Bold> {customer.firstName}
        </Paragraph>
        <Paragraph>
          <Bold>Lastname:</Bold> {customer.lastName}
        </Paragraph>
        <Paragraph>
          <Bold>Email:</Bold> {customer.email}
        </Paragraph>
      </div>
        </CustomerItem>
      ))}
    </Card>
  );
};

export default CustomersList;
