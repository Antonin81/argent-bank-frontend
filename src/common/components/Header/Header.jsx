import argentBankLogo from "../../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={argentBankLogo} alt="" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Header;
