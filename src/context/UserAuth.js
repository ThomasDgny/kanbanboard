import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { getUserData } from "../repository/FirebaseGetUserData";

const AuthContext = createContext();


export function AuthContextProvider({ children }) {
    const [currentUserData, setCurrentUserData] = useState([])

    const auth = getAuth()

    const [user, setUser] = useState(null)

    function SignUp(email, password, userName) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                console.log(res.user)
                const ref = doc(db, 'users', res.user.uid)

                const userData = {
                    email: email,
                    username: userName,
                    uid: res.user.uid
                }

                await setDoc(ref, userData)
            })
    }

    function SignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => onAuthStateChanged(auth, (currentuser) => setUser(currentuser)))


    function LogOut() {
        return signOut(auth)
    }

    useEffect(() => { getUserData(db, user, setCurrentUserData) }, [user])

    return (
        <AuthContext.Provider value={{ SignUp, LogOut, SignIn, user, currentUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}