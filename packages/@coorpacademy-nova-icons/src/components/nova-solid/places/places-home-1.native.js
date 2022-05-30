import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill={props.color}
      d="M21.707 12.293l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 14h2v8h5v-5h4v5h5v-8h2a.999.999 0 00.707-1.707z"
    />
  </Svg>
);

export default SvgComponent;
