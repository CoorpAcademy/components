import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.25 12h-4.5a.75.75 0 0 0-.75.75V15h1.5v-1.5h.75v3h-1.5V18h4.5v-1.5h-1.5v-3h.75V15H17v-2.25a.75.75 0 0 0-.75-.75z" />
      <Path d="M23 0h-8a1 1 0 0 0-.8.4L12 3.334 9.8.4A1 1 0 0 0 9 0H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4.523A8.942 8.942 0 0 1 5 15c0-4.973 4.027-9 9-9s9 4.027 9 9c0 1.055-.19 2.062-.523 3H23a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM4 13H2v-2h2v2zm2-4H2V7h4v2zm0-4H2V3h4v2zm16 3h-2V6h2v2zm0-3h-4V3h4v2z" />
      <Path d="M21 15c0-3.859-3.14-7-7-7s-7 3.141-7 7c0 3.86 3.14 7 7 7a6.962 6.962 0 0 0 4.73-1.855l3.27 3.27L23.414 22 20 18.587A6.94 6.94 0 0 0 21 15zm-7 5c-2.757 0-5-2.242-5-5 0-2.756 2.243-5 5-5s5 2.244 5 5c0 2.758-2.243 5-5 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
