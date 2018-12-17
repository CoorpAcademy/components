import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      d="M22 7h-1V4h-2v1H7V4H5v1C3.346 5 2 6.346 2 8v4c0 .379.214.725.553.895l1.34.67-.879 5.271A.999.999 0 0 0 4 20h7v-2h-.819l.667-4H12v2h2v-2h6a1 1 0 0 0 1-1V9h1V7zM5 7h2v1h6V7h6v2H4V8c0-.552.449-1 1-1zm5 5a1 1 0 0 0-.986.836L8.152 18H5.181l.806-4.836a.998.998 0 0 0-.539-1.058L4 11.382V11h15v1h-9z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
