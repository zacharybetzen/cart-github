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
          Text_Qty: { text: 'Quantity', fontSize: 'Y', color: 'secondary', width: 'F', textAlign: 'center', paddingRight: 'F' },
          Text_Price: { text: 'Price', fontSize: 'Y', color: 'secondary', width: 'F', textAlign: 'center', paddingRight: 'D' },
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
          extends: 'Link',
          text: 'Back',
          href: '/',
          color: 'black',
          fontSize: 'Z2',
          fontWeight: '600',
          textDecoration: 'none'
        },
        Button_Cancel: {
          extends: 'Button',
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
          tag: 'input',
          placeholder: 'Enter Your Coupon Code',
          background: 'gray1',
          color: 'text',
          padding: 'Z2 A',
          round: 'Z',
          border: '1px solid gray2',
          fontSize: 'Z',
          onInput: (ev, el, s) => s.update({ inputValue: ev.target.value })
        },
        Button: {
          extends: 'Button',
          text: 'Apply Your Coupon',
          background: 'white',
          color: 'primary',
          border: '1px solid primary',
          padding: 'Z2 A',
          round: 'Z',
          fontSize: 'Z',
          fontWeight: '600',
          cursor: 'pointer',
          onClick: (ev, el, s) => {
            const code = s.inputValue
            if (code && s.root.coupons && s.root.coupons[code] !== undefined) {
              s.root.update({ discount: s.root.coupons[code] })
            }
          }
        }
      },

      OrderSummary: {},

      PaymentMethod: {},

      CheckoutButton: {
        extends: 'Link',
        text: 'Check Out',
        href: '/shipping',
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
        display: 'block',
        textAlign: 'center'
      }
    }
  }
}
