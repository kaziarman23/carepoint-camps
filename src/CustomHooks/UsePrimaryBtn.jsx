import "./CSS/UsePrimaryBtn.css";

const UsePrimaryBtn = ({
  children,
  onClick,
  isCancel,
  isUpdate,
  isSubmit,
  isPurple,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        UsePrimaryBtn 
        ${isCancel ? "cancelBtn" : ""}
        ${isUpdate ? "updateBtn" : ""}
        ${isSubmit ? "submitBtn" : ""}
        ${isPurple ? "isPurple" : ""}
        ${className ? className : ""}
        sm:px-5 sm:py-2.5 sm:text-sm
        xs:w-full xs:text-sm
        `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default UsePrimaryBtn;
