export const defaultProps = {
  title: 'Are you a smart digital user ?',
  tag: {
    label: 'Playlist',
    type: 'default'
  },
  progression: 25,
  onclick: () => console.log('clicked')
};

export default {
  props: defaultProps
};
