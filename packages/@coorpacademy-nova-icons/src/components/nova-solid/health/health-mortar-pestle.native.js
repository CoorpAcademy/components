import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M2 11h20v2H2zM6 20h12v2H6zM18.415 10C19.894 7.873 22 4.718 22 4c0-1.103-.896-2-2-2-1.211 0-6.792 5.663-9.044 8h7.459zM3.227 14a9.021 9.021 0 0 0 3.128 5h11.289a9.016 9.016 0 0 0 3.128-5H3.227z"
    />
  </Svg>
);

export default SvgComponent;
