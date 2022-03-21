import withUploadImage from '../../../setup-slide/test/fixtures/default';
import withoutUploadImage from '../../../setup-slide/test/fixtures/without-upload-image';

const {props: withImage} = withUploadImage;
const {props: withoutImage} = withoutUploadImage;

export default {
  props: {
    tabProps: [
      {
        title: '1'
      },
      {
        title: '2'
      },
      {
        title: '3'
      }
    ],
    slides: [withImage, withoutImage, withoutImage]
  }
};
