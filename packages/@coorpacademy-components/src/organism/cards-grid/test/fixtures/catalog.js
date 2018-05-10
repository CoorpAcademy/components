const coverCard = {
  type: 'cover',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/800px-Moscow-City_%2836211143494%29.jpg',
  title: 'Le phénomène Big Data',
  author: 'Coorpacademy',
  progress: 0.8,
  certifiedAuthor: true,
  adaptive: false,
  locked: false
};

const itemCard = {
  type: 'item',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Work-with-us_%281%29.jpg/800px-Work-with-us_%281%29.jpg',
  title: 'Un succès à la française: Critéo',
  author: 'Coorpacademy',
  progress: 0.8,
  certifiedAuthor: true,
  adaptive: false,
  locked: false
};

export default {
  props: {
    list: [coverCard, itemCard, itemCard, coverCard, itemCard, itemCard, itemCard, itemCard]
  }
};
