import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 14a4.945 4.945 0 0 0-3.511 1.457l-.962-1.479.992-1.59c1.508-2.419 3.392-5.439 5.475-8.766l.521-.833L18.177.616 12 10.095 5.823.617 2.485 2.79l.521.833c2.083 3.326 3.966 6.347 5.475 8.766l.992 1.59-.962 1.479A4.942 4.942 0 0 0 5 14c-2.757 0-5 2.243-5 5s2.243 5 5 5c2.666 0 3.875-1.182 7-6.021C15.125 22.818 16.334 24 19 24c2.757 0 5-2.243 5-5s-2.243-5-5-5zM5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 19 21z"
    />
  </Svg>
);

export default SvgComponent;
