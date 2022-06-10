import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M12 2.003c-5.514 0-10 4.485-10 10v8a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H4v-3c0-4.412 3.589-8 8-8s8 3.588 8 8v3h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-8c0-5.515-4.486-10-10-10z"
    />
  </Svg>
);

export default SvgComponent;
