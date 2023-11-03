// Generic button component for actions
const ActionButton = ({ action, label, color, hoverColor }) => {
  return (
    <button
      onClick={action}
      className={`${color} ${hoverColor} text-sm font-semibold transition duration-150 mx-1`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
