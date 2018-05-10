export default {
  props: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Work-with-us_%281%29.jpg/800px-Work-with-us_%281%29.jpg',
    title: 'Un succès à la française: Critéo',
    author: 'Coorpacademy',
    progress: 0.8,
    backgroundLayout: 'left',
    certifiedAuthor: true,
    adaptive: false,
    customer: {
      name: 'Acme Creation',
      coorpOriginal: false
    },
    locked: false,
    onClick: () => console.log('Click on card')
  }
};
