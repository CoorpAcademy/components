import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M13 14H5c-2.757 0-5-2.243-5-5s2.243-5 5-5c.533 0 1.061.086 1.563.253A6.962 6.962 0 0 1 13 0c3.859 0 7 3.141 7 7 0 3.86-3.141 7-7 7zM5 6C3.346 6 2 7.346 2 9s1.346 3 3 3h8c2.757 0 5-2.243 5-5s-2.243-5-5-5a4.973 4.973 0 0 0-4.865 3.867 1 1 0 0 1-1.518.613A2.977 2.977 0 0 0 5 6zM23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
