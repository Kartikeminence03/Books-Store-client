import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice';
import CustomInput from '../components/CustomInput';
import { BsEye, BsEyeSlash } from 'react-icons/bs'

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
    firstname: yup
  .string()
  .required("Name is Required"),
  lastname: yup
  .string()
  .required("Last name is Required"),
  mobile: yup
  .string()
  .required("Mobile number is Required"),
  password: yup.string().min(4).max(8).required("Password is Required"),
});


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      toast.success("User created success")
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "80vh" }}>
      <div className="my-5 w-50 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">SignUp</h3>
        <p className="text-center">Create your account.</p>
        <div className="error text-center">
        </div>
        <form action="" 
        onSubmit={formik.handleSubmit}
        >
          <CustomInput
            type="text"
            label="First Name"
            id="firstname"
            name="firstname"
            onChng={formik.handleChange("firstname")}
            onBlr={formik.handleChange("firstname")}
            val={formik.values.firstname}
          />
          <div className="error mt-2">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
          <CustomInput
            type="text"
            label="Last Name"
            id="lastname"
            name="lastname"
            onChng={formik.handleChange("lastname")}
            onBlr={formik.handleChange("lastname")}
            val={formik.values.lastname}
          />
          <div className="error mt-2">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
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
          <CustomInput
            type="text"
            label="Mobile Number"
            id="mobile"
            name="mobile"
            onChng={formik.handleChange("mobile")}
            onBlr={formik.handleBlur("mobile")}
            val={formik.values.mobile}
          />
          <div className="error mt-2">
            {formik.touched.mobile && formik.errors.mobile}
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
            <Link to="/" className="btn-2">
              Login
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            {isLoading===true? "Loading...":"SignUp"}
          </button>
        </form>
      </div>
    </div> 
  )
}

export default Signup;