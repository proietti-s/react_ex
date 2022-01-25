import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = ({ onSave }) => {
  return (
    <Card className={styles.input}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onSave(event);
        }}
      >
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input name="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
