import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  
  /*----------------- const variables for easier access ----------------*/
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  /*----------------- Fetch user name from Firestore ----------------*/
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  /*----------------- Check if user is logged in ----------------*/
  useEffect(() => {
    if (loading) return;
    console.log(user === undefined);
    console.log(user === null);
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  
  /*----------------- Return function ----------------*/
  return (
    
    <div className="dashboard">
      {/* ------------------------ Dashboard ------------------------ */}
       <div className="dashboard__container">
          <h1 className="h1">User Page</h1>
          <h4 className="h4">Logged in as:
          <div className="userName">{name}</div>
          </h4>
          <h4 className="h4">Email: 
              <div className="userEmail">{user?.email}</div>
          </h4>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
         <button className="dashboard__btn">
          <a href="/home" className="backButton">
            Go Home
          </a>
         </button>
        </div>
    </div>
  );
}

export default Dashboard;

// import {useDrivePicker} from "react-google-drive-picker";

/*---------------------- Button for Open Picker ------------------*/
{/* <button onClick={() => handleOpenPicker()}>Open Picker</button> */}

/*---------------------- Open Picker function ------------------------*/

// const [openPicker, data, authResponse] = useDrivePicker()

// const handleOpenPicker = () => {
  //   openPicker({
    //     clientId: "369940692615-5frbkt3fbujbdjv8ttjbf8b7l4rv4o9d.apps.googleusercontent.com",
    //     developerKey: "AIzaSyDo1rVdWObbknK8_Sb3CoGA_I3Bu53Dprc",
//     viewId: "DOCS",
//     token:  "ya29.a0AeTM1ie90coDrb73QR7WHiDRkeeAXUd6lmxejFCRJxjxwyDHMi4TzMZqP" + 
//             "_GAJKXqwydzzGog5KkuRxiUqe5VKWW4GzOVIjEqB5dY8gcv-PFTwwoh9Zip3xzMyT" + 
//             "Fa2fYax2YdcmuBdnIKK5p33Oul8z6vt4v4aCgYKAfkSARMSFQHWtWOmIgUqonT99cX6L7wRgAmmNQ0163",
//     showUploadView: true,
//     showUploadFolders: true,
//     supportDrives: true,
//     multiselect: true,
//   })
// }

// useEffect(() => {
//   if (data) {
//     data.docs.map((i) => console.log(i))
//   }
// },[data])