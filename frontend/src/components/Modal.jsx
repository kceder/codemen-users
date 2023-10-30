const Modal = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
          {children}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-xl"
          >
            &times;
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  