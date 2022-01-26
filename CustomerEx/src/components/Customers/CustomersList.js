import React from "react";

import CustomerItem from "./CustomerItem";

const CustomersList = (props) => {
  /*  */
  console.log(props)
  return (

<>
    {props.data.map((customer) => (
      <CustomerItem
        key={customer.id}
        id={customer.id}
        name={customer.name}
        lastName={customer.lastName}
        email={customer.email}
        onDeleteCustomer={props.onDeleteCustomer}
      ></CustomerItem>
      ))}
</>
  );

};

export default CustomersList;
