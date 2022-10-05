import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <Path
      fill={props.color}
      d="M25 14.6v-4.2h-2.3c-.3-1.3-.8-2.6-1.5-3.7l1.6-1.6-2.9-2.9-1.6 1.6c-1.1-.7-2.3-1.3-3.6-1.5V0h-4.2v2.3c-1.3.3-2.6.8-3.7 1.5L5.2 2.2 2.3 5.1l1.6 1.6C3.2 7.8 2.6 9 2.4 10.4H0v4.2h2.3c.3 1.3.8 2.6 1.5 3.7l-1.6 1.6 2.9 2.9 1.6-1.6c1.1.7 2.3 1.3 3.7 1.5V25h4.2v-2.3c1.3-.3 2.6-.8 3.7-1.5l1.6 1.6 2.9-2.9-1.6-1.6c.7-1.1 1.3-2.3 1.5-3.6H25v-.1zm-12.5 2.1c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z"
    />
  </Svg>
);

export default SvgComponent;
