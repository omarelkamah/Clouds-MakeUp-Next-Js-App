import React from 'react'
import Button from '../../components/ui/Button'
import SecondProduct from '../../components/product/SecondProduct'
import CheckoutSummery from '../../components/checkout/CheckoutSummery'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const { items } = useSelector(state => state.cart)

  const totalPrice = items.reduce(
    (totalPrice, product) => totalPrice + +product.price * product.qty,
    0
  )

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
    <div className='container mx-auto flex flex-col-reverse lg:flex-row gap-6 my-10 p-3'>
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
        <CheckoutSummery totalPrice={totalPrice} />
        <h3 className='font-krona text-center text-lg my-4 mt-10'>
          ORDER ITEMS
        </h3>
        {items.length === 0 && (
          <p className='font-krona text-sm mt-4'>empty items !</p>
        )}

        {items.map(product => (
          <SecondProduct
            key={product.id}
            product={product}
            name={product.name}
            image={product.image_link}
            price={product.price}
            category={product.category}
            count={product.qty}
          />
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage
