import fixture from './default';

export default {
  props: {
    ...fixture.props,
    hasImage: true,
    card: {
      ...fixture.props.card,
      coverImages: [{image: 'https://static.coorpacademy.com/cover.jpg'}]
    }
  }
};
