export default {
  props: {
    sections: [
      {
        'aria-label': {
          title: 'aria label title',
          author: 'aria label author'
        },
        title:
          'Marketing and online advertising Marketing and online advertising Marketing and online advertising Marketing and online advertising',
        author: 'Author',
        image:
          'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
        contentBadge: {
          label: 'course',
          category: 'course'
        },
        position: 1
      },
      {
        'aria-label': {
          title: 'aria label title',
          author: 'aria label author'
        },
        title: 'Social networks',
        author: 'Author',
        image:
          'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
        contentBadge: {
          label: 'chapter',
          category: 'chapter'
        },
        position: 2
      },
      {
        'aria-label': {
          title: 'aria label title',
          author: 'aria label author'
        },
        title: 'Other title',
        author: 'Author 2',
        image:
          'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
        contentBadge: {
          label: 'course',
          category: 'course'
        },
        position: 3
      },
      {
        'aria-label': {
          title: 'aria label title',
          author: 'aria label author'
        },
        title: 'Social others',
        author: 'Author XXX',
        image:
          'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
        contentBadge: {
          label: 'chapter',
          category: 'chapter'
        },
        position: 4
      }
    ],
    loading: false,
    onDrop: () => console.log('on drop')
  }
};
