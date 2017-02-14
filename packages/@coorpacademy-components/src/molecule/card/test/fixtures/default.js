export default {
  props: {
    view: 'dashboard',
    image: 'https://placehold.it/380x200/1d1d1d',
    time: '2h20',
    adaptiv: false,
    certification: false,
    type: 'default',
    title: 'From Mass Market to One to One targeting Lorem ipsum',
    author: 'Coorpacademy',
    cta: 'Continue Chapter',
    progress: '65%',
    topOnClick: () => console.log('click on top'), // eslint-disable-line no-console
    bottomOnClick: () => console.log('click on bottom') // eslint-disable-line no-console
  }
};
