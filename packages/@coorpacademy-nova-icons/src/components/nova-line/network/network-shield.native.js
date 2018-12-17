import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 8h4v.994h2V8h3.736c.084.324.15.656.195.994h2.018C19.443 3.951 15.175 0 10 0 4.486 0 0 4.486 0 10s4.486 10 10 10v-2a7.959 7.959 0 0 1-2-.264V14h2v-2H8V8zm6-4.918A8.051 8.051 0 0 1 16.918 6H14V3.082zm-6-.818C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM6 16.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6z" />
      <Path d="M12 11v7c0 3.818 3.797 5.582 5.805 5.98l.195.04.195-.039C20.203 23.582 24 21.818 24 18v-7H12zm10 7c0 2.77-3.16 3.761-4 3.974-.84-.213-4-1.204-4-3.974v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
