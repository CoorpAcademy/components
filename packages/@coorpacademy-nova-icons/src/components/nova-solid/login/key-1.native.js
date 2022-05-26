import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M20.292 10.364l1.414-1.414-2.474-2.475 1.413-1.413-2.121-2.121-9.489 9.491a4.973 4.973 0 00-1.918-.43L7.002 12c-2.694 0-4.937 2.19-5 4.881a4.966 4.966 0 001.38 3.57 4.964 4.964 0 003.5 1.548l.121.001c2.69 0 4.931-2.189 4.995-4.881a4.964 4.964 0 00-.719-2.69l3.71-3.711 2.474 2.476 1.415-1.414-2.474-2.476 1.414-1.415 2.474 2.475zM7 19a2 2 0 110-4 2 2 0 010 4z"
    />
  </Svg>
);

export default SvgComponent;
