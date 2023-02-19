import { useDispatch, useSelector } from "react-redux";
import { actionsAuth } from "../store/auth/AuthSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => dispatch(actionsAuth.logout())}
              >
                Logout
              </button>
            </li>
          </ul>{" "}
        </nav>
      )}
    </header>
  );
};

export default Header;
