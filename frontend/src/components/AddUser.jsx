const AddUserButton = ({ showForm, setShowForm }) => {
  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-sky-500 hover:bg-sky-600 text-white border border-sky-600 py-2 px-4 rounded-2xl mb-4"
      >
        Add User +
      </button>
    </div>
  );
};

export default AddUserButton;
