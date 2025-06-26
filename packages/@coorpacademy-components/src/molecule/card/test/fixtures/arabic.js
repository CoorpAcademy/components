import Default from './default';

export default {
  props: {
    ...Default.props,
    onFavoriteClick: () => console.log('click Favorite'),
    title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>'
  }
};
