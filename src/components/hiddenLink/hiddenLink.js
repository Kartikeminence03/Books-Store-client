import { useNavigate } from 'react-router-dom'

const ShowOnLogin = ({children}) => {

    const data = localStorage.getItem('user')
    // console.log(data,"==========............>>>>>>>>>>");

    if(data){
        return children
    }
    return null
}

export const ShowOnLogout = ({children}) => {
    const navigate = useNavigate();

    const data = localStorage.getItem('user')

    if(!data){
        navigate('')
        return children
    }
    return null
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
