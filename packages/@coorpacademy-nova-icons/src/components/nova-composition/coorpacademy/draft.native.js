import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 170 170" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#F44336"
      d="M85 0c46.9 0 85 38.1 85 85s-38.1 85-85 85S0 131.9 0 85 38.1 0 85 0z"
    />
    <Path
      fill="#FFF"
      d="M57.1 50c-3.9 0-7.1 3.2-7.1 7.1v55.8c0 3.9 3.2 7.1 7.1 7.1h55.8c3.9 0 7.1-3.2 7.1-7.1V95.3l19.1-19.1c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1l-9.1-9.1c-.6-.6-1.3-.9-2.2-.9-.8 0-1.5.3-2.1.9l-5.7 5.8V57.1c0-3.9-3.2-7.1-7.1-7.1H57.1zm0 6h55.8c.7 0 1.1.4 1.1 1.1v17.6L96.9 91.9c-.6.5-.9 1.3-.9 2.1v9c0 1.7 1.3 3 3 3h9c.8 0 1.6-.3 2.1-.9l3.9-3.9v11.6c0 .7-.4 1.1-1.1 1.1H57.1c-.7.1-1.1-.3-1.1-1V57.1c0-.7.4-1.1 1.1-1.1zm7.6 8c-1.1.1-2 .7-2.5 1.6s-.4 2.1.2 3c.6.9 1.6 1.4 2.7 1.4h40c1.1 0 2.1-.6 2.6-1.5s.5-2.1 0-3c-.6-.9-1.6-1.5-2.7-1.5H64.7zm63.2 5.3l4.8 4.8-3.2 3.2-4.8-4.8 3.2-3.2zM64.7 76c-1.1.1-2 .7-2.5 1.6-.5 1-.4 2.1.2 3 .6.9 1.6 1.4 2.7 1.4h35c1.1 0 2.1-.6 2.6-1.5s.5-2.1 0-3c-.6-.9-1.6-1.5-2.7-1.5H64.7zm55.8.7l4.8 4.8-18.5 18.5H102v-4.8l18.5-18.5zM64.7 88c-1.1.1-2 .7-2.5 1.6s-.4 2.1.2 3c.6.9 1.6 1.4 2.7 1.4h24c1.1 0 2.1-.6 2.6-1.5s.5-2.1 0-3c-.6-.9-1.6-1.5-2.7-1.5H64.7zm0 12c-1.1.1-2 .7-2.5 1.6s-.4 2.1.2 3c.6.9 1.6 1.4 2.7 1.4h24c1.1 0 2.1-.6 2.6-1.5s.5-2.1 0-3c-.6-.9-1.6-1.5-2.7-1.5H64.7z"
    />
  </Svg>
);

export default SvgComponent;
