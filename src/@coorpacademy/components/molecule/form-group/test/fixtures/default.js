import Field from '../../../../atom/input-text/test/fixtures/default';

const {field} = Field.props;

export default {
  props: {
    group: {
      name: 'Propriétés de la marque',
      fields: [field, field, field]
    }
  }
};
