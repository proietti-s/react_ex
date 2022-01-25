import React, { useState } from "react";
import CustomersList from "./components/Customers/CustomersList";

const DATA_CUSTOMERS = [
  {id: 'c1', firstName: 'Paul', secName: 'Dumars', email:'paul@mail.it'},
  {id: 'c2', firstName: 'John', secName: 'Mieli', email:'mieli@mail.it'},
  {id: 'c3', firstName: 'Sandra', secName: 'Fieldman', email:'sandra@mail.it'},
  {id: 'c4', firstName: 'Lola', secName: 'Aiuola', email:'lola@mail.it'},
  {id: 'c5', firstName: 'Billy', secName: 'Ballo', email:'billy@mail.it'}
]

function App() {
    const [data, setData] = useState(DATA_CUSTOMERS)

    setData( )

  return (
    <div>
<<<<<<< HEAD
      <AddCustomers onAddCustomer = {addNewCustomer}/>
      <CustomersList data={customers} />
=======
      <CustomersList data={DATA_CUSTOMERS}/>
>>>>>>> 9b1edac0af4209434a1b6bc1a611808118cbd46a
    </div>
  );
}

export default App;
