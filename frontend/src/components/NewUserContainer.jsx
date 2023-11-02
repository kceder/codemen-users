import React, { useState } from "react";
import axios from "axios";
import NewUserModal from "./NewUserModal";
import UserForm from "./UserForm";
import { useUser } from '../UserContext';

const NewUserForm = ({ setShowForm }) => {

  const { users, setUsers } = useUser();
  const baseUrl = "http://localhost:5000/users";

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
    <NewUserModal onClose={() => setShowForm(false)}>
      <h2 className="mb-4 text-xl">Add a User</h2>
      <UserForm submitForm={handleFormSubmit}/>
    </NewUserModal>
  );
};

export default NewUserForm;
