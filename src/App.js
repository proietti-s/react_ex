import React, { useState } from "react";

import AddCustomers from "./components/Customers/AddCustomers";
import CustomersList from "./components/Customers/CustomersList";

const DATA_CUSTOMERS = [
  { id: "c1", name: "Paul", lastName: "Dumars", email: "paul@mail.it" },
  { id: "c2", name: "John", lastName: "Mieli", email: "mieli@mail.it" },
  {
    id: "c3",
    name: "Sandra",
    lastName: "Fieldman",
    email: "sandra@mail.it",
  },
  { id: "c4", name: "Lola", lastName: "Aiuola", email: "lola@mail.it" },
  { id: "c5", name: "Billy", lastName: "Ballo", email: "billy@mail.it" },
];

function App(props) {
  const [customers, setCustomers] = useState(DATA_CUSTOMERS);

  const addNewCustomer = (customer) => {
    setCustomers((prevCustomers) => {
      return [
        customer, ...prevCustomers
      ]
    })
    console.log(customer)

  };

  return (
    <div>
      <AddCustomers onAddCustomer={addNewCustomer} />
      <CustomersList data={customers} />
    </div>
  );
}

export default App;
