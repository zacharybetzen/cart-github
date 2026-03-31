export const PaymentOption = {
  flow: 'x',
  padding: 'Z2 A',
  background: 'gray1',
  round: 'Z',
  border: (el, s) => s.root.taxRate === el.state.value ? '2px solid primary' : '1px solid gray2',
  cursor: 'pointer',
  onClick: (ev, el, s) => s.root.update({ taxRate: el.state.value }),
  Text_Label: { text: (el, s) => s.label, fontWeight: '500' }
}
