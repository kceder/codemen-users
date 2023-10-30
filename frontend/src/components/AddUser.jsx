// this component will show a form to add a new user
// the form will have validation
// the form will have a submit button
// the form will have a cancel button
// the form will have a reset button

const AddUserButton = ({ showForm, setShowForm }) => {
  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-4 mb-4"
      >
        Add User +
      </button>
    </div>
  );
};

export default AddUserButton;
