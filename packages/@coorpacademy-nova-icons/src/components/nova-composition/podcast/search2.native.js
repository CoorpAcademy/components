import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      d="M15.2 15.2c.2-.2.2-.5 0-.7l-3.8-4.1c.8-1.1 1.3-2.5 1.3-4 0-1.7-.7-3.4-1.8-4.6C9.8.7 8.2 0 6.6 0S3.4.7 2.3 1.9.5 4.8.5 6.5s.7 3.4 1.8 4.6S5 13 6.6 13c1.4 0 2.6-.5 3.8-1.4l3.8 4c.2.2.5.2.7 0l.3-.4zm-8.6-3.8c-1.2 0-2.4-.5-3.2-1.4C2.4 9 2 7.8 2 6.5S2.4 4 3.3 3.1c.9-1 2.1-1.5 3.3-1.5s2.3.5 3.2 1.4c.8.9 1.3 2.1 1.3 3.4s-.5 2.5-1.3 3.4c-.9 1.1-2 1.6-3.2 1.6z"
      fill="#515161"
    />
  </Svg>
);

export default SvgComponent;
