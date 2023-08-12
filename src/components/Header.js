import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../Store/Auth";

const Header = () => {
  const dispatch = useDispatch();
  const isLogine = useSelector((state) => state.auth.isLogine);

  const logoutHandler = () => {
    dispatch(authActions.setLogOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLogine && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
