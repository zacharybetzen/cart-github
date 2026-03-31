import { cart } from './cart.js'
import { shipping } from './shipping.js'
import { payment } from './payment.js'

export default {
  '/': cart,
  '/shipping': shipping,
  '/payment': payment
}
