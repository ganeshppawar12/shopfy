import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users , setUsers] = useState([]);


  async function fetchAllUser(){
        try{
            const res = await fetch("https://randomuser.me/api/?results=20");
            const data = await res.json();
            setUsers(data.results);
            console.log(data.results)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchAllUser();
    },[])

  return (
    <div>


<div>
    <h1>User Details</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur, blanditiis, facere consequuntur doloremque ea delectus commodi alias explicabo excepturi eveniet veniam nostrum accusamus natus illum quia? Numquam, ducimus. Est neque consectetur nam iusto sint soluta, sit esse dolorem accusantium sed doloremque aperiam earum quam deserunt placeat eveniet eos accusamus illum magni voluptatibus asperiores aliquid perspiciatis illo in? Cum, dolor?</p>
</div>

<div>
    <div className='flex items-center gap-6' >

    
    <div>
        <input type="radio" />
        <label htmlFor="">All</label>
    </div>
    <div>
        <input type="radio" />
        <label htmlFor="">Male</label>
    </div>
    <div>
        <input type="radio" />
        <label htmlFor="">Female</label>
    </div>
    </div>
</div>

<div>
    <table>
        <thead>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
        </thead>
        <tbody>
            {
                users?.map((item)=>{
                    return(
                        <>
                        <tr>

                        
                        <td> <img src={item.picture.thumbnail} alt="" /> </td>
                        <td>{item.name.first}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Users