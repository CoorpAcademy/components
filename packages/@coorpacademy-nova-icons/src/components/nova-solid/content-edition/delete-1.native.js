import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M3.691 1.242A.841.841 0 014.457.75h3.309c.328 0 .629.191.765.492l.219.383h2.625a.9.9 0 01.875.875c0 .492-.41.875-.875.875H.875A.864.864 0 010 2.5c0-.465.383-.875.875-.875H3.5l.191-.383zm7.684 3.008l-.602 9.27c-.027.71-.601 1.23-1.312 1.23h-6.7c-.71 0-1.284-.52-1.312-1.23L.875 4.25h10.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
