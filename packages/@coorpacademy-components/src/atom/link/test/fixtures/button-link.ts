export default {
  props: {
    href: '#',
    skinHover: true,
    style: {
      color: '#00B0FF',
      textDecoration: 'none'
    },
    useButtonTag: true,
    onClick: () => console.log('clicked'),
    children: 'Button'
  }
};
