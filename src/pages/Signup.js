import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { base_url } from '../utils/baseUrl';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  mobile:'',
  password: '',
};

const Signup = () => {
  const [state, setState] = useState(initialState);

  const { firstname, lastname, email, mobile, password } = state;

  const navigate = useNavigate();

  const addUser = async (data)=>{
    const response = await axios.post(`${base_url}user/register`, data);
    if(response.status === 200){
      toast.success(response.data)
    }
  }

  const handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]:value,})
  };

  // useEffect(()=>{
  //   handleSubmit()
  // },[state])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstname ||!email ){
      toast.error("Please provide value into each field")
    } else{
      addUser(state)
      // navigate("/login")
    }
    };

    console.log(state)

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "80vh" }}>
      <div className="my-5 w-50 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">SignUp</h3>
        <p className="text-center">Create your account.</p>
        <div className="error text-center">
          {/* {message.message == "Rejected" ? "You are not an Admin" : ""} */}
        </div>
        <form action="" 
        onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={handleChange}
          />
          <input
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile No."
            value={mobile}
            onChange={handleChange}
          />
          <div className="error mt-2">
            {/* {formik.touched.email && formik.errors.email} */}
          </div>
          <input
            type="password"
            label="Password"
            id="pass"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="error mt-2">
            {/* {formik.touched.password && formik.errors.password} */}
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div> 
  )
}

export default Signup;
