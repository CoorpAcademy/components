import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20.37 3.636C18.669 1.936 16.409 1 14.004 1S9.34 1.936 7.64 3.636C4.876 6.4 4.299 10.527 5.89 13.872l-3.905 3.906a3.005 3.005 0 0 0 0 4.243c.585.584 1.353.877 2.121.877s1.536-.292 2.121-.878l3.903-3.903a8.941 8.941 0 0 0 3.874.883 8.95 8.95 0 0 0 6.366-2.635c3.507-3.51 3.507-9.22 0-12.729zM4.813 20.606a1 1 0 0 1-1.414-1.414l3.576-3.577a9 9 0 0 0 .666.75c.238.237.49.458.75.666l-3.578 3.575zm14.143-5.655C17.633 16.272 15.875 17 14.004 17s-3.628-.728-4.951-2.049c-2.728-2.73-2.728-7.172 0-9.9C10.376 3.728 12.134 3 14.004 3s3.628.728 4.951 2.051c2.728 2.728 2.728 7.17.001 9.9z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
