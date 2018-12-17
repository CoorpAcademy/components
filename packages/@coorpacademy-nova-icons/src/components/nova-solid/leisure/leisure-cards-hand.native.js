import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M11.895 7.932l2.474 4.949-1.539 1.878c.433.128 1.023.346 1.455.346.88 0 1.67-.589 1.92-1.432l2.614-8.82a2.002 2.002 0 0 0-1.35-2.485L12.97 1.031l-2.546 7.636 1.471-.735z" />
      <Path d="M23.147 10.075c-.186-.229-3.343-4.129-3.546-4.342l-2.722 9.184a2.007 2.007 0 0 1-2.486 1.35l-2.25-.668-.762.93 1.52 1.869c.38.469.946.738 1.553.738.458 0 .905-.157 1.26-.446l7.141-5.801c.414-.335.673-.814.729-1.347a1.994 1.994 0 0 0-.437-1.467zM12.895 12.168l-1-2a1 1 0 0 0-1.342-.447l-1.841.921 2.237-6.71a1 1 0 0 0-1.283-1.258l-2.818 1a1 1 0 0 0-.551.476l-3.157 6a.995.995 0 0 0-.115.46L3 15.786c0 .02.008.038.008.057l6.002 2 3.764-4.594a1 1 0 0 0 .121-1.081zM8.317 18.666l-6-2a.999.999 0 0 0-1.266.633l-1 3c-.174.524.109 1.09.633 1.266.254.084 6.049 2.051 6.316 2.051.419 0 .809-.265.949-.684l1-3a1.003 1.003 0 0 0-.632-1.266z" />
    </G>
  </Svg>
);

export default SvgComponent;
