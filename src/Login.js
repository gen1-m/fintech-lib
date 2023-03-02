import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);  
  
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);
      
      return (
        <div className="login">

      <div className="login__container">
        <h2 className="h2">Welcome To FinTech Library!</h2>
        <p>*Please enter your credentials below :</p>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
          >
          Login
        </button>
        <div>
          <Link className="link__pass" to="/reset">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*--------------- The function for using Google Drive picker -------------*/
// import useDrivePicker from "react-google-drive-picker/dist";

/*--------------- Login with google button ----------------*/
// <button className="login__btn login__google" onClick={signInWithGoogle}>
//   Login with Google
// </button>

/*---------- Link to the old Register.js page -----------*/

// <div>
//   Don't have an account? <Link to="/register">Register</Link> now.
// </div>

/*--------- Google Drive Picker function --------------*/

// const [openPicker, data, authResponse] = useDrivePicker()

// const handleOpenPicker = () => {
//     openPicker({
//         clientId: "369940692615-5frbkt3fbujbdjv8ttjbf8b7l4rv4o9d.apps.googleusercontent.com",
//         developerKey: "AIzaSyDo1rVdWObbknK8_Sb3CoGA_I3Bu53Dprc",
//         viewId: "DOCS",
//         showUploadView: true,
//         showUploadFolders: true,
//     supportDrives: true,
//     multiselect: true,
//   })
// }

// useEffect(() => {
//     if (data) {
//         data.docs.map((i) => console.log(i))
//       }
//     },[data])

/*----------- The button to access Google Drive Picker ----------*/

{/* <button onClick={() => handleOpenPicker()}>Open Picker</button> */}