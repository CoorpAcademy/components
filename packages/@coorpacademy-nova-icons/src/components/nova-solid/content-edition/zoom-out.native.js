import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.414 18.586l-4.527-4.527A7.95 7.95 0 0 0 18 10a7.945 7.945 0 0 0-2.344-5.656C14.146 2.832 12.137 2 10 2s-4.146.832-5.656 2.344C2.832 5.854 2 7.863 2 10s.832 4.146 2.344 5.656A7.94 7.94 0 0 0 10 18a7.95 7.95 0 0 0 4.059-1.113l4.527 4.526c.377.379.88.587 1.414.587s1.037-.208 1.414-.586c.378-.378.586-.879.586-1.414 0-.534-.208-1.036-.586-1.414zM14 11H6V9h8v2z"
    />
  </Svg>
);

export default SvgComponent;
