import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M17.25 8.25h1.25V12h1.25V8.25H21V7h-3.75zM15.5 9.312l-1.354-2.033A.624.624 0 0 0 13 7.625V12h1.25V9.69l1.355 2.032a.626.626 0 0 0 1.145-.347V7H15.5v2.312zM6.75 8.875A1.877 1.877 0 0 0 4.875 7H3v5h1.25v-1.25h.323l.73 1.25H6.75l-.895-1.533c.535-.331.895-.918.895-1.592zm-2.5-.625h.625a.626.626 0 0 1 0 1.25H4.25V8.25z" />
      <Path d="M22 4H2C.897 4 0 4.896 0 6v7c0 1.103.897 2 2 2h9v7h2v-7h9c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM2 13V6h20l.001 7H2z" />
      <Path d="M8 7.625v3.75c0 .345.279.625.625.625h3.125v-1.25h-2.5v-.625h1.875v-1.25H9.25V8.25h2.5V7H8.625A.625.625 0 0 0 8 7.625z" />
    </G>
  </Svg>
);

export default SvgComponent;
