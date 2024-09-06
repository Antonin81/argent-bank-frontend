import { useEffect } from "react";
import { loginSlice } from "../../../features/login/loginSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../common/utils/apiCalls/getUserProfile";
import { profileSlice } from "../../../features/profile/profileSlice";

function Layout({ children }) {
  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    async function tokenfromLocalStorage() {
      if (!token && localStorage.getItem("token")) {
        try {
          const userProfile = await getUserProfile(
            localStorage.getItem("token")
          );
          dispatch(loginSlice.actions.logUserIn(localStorage.getItem("token")));
          dispatch(profileSlice.actions.storeUserProfile(userProfile));
        } catch (error) {
          console.error("token en localstorage invalide ", error);
        }
      }
    }
    tokenfromLocalStorage();
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
