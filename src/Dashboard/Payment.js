import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Shareds/Loading';

const Payment = () => {
    const booking =useLoaderData();
    const navigation = useNavigation();
    const { name, resaleprice } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay ${resaleprice}</p>
            <div className='w-96 my-12'>
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