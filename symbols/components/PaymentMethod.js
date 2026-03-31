export const PaymentMethod = {
  flow: 'y',
  gap: 'A',
  padding: 'B',
  background: 'white',
  round: 'A',
  H3: { text: 'Payment Method', fontSize: 'A', fontWeight: '700' },
  Icons: {
    flow: 'x',
    gap: 'Z',
    align: 'center space-between',
    padding: 'Z 0',
    borderTop: '1px solid gray2',
    Paypal: { text: 'PayPal', background: 'gray1', padding: 'Z', round: 'Z', flex: 1, textAlign: 'center' },
    Stripe: { text: 'Visa', background: 'gray1', padding: 'Z', round: 'Z', flex: 1, textAlign: 'center' },
    Mastercard: { text: 'Mastercard', background: 'gray1', padding: 'Z', round: 'Z', flex: 1, textAlign: 'center' },
    Bitcoin: { text: 'EBT', background: 'gray1', padding: 'Z', round: 'Z', flex: 1, textAlign: 'center' }
  }
}
