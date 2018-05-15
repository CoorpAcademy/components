export default {
  props: {
    view: 'grid',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    adaptiv: false,
    certification: false,
    type: 'course',
    title: 'From Mass Market to One to One targeting Lorem ipsum',
    author: 'Coorpacademy',
    certifiedAuthor: true,
    cta: 'Continue Chapter',
    progress: 0.65,
    badge: 'new',
    customer: {
      coorpOriginal: true,
      name: 'Decathlon creation'
    },
    onClick: () => console.log('click everywhere')
  }
};
