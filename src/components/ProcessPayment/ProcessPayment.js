import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Ie8DYB0Imgbs4wqXPiyCVFDe3UVWtmgZhvWRPQVRZJmkpgkSrmnpUFqKg9tISi3FuzEdCS8vvepzEVgdcqtwLvW00mHx1M6IV');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};
export default ProcessPayment;