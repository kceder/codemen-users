import DeleteButton from "./DeleteButton";

const UserTableRow = ({ user, onDelete, index }) => {
  console.log('user', user)
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}>
      <td className="text-left p-2 w-40">{user.name}</td>
      <td className="text-left p-2 w-40">{user.email}</td>
      <td className="text-left p-2 w-40">{user.phone}</td>
      <td className="text-left p-2 w-40">{user.website}</td>
      <td className="text-left p-2 w-40">{user.company.name}</td>
      <td className="text-left p-2 w-40">{user.address.street}</td>
      <td className="text-left p-2 w-20">
        <DeleteButton onDelete={() => onDelete(user.id)} />
      </td>
    </tr>
  );
};

export default UserTableRow;
