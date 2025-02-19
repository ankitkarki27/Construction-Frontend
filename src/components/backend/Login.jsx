import React, { useContext } from 'react';
  
import Footer from '../common/Footer';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';


const Login = () => {
  const {login} = useContext(AuthContext)

  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm()
    
      const onSubmit = async (data) => {
        // console.log(data)
        const res = await fetch("http://127.0.0.1:8000/api/authenticate/",{
            method:'POST',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(data)
        });

        const result = await res.json();
            
        if(result.status==false){
            toast.error(result.message);

        }else{
          const userInfo={
            id: result.id,
            token: result.token,
          }

          localStorage.setItem('userInfo',JSON.stringify(userInfo))
          login(userInfo)
          navigate('/admin/dashboard')

        }
        
      }
      
  return (
    <>
     {/* <Header /> */}
      <main className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center mb-8">
            <img src="/image.png" alt="Logo" className="h-16" />
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">
    Email
  </label>
  <input 
    {...register('email', {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@gmail\.com$/i, // Adjust pattern as needed
        message: "Please enter a valid Gmail address (e.g., hello@gmail.com)"
      }
    })}
    type="email" 
    id="email" 
    name="email" 
    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    placeholder="Enter your email"
  />
  {errors.email && (
    <div className="flex items-center mt-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 transition-opacity duration-300 ease-in-out">
      <svg 
        className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V7zm0 7a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
      </svg>
      <p className="text-sm text-red-600">{errors.email.message}</p>
    </div>
  )}
</div>


            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold">Password</label>
              <input 
                {...register('password', {
                    required: "Password is required"
                })}
                type="password" 
                id="password" 
                name="password" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your password"
              />
               {errors.password && <p className="text-red-400">{errors.password?.message}</p>}

            </div>

            <button 
  type="submit" 
  disabled={isSubmitting}
  className={`w-full py-3 font-semibold rounded-lg transition duration-300 ${
    isSubmitting
      ? 'bg-gray-800 cursor-not-allowed'
      : 'bg-gray-800 text-white hover:bg-gray-900'
  }`}
>
  {isSubmitting ? 'Logging in...' : 'Login'}
</button>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot Password?</a>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Register</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
