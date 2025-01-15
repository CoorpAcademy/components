export default {
  props: {
    href: 'target',
    style: {
      color: '#2d64c9'
    },
    useButtonTag: false,
    onClick: () => console.log('clicked disabled'),
    children: 'Link',
    disabled: true
  }
};
