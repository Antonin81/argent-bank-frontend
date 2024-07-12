import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginSlice } from "../../../features/login/loginSlice";
import { profileSlice } from "../../../features/profile/profileSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loginSlice.actions.logUserOut());
    dispatch(profileSlice.actions.deleteUserProfile());
    navigate("/", { replace: true });
  }, []);
}

export default Logout;
