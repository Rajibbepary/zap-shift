
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {  useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const CheckoutForm = () => {

  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [success, setSuccess] = useState('');
  const stripe = useStripe();
  const elements = useElements();
 
  const {user} = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('payment error', error);
      setError(error.message);
      setSuccess('');
    } else {
      console.log('payment method', paymentMethod);
      setError('');
      setSuccess('✅ Payment method created successfully!');
    }


  //confirm payment
  const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment({
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.displayName || 'anonymous'
      }
    }
  })
  if(confirmError){
    console.log(confirmError)
  }else{
    console.log('payment intent', paymentIntent)
    if(paymentIntent.status === 'succeeded')
      console.log('transaction id', paymentIntent.id)
    setTransactionId(paymentIntent.id)

   
  }
  };

  return (
    <div className="flex items-center justify-center min-h-screen rounded-sm
                    bg-gradient-to-br from-indigo-200 to-indigo-100 
                    dark:from-gray-900 dark:to-gray-600 px-4 transition-colors">
      <div
        className="w-full max-w-md bg-white dark:bg-gray-900 
                   shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
          Secure Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Input */}
          <div
            whileFocus={{ scale: 1.02 }}
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
         
            {error && (
              <p
                key="error"
                className="text-red-600 dark:text-red-400 text-sm text-center font-medium"
              >
                {error}
              </p>
            )}
            {success && (
              <p
                key="success"
                className="text-green-600 dark:text-green-400 text-sm text-center font-medium"
              >
                {success}
              </p>
            )}
          {transactionId && <p className='text-green-500'>Your transaction id: {transactionId}</p>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;