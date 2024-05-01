import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forgotPassword, loginUser } from "../../../store/authSlice"
import { STATUSES } from "../../../globals/misc/statuses"
import { Link, useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const { status, data } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword({ email }))

  }
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/verifyotp")
    }
  }, [status])
  return (
    // <div className="flex items-center justify-center h-screen overflow-hidden bg-yellow-50">
    //   <div className="mt-20 bg-white w-17/12 lg:w-5/12 md:6/12 shadow-3xl ">
    //     <div className="absolute p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full left-1/2 md:p-8">
    //       <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
    //         <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    //       </svg>
    //     </div>
    //     <form className="p-3 md:p-10" onSubmit={handleSubmit} >
    //       <div className="flex items-center mb-6 text-lg md:mb-8">
    //         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
    //           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
    //         </svg>
    //         <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} className="w-full py-2 pl-12 bg-gray-200 md:py-4 focus:outline-none" placeholder="email" />
    //       </div>

    //       <button className="w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">Send OTP</button>
    //       <Link to="/register" style={{color : 'blue'}}>Register </Link>
    //     </form>
    //   </div>
    //  </div>

    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Did You Forget Your Password ?
        </h2>

      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Send OTP
                </button>
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm leading-5">
                <Link to="/register" className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  Create a new account or Register</Link>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword