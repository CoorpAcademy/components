import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
    <Path d="M325.8 457.4v111.8h184.8c-7.4 48-55.8 140.6-184.8 140.6-111.2 0-202-92.2-202-205.8s90.8-205.8 202-205.8c63.4 0 105.6 27 129.8 50.2l88.4-85.2c-56.8-53-130.4-85.2-218.2-85.2C145.6 178.2 0 323.8 0 504s145.6 325.8 325.8 325.8c188 0 312.8-132.2 312.8-318.4 0-21.4-2.4-37.8-5.2-54H325.8zM1024 448h-96v-96h-96v96h-96v96h96v96h96v-96h96z" />
  </Svg>
);

export default SvgComponent;
