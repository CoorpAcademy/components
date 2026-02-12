import {
  certificationSection,
  freshContentSection,
  playlistSection,
  skillsSection
} from '../../../setup-section/test/fixtures/explore-sections';

export default {
  props: {
    sections: [
      freshContentSection.props,
      skillsSection.props,
      playlistSection.props,
      certificationSection.props
    ],
    onDrop: (dragged, dropped) => {
      console.log('foo');
      console.log({dragged, dropped});
    }
  }
};
