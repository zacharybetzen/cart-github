export const payment = {
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

    PaymentSection: {
      flex: 1,
      flow: 'y',
      gap: 'B',
      padding: 'B',
      background: 'white',
      round: 'A',

      SectionHeader: {
        flow: 'y',
        gap: 'A',
        H2: { text: 'Payment Information', fontSize: 'A2', fontWeight: '700' }
      },

      CreditCardForm: {
        flow: 'y',
        gap: 'A',
        H3: { text: 'Credit Card Details', fontSize: 'A', fontWeight: '600' },
        Input_Name: { tag: 'input', placeholder: 'Name on Card', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2' },
        Input_CardNumber: { tag: 'input', placeholder: 'Card Number', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2' },
        Row_ExpiryCVC: {
          flow: 'x',
          gap: 'A',
          Input_Expiry: { tag: 'input', placeholder: 'MM/YY', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2', flex: 1 },
          Input_CVC: { tag: 'input', placeholder: 'CVC / CVV', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2', flex: 1 }
        }
      },

      PaymentSelector: {
        flow: 'y',
        gap: 'A',
        marginTop: 'A',
        H3: { text: 'Select Payment Option', fontSize: 'A', fontWeight: '600' },
        Options: {
          flow: 'x',
          wrap: 'wrap',
          gap: 'A',
          children: (el, s) => {
            const methods = s.root.paymentMethods || {}
            return Object.entries(methods).map(([key, value]) => ({ label: key, value }))
          },
          childrenAs: 'state',
          childExtends: 'PaymentOption'
        }
      },

      Actions: {
        flow: 'x',
        align: 'center',
        gap: 'A',
        marginTop: 'B',
        Link_Back: {
          extends: 'Link',
          text: 'Back to Shipping',
          href: '/shipping',
          color: 'black',
          fontSize: 'Z2',
          fontWeight: '600',
          textDecoration: 'none'
        }
      }
    },

    Sidebar: {
      width: 'G2',
      flow: 'y',
      gap: 'B',
      '@tabletS': { width: '100%' },

      OrderSummary: {},

      PaymentMethod: {},

      ReviewButton: {
        extends: 'Link',
        text: 'Review Order',
        href: '/review',
        background: 'primary',
        color: 'white',
        padding: 'A',
        round: 'Z',
        border: 'none',
        fontSize: 'Z2',
        fontWeight: '700',
        cursor: 'pointer',
        marginTop: 'Z',
        textDecoration: 'none',
        textAlign: 'center',
        display: 'block'
      }
    }
  }
}
