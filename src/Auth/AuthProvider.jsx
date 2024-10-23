import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import UseAxios from "../CustomHooks/UseAxios.jsx";

// creating context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxios();

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  // Email Authintication
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (name, photo, email) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      if (email) {
        return updateEmail(auth.currentUser, email);
      }
    });
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google Authintication
  const googleAuthintication = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Authintication
  const githubAuthintication = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  // state observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
    googleAuthintication,
    githubAuthintication,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
