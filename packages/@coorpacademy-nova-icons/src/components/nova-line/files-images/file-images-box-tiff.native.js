import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.001H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M12.75 9.501c-.827 0-1.5.673-1.5 1.5v4.5h1.5v-2.25H15v-1.5h-2.25v-.75h3v-1.5h-3zM15.75 11.001v4.5h1.5v-2.25h2.25v-1.5h-2.25v-.75h3v-1.5h-3c-.827 0-1.5.673-1.5 1.5zM9 9.501h1.5v6H9zM3.75 11.001h1.5v4.5h1.5v-4.5h1.5v-1.5h-4.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
