export const calculateSubtotal = function () {
  const s = this.getRootState()
  return (s.cartItems || []).reduce((acc, item) => acc + (item.price * item.quantity), 0)
}
