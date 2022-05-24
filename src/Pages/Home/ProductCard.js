import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, price, description, img, minQuantity, availableQuantity } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (

        <div class="card w-96 bg-base-100 shadow-xl border border-white">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title text-white font-bold">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Min order quantity: {minQuantity}</p>
                <p>Stock Quantity: {availableQuantity}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToProductDetail(_id)} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;