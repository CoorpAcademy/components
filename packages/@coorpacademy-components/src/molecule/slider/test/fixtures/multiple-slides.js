import slideFixtures from '../../../../atom/slide/test/fixtures/default';

const slide = slideFixtures.props;

export default {
  props: {
    slides: [
      slide,
      {...slide,
        cover: 'url("http://www.lorempixel.com/200/200/nature/2")',
        title: 'Hi XXX, check your battle requests,',
        subtitle: 'You have N battle requests!',
        light: true,
        cta: {
          href: '#',
          title: 'Start Battling'
        }
      },
      {...slide,
        cover: 'url("http://www.lorempixel.com/200/200/nature/3")',
        title: 'Welcome back Jane, continue your course',
        subtitle: 'The Mobile Revolution',
        cta: {
          href: '#',
          title: 'Continue Learning'
        }
      }
    ]
  }
};
