import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-3 10H5v-2h3.465l1.703-2.554c.371-.556 1.293-.556 1.664 0l1.044 1.566 2.229-4.46c.182-.361.566-.579.965-.55.404.029.75.298.879.682L18.721 15H19v2zM5 10a2 2 0 1 1 4.001.001A2 2 0 0 1 5 10zm15-4H4V5h16v1z"
    />
  </Svg>
);

export default SvgComponent;
