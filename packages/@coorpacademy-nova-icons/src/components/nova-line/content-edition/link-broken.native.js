import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M16.243 3.515a3.004 3.004 0 00-4.243 0L8.465 7.051l1.414 1.414 3.535-3.536a1.004 1.004 0 011.415 0l1.414-1.414zM19.071 9.171c.39.39.39 1.025 0 1.415l-3.536 3.536 1.414 1.414L20.485 12a3.005 3.005 0 000-4.243l-1.414 1.414z" />
    </G>
    <G fill={props.color}>
      <Path d="M3.515 16.243l1.414-1.414a1.002 1.002 0 010-1.415L8.464 9.88 7.05 8.465 3.515 12a3.003 3.003 0 000 4.243zM14.122 15.536l-3.536 3.535a1.003 1.003 0 01-1.415 0l-1.414 1.415a2.993 2.993 0 002.121.876c.769 0 1.537-.292 2.122-.876l3.536-3.535-1.414-1.415z" />
    </G>
    <Path
      fill={props.color}
      d="M19.778 2.808l1.414 1.415-7.07 7.07-1.415-1.414zM9.879 12.707l1.414 1.414-7.071 7.071-1.414-1.414zM19.778 14.536h2.828v2h-2.828zM14.536 19.778h2v2.828h-2zM7.464 1.394h2v2.828h-2zM1.394 7.464h2.828v2H1.394z"
    />
  </Svg>
);

export default SvgComponent;
