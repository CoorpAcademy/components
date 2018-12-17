import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 4h2V2h-2c-1.654 0-3 1.346-3 3v1h-6V5c0-.551.449-1 1-1h2V2h-2c-1.654 0-3 1.346-3 3v9.723c-.595-.348-1-.986-1-1.723H8c0 1.102-.897 2-2 2s-2-.898-2-2H2c0 1.102-.897 2-2 2v2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382v-2c-1.103 0-2-.898-2-2h-1V5c0-.551.449-1 1-1zm-3 4v2h-6V8h6zm-3 5h-2c0 .737-.405 1.375-1 1.723V12h6v2.723A1.987 1.987 0 0 1 18 15c-1.103 0-2-.898-2-2zM22 18h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382v-2c-1.103 0-2-.897-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
