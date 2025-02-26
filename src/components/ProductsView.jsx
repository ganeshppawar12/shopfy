import React from 'react';
import { useLocation } from "react-router-dom";

const ProductsView = () => {
    const location = useLocation();
    const product = location.state;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border">
            {/* Category Header */}
            <div className="bg-green-600 text-white text-center py-3 rounded-t-lg text-xl font-semibold">
                {product?.category} Category
            </div>

            {/* Product Display Section */}
            <div className="flex gap-6 p-6">
                {/* Product Image */}
                <div className="w-1/3 flex items-center">
                    <img src={product?.image} alt="Product" className="rounded-lg shadow-lg w-full" />
                </div>

                {/* Product Details */}
                <div className="w-2/3">
                    <div className="mb-4">
                        <p className="font-semibold">Product Name</p>
                        <p className="text-gray-700">{product?.title}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Product Price</p>
                        <p className="text-gray-700">${product?.price}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Product Description</p>
                        <p className="text-gray-700 text-sm">{product?.description}</p>
                    </div>
                    {/* <div>
                        <p className="font-semibold">Product Rating</p>
                        <p className="text-gray-700">{product?.rating || "N/A"}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductsView;
