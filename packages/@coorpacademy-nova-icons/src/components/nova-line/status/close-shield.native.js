import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.042 23c-9.886 0-10-16.306-10-17 0-.363.197-.697.514-.874l9-5a1 1 0 0 1 .972 0l9 5c.317.177.514.511.514.874 0 .695-.114 17-10 17zM4.057 6.581C4.167 9.342 5.045 21 12.042 21s7.875-11.659 7.984-14.42l-7.984-4.437-7.985 4.438z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M16.789 7.665l-1.495-1.329-3.252 3.66-3.253-3.66-1.495 1.329 3.41 3.835-3.41 3.836 1.495 1.329 3.253-3.66 3.252 3.66 1.495-1.329-3.41-3.836z"
    />
  </Svg>
);

export default SvgComponent;
