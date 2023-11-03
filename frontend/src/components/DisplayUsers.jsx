import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import UserTableRow from "./UserTableRow";
import ActionButton from "./ActionButton";
import Pagination from "./Pagination";
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
    console.log('userId', userId)
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
      {/* Display users in cards on small screens */}
      <div className="mb-16">
        {users.map((user) => (
          <div
            key={user.id}
            className="lg:hidden border p-4 mb-2 rounded shadow hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
            onClick={() =>
              setSelectedUserId(selectedUserId === user.id ? null : user.id)
            }
          >
            <div className="font-bold">{user.name}</div>
            <div className="mt-2">
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
            {selectedUserId === user.id && (
              <div>
                <div>Website: {user.website}</div>
                <div>Company: {user.company.name}</div>
                <div>
                  Address: {user.address.city}, {user.address.street}
                </div>
                <div className="mt-4">
                  <ActionButton
                    action={() => {setShowModal(true);setEditUser(user);}}
                    label="Edit"
                    color="text-sky-500"
                    hoverColor="hover:text-sky-700"
                  />
                  <ActionButton
                    action={() => deleteUser(user.id)}
                    label="Delete"
                    color="text-red-500"
                    hoverColor="hover:text-red-700"
                  />
                </div>
              </div>
            )}
          </div>
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
