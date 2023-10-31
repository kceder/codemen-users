import React, { useState } from "react";
import { useUser } from "../UserContext";
import UserTableRow from "./UserTableRow";
import DeleteButton from "./DeleteButton";

const DisplayUsers = ({ deleteUser }) => {
  const { users } = useUser();
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="mt-4 w-[90%]">
      <div className="hidden lg:block">
        <table className="text-gray-900 rounded-2xl border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Website</th>
              <th className="p-2">Company</th>
              <th className="p-2">Address</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserTableRow
                key={user.id}
                user={user}
                onDelete={deleteUser}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 mb-2 rounded shadow hover:bg-gray-100 lg:hidden cursor-pointer"
            onClick={() =>
              setSelectedUserId(selectedUserId === user.id ? null : user.id)
            }
          >
            {/* Always visible content */}
            <div className="font-bold">{user.name}</div>
            <div className="mt-2">
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
            {/* Conditionally rendered content based on the expanded user */}
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
