import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    // setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='sticky top-0 border-b border-gray-800 '>

    <div className='flex items-center justify-between p-2 bg-black' >
        <div>
            <h1 className='text-[#0073E6] font-semibold m-0 text-2xl ' >Shop<span className=' text-[#53A2F9] font-light' >Pick </span></h1>
        </div>
        <div style={{flex:'0.4'}}>
            <ul className='flex gap-10 font-medium text-white'  >
                <li>
                <Link to="/home">Home</Link>    

                </li>
                <li>
                <Link to="/products">Produts</Link>    

                </li>
                <li>
                <Link to="/Users">Users</Link>    

                </li>
                <li>
                <Link to="/Contact">Contact</Link>    

                </li>
                <li className=' cursor-pointer '  onClick={handleLogout}>
                  LogOut
                </li>
            </ul>
        </div>
        {/* <div>

        </div> */}
    </div>

    </div>
    
  )
}

export default Navbar