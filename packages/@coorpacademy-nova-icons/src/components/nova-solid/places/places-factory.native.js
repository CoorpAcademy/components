import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M21.179 13.852L11 12V8.721a1 1 0 0 0-.684-.949L6 6.333V3H4v2.667l-.684-.228A1.002 1.002 0 0 0 2 6.387V20a1 1 0 0 0 1 1h2v-5h3v5h13a1 1 0 0 0 1-1v-5.165a1 1 0 0 0-.821-.983zM6.5 13a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 13zM20 19h-8v-2h8v2z"
    />
  </Svg>
);

export default SvgComponent;
