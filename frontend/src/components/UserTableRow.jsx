import ActionButton from "./DeleteButton";

const handleEditClick = (user, setShowModal, setEditUser) => {
  console.log("Edit user:", user);
  setShowModal(true);
  setEditUser(user);
};

const UserTableRow = ({ user, onDelete, index, setShowModal, setEditUser }) => {
  console.log("user", user);
  return (
    <tr
      className={
        index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"
      }
    >
      <td className="text-left p-2 w-40">{user.name}</td>
      <td className="text-left p-2 w-40">{user.email}</td>
      <td className="text-left p-2 w-40">{user.phone}</td>
      <td className="text-left p-2 w-40">{user.website}</td>
      <td className="text-left p-2 w-40">{user.company.name}</td>
      <td className="text-left p-2 w-40">{user.address.street}</td>
      <td className="text-left p-2 w-20">
        <ActionButton // Button to delete user
          action={onDelete}
          label="Delete"
          color="text-red-500"
          hoverColor="hover:text-red-700"
        />
      </td>
      <td className="text-left p-2 w-20">
        <ActionButton // Button to edit user
          action={() => handleEditClick(user, setShowModal, setEditUser)}
          label="Edit"
          color="text-sky-500"
          hoverColor="hover:text-sky-700"
        />
      </td>
    </tr>
  );
};

export default UserTableRow;
