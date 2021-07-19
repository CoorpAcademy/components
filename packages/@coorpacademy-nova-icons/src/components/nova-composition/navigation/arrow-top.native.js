import * as React from "react";
import Svg, { G, Defs, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Defs>
        <Path id="prefix__a" d="M0 0h24v24H0z" />
      </Defs>
      <Path
        fill={props.color}
        d="M.2 17.7l2.6 2.1c.1.2.2.2.3.2.1 0 .3-.1.3-.2l8.5-9.7 8.5 9.7c.1.1.2.2.3.2.1 0 .3 0 .4-.1l2.6-2.1c.1-.1.2-.2.2-.3 0-.1 0-.3-.1-.4L12.4 4.2c-.1-.1-.3-.2-.4-.2-.1 0-.3.1-.4.2L.1 17.1c-.1.1-.1.2-.1.3 0 .1.1.3.2.3z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
