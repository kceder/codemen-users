import React from "react";
import { useState, useEffect } from "react";
import AddUserButton from "./AddUserButton";
import DisplayUsers from "./DisplayUsers";
import UserModal from "./UserModal";
import axios from "axios";
import { useUser } from "../UserContext";

const MainComponent = () => {
  const { users, setUsers } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const baseUrl = "http://localhost:5000/users/";
  console.log("Rendering...");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`${baseUrl}${userId}`)
      .then((response) => {
        const newUsers = users.filter((user) => user.id !== userId);
        setUsers(newUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="flex flex-grow flex-col items-center pt-8 w-full">
      <div>
        <AddUserButton showModal={showModal} setShowModal={setShowModal} />
      </div>

      <DisplayUsers
        users={users}
        deleteUser={deleteUser}
        setShowModal={setShowModal}
        setEditUser={setEditUser}
      />
      {showModal && (
        <UserModal
          setShowModal={setShowModal}
          editUser={editUser}
          setEditUser={setEditUser}
        />
      )}
    </div>
  );
};

export default MainComponent;
