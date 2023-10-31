import DeleteButton from "./DeleteButton";

const UserTableRow = ({ user, onDelete, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <td className="text-center p-2">{user.name}</td>
      <td className="text-center p-2">{user.email}</td>
      <td className="text-center p-2">{user.phone}</td>
      <td className="text-center p-2">{user.website}</td>
      <td className="text-center p-2">{user.company.name}</td>
      <td className="text-center p-2">{user.address.street}</td>
      <td className="text-center p-2">
        <DeleteButton onDelete={() => onDelete(user.id)} />
      </td>
    </tr>
  );
};

export default UserTableRow;
