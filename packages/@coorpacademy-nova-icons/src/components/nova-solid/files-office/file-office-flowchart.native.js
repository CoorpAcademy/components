import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM17 15h-3v-1.25h-2.25v4.5H14V17h3v4h-3v-1.25h-3.75V16.5H9V18H6v-4h3v1.5h1.25v-3.25H14V11h3v4zm-2-8V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
