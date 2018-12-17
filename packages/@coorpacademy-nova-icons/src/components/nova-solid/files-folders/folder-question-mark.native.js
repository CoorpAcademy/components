import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.146V16h-2v-2h1c.827 0 1.5-.673 1.5-1.5S11.827 11 11 11s-1.5.673-1.5 1.5h-2C7.5 10.57 9.07 9 11 9s3.5 1.57 3.5 3.5a3.505 3.505 0 0 1-2.5 3.354z"
    />
  </Svg>
);

export default SvgComponent;
