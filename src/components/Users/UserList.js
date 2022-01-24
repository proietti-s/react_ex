import React from "react";

import Card from "../UI/Card";

import styles from './UserList.module.css'

const UserList = props => {


return (
    <Card className={styles.users}>
        <ul>
            <li>{props.username}</li>
            <li>{props.age}</li>
        </ul>
    </Card>
)
}

export default UserList;