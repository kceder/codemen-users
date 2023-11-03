const AddUserButton = ({ showModal, setShowModal }) => {
  return (
    <div className="text-white">
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-xl"
      >
        Add User +
      </button>
    </div>
  );
};

export default AddUserButton;
