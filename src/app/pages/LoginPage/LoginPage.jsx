import { useSelector, useDispatch } from "react-redux";
import { loginSlice } from "../../../features/login/loginSlice";
import { login } from "../../../common/utils/helpers/login";
import { getUserProfile } from "../../../common/utils/helpers/getUserProfile";
import { profileSlice } from "../../../features/profile/profileSlice";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenToSend = await login(
        e.currentTarget.username.value,
        e.currentTarget.password.value
      );
      dispatch(loginSlice.actions.logUserIn(tokenToSend));
      const userProfile = await getUserProfile(tokenToSend);
      dispatch(profileSlice.actions.storeUserProfile(userProfile));
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log("Nan zzzai pa");
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
