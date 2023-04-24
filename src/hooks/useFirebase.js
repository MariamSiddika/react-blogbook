import { useState } from "react";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    // GithubAuthProvider,
    // TwitterAuthProvider,
    // FacebookAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import initializeConfigue from "../Firebase/Firebase.init";

initializeConfigue();
const useFirebase = (location) => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    

    const signUpWithEmailAndPassword = (email, password,location) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmail = (email, password, location) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setLoading(false)
                if (location?.state?.from) {
                    return navigate(location?.state?.from);
                } else {
                    
                    return navigate("/home");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signInWithGoogle = (location) => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false)
                if (location?.state?.from) {
                    return navigate(location?.state?.from);
                } else {
                   
                    return navigate("/home");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const signInWithGithub = (location) => {
    //     return signInWithPopup(auth, githubProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             setLoading(false)
    //             if (location?.state?.from) {
    //                 return navigate(location?.state?.from);
    //             } else {
                    
    //                 return navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const signInWithTwitter = (location) => {
    //     return signInWithPopup(auth, twitterProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             setLoading(false)
    //             if (location?.state?.from) {
    //                 return navigate(location?.state?.from);
    //             } else {
                    
    //                 return navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const signInWithFacebook = (location) => {
    //     return signInWithPopup(auth, facebookProvider)
    //     .then((result) => {
    //         setUser(result.user);
    //         setLoading(false)
    //         if (location?.state?.from) {
    //             return navigate(location?.state?.from);
    //         } else {
                
    //             return navigate("/home");
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    const logOut = () => {
        return signOut(auth);
    };

    // update user

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    };

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            
            setLoading(true)
            if (user) {
                setUser(user);
                setLoading(false);
                // console.log(user);
                
                
            } else {
                setUser({});
                setLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth]);

    // console.log(user);

    return {
        signUpWithEmailAndPassword,
        signInWithEmail,
        signInWithGoogle,
        // signInWithGithub,
        // signInWithTwitter,
        // signInWithFacebook,
        logOut,
        updateName,
        user,
        setUser,
        dataLoading: loading,
        setLoading,
        error,
        setError,
    };
};

export default useFirebase;