import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 20.242l-6.535-6.535 4.242-4.242L12 11.758l3.459-3.459a75.496 75.496 0 0 0-3.636-5.867c-.373-.541-1.272-.541-1.646 0C9.545 3.348 4 11.477 4 15c0 3.859 3.141 7 7 7 3.86 0 7-3.141 7-7 0-.215-.021-.449-.06-.696L12 20.242z"
    />
    <Path
      fill="currentColor"
      d="M12 17.414l-3.707-3.707 1.414-1.414L12 14.586l6.293-6.293 1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
