import last from 'lodash.last';
import React from 'react';

import createDemoComponents from './Component';
import createComponents from '../../src';

const {} = createDemoComponents(React);
const { Slide } = createComponents(React);

export default React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    const slide = this.state;

    return (
      <Slide/>
    );
  }
});
