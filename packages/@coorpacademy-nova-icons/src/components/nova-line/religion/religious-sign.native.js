import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <Path
      d="M12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm1 2.08a6.955 6.955 0 0 1 3.185 1.322L13 9.587V5.08zm-2 4.507L7.815 6.402A6.955 6.955 0 0 1 11 5.08v4.507zM9.585 11H5.08a6.95 6.95 0 0 1 1.321-3.184L9.585 11zm.002 2l-3.185 3.186A6.959 6.959 0 0 1 5.08 13h4.507zM11 14.416v4.504a6.945 6.945 0 0 1-3.184-1.321L11 14.416zm2 0l3.184 3.183A6.945 6.945 0 0 1 13 18.92v-4.504zM14.413 13h4.507a6.959 6.959 0 0 1-1.322 3.186L14.413 13zm.002-2l3.184-3.184A6.95 6.95 0 0 1 18.92 11h-4.505z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
