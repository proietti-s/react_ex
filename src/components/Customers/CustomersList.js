import React from "react";

import Card from "../UI/Card";


const CustomersList = (props) => {
  /* const customers = props.data.map(customer => console.log(customer)) */
  return (
    <div>
      {props.data.map((customer) => (
        <Card key={Math.random().toString()}>
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
    </div>
  )
}


export default CustomersList;
