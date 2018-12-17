import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 17c-5.701 0-10 2.15-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-2.85-4.299-5-10-5zM7.8 8.402h-.6v1.199h.6a.6.6 0 1 0 0-1.199zM16.8 9a.6.6 0 0 0-.6-.598h-.6v1.199h.6A.6.6 0 0 0 16.8 9z" />
      <Path d="M20 16.613V8.096C20 8.045 19.908 3 12 3 4.091 3 4 7.796 4 8v8.613C6.062 15.591 8.811 15 12 15s5.938.591 8 1.613zm-5.6-9.411h1.8c.991 0 1.8.808 1.8 1.798 0 .994-.809 1.802-1.8 1.802h-.6V12h-1.2V7.202zM9.6 12H8.211l-.7-1.198H7.2V12H6V7.202h1.8a1.794 1.794 0 1 1 .942 3.327L9.6 12zm1.2-1.198h.6v-2.4h-.6v-1.2h2.4v1.2h-.6v2.399h.6V12h-2.4v-1.198z" />
    </G>
  </Svg>
);

export default SvgComponent;
