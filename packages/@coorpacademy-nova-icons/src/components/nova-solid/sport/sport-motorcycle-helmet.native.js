import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M22.265 9.705C22.12 8.723 21.279 7 20.287 7h-.635C17.921 4.014 14.699 2 11 2 5.477 2 1 5.477 1 11c0 2.254.755 3.328 2.014 6l15.973 3c.461-.978.852-2.009 1.165-3.034.174.008.336.034.515.034.62 0 1.235-.084 1.689-.504.455-.421.69-1.029.635-1.646-.151-1.709-.53-3.815-.726-5.145zM10 9h10s1 2.25 1 6c-10 0-11-3-11-6z"
    />
  </Svg>
);

export default SvgComponent;
