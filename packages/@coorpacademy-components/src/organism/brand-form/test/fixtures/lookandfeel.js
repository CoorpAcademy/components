import BrandFormGroupImages from '../../../../molecule/brand-form-group/test/fixtures/images';
import BrandFormGroupLookAndFeel from '../../../../molecule/brand-form-group/test/fixtures/lookandfeel';

export default {
  props: {
    groups: [BrandFormGroupLookAndFeel.props, BrandFormGroupImages.props],
    onSubmit: () => {},
    submitValue: 'Save changes',
    onReset: () => {},
    resetValue: 'Reset changes'
  }
};
