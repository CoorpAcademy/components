import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.788 1.385A.998.998 0 0 0 19 1H5a.998.998 0 0 0-.97 1.243 15.531 15.531 0 0 1 0 7.514A1 1 0 0 0 5 11h6v2.698l-5.832 8.748A.998.998 0 0 0 6 24h12a1 1 0 0 0 .832-1.554L13 13.696V11h6a.998.998 0 0 0 .97-1.243 15.531 15.531 0 0 1 0-7.514.997.997 0 0 0-.182-.858zM12 15.803L13.465 18h-2.93L12 15.803zM7.868 22l1.333-2h5.596l1.333 2H7.868zM13 3v6h-2V3h2zM6.233 3H9v6H6.233a17.57 17.57 0 0 0 0-6zm11.534 6H15V3h2.767a17.57 17.57 0 0 0 0 6zM22.334 2.131L21 3.463a3.775 3.775 0 0 1 0 5.334l1.334 1.334a5.666 5.666 0 0 0 0-8zM1.669 2.131a5.663 5.663 0 0 0 0 8L3 8.797a3.775 3.775 0 0 1 0-5.334L1.669 2.131z" />
    </G>
  </Svg>
);

export default SvgComponent;
