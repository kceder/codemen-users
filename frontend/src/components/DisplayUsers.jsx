import React, { useState } from "react";
import { useUser } from "../UserContext";
import UserTableRow from "./UserTableRow";
import ActionButton from "./DeleteButton";
import Pagination from "./Pagination";

const DisplayUsers = ({ deleteUser, editUser, setShowModal, setEditUser }) => {
  const { users } = useUser();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Here we can change the number of users per page

  const indexOfLastUser = currentPage * usersPerPage; // Counting the last user on the page
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Counting the first user on the page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Getting the users for the current page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    action={() => deleteUser(user.id)}
                    label="Delete"
                    color="text-red-500"
                    hoverColor="hover:text-red-700"
                  />
                  <ActionButton
                    action={() => {
                      setShowModal(true);
                      setEditUser(user);
                    }}
                    label="Edit"
                    color="text-sky-500"
                    hoverColor="hover:text-sky-700"
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
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Name
              </th>
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Email
              </th>
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Phone
              </th>
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Website
              </th>
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Company
              </th>
              <th className="p-3 border-b border-gray-300 font-medium text-left">
                Address
              </th>
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
                className={
                  index % 2 === 0
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "hover:bg-gray-100"
                }
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
