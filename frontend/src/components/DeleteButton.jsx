const ActionButton = ({ action, label, color, hoverColor }) => {
  return (
    <button
      onClick={action}
      className={`${color} ${hoverColor} text-sm font-semibold transition duration-150 ml-1`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
