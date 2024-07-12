import argentBankLogo from "../../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <header>
      <nav>
        <Link to="/" className="img-link">
          <img src={argentBankLogo} alt="" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {currentUser.id ? (
          <div>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {currentUser.firstname}
            </Link>
            <Link to="/logout" className="main-nav-item">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
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
