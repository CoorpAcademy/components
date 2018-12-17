import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9 0H5a1 1 0 0 0-.832.446L.465 6H9V0zM15.832.446A1.002 1.002 0 0 0 15 0h-4v6h8.535L15.832.446zM19 11.998c.34 0 .672.033 1 .08V8H0v11a1 1 0 0 0 1 1h11.08a7.042 7.042 0 0 1-.08-1.002 7 7 0 0 1 7-7z" />
      <Path d="M22.293 17.29L20 19.581V14h-2v5.581l-2.293-2.291-1.414 1.413L19 23.411l4.707-4.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
