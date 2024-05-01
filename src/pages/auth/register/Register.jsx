import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../store/authSlice"
import { STATUSES } from "../../../globals/misc/statuses"
import {Link, useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  const [userData, setUserData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: ""

  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(userData))
    if (status === STATUSES.SUCCESS) {
      return navigate("/login")
    }
    if (status === STATUSES.ERROR) {
      alert("Something Went Wrong, Try again")
      return;
    }

  }
  return (
    // <div className="flex items-center justify-center h-screen overflow-hidden bg-yellow-50">
    //   <div className="mt-20 bg-white w-17/12 lg:w-5/12 md:6/12 shadow-3xl ">
    //     <div className="absolute p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full left-1/2 md:p-8">
    //       <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
    //         <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    //       </svg>
    //     </div>
    //     <form className="p-3 md:p-10" onSubmit={handleSubmit}>
    //       <div className="flex items-center mb-6 text-lg md:mb-8">
    //         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
    //           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
    //         </svg>
    //         <input type="text" name="username" id="username" onChange={handleChange} className="w-full py-2 pl-12 bg-gray-200 md:py-4 focus:outline-none" placeholder="Username" />
    //       </div>
    //       <div className="flex items-center mb-6 text-lg md:mb-8">
    //         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
    //           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
    //         </svg>
    //         <input type="email" name="email" id="email" onChange={handleChange} className="w-full py-2 pl-12 bg-gray-200 md:py-4 focus:outline-none" placeholder="email" />
    //       </div>
    //       <div className="flex items-center mb-6 text-lg md:mb-8">
    //         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
    //           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
    //         </svg>
    //         <input type="number" name="phoneNumber" id="phoneNumber" onChange={handleChange} className="w-full py-2 pl-12 bg-gray-200 md:py-4 focus:outline-none" placeholder="phoneNumber" />
    //       </div>
    //       <div className="flex items-center mb-6 text-lg md:mb-8">
    //         <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
    //           <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
    //         </svg>
    //         <input type="password" name="password" id="password" onChange={handleChange} className="w-full py-2 pl-12 bg-gray-200 md:py-4 focus:outline-none" placeholder="Password" />
    //       </div>
    //       <button className="w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">Register</button>
    //     </form>
    //   </div>
    //  </div>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign up in to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
          <Link to="/login" className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Already Have an Account ?</Link>

        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="user@example.com"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label for="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="username" name="username" type="text" required="" onChange={handleChange} placeholder="@username" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
            <div className="mt-6">
              <label for="PhoneNumber" className="block text-sm font-medium leading-5 text-gray-700">Phone No.</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="phoneNumber" name="phoneNumber" type="tel" required="" onChange={handleChange} placeholder="9800000000" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
            <div className="mt-6">
              <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="password" name="password" type="password" onChange={handleChange} required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Sign in
                </button>
              </span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register