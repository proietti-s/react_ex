import React from "react";

import Card from "../UI/Card";
import CustomerItem from "./CustomerItem";


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
        <p>
          <b>Name:</b> {customer.firstName}
        </p>
        <p>
          <b>Lastname:</b> {customer.lastName}
        </p>
        <p>
          <b>Email:</b> {customer.email}
        </p>
      </div>
        </CustomerItem>
      ))}
    </Card>
  );
};

export default CustomersList;
