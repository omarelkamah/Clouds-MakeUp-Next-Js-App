import React from 'react'
import Button from '../../components/Button'
import CartProduct from '../../components/CartProduct'
import CheckoutSummery from '../../components/CheckoutSummery'

const index = () => {
  const inputs = [
    {
      id: 1,
      type: 'email',
      label: 'Email',
      placeholder: 'Enter Your Email Address'
    },
    {
      id: 2,
      type: 'text',
      label: 'Full Name',
      placeholder: 'Enter Your Full Name'
    },
    {
      id: 3,
      type: 'text',
      label: 'Country',
      placeholder: 'Enter Your Country'
    },
    {
      id: 4,
      type: 'text',
      label: 'Street Address',
      placeholder: 'Enter Street Address'
    },
    { id: 5, type: 'email', label: 'City', placeholder: 'Enter Your City' },
    {
      id: 6,
      type: 'number',
      label: 'Postal Code',
      placeholder: 'Enter Your Postal Code'
    }
  ]

  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-6 my-10 p-3'>
      <form action='post' className='flex-1'>
        {inputs.map(input => (
          <div key={input.id} className='flex flex-col mb-6'>
            <label className='font-krona'>{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              className='shadow-md p-2 outline-backYellow mt-2'
              required
            />
          </div>
        ))}
        <Button title='submit' type='submit' />
      </form>
      <div>
        <CheckoutSummery />
        <h3 className='font-krona text-center text-lg my-4 mt-10'>
          ORDER ITEMS
        </h3>

        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </div>
  )
}

export default index
