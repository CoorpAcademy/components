import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13.513 5.829l8.485-2.828-2.829 8.484-1.414-4.242zM10.998 23.948h-10a.997.997 0 0 1-.916-.6.995.995 0 0 1 .184-1.08l2.305-2.483C1.54 18.34.999 16.684.999 14.948c0-4.599 3.827-8.443 8.902-8.942l.195 1.99c-4.047.398-7.098 3.387-7.098 6.952 0 1.537.568 3.001 1.642 4.232a1 1 0 0 1-.021 1.338l-1.328 1.43h7.707c4.411 0 8-3.14 8-7h2c0 4.963-4.486 9-10 9z"
    />
  </Svg>
);

export default SvgComponent;
