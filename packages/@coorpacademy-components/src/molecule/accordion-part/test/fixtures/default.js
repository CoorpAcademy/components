import React from 'react';
import Picker from '../../../questions/picker';
import fixture from '../../../questions/picker/test/fixtures/default';

export default {
  props: {
    title: 'Picker',
    content: <Picker {...fixture.props} />
  }
};
