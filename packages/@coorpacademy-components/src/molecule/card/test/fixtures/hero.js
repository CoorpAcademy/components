export default {
  props: {
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    type: 'course',
    hero: true,
    title: 'From Mass Market to One to One targeting  ',
    author: 'Coorpacademy',
    cta: {
      href: '#',
      submitValue: 'Continue your progression'
    },
    progress: 0.65,
    onClick: () => console.log('onClick')
  }
};
