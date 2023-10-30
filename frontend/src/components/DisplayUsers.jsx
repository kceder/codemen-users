const DisplayUsers = ({ users, deleteUser }) => {
  return (
    <div>
      <table className="text-white table-auto border-separate border border-gray-300">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className={index % 2 === 0 ? "bg-slate-900" : "bg-slate-800" }
              key={user.id}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.address.street}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayUsers;
