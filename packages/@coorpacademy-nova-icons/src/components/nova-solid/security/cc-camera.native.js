import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M18 9.83v2.171h1a1 1 0 0 0 1-1v-3c0-.05-.021-.094-.029-.143L18 9.83z" />
      <Path d="M21.924 3.619A.999.999 0 0 0 21 3.001H11v4h-1v-4H8v5H7V3.102a5.009 5.009 0 0 0-4 4.899c0 2.757 2.243 5 5 5h8a1 1 0 0 0 1-1V9.415l4.707-4.707a.996.996 0 0 0 .217-1.089zM10 15.247l-5 1.43v-2.676H3v7h2v-2.246l6.275-1.792a1 1 0 0 0 .725-.962v-2h-2v1.246z" />
    </G>
  </Svg>
);

export default SvgComponent;
