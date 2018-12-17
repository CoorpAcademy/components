import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.25 15.501h1.5v1.5h-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM9 20H7.5v-2.772l-.126.188c-.278.419-.97.419-1.248 0L6 17.228V20H4.5v-5.25a.749.749 0 0 1 1.374-.415l.876 1.315.876-1.315A.749.749 0 1 1 9 14.75V20zm5.25 0h-1.5v-1.5h-1.5V20h-1.5v-5.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V20zm5.25 0h-1.688l-.562-1.198L16.688 20H15l1.406-3L15 14h1.688l.562 1.201.562-1.201H19.5l-1.406 3 1.406 3zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
