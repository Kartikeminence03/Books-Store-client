import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authServices";
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

  const { user, isError, isSuccess, isLoading } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col justify-center items-center">
  <div className="bg-white w-full md:w-1/3 lg:w-1/4 rounded-lg p-4">
    <h3 className="text-2xl font-semibold text-center mb-4">Login</h3>
    <p className="text-center text-gray-700 mb-4">Login to your account to continue.</p>
    <div className="error text-red-500 mb-4"></div>
    <form onSubmit={formik.handleSubmit}>
      <CustomInput
        type="text"
        label="Email Address"
        id="email"
        name="email"
        onChng={formik.handleChange("email")}
        onBlr={formik.handleBlur("email")}
        val={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div className="error text-red-500">{formik.errors.email}</div>
      )}
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          placeholder="Password"
          id="pass"
          className="form-control pr-10"
          name="password"
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
        />
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <BsEye size={25} /> : <BsEyeSlash size={25} />}
        </button>
      </div>
      {formik.touched.password && formik.errors.password && (
        <div className="error text-red-500">{formik.errors.password}</div>
      )}
      <div className="mt-4 text-right">
        <Link to="/signup" className="text-blue-600 hover:underline mr-4">
          Sign Up
        </Link>
      </div>
      <button
        className="bg-yellow-300 py-3 text-white font-semibold w-full mt-4 rounded-full hover:bg-yellow-400"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;
