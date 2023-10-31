const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="text-red-500 hover:text-red-700 text-sm font-semibold transition duration-150"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
