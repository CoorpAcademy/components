import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14 19.001v-5c0-.55.45-1 1-1h4v-1c0-.737-.405-1.375-1-1.722V8.001c0-3.309-2.691-6-6-6s-6 2.691-6 6v2.278c-.595.347-1 .984-1 1.722v8c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2h-4c-.55 0-1-.45-1-1zm-6-11c0-2.205 1.795-4 4-4s4 1.795 4 4v2H8v-2z"
    />
    <Path fill="currentColor" d="M15 14.001h5v2h-5zM15 17.001h5v2h-5z" />
  </Svg>
);

export default SvgComponent;
