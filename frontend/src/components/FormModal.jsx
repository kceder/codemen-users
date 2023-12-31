import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import UserForm from "./UserForm";
import { useUser } from "../contexts/UserContext";

const FormModal = ({ setShowModal, editUser, setEditUser }) => {
  const { users, setUsers } = useUser();
  const baseUrl = "http://localhost:5000/users";

  const handleFormSubmit = (formData) => {

    if (editUser) { // If user is being edited
      axios
        .put(`${baseUrl}/${editUser.id}`, formData)
        .then((response) => {
          const updatedUsers = users.map((user) => {
            if (user.id === editUser.id) {
              return response.data;
            } else {
              return user;
            }
          });
          setUsers(updatedUsers);
          setShowModal(false);
        })
        .catch((error) => {
          console.error("Error editing user:", error);
        });
    } else { // If user is being added
      axios
        .post(baseUrl, formData)
        .then((response) => {
          const updatedUsers = [...users, response.data];
          setUsers(updatedUsers);
          setShowModal(false);
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  return (
    <Modal
      title={editUser ? "Edit User" : "Add a User"}
      onClose={() => {
        setShowModal(false);
        setEditUser(null);
      }}
    >
      <UserForm submitForm={handleFormSubmit} userToEdit={editUser} />
    </Modal>
  );
};

export default FormModal;
