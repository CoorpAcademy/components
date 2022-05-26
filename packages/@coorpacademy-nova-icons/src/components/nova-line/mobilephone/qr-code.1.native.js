import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill={props.color}
      d="M12 9.999h-2v-4h4v2h-2zM11 14.999H6v-5h2v3h3zM12 10.999h2v4h-2zM18 13.999h-2v-2h-1v-2h3z"
    />
    <Path
      d="M20 21.999H4c-1.103 0-2-.896-2-2v-16c0-1.104.897-2 2-2h16c1.103 0 2 .896 2 2v16c0 1.104-.897 2-2 2zm-16-18v16h16.001l-.001-16H4z"
      fill={props.color}
    />
    <Path
      fill={props.color}
      d="M6 5.999h3v3H6zM15 14.999h3v3h-3zM15 5.999h3v3h-3zM9 15.999h5v2H9zM6 15.999h2v2H6z"
    />
  </Svg>
);

export default SvgComponent;
