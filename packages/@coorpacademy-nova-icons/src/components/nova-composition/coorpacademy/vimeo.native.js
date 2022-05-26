import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 1024 1024" {...props}>
    <Path d="M1023.6 274c-4.6 99.6-74.2 236.2-208.8 409.4-139.2 180.8-257 271.4-353.4 271.4-59.6 0-110.2-55-151.4-165.2-27.6-101-55-202-82.6-303-30.6-110.2-63.4-165.2-98.6-165.2-7.6 0-34.4 16.2-80.4 48.2l-48.2-62c50.6-44.4 100.4-88.8 149.4-133.2 67.4-58.2 118-88.8 151.8-92 79.6-7.6 128.8 46.8 147.2 163.4 19.8 125.8 33.6 204 41.4 234.6C513 584.8 538.2 637 565.8 637c21.4 0 53.6-33.8 96.6-101.6 42.8-67.6 65.8-119.2 69-154.6 6.2-58.4-16.8-87.8-69-87.8-24.6 0-49.8 5.6-75.8 16.8C637 145 733 65 875 69.6c105 2.8 154.6 71 148.6 204.4z" />
  </Svg>
);

export default SvgComponent;
