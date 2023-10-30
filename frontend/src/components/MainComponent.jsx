import React from "react";
import { useState, useEffect } from "react";
import AddUserButton from "./AddUser";
import DisplayUsers from "./DisplayUsers";
import NewUserForm from "./NewUserForm";
import axios from "axios";

const MainComponent = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const baseUrl = "https://jsonplaceholder.typicode.com/users/";

  console.log('Rendering...')
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

  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start md:justify-center pt-8 md:pt-0 min-h-screen space-y-4">
      <AddUserButton
        className="justify-start"
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <DisplayUsers users={users} deleteUser={deleteUser} />
      {showForm && (
        <NewUserForm
          setShowForm={setShowForm}
          users={users}
          setUsers={setUsers}
        />
      )}
    </div>
  );
};

export default MainComponent;
