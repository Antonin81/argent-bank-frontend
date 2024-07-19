import argentBankLogo from "../../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSlice } from "../../../features/login/loginSlice";
import { profileSlice } from "../../../features/profile/profileSlice";

function Header() {
  const { id, firstname, lastname } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    dispatch(loginSlice.actions.logUserOut());
    dispatch(profileSlice.actions.deleteUserProfile());
    navigate("/", { replace: true });
  }

  return (
    <header>
      <nav>
        <Link to="/" className="img-link">
          <img src={argentBankLogo} alt="" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {id ? (
          <div>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {firstname}
            </Link>
            <a href="#" onClick={logout} className="main-nav-item">
              <i className="fa fa-sign-out"></i> Sign Out
            </a>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
