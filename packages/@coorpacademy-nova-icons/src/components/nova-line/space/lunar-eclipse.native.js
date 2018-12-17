import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 3c-4.91 0-8.991 4-9 8.989v.014C3 16.885 6.964 21 12 21c4.962 0 9-4.037 9-9s-4.038-9-9-9zM9.51 18.535A7.012 7.012 0 0 1 5 12.009v-.007a7.021 7.021 0 0 1 4.488-6.528c.004 0 .009-.003.014-.005A6.982 6.982 0 0 1 14 12.003a6.986 6.986 0 0 1-4.49 6.532zm3.186.43A8.975 8.975 0 0 0 16 12.003a8.97 8.97 0 0 0-3.313-6.968C16.226 5.382 19 8.372 19 12c0 3.625-2.77 6.615-6.304 6.965z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
