import { createContext } from "react";
// import { onAuthStateChanged } from "@firebase/auth"
// import { auth } from "../firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { onAuth } from "../firebase/auth";

export const Holis = createContext({
    user:{},
    setUser: (useAuth) =>{}
})


// export const Holis = createContext()

// export const HolisProvider = ({children}) => {

//     const Navigate = useNavigate()

//     const basic = {
//         user:{},
//         setUser: (useAuth) =>{}
//     }

//     useEffect(() => {
//         const unsubcribe = onAuthStateChanged((user) => {
//             console.log("funciona?", user)
//             if(!user){
//                 Navigate("/")
//             }
//           });
      
//           return () => unsubcribe();
//         }, []);

// }