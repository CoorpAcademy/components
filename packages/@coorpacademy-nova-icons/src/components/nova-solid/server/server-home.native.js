import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM8 19a8.96 8.96 0 0 1 1.518-5H0v4c0 1.103.896 2 2 2h6.059A9.164 9.164 0 0 1 8 19zm0-1H3v-2h5v2zM0 7v6h10.305a9.024 9.024 0 0 1 2.617-2.016A.992.992 0 0 1 12 10a1 1 0 1 1 2 0 .98.98 0 0 1-.225.606c.41-.158.832-.289 1.269-.387-.017-.073-.044-.141-.044-.219a1 1 0 1 1 2 0c1.054 0 2.06.191 3 .524V7H0zm8 4H3V9h5v2zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
