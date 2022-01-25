import React from "react";

import Card from "../UI/Card";


const CustomersList = (props) => {
  /* const customers = props.data.map(customer => console.log(customer)) */
  return (
    <>
      {props.data.map((customer) => (
        <Card key={Math.random().toString() || customer.id}>
          <div>
            <p>
              <b>Name:</b> {customer.name}
            </p>
            <p>
              <b>Surname:</b> {customer.lastName}
            </p>
            <p>
              <b>Email:</b> {customer.email}
            </p>
          </div>
        </Card>
      )
      )}
    </>
  )
}


export default CustomersList;
