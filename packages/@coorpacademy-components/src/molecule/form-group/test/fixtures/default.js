import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import defaultFieldText from '../../../../atom/input-text/test/fixtures/default';
import emptyFieldText from '../../../../atom/input-text/test/fixtures/empty';
import errorFieldText from '../../../../atom/input-text/test/fixtures/error';
import defaultFieldColor from '../../../../atom/input-color/test/fixtures/default';
import emptyFieldColor from '../../../../atom/input-color/test/fixtures/empty';
import errorFieldColor from '../../../../atom/input-color/test/fixtures/error';

export default {
  props: {
    title: 'Propriétés de la marque',
    fields: map(get(['props']), [
      defaultFieldText,
      emptyFieldText,
      errorFieldText,
      defaultFieldColor,
      emptyFieldColor,
      errorFieldColor
    ])
  }
};
