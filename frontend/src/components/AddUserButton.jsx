const AddUserButton = ({ showModal, setShowModal }) => {
  return (
    <div className="text-white">
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-sky-400 hover:bg-sky-600 border py-2 px-4 rounded-2xl mb-4 transition duration-200 ease-in-out"
      >
        Add User +
      </button>
    </div>
  );
};

export default AddUserButton;
