import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002 0h24.001v24.001H-.002z" />
    <Path
      fill="currentColor"
      d="M19.383 2.076a1 1 0 0 0-1.09.217c-.985.985-1.956 1.484-2.885 1.484-1.532 0-2.602-1.368-2.608-1.377a1.003 1.003 0 0 0-.796-.398c-.275-.02-.609.146-.801.393-.01.014-1.079 1.382-2.61 1.382-.93 0-1.9-.499-2.886-1.484A1 1 0 0 0 4 3v11c0 3.808 6.763 7.479 7.534 7.885a.998.998 0 0 0 .932 0C13.237 21.479 20 17.808 20 14V3a1 1 0 0 0-.617-.924zM16 13h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"
    />
  </Svg>
);

export default SvgComponent;
