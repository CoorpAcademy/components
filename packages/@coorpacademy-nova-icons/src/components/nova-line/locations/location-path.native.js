import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M20 21H9v-2h9v-4h2zM19 12.761c-.691-1.002-4-5.614-4-7.761 0-2.206 1.794-4 4-4s4 1.794 4 4c0 2.038-2.953 6.244-4 7.761zM19 3c-1.103 0-2 .898-2 2 0 .662.933 2.475 2 4.179C20.067 7.475 21 5.662 21 5c0-1.102-.897-2-2-2zM5 20.761C4.309 19.759 1 15.147 1 13c0-2.206 1.794-4 4-4s4 1.794 4 4c0 2.038-2.953 6.244-4 7.761zM5 11c-1.103 0-2 .898-2 2 0 .662.933 2.475 2 4.179C6.067 15.475 7 13.662 7 13c0-1.102-.897-2-2-2z"
    />
  </Svg>
);

export default SvgComponent;
