import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import AddUserButton from "./AddUserButton";
import DisplayUsers from "./DisplayUsers";
import FormModal from "./FormModal";
import axios from "axios";

const baseUrl = "http://localhost:5000/users/";

// Main component of the page
// Renders the AddUserButton, DisplayUsers and FormModal components
// If no users are present, it renders the AddUserButton

const MainComponent = () => {
  const { users, setUsers } = useUser(); // Gets the users from the UserContext
  const [showModal, setShowModal] = useState(false); // Controls the visibility of the FormModal
  const [editUser, setEditUser] = useState(null); // Controls the user being edited

  useEffect(() => {
    // Function to get the users from the backend
    axios
      .get(baseUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error trying to get users:", error);
      });
  }, []);

  return (
    <div className="flex flex-grow flex-col items-center pt-8 w-full">
      <div>
        <AddUserButton showModal={showModal} setShowModal={setShowModal} />
      </div>
      {users.length === 0 && (
        <div className="text-2xl text-gray-500 mt-8">
          No users found. Click on the button above to add a user.
        </div>
      )}
      <DisplayUsers
        users={users}
        setShowModal={setShowModal}
        setEditUser={setEditUser}
      />
      {showModal && (
        <FormModal
          setShowModal={setShowModal}
          editUser={editUser}
          setEditUser={setEditUser}
        />
      )}
    </div>
  );
};

export default MainComponent;
