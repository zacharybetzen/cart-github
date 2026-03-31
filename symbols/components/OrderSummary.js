export const OrderSummary = {
  flow: 'y',
  gap: 'A',
  padding: 'B',
  background: 'white',
  round: 'A',
  H3: { text: 'Order Summary', fontSize: 'A', fontWeight: '700' },
  Row_Subtotal: {
    flow: 'x',
    align: 'center space-between',
    Text_L: { text: 'Subtotal', color: 'secondary', fontSize: 'Z' },
    Text_V: { text: (el, s) => `$${el.call('calculateSubtotal').toFixed(2)}`, fontWeight: '600', fontSize: 'Z' }
  },
  Row_Discount: {
    flow: 'x',
    align: 'center space-between',
    Text_L: { text: 'Discount', color: 'secondary', fontSize: 'Z' },
    Text_V: { text: (el, s) => `$${(s.root.discount || 0).toFixed(2)}`, fontWeight: '600', fontSize: 'Z' }
  },
  Row_Shipping: {
    flow: 'x',
    align: 'center space-between',
    Text_L: { text: 'Shipping', color: 'secondary', fontSize: 'Z' },
    Text_V: { text: (el, s) => `$${(s.root.shipping || 0).toFixed(2)}`, fontWeight: '600', fontSize: 'Z' }
  },
  Row_Tax: {
    flow: 'x',
    align: 'center space-between',
    Text_L: { text: 'Tax', color: 'secondary', fontSize: 'Z' },
    Text_V: { text: (el, s) => `$${(el.call('calculateSubtotal') * (s.root.taxRate || 0)).toFixed(2)}`, fontWeight: '600', fontSize: 'Z' }
  },
  Total: {
    flow: 'x',
    align: 'center space-between',
    marginTop: 'Z',
    Text_L: { text: 'Total', fontWeight: '700', fontSize: 'A' },
    Text_V: { 
      text: (el, s) => {
        const sub = el.call('calculateSubtotal')
        const tax = sub * (s.root.taxRate || 0)
        const shipping = s.root.shipping || 0
        const discount = s.root.discount || 0
        return `$${(sub + tax + shipping - discount).toFixed(2)}`
      },
      fontWeight: '800', 
      fontSize: 'A2' 
    }
  }
}
