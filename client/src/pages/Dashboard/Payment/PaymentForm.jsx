import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence,motion } from 'framer-motion';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { parcelId } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [error, setError] = useState('');
     // eslint-disable-next-line no-unused-vars
     const [success, setSuccess] = useState('');

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    if (isPending) {
        return '...loading'
    }

    console.log(parcelInfo)
    const amount = parcelInfo.cost;
    //const amountInCents = amount * 100;
    const amountInCents = parseFloat(amount) * 100;

    console.log(amountInCents);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        // step- 1: validate the card
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
        }
        else {
            setError('');
            console.log('payment method', paymentMethod);

            // step-2: create payment intent
            const res = await axiosSecure.post('/create-payment-intent', {
                amountInCents,
                parcelId
            })

            const clientSecret = res.data.clientSecret;

            // step-3: confirm payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            });

            if (result.error) {
                setError(result.error.message);
            } else {
                setError('');
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Payment succeeded!');
                    const transactionId = result.paymentIntent.id;
                    // step-4 mark parcel paid also create payment history
                    const paymentData = {
                        parcelId,
                        email: user.email,
                        amount,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }

                    const paymentRes = await axiosSecure.post('/payments', paymentData);
                    if (paymentRes.data.insertedId) {

                        // ✅ Show SweetAlert with transaction ID
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Parcels',
                        });

                        // ✅ Redirect to /myParcels
                        navigate('/dashboard/myParcels');

                    }
                }
            }
        }





    }

    return (
    
    <div className="flex items-center justify-center w-full rounded-sm 
                    dark:from-gray-900 dark:to-gray-600 px-4 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 
                   shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
          Secure Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Input */}
          <div
           
            className="p-3 border border-gray-300 dark:border-gray-600 
                       rounded-lg focus-within:ring-2 focus-within:ring-indigo-400"
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#9ca3af', // gray-800
                    '::placeholder': {
                      color: '#9ca3af', // gray-400
                    },
                  },
                  invalid: {
                    color: '#ef4444', // red-500
                  },
                },
              }}
            />
          </div>

          {/* Pay Button */}
          <button
            
            type="submit"
            disabled={!stripe}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 
                       transition text-white font-medium shadow-md"
          >
            Pay Now
          </button>

          {/* Animated Messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-600 dark:text-red-400 text-sm text-center font-medium"
              >
                {error}
              </motion.p>
            )}
            {success && (
              <p
                key="success"

                className="text-green-600 dark:text-green-400 text-sm text-center font-medium"
              >
                {success}
              </p>
            )}
          </AnimatePresence>
          {/* {transactionId && <p className='text-green-500'>Your transaction id: {transactionId}</p>} */}
        </form>
      </div>
    </div>
    );
};


export default PaymentForm;