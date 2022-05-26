import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M22.447 7.11l-10-5a1 1 0 00-.895 0l-10 5a.992.992 0 00-.445.463A1.215 1.215 0 001 8.005v5.765a1 1 0 002 0V9.172l9.015 3.755 10.357-3.994a1 1 0 00.075-1.823z" />
      <Path d="M12 15.005c-.131 0-.262-.026-.385-.077L5 12.172v3.013c0 .379.214.725.553.895 1.715.857 3.483 1.918 6.447 1.918 2.963 0 4.735-1.062 6.447-1.918a1 1 0 00.553-.894v-2.801l-6.641 2.554a1.032 1.032 0 01-.359.066zM2 16.005a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
