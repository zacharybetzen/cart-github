export const CartItem = {
  flow: 'x',
  align: 'center space-between',
  padding: 'A B',
  round: 'A',
  border: '1px solid gray2',
  background: 'gray1',

  ProductInfo: {
    flow: 'x',
    gap: 'A',
    align: 'center',
    flex: 1,

    ImageWrap: {
      alignSelf: 'flex-start',
      background: 'gray1',
      round: 'Z',
      padding: 'Z',
      Img: {
        src: (el, s) => s.image,
        boxSize: 'C2 C2',
        objectFit: 'contain'
      }
    },

    Details: {
      alignSelf: 'flex-start',
      paddingTop: '25px',
      flow: 'y',
      gap: 'X',
      color: 'text',
      Title: {
        tag: 'h4',
        text: (el, s) => s.name,
        fontWeight: '600',
        fontSize: 'Z2',
      },
      Description: {
        text: (el, s) => s.description,
        color: 'secondary',
        fontSize: 'Y',
      },
      Color: {
        flow: 'x',
        gap: 'X',
        Text_Label: { text: 'Color:', color: 'secondary', fontSize: 'Y' },
        Text_Value: { text: (el, s) => s.color, fontWeight: '500', fontSize: 'Y' }
      }
    }
  },

  QuantityControl: {
    flow: 'x',
    align: 'center',
    gap: 'Z',
    background: 'gray1',
    round: 'Z',
    padding: 'X',
    
    Button_Minus: {
      extends: 'IconButton',
      Icon: { name: 'minus', boxSize: 'X2' },
      padding: 'X',
      onClick: (e, el, s) => {
        s.update({ quantity: Math.max(1, s.quantity - 1) })
        const items = s.root.cartItems
        items[s.id].quantity = s.quantity
        s.root.update({ cartItems: items })
      }
    },
    Text_Qty: {
      text: (el, s) => s.quantity,
      color: 'text',
      minWidth: 'B',
      textAlign: 'center',
      fontWeight: '600'
    },
    Button_Plus: {
      extends: 'IconButton',
      Icon: { name: 'plus', boxSize: 'X2' },
      padding: 'X',
      onClick: (e, el, s) => {
        s.update({ quantity: s.quantity + 1 })
        const items = s.root.cartItems
        items[s.id].quantity = s.quantity
        s.root.update({ cartItems: items })
      }
    }
  },

  Remove: {
    extends: 'IconButton',
    Icon: { name: 'trash', boxSize: 'A' },
    color: 'gray3',
    ':hover': { color: 'danger' },
    onClick: (e, el, s) => {
      const items = s.root.cartItems.filter(item => item.id !== s.id)
      s.root.update({ cartItems: items })
    }
  },

  Price: {
    text: (el, s) => `$${(s.price * s.quantity).toFixed(2)}`,
    color: 'text',
    fontWeight: '700',
    fontSize: 'A',
    width: 'F',
    textAlign: 'center'
  }
}
