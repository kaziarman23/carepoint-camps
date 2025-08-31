import "./CSS/UsePrimaryBtn.css";

const UsePrimaryBtn = ({
  children,
  onClick,
  isLogout,
  isCancel,
  isUpdate,
  disabled,
  className,
  blackBorder,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        UsePrimaryBtn 
        ${isLogout ? "logoutBtn" : ""}
        ${isCancel ? "cancelBtn" : ""}
        ${isUpdate ? "updateBtn" : ""}
        ${blackBorder ? "blackBorder" : ""}
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
