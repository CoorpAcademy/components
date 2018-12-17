import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <Path
      fill="currentColor"
      d="M12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm1 2.08a6.947 6.947 0 0 1 3.184 1.322L13 9.586V5.08zm-2 4.506L7.816 6.402A6.947 6.947 0 0 1 11 5.08v4.506zM9.586 11H5.08a6.955 6.955 0 0 1 1.322-3.185L9.586 11zm0 2l-3.184 3.185A6.955 6.955 0 0 1 5.08 13h4.506zM11 14.414v4.506a6.947 6.947 0 0 1-3.184-1.322L11 14.414zm2 0l3.184 3.185A6.956 6.956 0 0 1 13 18.92v-4.506zM14.414 13h4.506a6.955 6.955 0 0 1-1.322 3.185L14.414 13zm0-2l3.184-3.185A6.955 6.955 0 0 1 18.92 11h-4.506z"
    />
  </Svg>
);

export default SvgComponent;
