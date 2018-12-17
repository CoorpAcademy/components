import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-3.905 13.133c-1.498 1.498-2.757 1.679-3.583 1.356L9 18H7l2.512-2.512c-.284-.725-.178-1.782.863-3.043L12 14.071v-3.054C14.092 9.674 17 9 17 9s-.968 4.195-2.905 6.133z"
    />
  </Svg>
);

export default SvgComponent;
