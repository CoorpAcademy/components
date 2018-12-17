import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10.264 16h-1.75v-2.625h-.013L6.751 9h1.75l.875 2.188L10.251 9h1.75l-1.737 4.343V16zm6.987 0h-1.75v-3.235l-.147.221c-.325.488-1.131.488-1.456 0l-.147-.221V16h-1.75V9.875a.874.874 0 0 1 1.603-.485l1.022 1.533 1.022-1.533a.874.874 0 1 1 1.603.485V16z"
    />
  </Svg>
);

export default SvgComponent;
