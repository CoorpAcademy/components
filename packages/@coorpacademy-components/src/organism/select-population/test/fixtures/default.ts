import SelectCohortes from '../../../../molecule/title-radio-wrapper/test/fixtures/select-cohortes';
import UploadUsers from '../../../../molecule/title-radio-wrapper/test/fixtures/upload-users';

export default {
  props: {
    items: [
      {
        ...SelectCohortes.props
      },
      {
        ...UploadUsers.props
      }
    ]
  }
};
