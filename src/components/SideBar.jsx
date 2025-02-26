import React, { useEffect, useState } from 'react'

const SideBar = ({getCategory}) => {

        const [category , setCategory ] = useState([]);

        const fetchData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                const data = await res.json();
                setCategory(()=>data);
            } catch (err) {
                console.log(err);
            }
        };
    
        useEffect(() => {
            fetchData();
            console.log(category);
        }, [setCategory]); 

  return (
    <div className=' bg-black  text-white ' >

<div className='flex flex-col gap-3 p-2'  >
 {
    category.map((item)=>{
        return(
<>
            <div className=' cursor-pointer ' onClick={()=>getCategory(item)} key={item}> {item} </div>

</>
        )
    })
 }
</div>

    </div>
  )
}

export default SideBar