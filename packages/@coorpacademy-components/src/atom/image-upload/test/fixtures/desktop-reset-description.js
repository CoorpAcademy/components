import DesktopReset from './desktop-reset-no-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    description:
      'Recommended aspect ratio: 1:1 (e.g. 250px x 250px). Maximum accepted aspect ratio: 2:1 (e.g. 500px x 250px. Meaning, no more than twice as large as it is tall)'
  }
};
