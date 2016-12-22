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
    title: 'Advanced Options',
    disabled: true,
    fields: [{
      title: 'Hash algorithm',
      value: 'SHA-1',
      values: ['SHA-1', 'SHA-256'],
      type: 'select',
      description: 'Lorem Ipsum dolor sit amet.',
      onChange: () => {}
    }, {
      title: 'Clock skew',
      value: '',
      type: 'text',
      description: 'Lorem Ipsum dolor sit amet.',
      onChange: () => {}
    }, {
      title: 'Binding',
      value: 'HTTP POST',
      values: ['HTTP POST', 'HTTP_REDIRECT'],
      type: 'select',
      description: 'Lorem Ipsum dolor sit amet.',
      onChange: () => {}
    }]
  }
};
