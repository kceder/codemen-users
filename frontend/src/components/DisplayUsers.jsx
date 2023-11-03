import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import UserTableRow from "./UserTableRow";
import UsersTable from './UsersTable';
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import axios from "axios";
const baseUrl = "http://localhost:5000/users/";

const DisplayUsers = ({ setShowModal, setEditUser }) => {
  const { users, setUsers } = useUser(); // Gets the users from the UserContext
  const [selectedUserId, setSelectedUserId] = useState(null); // Controls the user being displayed

  const deleteUser = (userId) => {
    axios
      .delete(`${baseUrl}${userId}`)
      .then((response) => {
        const newUsers = users.filter((user) => user.id !== userId); // Filters out the deleted user
        setUsers(newUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="mt-4 w-[90%]">
      {/* Use UserCard component for mobile views */}
      <div className="mb-16 lg:hidden">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            setShowModal={setShowModal}
            setEditUser={setEditUser}
            deleteUser={deleteUser}
          />
        ))}
      </div>
      {/* Display users in a table on large screens */}
      <UsersTable
        users={users}
        deleteUser={deleteUser}
        setShowModal={setShowModal}
        setEditUser={setEditUser}
      />
    </div>
  );
};

export default DisplayUsers;
