// A generic form input component that can be used for any form input field
// value and type are given default values if not provided
const FormInput = ({ label, name, value = "", onChange, type = "text", error }) => {
  return (
    <div className="mb-4 relative">
      <input
        className={`block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-b ${
          error ? "border-red-500" : "border-sky-300"
        } focus:border-blue-500`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <div className={`absolute inset-0 ${error ? "border-red-500" : ""} pointer-events-none`}>
        <div className={`h-5 border-t border-r border-l border-transparent absolute bottom-0 w-full ${error ? "border-red-500" : "border-gray-300"}`}></div>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FormInput;
