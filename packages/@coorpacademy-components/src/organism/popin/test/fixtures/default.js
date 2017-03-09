import basicCTA from '../../../../atom/cta/test/fixtures/default';

const popinCTA = basicCTA.props;

export default {
  props: {
    popinCTA: {
      submitValue: 'Start Learning'
    },
    href: '#',
    header: 'skip intro',
    // eslint-disable-next-line max-len
    content: 'WELCOME ! </br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ut risus tristique venenatis. Morbi rutrum egestas tristique. Nam interdum blandit condimentum. Nulla facilisi. Curabitur eu massa vestibulum, faucibus sem eu, vestibulum tellus. Etiam non sapien vehicula, porta nunc in, efficitur tortor. Mauris quis facilisis diam. Vestibulum sed lectus a sem laoreet blandit a sit amet sapien. Vestibulum varius sapien et sapien egestas finibus. Morbi vel consectetur est. Integer egestas tristique nisi et fringilla. Etiam ultricies, odio quis viverra fermentum, diam arcu faucibus neque, id accumsan risus erat congue nunc. Phasellus ac vestibulum est.'
  }
};
