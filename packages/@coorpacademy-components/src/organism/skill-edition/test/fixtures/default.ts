import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import IconEditor from '../../../icon-editor/test/fixtures/empty-color';
import ListItems from '../../../list-items/test/fixtures/translations-empty';

export default {
  props: {
    skillInformations: {
      form: BrandFormGroup.props,
      iconEditor: {...IconEditor.props, title: '-'}
    },
    translations: ListItems.props
  }
};
