import React from "react";

import Card from "../UI/Card";


const CustomersList = (props) => {
  /* const customers = props.data.map(customer => console.log(customer)) */
  return (
<<<<<<< Updated upstream
      <>
      {props.data.map((customer) => 
       
            <Card key={customer.id}>
            <header>
              <h2>Customer</h2>
            </header>
          <div>
            <p><b>Name:</b> {customer.firstName}</p>
            <p><b>Surname:</b> {customer.secName}</p>
            <p><b>Phone:</b> {customer.email}</p>
=======
    <>
      {props.data.map((customer) => (
        <Card key={Math.random().toString()|| customer.id}>
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
>>>>>>> Stashed changes
          </div>
          </Card>
        
      )}
    </>
  )
}

export default CustomersList;
