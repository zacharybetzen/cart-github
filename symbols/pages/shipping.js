export const shipping = {
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

    ShippingSection: {
      flex: 1,
      flow: 'y',
      gap: 'B',
      padding: 'B',
      background: 'white',
      round: 'A',

      SectionHeader: {
        flow: 'y',
        gap: 'A',
        H2: { text: 'Shipping Information', fontSize: 'A2', fontWeight: '700' }
      },

      AddressForm: {
        flow: 'y',
        gap: 'A',
        H3: { text: 'Shipping Address', fontSize: 'A', fontWeight: '600' },
        Input_Name: { placeholder: 'Full Name', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2' },
        Input_Address: { placeholder: 'Street Address', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2' },
        Row_CityState: {
          flow: 'x',
          gap: 'A',
          Input_City: { placeholder: 'City', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2', flex: 1 },
          Input_State: { placeholder: 'State', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2', flex: 1 },
          Input_Zip: { placeholder: 'ZIP Code', padding: 'Z2 A', background: 'gray1', round: 'Z', border: '1px solid gray2', flex: 1 }
        }
      },

      ShippingMethod: {
        flow: 'y',
        gap: 'A',
        marginTop: 'B',
        H3: { text: 'Shipping Method', fontSize: 'A', fontWeight: '600' },
        Method_Standard: {
          flow: 'x',
          align: 'center space-between',
          padding: 'Z2 A',
          background: 'gray1',
          round: 'Z',
          border: (el, s) => s.root.shipping === 3.29 ? '2px solid primary' : '1px solid gray2',
          cursor: 'pointer',
          on: { click: (ev, el, s) => s.root.update({ shipping: 3.29 }) },
          Text_Label: { text: 'Standard Delivery (3-5 Business Days)', fontWeight: '500' },
          Text_Price: { text: '$3.29', fontWeight: '600' }
        },
        Method_Express: {
          flow: 'x',
          align: 'center space-between',
          padding: 'Z2 A',
          background: 'gray1',
          round: 'Z',
          border: (el, s) => s.root.shipping === 12.84 ? '2px solid primary' : '1px solid gray2',
          cursor: 'pointer',
          on: { click: (ev, el, s) => s.root.update({ shipping: 12.84 }) },
          Text_Label: { text: 'Express Delivery (1-2 Business Days)', fontWeight: '500' },
          Text_Price: { text: '$12.84', fontWeight: '600' }
        },
        Method_Overnight: {
          flow: 'x',
          align: 'center space-between',
          padding: 'Z2 A',
          background: 'gray1',
          round: 'Z',
          border: (el, s) => s.root.shipping === 23.37 ? '2px solid primary' : '1px solid gray2',
          cursor: 'pointer',
          on: { click: (ev, el, s) => s.root.update({ shipping: 23.37 }) },
          Text_Label: { text: 'Overnight Delivery (Tomorrow before 11:00 am)', fontWeight: '500' },
          Text_Price: { text: '$23.37', fontWeight: '600' }
        }
      },

      Actions: {
        flow: 'x',
        align: 'center',
        gap: 'A',
        marginTop: 'B',
        Link_Back: {
          text: 'Back to Cart',
          href: '/',
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

      PaymentButton: {
        Button: {
          text: 'Continue to Payment',
          href: '/payment',
          background: 'primary',
          color: 'white',
          padding: 'A',
          round: 'Z',
          border: 'none',
          fontSize: 'Z2',
          fontWeight: '700',
          cursor: 'pointer',
          marginTop: 'Z',
          tag: 'a',
          textDecoration: 'none',
          textAlign: 'center',
          display: 'block'
        }
      }
    }
  }
}
