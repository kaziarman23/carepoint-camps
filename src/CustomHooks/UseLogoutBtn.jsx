import "./CSS/UseLogoutBtn.css";

const UseLogoutBtn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="logout">
      {children}
    </button>
  );
};

export default UseLogoutBtn;
