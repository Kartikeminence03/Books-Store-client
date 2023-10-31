import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// const data = localStorage.getItem('user')


const ShowOnLogin = ({children}) => {
    // console.log(data,"==========............>>>>>>>>>>");
    const data = localStorage.getItem('user')
    // useEffect(()=>{
        if(data){
            return children
        }
        return null
    // },[])
}

export const ShowOnLogout = ({children}) => {
    const data = localStorage.getItem('user')
    // const navigate = useNavigate();

    useEffect(()=>{
        if(!data){
            // navigate('')
            return null
        }
        return children
    },[])
}

export default ShowOnLogin



// import React from "react";
// import { Route, redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../features/auth/authSlice";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <redirect to="/" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;

// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   if (!isLoggedIn) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
