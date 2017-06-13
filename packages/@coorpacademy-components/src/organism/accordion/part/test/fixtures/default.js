import React from 'react';
import Picker from '../../../../../molecule/questions/picker';
import fixture from '../../../../../molecule/questions/picker/test/fixtures/default';

export default {
  props: {
    title: 'Picker',
    content: <Picker {...fixture.props} />
  }
};
