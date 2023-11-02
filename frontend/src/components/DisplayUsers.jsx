import React, { useState } from "react";
import { useUser } from "../UserContext";
import UserTableRow from "./UserTableRow";
import DeleteButton from "./DeleteButton";
import Pagination from "./Pagination";

const DisplayUsers = ({ deleteUser }) => {
  const { users } = useUser();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // This denotes how many users you'd like to display per page

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="mt-4 w-[90%]">
      <div className="hidden lg:block p-2 border rounded-2xl shadow-md bg-white">
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
              <th className="p-3 border-b border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <UserTableRow
                key={user.id}
                user={user}
                onDelete={deleteUser}
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

      <div className="mb-16">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 mb-2 rounded shadow hover:bg-gray-100 lg:hidden cursor-pointer transition duration-300 ease-in-out"
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
                  <DeleteButton onDelete={() => deleteUser(user.id)} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayUsers;
