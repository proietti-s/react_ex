import React, { useState } from "react";

import AddCustomers from "./components/Customers/AddCustomers";
import CustomersList from "./components/Customers/CustomersList";

const DATA_CUSTOMERS = [
  { id: "c1", firstName: "Paul", secName: "Dumars", email: "paul@mail.it" },
  { id: "c2", firstName: "John", secName: "Mieli", email: "mieli@mail.it" },
  {
    id: "c3",
    firstName: "Sandra",
    secName: "Fieldman",
    email: "sandra@mail.it",
  },
  { id: "c4", firstName: "Lola", secName: "Aiuola", email: "lola@mail.it" },
  { id: "c5", firstName: "Billy", secName: "Ballo", email: "billy@mail.it" },
];

function App() {
  const [customers, setCustomers] = useState(DATA_CUSTOMERS);

  const addNewCustomer = (customer) => {
    setCustomers((prevCustomers) => {
      return [customer, ...prevCustomers];
    });
  };

  return (
    <div>
      <AddCustomers onAddCustomer = {addNewCustomer}/>
      <CustomersList data={customers} />
    </div>
  );
}

export default App;