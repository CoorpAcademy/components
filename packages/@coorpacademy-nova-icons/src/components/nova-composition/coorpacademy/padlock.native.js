import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M0 16C0 7.163 7.163 0 16 0h16c8.837 0 16 7.163 16 16v16c0 8.837-7.163 16-16 16H16C7.163 48 0 40.837 0 32V16z"
      fill="#FCDADA"
    />
    <Path
      d="M21.5 20.5V22h5v-1.5c0-1.375-1.125-2.5-2.5-2.5a2.487 2.487 0 00-2.5 2.5zm-2 1.5v-1.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5V22h.5c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H19c-1.125 0-2-.875-2-2v-6c0-1.094.875-2 2-2h.5z"
      fill="#B81400"
    />
  </Svg>
);

export default SvgComponent;
