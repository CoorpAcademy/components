import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M23 9h-1.485A10.003 10.003 0 0 0 15 2.486V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.492A10.005 10.005 0 0 0 2.485 9H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.485A10.006 10.006 0 0 0 9 21.509V23a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.484A10.006 10.006 0 0 0 21.515 15H23a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM11 2h2v2h-2V2zm-9 9h2v2H2v-2zm11 11h-2v-2h2v2zm2-2.596V19a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v.413A8.036 8.036 0 0 1 4.596 15H5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.404A8.038 8.038 0 0 1 9 4.588V5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.404A8.027 8.027 0 0 1 19.404 9H19a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.404A8.02 8.02 0 0 1 15 19.404zM22 13h-2v-2h2v2z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
