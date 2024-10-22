import "./CSS/UseMoreDetailsBtn.css";

const UseMoreDetailsBtn = ({ children, onClick, isCancel }) => {
  return (
    <button
      onClick={onClick}
      className={`moreDetailsBtn ${isCancel ? "cancelBtn" : ""}`}
    >
      {children}
    </button>
  );
};

export default UseMoreDetailsBtn;
