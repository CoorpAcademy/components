import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M20.707 3.294a.995.995 0 0 0-1.324-.079L7.577 12.489A2.988 2.988 0 0 0 5 11c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3a2.996 2.996 0 0 0 2.88-2.206l2.521-1.98.785.786-1.98 2.521A2.993 2.993 0 0 0 7 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.987 2.987 0 0 0-1.489-2.577l9.275-11.804a.998.998 0 0 0-.079-1.325zM5 15a1.001 1.001 0 1 1 1-1c0 .551-.449 1-1 1zm5 5a1.001 1.001 0 1 1 1-1c0 .551-.449 1-1 1zm2.43-7.984l-.445-.446 2.081-1.635-1.636 2.081z"
    />
  </Svg>
);

export default SvgComponent;
