export const cart = {
  extends: 'Page',
  flow: 'y',
  background: 'gray1',
  minHeight: '100vh',

  Header: {},

  MainContent: {
    padding: 'C D',
    flow: 'x',
    gap: 'C',
    alignRoot: 'start',
    color: 'text',
    '@tabletS': { flow: 'y', padding: 'B' },

    CartSection: {
      flex: 1,
      flow: 'y',
      gap: 'B',
      padding: 'B',
      background: 'white',
      round: 'A',

      SectionHeader: {
        flow: 'y',
        gap: 'A',
        H2: { text: 'Shopping Cart', fontSize: 'A2', fontWeight: '700' },
        ColLabels: {
          flow: 'x',
          align: 'center space-between',
          padding: 'Z B',
          borderBottom: '1px solid gray2',
          Text_Product: { text: 'Product', fontSize: 'Y', color: 'secondary', flex: 1 },
          Text_Qty: { text: 'Quantity', fontSize: 'Y', color: 'secondary', width: 'F', textAlign: 'center', paddingRight: '150px' },
          Text_Price: { text: 'Price', fontSize: 'Y', color: 'secondary', width: 'F', textAlign: 'center', paddingRight: '60px' },
          Empty: { width: 'A' }
        }
      },

      ItemsList: {
        flow: 'y',
        gap: 'A',
        children: (el, s) => s.root.cartItems || [],
        childExtends: 'CartItem',
        childrenAs: 'state'
      },

      Actions: {
        flow: 'x',
        align: 'center',
        gap: 'A',
        marginTop: 'B',
        Link_Back: {
          text: 'Back',
          href: '/',
          color: 'black',
          fontSize: 'Z2',
          fontWeight: '600',
          textDecoration: 'none'
        },
        Button_Cancel: {
          text: 'Cancel Order',
          background: 'danger',
          color: 'white',
          padding: 'Z2 B',
          round: 'Z',
          border: 'none',
          fontSize: 'Z2',
          fontWeight: '600',
          cursor: 'pointer',
          ':hover': { opacity: '0.9' }
        }
      }
    },

    Sidebar: {
      width: 'G2',
      flow: 'y',
      gap: 'B',
      '@tabletS': { width: '100%' },

      CouponCode: {
        flow: 'y',
        gap: 'A',
        padding: 'B',
        background: 'white',
        round: 'A',
        H3: { text: 'Enter Coupon Code', fontSize: 'A', fontWeight: '700' },
        Input: {
          placeholder: 'Enter Your Coupon Code',
          background: '#ff0000',
          color: 'rgba(55,255,0,1)',
          padding: 'Z2 A',
          round: 'Z',
          border: '1px solid #3700ff',
          fontSize: 'Z'
        },
        Button: {
          text: 'Apply Your Coupon',
          background: 'white',
          color: 'primary',
          border: '1px solid primary',
          padding: 'Z2 A',
          round: 'Z',
          fontSize: 'Z',
          fontWeight: '600',
          cursor: 'pointer'
        }
      },

      OrderSummary: {
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
        Row_Delivery: {
          flow: 'x',
          align: 'center space-between',
          Text_L: { text: 'Delivery', color: 'secondary', fontSize: 'Z' },
          Text_V: { text: (el, s) => `$${(s.root.delivery || 0).toFixed(2)}`, fontWeight: '600', fontSize: 'Z' }
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
              const delivery = s.root.delivery || 0
              const discount = s.root.discount || 0
              return `$${(sub + tax + delivery - discount).toFixed(2)}`
            },
            fontWeight: '800', 
            fontSize: 'A2' 
          }
        }
      },

      PaymentMethod: {
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
        },
        Button: {
          text: 'Check Out',
          background: 'primary',
          color: 'white',
          padding: 'A',
          round: 'Z',
          border: 'none',
          fontSize: 'Z2',
          fontWeight: '700',
          cursor: 'pointer',
          marginTop: 'Z'
        }
      }
    }
  }
}
