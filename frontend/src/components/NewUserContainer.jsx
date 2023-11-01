import React, { useState } from "react";
import axios from "axios";
import Modal from "./NewUserModal";
import UserForm from "./UserForm";
import { useUser } from '../UserContext';

const NewUserForm = ({ setShowForm }) => {

  const { users, setUsers } = useUser();
  const baseUrl = "https://jsonplaceholder.typicode.com/users/";

  const handleFormSubmit = ( formData ) => {
    console.log('formData', formData)
    axios
      .post(baseUrl, formData)
      .then((response) => {
        setUsers([response.data, ...users]);
        setShowForm(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <Modal onClose={() => setShowForm(false)}>
      <h2 className="mb-4 text-xl">Add a User</h2>
      <UserForm submitForm={handleFormSubmit}/>
    </Modal>
  );
};

export default NewUserForm;
