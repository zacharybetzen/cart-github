export const Header = {
  tag: 'header',
  flow: 'x',
  align: 'center space-between',
  padding: 'B C',
  background: 'white',
  boxShadow: 'black.1 0 X Y',

  Logo: {
    extends: 'Link',
    href: '/',
    flow: 'x',
    align: 'center',
    gap: 'Z',
    Icon: { name: 'logo' },
    Text: {
      text: 'The Shape Store',
      fontSize: 'C',
      fontWeight: '700',
      color: 'black'
    }
  },

  Nav: {
    flow: 'x',
    gap: 'B',
    align: 'center',
    '@tabletS': { display: 'none' },

    children: [
      { text: 'Home', href: '/' },
      { text: 'Categories', href: '/categories' },
      { text: 'About Us', href: '/about' },
      { text: 'Contact Us', href: '/contact' }
    ],
    childrenAs: 'state',
    childExtends: 'Link',
    childProps: {
      text: (el, s) => s.text,
      href: (el, s) => s.href,
      fontSize: 'Z',
      color: 'secondary',
      ':hover': { color: 'primary' }
    }
  },

  Actions: {
    flow: 'x',
    gap: 'A',
    align: 'center',

    CartIcon: {
      extends: 'IconButton',
      Icon: { name: 'cart', boxSize: 'A' },
      background: 'transparent',
      color: 'secondary'
    },
    SearchIcon: {
      extends: 'IconButton',
      Icon: { name: 'search', boxSize: 'A' },
      background: 'transparent',
      color: 'secondary'
    },
    DashboardBtn: {
      extends: 'Button',
      text: 'My Dashboard',
      padding: 'Z B',
      round: 'Z',
      fontSize: 'Z',
      background: 'primary',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }
  }
}
