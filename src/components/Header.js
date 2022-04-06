import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="myBtn">
        <button>
          <FaBars />
        </button>
      </div>
      <div className="myName">Lazy Luis</div>
      <div className="myLinks">
        <Link to="/"> Hi! </Link>
        <Link to="/me"> Me </Link>
        <Link to="/works"> My Works </Link>
        <Link to="/skills"> My Skills </Link>
        <Link to="/contact"> My Socials </Link>
      </div>
    </header>
  );
};

export default Header;
