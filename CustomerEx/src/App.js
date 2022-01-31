import React, { useState } from "react";

import AddCustomers from "./components/Customers/AddCustomers";
import CustomersList from "./components/Customers/CustomersList";
import ErrorModal from "./components/Customers/ErrorModal";

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

function App() {
  const [customers, setCustomers] = useState(DATA_CUSTOMERS);

  const addNewCustomer = (customer) => {
    setCustomers((prevCustomers) => {
      return [customer, ...prevCustomers];
    });
  };
  // console.log(customers);

  const deleteCustomerHandler = (customerId) => {
    setCustomers((prevCustomers) => {
      const updateCustomers = prevCustomers.filter((customer) => customer.id !== customerId);
      return updateCustomers;
    });
  };


  let content = (
    <p style={{ textAlign: "center", color: "#263f6a", fontSize: '2rem' }}>
      No Customers found. Maybe add one?
    </p>
  );
  if (customers.length > 0) {
    content = (
      <CustomersList
        data={customers}
        onDeleteCustomer={deleteCustomerHandler}
      />
    );
  }
  return (
    <div>
      <AddCustomers onAddCustomer={addNewCustomer} />
      <section>{content}</section>
    </div>
  );
}

export default App;
