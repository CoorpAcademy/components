import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.445A1.001 1.001 0 0 0 15 0h-4v6h8.535L15.832.445zM9 0H5a1 1 0 0 0-.832.445L.465 6H9V0zM20 12V8H0v11a1 1 0 0 0 1 1h7v-6c0-1.1.9-2 2-2h10z" />
      <Path d="M23.707 18.293l-2-2A1 1 0 0 0 21 16h-1v-1a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.277c.347.595.984 1 1.723 1s1.376-.405 1.723-1h2.555c.347.595.984 1 1.723 1s1.376-.405 1.723-1H23a1 1 0 0 0 1-1v-3a.997.997 0 0 0-.293-.707zM12 16h6v5h-2.277c-.347-.595-.984-1-1.723-1s-1.376.405-1.723 1H12v-5zm10 5h-.277c-.347-.595-.984-1-1.723-1v-2h.586L22 19.414V21z" />
    </G>
  </Svg>
);

export default SvgComponent;
