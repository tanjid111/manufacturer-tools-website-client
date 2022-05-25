import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId)
    const { name, price, description, img, minQuantity, availableQuantity } = product;
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)


    const handleOrder = (e) => {
        const orderQuantity = parseInt(e.target.value);
        console.log(orderQuantity);
        if (orderQuantity < minQuantity) {
            console.log(orderQuantity);
            // console.log(minQuantity);
            setError('Ordered Quantity is less than minimum quantity')
            setDisabled(true)

        }
        else if (orderQuantity > availableQuantity) {
            setError('Ordered Quantity is more than available quantity in stock')
            setDisabled(true)
        }
        else if (orderQuantity < availableQuantity || orderQuantity > minQuantity) {
            setError('')
            setDisabled(false)
        }
    }

    const handlePurchase = event => {
        event.preventDefault();

        const purchase = {
            product: name,
            price,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.address.value,
            address: event.target.phone.value,
            orderQuantity: event.target.orderQuantity.value
        }
        console.log(purchase);


    }
    return (
        <div>
            <h2>Product Detail</h2>
            <div class="card card-compact border border-white lg:max-w-lg bg-base-100 shadow-xl mx-auto my-10">
                <figure><img src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Minimum order quantity: {minQuantity}</p>
                    <p>Stock Available: {availableQuantity}</p>
                </div>
            </div>

            <form onSubmit={handlePurchase} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    Order Quantity
                </label>
                <p className='text-red' style={{ color: 'red' }}> {error}</p>

                <input type="number" name='orderQuantity' defaultValue={minQuantity} onChange={handleOrder} placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" required />
                <input type="submit" disabled={disabled} value="Purchase" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;