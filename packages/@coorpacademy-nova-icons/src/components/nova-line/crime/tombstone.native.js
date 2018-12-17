import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 18.936V8.095C20 8.044 19.908 3 12 3 4.091 3 4 7.796 4 8v10.907h.042C2.756 19.748 2 20.811 2 22v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-1.176-.74-2.229-2-3.064zM6 8.018C6.004 7.895 6.18 5 12 5c5.824 0 5.996 2.984 6 3.095v9.857c-1.65-.6-3.708-.952-6-.952s-4.35.352-6 .952V8.018zM4 22c0-1.223 3.117-3 8-3s8 1.777 8 3H4z" />
      <Path d="M13 13v-1h-.5v-2h.5V9h-2v1h.5v2H11v1zM15 12h.5a1.5 1.5 0 0 0 0-3H14v4h1v-1zm0-2h.5a.5.5 0 0 1 0 1H15v-1zM10 10.5C10 9.675 9.327 9 8.5 9H7v4h1v-1h.259l.584 1H10l-.716-1.226c.429-.265.716-.734.716-1.274zm-1.5.5H8v-1h.5a.5.5 0 0 1 0 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
