import React from "react";

import Card from "../UI/Card";

<<<<<<< HEAD
const CustomersList = (props) => {
  /* const customers = props.data.map(customer => console.log(customer)) */
  return (
    <>
      {props.data.map((customer) => (
        <Card key={customer.id}>
          <div>
            <p>
              <b>Name:</b> {customer.firstName}
            </p>
            <p>
              <b>Surname:</b> {customer.secName}
            </p>
            <p>
              <b>Email:</b> {customer.email}
            </p>
          </div>
        </Card>
      ))}
    </>
  );
};
=======

const CustomersList = props => {
    // const [customer, setCustomer] = useState('')
    // const customers = props.data.map((customer) => console.log(customer))

    return (
        <>
            {props.data.map((customer) =>
                <Card key={customer.id}>
                    <header>
                        <h2>Customer</h2>
                    </header>
                    <div>
                        <p><b>Name</b>: {customer.firstName} </p>
                        <p><b>LastName</b>: {customer.secName} </p>
                        <p><b>Email</b>: {customer.email} </p>
                    </div>
                </Card>
            )}
        </>
    )
}
>>>>>>> 9b1edac0af4209434a1b6bc1a611808118cbd46a

export default CustomersList