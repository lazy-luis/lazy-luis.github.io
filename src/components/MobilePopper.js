import { Link } from "react-router-dom";

const MobilePopper = ({ menu, linkClick }) => {
  return (
    <>
      <div
        className={menu ? "backlayer_setout active" : "backlayer_setout"}
      ></div>
      <div className={menu ? "actual_menu active" : "actual_menu"}>
        <ul>
          <Link onClick={linkClick} to="/">
            Hi!
          </Link>
          <Link onClick={linkClick} to="/me">
            Me
          </Link>
          <Link onClick={linkClick} to="/works">
            My Works
          </Link>
          <Link onClick={linkClick} to="/skills">
            My Skills
          </Link>
          <Link onClick={linkClick} to="/contact">
            My Socials
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobilePopper;
