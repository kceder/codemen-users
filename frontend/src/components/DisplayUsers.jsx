import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import UserTableRow from "./UserTableRow";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import axios from "axios";
const baseUrl = "http://localhost:5000/users/";

const DisplayUsers = ({ setShowModal, setEditUser }) => {
  const { users, setUsers } = useUser(); // Gets the users from the UserContext
  const [selectedUserId, setSelectedUserId] = useState(null); // Controls the user being displayed

  const [currentPage, setCurrentPage] = useState(1); // Controls the current page
  const [usersPerPage] = useState(10); // Controls the number of users per page

  const indexOfLastUser = currentPage * usersPerPage; // Counting the last user on the page
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Counting the first user on the page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Getting the users for the current page

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Function to change the current page

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
      <div className="hidden lg:block p-2 border rounded-2xl shadow-md bg-white overflow-x-auto">
        <table className="text-gray-900 w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Name</th>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Email</th>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Phone</th>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Website</th>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Company</th>
              <th className="p-3 border-b border-gray-300 font-medium text-left text-gray-700">Address</th>
              <th className="p-1 border-b border-gray-300"></th>
              <th className="p-1 border-b border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <UserTableRow
                key={user.id}
                user={user}
                onDelete={deleteUser}
                setShowModal={setShowModal}
                setEditUser={setEditUser}
                index={index}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default DisplayUsers;
