import ActionButton from "./ActionButton";

// Component to display a user in a table row
// Every row has a delete and edit button
// Rows have zebra striping

const UserTableRow = ({ user, onDelete, index, setShowModal, setEditUser }) => {
  console.log("user", user);
  return (
    <tr
      className={
        index % 2 === 0
          ? "bg-gray-50 hover:bg-gray-100 transition duration-200 ease-in-out"
          : "hover:bg-gray-100 transition duration-200 ease-in-out"
      }
    >
      <td className="text-left p-2 w-40 font-sans">{user.name}</td>
      <td className="text-left p-2 w-40 font-sans">{user.email}</td>
      <td className="text-left p-2 w-40 font-sans">{user.phone}</td>
      <td className="text-left p-2 w-40 font-sans">{user.website}</td>
      <td className="text-left p-2 w-40 font-sans">{user.company.name}</td>
      <td className="text-left p-2 w-40 font-sans">{user.address.street}, {user.address.city}</td>
      <td className="text-left p-2 font-sans w-6">
        <ActionButton // Button to edit user
          action={() => { setShowModal(true); setEditUser(user); }}
          label="Edit"
          color="text-sky-500"
          hoverColor="hover:text-sky-700"
        />
      </td>
      <td className="text-left p-2 font-sans w-6">
        <ActionButton // Button to delete user
          action={() => onDelete(user.id)}
          label="Delete"
          color="text-red-500"
          hoverColor="hover:text-red-700"
        />
      </td>
    </tr>
  );
};

export default UserTableRow;
