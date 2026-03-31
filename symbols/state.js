export default {
  cartItems: [
    {
      id: 0,
      name: 'Rectangle',
      description: 'A classic blue rectangle with four right angles and parallel opposite sides.',
      color: 'Blue',
      price: 23.99,
      quantity: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rectangle_example.svg'
    },
    {
      id: 1,
      name: 'Parallelogram',
      description: 'A green quadrilateral with two pairs of parallel sides.',
      color: 'Green',
      price: 13.49,
      quantity: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Simple_parallelogram.svg/960px-Simple_parallelogram.svg.png'
    },
    {
      id: 2,
      name: 'Triangle',
      description: 'A three-sided yellow polygon that forms an enclosed shape.',
      color: 'Yellow',
      price: 17.24,
      quantity: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/The_Triangle.svg/3840px-The_Triangle.svg.png'
    },
  ],
  coupons: {
    shapes: 3.99,
    ten: 10.00,
    twelve: 12.84,
  },
  paymentMethods:   {
    cash: 0.08,
    check: 0.11,
    card: 0.06,
    ebt: 0.03,
    googleWallet: 0.12,
    
  },
  discount: 0,
  shipping: 0,
  taxRate: 0,
}
