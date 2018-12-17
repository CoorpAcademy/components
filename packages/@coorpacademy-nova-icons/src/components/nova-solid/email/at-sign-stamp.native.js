import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={1.25} />
      <Path d="M22 4.999V4a2 2 0 0 0-2-2h-1v2h-2V2h-2v2h-2V2h-2v2H9V2H7v2H5V2H4a2 2 0 0 0-2 2v1h2v2H2v2h2v2H2v2h2v2H2v2h2v2H2v1a2 2 0 0 0 2 2h1v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h1a2 2 0 0 0 2-2v-1h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2zm-4.25 7.436c0 1.494-.902 2.537-2.194 2.537h-.223c-.6 0-1.2-.358-1.602-.854A2.721 2.721 0 0 1 12 14.75c-1.517 0-2.75-1.233-2.75-2.75S10.483 9.25 12 9.25s2.75 1.233 2.75 2.75v.906c0 .196.381.567.583.567h.223c.626 0 .694-.726.694-1.037V12c0-2.344-1.907-4.25-4.25-4.25S7.75 9.656 7.75 12a4.255 4.255 0 0 0 6.652 3.512l.848 1.238a5.757 5.757 0 0 1-9-4.75c0-3.171 2.58-5.75 5.75-5.75s5.75 2.579 5.75 5.75v.435z" />
    </G>
  </Svg>
);

export default SvgComponent;
