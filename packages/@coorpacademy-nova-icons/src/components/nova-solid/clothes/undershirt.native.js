import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <Path
      fill="currentColor"
      d="M18 16c0-.663.347-1.164.785-1.799C19.326 13.418 20 12.443 20 11c0-1.242-1.004-3.328-3-3.867V2h-2v5.705C14.725 8.084 13.868 9 12 9c-1.877 0-2.732-.924-3-1.292V2H7v5.133C5.004 7.672 4 9.758 4 11c0 1.443.674 2.418 1.215 3.201C5.653 14.836 6 15.337 6 16c0 .19-.107.482-.243.853C5.455 17.677 5 18.921 5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-2.079-.455-3.323-.757-4.147C18.107 16.482 18 16.19 18 16z"
    />
  </Svg>
);

export default SvgComponent;
