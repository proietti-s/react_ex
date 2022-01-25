import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [user, setUser] = useState({ name: "", age: "" });

  const saveUser = (formEvent) => {
    if (formEvent)
      return setUser({
        name: formEvent.target.username.value.toString(),
        age: formEvent.target.age.value.toString(),
      });
  };

  return (
    <div>
      <AddUser onSave={saveUser} />
      <UserList name={user.name} age={user.age} />
    </div>
  );
}

export default App;

//commento per commit
