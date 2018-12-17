import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      d="M20.915 20.594l-8-18a1.001 1.001 0 0 0-1.829 0l-8 18A1 1 0 0 0 4 22h16a1.001 1.001 0 0 0 .915-1.406zM12 5.463L14.017 10H9.983L12 5.463zM10.766 20L12 17.943 13.235 20h-2.469zm4.801 0l-2.709-4.514c-.361-.603-1.354-.603-1.715 0L8.434 20H5.54l3.555-8h5.813l3.555 8h-2.896z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
