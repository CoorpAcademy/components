import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      fill="currentColor"
      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.3 3.5c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7zm2.4 9.7H5.9c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h1.7V7h-1c-.2 0-.3-.2-.3-.4s.2-.3.3-.3H8c.2 0 .3.2.3.3v5.9H10c.2 0 .3.2.3.3.1.3 0 .4-.2.4z"
    />
  </Svg>
);

export default SvgComponent;
