import Header from "../../Containers/Header/Header";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div>{children}</div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Layout;
