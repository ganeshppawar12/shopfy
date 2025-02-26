import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=''>

    <div className='flex items-center justify-between p-2 ' >
        <div>
            <h1 className=' m-0 font-light' >Shop<span className=' text-gray-600 ' >Pick </span></h1>
        </div>
        <div style={{flex:'0.4'}}>
            <ul className='flex gap-10 font-medium'  >
                <li>
                <Link to="/">Home</Link>    

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
            </ul>
        </div>
        {/* <div>

        </div> */}
    </div>

    </div>
    
  )
}

export default Navbar