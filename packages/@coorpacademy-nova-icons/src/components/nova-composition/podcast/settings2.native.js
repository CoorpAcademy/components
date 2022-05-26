import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      d="M15 9.1c.3 0 .5-.2.5-.5V7.2c0-.3-.2-.5-.5-.5h-.9c-.2-.9-.5-1.6-.9-2.4l.6-.8c.2-.2.2-.5 0-.7l-1.1-1.2c-.2-.2-.5-.2-.7 0l-.6.6c-.7-.5-1.4-.8-2.2-1V.5C9.2.2 9 0 8.7 0H7.3c-.3 0-.5.2-.5.5v1c-.9.1-1.6.5-2.3.9l-.6-.7c-.2-.2-.6-.2-.8 0L2.1 3c-.2.2-.2.5 0 .7l.6.7c-.3.6-.7 1.4-.8 2.3H1c-.3 0-.5.2-.5.5v1.7c0 .3.2.5.5.5h.9c.2.8.5 1.6.9 2.3l-.6.7c-.2.1-.2.5 0 .6l1.1 1.2c.2.2.6.2.7 0l.6-.7c.7.5 1.4.8 2.2 1v1c0 .3.2.5.5.5h1.4c.3 0 .5-.2.5-.5v-1c.8-.2 1.5-.5 2.2-1l.6.6c.2.2.5.2.7 0l1.1-1.2c.2-.2.2-.5 0-.7l-.6-.8c.5-.7.8-1.5.9-2.4h.9zm-7 1.6c-1.4 0-2.4-1.2-2.4-2.7S6.7 5.3 8 5.3c1.4 0 2.4 1.2 2.4 2.7.1 1.5-1 2.7-2.4 2.7z"
      fill="#515161"
    />
  </Svg>
);

export default SvgComponent;
