import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: {
    ...props,
    title: 'Mobile (*)',
    description:
      'Recommended aspect ratio: 1:1 (e.g. 250px x 250px). Maximum accepted aspect ratio: 2:1 (e.g. 500px x 250px. Meaning, no more than twice as large as it is tall)',
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491560713685.svg'
    },
    modified: false
  }
};
