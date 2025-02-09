import React from 'react';
// import Header from '../common/Header';   
import Footer from '../common/Footer';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'; 
//const { register, handleSubmit, formState: { errors,  } } = useForm();

const Login = () => {
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

        }
        // console.log(result);

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
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">Email</label>
              <input 
                {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@gmail+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address (e.g., hello@gmail.com)"'
                    }
                  })}

                type="email" 
                id="email" 
                name="email" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email"
                />

                {errors.email && <p className="text-red-400">{errors.email?.message}</p>}

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
