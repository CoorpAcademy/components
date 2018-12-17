import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3.643 14.015l1.715-1.029L4.766 12h12.461l-.564.934 1.712 1.034 1.48-2.45A1 1 0 0 0 19 10H3a1 1 0 0 0-.857 1.514l1.5 2.501zM10.007 9h5a.999.999 0 0 0 .814-1.581l-5-7A1 1 0 0 0 9.007 1v7a1 1 0 0 0 1 1zm1-4.879L13.063 7h-2.057V4.121zM22 15h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382v-2c-1.103 0-2-.897-2-2zM22 20h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382s2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382v-2c-1.103 0-2-.897-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
