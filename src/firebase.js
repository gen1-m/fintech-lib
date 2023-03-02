// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    // GoogleAuthProvider, 
    getAuth, 
    // signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut, 
} from "firebase/auth";
import {
    getFirestore,
    // query,
    // getDocs,
    collection,
    // where,
    addDoc,
} from "firebase/firestore"
// import {
//     getStorage,
//     ref,
//     uploadBytesResumable,
//     getDownloadURL,
// } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDo1rVdWObbknK8_Sb3CoGA_I3Bu53Dprc",
    authDomain: "fintech-lib.firebaseapp.com",
    databaseURL: "https://fintech-lib-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fintech-lib",
    storageBucket: "fintech-lib.appspot.com",
    messagingSenderId: "369940692615",
    appId: "1:369940692615:web:e9dd2eb655408789264222"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


/* -------------- Logging in with an email and password ----------- */

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }   catch (eRrOr) {
            console.error(eRrOr);
            alert(eRrOr.message);
        }
};

/* -------- Registering with an email and password --------- */

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
          uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    }   catch (eRrOr) {
            console.error(eRrOr);
            alert(eRrOr.message);
        }
    };

    /* ------ Sending an email for the forgotten passwords" ----- */
    const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    }   catch (eRrOr) {
        console.error(eRrOr);
        alert(eRrOr.message);
        }
    };

    /* ------ Logging the user out ----- */
    const logout = () => {
        signOut(auth);
    };

    
    export {
        auth,
        db,
        // signInWithGoogle,
        signInWithEmailAndPassword,
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        sendPasswordReset,
        sendPasswordResetEmail,
        logout,
};


/* -------------- GoogleAuthProvider ------------- */

// const googleProvider = new GoogleAuthProvider();

/* ----------- Signing in with a Google Account -------- */

// const signInWithGoogle = async () => {
//     try {
    //         const res = await signInWithPopup(auth, googleProvider);
    //         const user = res.user;
    //         const q = query(collection(db, "users"), where("uid", "==", user.uid));
    //         const docs = await getDocs(q);
    //         if (docs.docs.length === 0) {
//             await addDoc(collection(db, "users"), {
//                 email: user.email,
//                 authProvider: "google",
//                 name: user.displayName,
//                 uid: user.uid,
//             });
//         }
//     }   catch (eRrOr) {
    //             console.error(eRrOr);
    //             alert(eRrOr.message);
    //         }
    
    // };
    // /*------------------- Registering a book  ----------------------- */
    // const registerBook = async (book) => {
    //     try {
    //         const storage = getStorage();
    //         const storageRef = ref(storage, `books/${book.name}`);
    //         const uploadTask = uploadBytesResumable(storageRef, book);
    //         uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log(`Upload is ${progress}% done`);
    //                 switch (snapshot.state) {
    //                     case "paused":
    //                         console.log("Upload is paused");
    //                         break;
    //                     case "running":
    //                         console.log("Upload is running");
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             },
    //             (error) => {
    //                 console.error(error);
    //             },
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                     console.log("File available at", downloadURL);
    //                     addBook(downloadURL);
    //                 });
    //             }
    //         );
    //     }   catch (eRrOr) {
    //             console.error(eRrOr);
    //             alert(eRrOr.message);
    //         }
    // };
    
    // /* ------------------ Adding a book to the database ----------------- */
    
    // const addBook = async (downloadURL) => {
    //     try {
    //         const user = auth.currentUser;
    //         const q = query(collection(db, "users"), where("uid", "==", user.uid));
    //         const docs = await getDocs(q);
    //         const doc = docs.docs[0];
    //         const data = doc.data();
    //         const books = data.books || [];
    //         books.push(downloadURL);
    //         await doc.ref.update({ books });
    //     }   catch (eRrOr) {
    //             console.error(eRrOr);
    //             alert(eRrOr.message);
    //         }
    // };