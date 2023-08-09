import classes from "./Header.module.css";
import AiNLogo from "../../Assets/Images/AiNLogo.svg";
import AiNLogoWhite from "../../Assets/Images/AiNLogoWhite.svg";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useContext, useRef } from "react";
import { AppContext } from "../../Context/AppContext";

const Header = () => {
  // Refs
  const sideMenu = useRef();

  const openSideMenu = () => {
    sideMenu.current.style.width = "80%";
  };

  const closeSideMenu = () => {
    sideMenu.current.style.width = "0%";
  };

  // context
  const { iydContainerRef, aboutAIESECRef } = useContext(AppContext);

  return (
    <div className={classes.container}>
      <img src={AiNLogo} alt="AIESEC In Nigeria Logo" />
      <p
        onClick={() => {
          iydContainerRef.current.scrollIntoView();
        }}
      >
        IYD 2023
      </p>
      <p
        onClick={() => {
          aboutAIESECRef.current.scrollIntoView();
        }}
      >
        About AIESEC
      </p>
      <div className={classes.buttonContainer}>
        <Button
          type="primary"
          onClick={() => {
            window.open("https://forms.gle/fu9SeyBEbMpfRWjeA");
          }}
        >
          Register Now
        </Button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={classes.sidemenuOpener}
        onClick={openSideMenu}
      >
        <path
          d="M3.5 5.83325H24.5M3.5 13.9999H24.5M3.5 22.1666H24.5"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={classes.sideNav} ref={sideMenu}>
        <div className={classes.sideMenuInner}>
          <div className={classes.sideMenuHeader}>
            <img src={AiNLogoWhite} alt="AIESEC In Nigeria Logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#fff"
              viewBox="0 0 16 16"
              onClick={closeSideMenu}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
            </svg>
          </div>
          <p>IYD 2023</p>
          <Link to="/">About AIESEC</Link>
          <div className={classes.buttonContainerMobile}>
            <Button
              type="primary"
              onClick={() => {
                window.open("https://forms.gle/fu9SeyBEbMpfRWjeA");
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
