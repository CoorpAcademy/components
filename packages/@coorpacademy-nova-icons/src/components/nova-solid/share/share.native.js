import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 14c-1.2 0-2.266.541-3 1.381l-5.092-2.545a3.894 3.894 0 0 0 0-1.673L15 8.618c.734.84 1.8 1.382 3 1.382 2.205 0 4-1.795 4-4 0-2.206-1.795-4-4-4s-4 1.794-4 4c0 .287.033.566.092.836L9 9.381A3.978 3.978 0 0 0 6 8c-2.205 0-4 1.794-4 4 0 2.205 1.795 4 4 4 1.2 0 2.266-.543 3-1.383l5.092 2.546c-.059.271-.092.55-.092.837 0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4z"
    />
  </Svg>
);

export default SvgComponent;
