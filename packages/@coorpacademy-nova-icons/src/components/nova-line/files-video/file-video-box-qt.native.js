import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M11.57 13.409v-1.714c0-1.418-1.154-2.571-2.572-2.571s-2.571 1.153-2.571 2.571v1.714a2.573 2.573 0 0 0 2.571 2.571c.396 0 .767-.097 1.102-.257l.864.863 1.212-1.212-.863-.864c.16-.335.257-.704.257-1.101zm-1.715 0a.857.857 0 0 1-1.713 0v-1.714c0-.472.385-.857.856-.857.473 0 .857.385.857.857v1.714zM12.323 10.752h1.75v5.25h1.75v-5.25h1.75v-1.75h-5.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
