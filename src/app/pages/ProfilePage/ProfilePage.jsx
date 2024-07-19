import { Navigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { formEditProfileSlice } from "../../../features/formEditProfile/formEditProfileSlice";
import { profileSlice } from "../../../features/profile/profileSlice";
import { putUserProfile } from "../../../common/utils/apiCalls/putUserProfile";

function ProfilePage() {
  const { id, firstname, lastname } = useSelector((state) => state.currentUser);
  const isFormOpened = useSelector((state) => state.formEditProfileState);
  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  function openForm(e) {
    dispatch(formEditProfileSlice.actions.toggleFormEditProfile(true));
  }

  function closeForm(e) {
    e.preventDefault();
    dispatch(formEditProfileSlice.actions.toggleFormEditProfile(false));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const firstname = e.currentTarget.firstname.value;
    const lastname = e.currentTarget.lastname.value;
    putUserProfile(token, firstname, lastname);
    dispatch(
      profileSlice.actions.editUser({
        firstname: firstname,
        lastname: lastname,
      })
    );
    closeForm(e);
  }

  return (
    <>
      {id ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstname} {lastname}!
            </h1>
            {isFormOpened ? (
              <form onSubmit={handleSubmit}>
                <div className="update-name-form update-name-form-inputs">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder={firstname}
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder={lastname}
                  />
                </div>
                <div className="update-name-form update-name-form-buttons">
                  <button className="edit-button">Save</button>
                  <button onClick={closeForm} className="edit-button">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button onClick={openForm} className="edit-button">
                Edit Name
              </button>
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          {accounts.map((account) => (
            <Account data={account} key={account.title} />
          ))}
        </main>
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </>
  );
}

export default ProfilePage;
