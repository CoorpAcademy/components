import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M22 11h-2.069A8.01 8.01 0 0 0 13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.01 8.01 0 0 0 19.931 13H22v-2zm-4.09 0h-3.093A2.986 2.986 0 0 0 13 9.184V6.09A6.008 6.008 0 0 1 17.91 11zM11 6.09v3.093A2.989 2.989 0 0 0 9.184 11H6.09A6.008 6.008 0 0 1 11 6.09zM6.09 13h3.093a2.985 2.985 0 0 0 1.816 1.816v3.093A6.006 6.006 0 0 1 6.09 13zM13 17.91v-3.093a2.982 2.982 0 0 0 1.816-1.816h3.093A6.006 6.006 0 0 1 13 17.91z"
    />
  </Svg>
);

export default SvgComponent;
