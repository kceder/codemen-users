import React from "react";
import ActionButton from "./ActionButton";

// Component to display a user in a card
// Every card has a delete and edit button
const UserCard = ({
  user,  // The user to display
  selectedUserId,  // The id of the user being displayed
  setSelectedUserId,  // Function to set the id of the user being displayed
  setShowModal,  // Function to set the modal state
  setEditUser,  // Function to set the user to edit
  deleteUser,  // Function to delete a user
}) => {
  return (
    <div
      key={user.id}
      className="border p-4 mb-2 rounded-xl shadow hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
      onClick={() =>
        setSelectedUserId(selectedUserId === user.id ? null : user.id)
      }
    >
      <div className="font-bold">{user.name}</div>
      <div className="mt-2">
        <div>
          email:<span className="ml-2"> {user.email}</span>
        </div>
        <div>
          phone:<span className="ml-2"> {user.phone}</span>
        </div>
      </div>
      {selectedUserId === user.id && (
        <div>
          <div>
            website:<span className="ml-2"> {user.website}</span>
          </div>
          <div>
            company:<span className="ml-2">{user.company.name}</span>
          </div>
          <div className="mb-2">
            address:<span className="ml-2">{user.address.street}</span>
          </div>
          <div>
            <ActionButton
              action={() => {
                setShowModal(true);
                setEditUser(user);
              }}
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
  );
};

export default UserCard;
