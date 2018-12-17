import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.242 7.759A5.958 5.958 0 0 0 12 6h-.002a5.96 5.96 0 0 0-4.241 1.757L6.343 6.343A7.941 7.941 0 0 1 11.998 4H12a7.946 7.946 0 0 1 5.656 2.345l-1.414 1.414z"
    />
    <Path
      fill="currentColor"
      d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0L3.515 3.515c4.679-4.679 12.292-4.679 16.971 0l-1.415 1.414zM15 10.001c-2.51 0-4.74 1.31-5.979 3.357.966.457 1.996 1.263 2.971 2.646l-.817.576C9.678 14.454 8.393 14 7 14c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.859 0 7-3.14 7-7 0-3.858-3.141-6.999-7-6.999z"
    />
  </Svg>
);

export default SvgComponent;
