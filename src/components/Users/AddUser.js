/** @format */

import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredName.trim() || !enteredAge.trim()) {
      setError({
        title: 'Invalid input',
        message: '"Please enter a valid name and age (none-empty-value)."'
      });
    } else if (Number(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      });

    } else {
      props.onAddUser({
        id: Date.now(),
        username: enteredName,
        age: enteredAge
      });

      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
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
        onConfirm={closeHandler}
      ></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
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
