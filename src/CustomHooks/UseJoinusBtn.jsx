import "./CSS/UseJoinusBtn.css";

const UseJoinusBtn = ({ children }) => {
  return (
    <button className="joinus">
      <span>{children}</span>
    </button>
  );
};

export default UseJoinusBtn;
