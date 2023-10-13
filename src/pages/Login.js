import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { BsEye, BsEyeSlash } from 'react-icons/bs'

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" 
        onSubmit={formik.handleSubmit}
        >
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <input
            type={visible?"text":"password"}
            placeholder="Password"
            id="pass"
            className={`form-control`}
            name="password"
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          {visible?(
            <BsEye
            size={25}
            onClick={()=>setVisible(false)}
            />
            ):(<BsEyeSlash
              size={25}
            onClick={()=> setVisible(true)}
          />)}
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
          <Link to="/signup" className="btn-2">
              SignUp
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            {isLoading=== true? "Loading...":"Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
