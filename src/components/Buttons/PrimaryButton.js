// External Imports
import { Link } from "react-router-dom";

const PrimaryButton = ({ label, onClick, style, textStyle, link }) => {
  return link ? (
    <Link className="primary-button" style={style} to={link}>
      <p style={textStyle}>{label || "Button"}</p>
    </Link>
  ) : (
    <button
      className="primary-button"
      style={style}
      onClick={
        onClick
          ? onClick
          : () => {
              alert("Button Clicked");
            }
      }
    >
      <p style={textStyle}>{label || "Button"}</p>
    </button>
  );
};

export default PrimaryButton;
