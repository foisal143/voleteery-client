import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase';
export const AtuhContext = createContext(null);

const Authprovaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setloader] = useState(true);
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setloader(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
      setUser(currentuser);
      setloader(false);
      const email = { email: currentuser.email };
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(email),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('accessToken', data.token);
        });
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    signInWithGoogle,
    logout,
  };
  return (
    <AtuhContext.Provider value={authInfo}>{children}</AtuhContext.Provider>
  );
};

export default Authprovaider;
