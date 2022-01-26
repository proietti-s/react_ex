import React, { useState } from "react";

import AddCustomers from "./components/Customers/AddCustomers";
import CustomersList from "./components/Customers/CustomersList";
import Card from "./components/UI/Card";

const DATA_CUSTOMERS = [
  { id: "c1", firstName: "Paul", lastName: "Dumars", email: "paul@mail.it" },
  { id: "c2", firstName: "John", lastName: "Mieli", email: "mieli@mail.it" },
  {
    id: "c3",
    firstName: "Sandra",
    lastName: "Fieldman",
    email: "sandra@mail.it",
  },
  { id: "c4", firstName: "Lola", lastName: "Aiuola", email: "lola@mail.it" },
  { id: "c5", firstName: "Billy", lastName: "Ballo", email: "billy@mail.it" },
];

function App() {
  const [customers, setCustomers] = useState(DATA_CUSTOMERS);
  
  

  const saveCustomer = (formEvent) => {

    const customer = {
      firstName: formEvent.target.firstName.value,
      lastName: formEvent.target.lastName.value,
      email: formEvent.target.email.value,
    };

    setCustomers((prevCustomers) => {
      return [customer, ...prevCustomers];
    });
  };

  const onDeleteCustomer = (customerId) => {
    setCustomers((prevCustomers) => {
      const updatedCustomers = prevCustomers.filter((customer) => customer.id !== customerId);
      return updatedCustomers;
  })
  };

  let content = <Card><p style={{textAlign: 'center', fontSize: '20px'}}>No Customers Found!</p></Card>

  if(customers.length > 0){
    content = <CustomersList data={customers} onDelete={onDeleteCustomer}></CustomersList>
  }

  return (
    <div>
      <AddCustomers onAdd={saveCustomer} />
      <div>{content}</div>
    </div>
  );
}

export default App;
