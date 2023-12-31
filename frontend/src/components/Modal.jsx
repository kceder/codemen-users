const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-auto">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-80 sm:w-96">
        <h2 className="mb-4 text-xl">{title}</h2>
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
