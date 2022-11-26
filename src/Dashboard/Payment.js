import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Shareds/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking =useLoaderData();
    const navigation = useNavigation();
    const { productsname, resaleprice } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-4">Payment For {productsname}</h3>
            <p className="text-xl">Your amount ${resaleprice}</p>
            <div className='w-96 my-10 border p-9 shadow-md'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;