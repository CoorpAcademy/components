import defaultFixture from './default';

export default {
  props: {
    ...defaultFixture.props,
    content: 'Some users were not imported',
    descriptionText:
      'The massive battle will only be send to 265 users. 35 out of 300 users were not imported.',
    icon: 'AlertDiamond',
    link: {
      children: ['Download report'],
      onClick: () => {
        console.log('hello');
      },
      download: true,
      style: {
        textDecoration: 'underline',
        margin: '20px',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '500'
      }
    }
  }
};
