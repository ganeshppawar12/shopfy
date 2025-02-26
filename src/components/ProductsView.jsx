import React from 'react'
import { useLocation } from "react-router-dom";

const ProductsView = () => {
  
    const location = useLocation();
    const product = location.state; 

    return (
        <div>
            <div className=''>
                <div className='bg-green-600' >
                    <h1>{product?.category}</h1>
                </div>
                <div className='flex gap-10' >
                    <div>
                        <img src={product?.image} alt="" />
                    </div>
                    <div>
                        <div>
                            <p>Product Name</p>
                            <p>{product?.title}</p>
                        </div>
                        <div>
                            <p>Product Price</p>
                            <p>{product?.price}</p>
                        </div>
                        <div>
                            <p>Product Description</p>
                            <p>{product?.description}</p>
                        </div>
                        {/* <div>
                            <p>Product Rating</p>
                            <p>{product?.rating}</p>
                        </div> */}
                    </div>
                </div>


            </div>
        
        </div>
    );
  
}

export default ProductsView