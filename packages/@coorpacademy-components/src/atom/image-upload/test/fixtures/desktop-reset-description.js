import DesktopReset from './desktop-reset-no-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    description:
      'This is where you can load a custom logo (that of Coorpacademy, the client, or one specific to the learning platform) which will be added at the bottom right of the thumbnails of the different courses in SAP.<br /><br />Max file size: 5MO. Format: PNG. NB: The logo will be re-sized by the media service (height = 125px & wide = 400px), therefore, a horizontal format is highly suggested.'
  }
};
