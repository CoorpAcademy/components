import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.042 23c-9.886 0-10-16.306-10-17 0-.363.197-.697.514-.874l9-5a1 1 0 0 1 .972 0l9 5c.317.177.514.511.514.874 0 .694-.114 17-10 17zM4.057 6.58C4.167 9.341 5.045 21 12.042 21s7.875-11.659 7.984-14.42l-7.984-4.437L4.057 6.58z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M12.38 16.816L7.292 13l1.5-2 2.911 2.184 4.278-6.846 2.121 1.325z"
    />
  </Svg>
);

export default SvgComponent;
