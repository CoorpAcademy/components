import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 13.875v1.25c0 1.034.841 1.875 1.875 1.875h1.875v-1.25h-1.875a.625.625 0 0 1-.625-.625v-1.25c0-.344.28-.625.625-.625h1.875V12h-1.875A1.877 1.877 0 0 0 16 13.875zM14.125 12c-.356 0-.208.028-1.25 1.543-1.042-1.515-.894-1.543-1.25-1.543a.625.625 0 0 0-.625.625V17h1.25v-2.479l.183.274a.531.531 0 0 0 .884 0l.183-.274V17h1.25v-4.375a.625.625 0 0 0-.625-.625zM20.125 6H17v1.25h2.5v.625h-1.875A.625.625 0 0 0 17 8.5v1.875c0 .346.28.625.625.625h3.125V9.75h-2.5v-.625h1.875a.625.625 0 0 0 .625-.625V6.625A.625.625 0 0 0 20.125 6zM3 12.625v3.75c0 .346.28.625.625.625H6.75v-1.25h-2.5v-.625h1.875v-1.25H4.25v-.625h2.5V12H3.625a.625.625 0 0 0-.625.625zM7.5 13H10v1.25H7.5zM7.5 14.875H10v1.25H7.5z" />
      <Path d="M22 3H2C.897 3 0 3.898 0 5v14c0 1.104.897 2 2 2h20c1.103 0 2-.896 2-2V5c0-1.102-.897-2-2-2zM2 19V5h20l.001 14H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
