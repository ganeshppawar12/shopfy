import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        sessionStorage.setItem("isAuthenticated", "true"); 
        onLogin(); 
    navigate("/home"); 

      } else {
        setError(true);
      }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row ">
      {/* Left Section - Login Form */}
      <div className="md:w-1/2 flex flex-col justify-center px-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h2>
        <p className="text-gray-500 mb-6">It's great to have you back!</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember me?</label>
            </div>
            <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
          </div>

          {error && <p className="text-red-500 text-sm">Invalid email or password</p>}

          <div className="flex space-x-4">
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Login</button>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="w-full border border-purple-600 text-purple-600 py-2 rounded hover:bg-purple-600 hover:text-white"
            >
              Create Account
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-gray-600">Or login with</p>
        <div className="flex justify-center space-x-4 text-purple-600">
          <a href="#" className="hover:underline text-blue-600"><FacebookIcon></FacebookIcon></a>
          <a href="#" className="hover:underline"><GoogleIcon></GoogleIcon></a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2">
        <img src="https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Background" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
