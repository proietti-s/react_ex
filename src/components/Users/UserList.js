import React from "react";

import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = ({ name, age }) => {
  return (
    <Card className={styles.users}>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
      </ul>
    </Card>
  );
};

export default UserList;
