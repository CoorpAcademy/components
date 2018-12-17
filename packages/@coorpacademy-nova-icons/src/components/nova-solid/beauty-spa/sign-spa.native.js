import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M11.875 15.25h-.625v1.25h.625a.625.625 0 0 0 0-1.25zM16.25 15.25h1.25v1.25h-1.25z" />
      <Path d="M21 12h-1.546L12 3.482 4.546 12H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm-9-5.481L16.796 12H7.204L12 6.519zM8.75 15.25H6.562c-.172 0-.312.141-.312.312s.14.312.312.312h.625A1.564 1.564 0 0 1 7.188 19H5v-1.25h2.188a.312.312 0 0 0 0-.624h-.626a1.564 1.564 0 0 1 0-3.126H8.75v1.25zm3.125 2.5h-.625V19H10v-5h1.875c1.034 0 1.875.841 1.875 1.875s-.841 1.875-1.875 1.875zM18.75 19H17.5v-1.25h-1.25V19H15v-4.375c0-.346.28-.625.625-.625h2.5c.345 0 .625.279.625.625V19z" />
    </G>
  </Svg>
);

export default SvgComponent;
