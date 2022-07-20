import React from 'react';
import {render} from '@testing-library/react-native';

const renderReactNativeComponentMacro = (t, Component, fixture) => {
  const {toJSON} = render(<Component {...fixture.props} />);
  const json = toJSON();
  t.deepEqual(json.type, 'react-native-mock');
};

export default renderReactNativeComponentMacro;
