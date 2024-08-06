export default {
  props: {
    href: 'target',
    skinHover: true,
    style: {
      color: '#2d64c9'
    },
    useButtonTag: false,
    onClick: () => console.log('clicked disabled'),
    children: 'Link',
    disabled: true
  }
};
