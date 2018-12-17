import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM9 15.5H7.5V20H6v-4.5H4.5V14H9v1.5zm5.25 0h-1.5V20h-1.5v-4.5h-1.5V14h4.5v1.5zm5.25 0h-3v.75h2.25v1.5H16.5V20H15v-4.5c0-.826.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
