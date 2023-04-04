import closePopinProps from '../../../../molecule/cm-popin/test/fixtures/end-external-course';

export default {
  props: {
    name: 'Massive Open Online Course',
    type: 'article',
    url: 'https://fr.wikipedia.org/wiki/Massive_Open_Online_Course',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    },
    complete: {
      disabled: false,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    loading: false,
    closePopin: closePopinProps.props
  }
};
