import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';


const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId)
    const { name, price, description, img, minQuantity, availableQuantity } = product;
    const [error, setError] = useState('')
    const [totalPrice, setPrice] = useState(null);
    const [disabled, setDisabled] = useState(false)


    const handleOrder = (event) => {
        const orderQuantity = parseInt(event.target.value);
        console.log(orderQuantity);
        if (orderQuantity < minQuantity) {
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
        const orderQuantity = event.target.orderQuantity.value;
        const totalPrice = orderQuantity * price

        setPrice(totalPrice);

        const purchase = {
            product: name,
            price,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            orderQuantity,
            totalPrice,
            stat: 'pending'
        }
        console.log(purchase);


        let newAvailableQuantity = parseInt(availableQuantity) - parseInt(orderQuantity);
        const newProduct = { ...product, availableQuantity: newAvailableQuantity }
        setProduct(newProduct);

        //Posting the data to the database with a new collection
        fetch('https://serene-lake-48668.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        //Update Available Quantity in the Database after purchasing product
        fetch(`https://serene-lake-48668.herokuapp.com/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Purchase confirmed')
            })
    }
    return (
        <div>
            <h2>Product Detail</h2>
            <div className="card card-compact border border-white lg:max-w-lg bg-base-100 shadow-xl mx-auto my-10">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
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
                <p className='text-red-500'> {error}</p>
                <input type="number" name='orderQuantity' defaultValue={minQuantity} onChange={handleOrder} placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" required />
                <p className='text-blue-500'>Total Price: ${totalPrice}</p>
                <input type="submit" disabled={disabled} value="Purchase" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div >
    );
};

export default Purchase;