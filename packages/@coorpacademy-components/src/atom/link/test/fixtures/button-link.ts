export default {
  props: {
    href: '#',
    style: {
      color: '#00B0FF',
      textDecoration: 'none'
    },
    useButtonTag: true,
    onClick: () => console.log('clicked'),
    children: 'Button'
  }
};
