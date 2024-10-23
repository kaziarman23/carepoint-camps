import "./CSS/UseMoreDetailsBtn.css";

const UseMoreDetailsBtn = ({
  children,
  onClick,
  isCancel,
  isUpdate,
  isSubmit,
  isPurple,
  disabled,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        moreDetailsBtn 
        ${isCancel ? "cancelBtn" : ""}
        ${isUpdate ? "updateBtn" : ""}
        ${isSubmit ? "submitBtn" : ""}
        ${isPurple ? "isPurple" : ""}
        ${className ? className : ""}

        `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default UseMoreDetailsBtn;
