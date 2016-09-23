import Field from '../../../../atom/input-text/test/fixtures/default';

const {field} = Field.props;

export default {
  props: {
    group: {
      title: 'Propriétés de la marque',
      fields: [field, field, field]
    }
  }
};
