import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 7c-2.206 0-4 1.795-4 4 0 .983.371 1.874.962 2.571a95.24 95.24 0 0 1 1.284-1.631A1.967 1.967 0 0 1 10 11c0-1.104.897-2 2-2s2 .896 2 2c0 .901-.603 1.656-1.423 1.905-.103.688-.216 1.41-.331 2.07C14.335 14.846 16 13.121 16 11c0-2.205-1.794-4-4-4z"
      fill="currentColor"
    />
    <Path
      d="M9.231 17.419a1.242 1.242 0 0 0 1.606-.628c.2-.457.597-2.934.908-5.113-1.391 1.707-2.942 3.679-3.142 4.134-.27.616.012 1.337.628 1.607z"
      fill="currentColor"
    />
    <Circle cx={15} cy={17} r={1} fill="currentColor" />
    <Path
      d="M18 22H6c-1.103 0-2-.897-2-2V5c0-1.104.897-2 2-2h12c1.103 0 2 .896 2 2v15c0 1.103-.897 2-2 2zM6 5v15h12.001L18 5H6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
