/** @format */

import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const NewUser = (props) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (!user.username.trim() || !user.age.trim()) {
      setError({
        title: 'Invalid input',
        message: '"Please enter a valid name and age (none-empty-value)."'
      });
    } else if (Number(user.age) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      });

    } else {
      props.onAddUser({
        id: Date.now(),
        ...user,
      });

      setUser({
        username: "",
        age: "",
      });
    }
  };

  const usernameChangeHandler = (event) => {
    setUser(() => {
      return {
        ...user,
        username: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    setUser(() => {
      return {
        ...user,
        age: event.target.value,
      };
    });
  };

  const closeHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
    {/* <React
    <> */}
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onClose={closeHandler}
      ></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {/* </Fragment>
    </> */}
    </React.Fragment>
  );
};

export default NewUser;
