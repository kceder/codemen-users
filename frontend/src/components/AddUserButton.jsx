const AddUserButton = ({ showModal, setShowModal }) => {
  return (
    <div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-sky-500 hover:bg-sky-600 text-white border border-sky-600 py-2 px-4 rounded-2xl mb-4"
      >
        Add User +
      </button>
    </div>
  );
};

export default AddUserButton;
