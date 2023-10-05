import SelectCohortes from '../../../../molecule/title-radio-wrapper/test/fixtures/select-cohortes';
import UploadOpponents from '../../../../molecule/title-radio-wrapper/test/fixtures/upload-validated-opponents';

export default {
  props: {
    items: [
      {
        ...SelectCohortes.props
      },
      {
        ...UploadOpponents.props
      }
    ]
  }
};
