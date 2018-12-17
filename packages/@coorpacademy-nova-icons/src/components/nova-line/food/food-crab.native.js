import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.629 19.929l.742-1.857-4.188-1.675c.131-.372.249-.735.343-1.071l3.277.655.393-1.961-3.24-.648c.065-.427.092-.617-.186-1.023 1.481-.744 2.427-1.722 2.803-2.926.546-1.745-.313-3.313-.646-3.831.255-1.264-.315-2.598-1.492-3.225L15.493.13a.994.994 0 0 0-.94-.024l-2 1 .895 1.789 1.523-.762 1.251.71-2.39 1.694a1 1 0 0 0 .108 1.698l2.648 1.412a2.983 2.983 0 0 0 2.284.223c.273-.083.521-.214.756-.365.117.387.182.852.035 1.321-.324 1.037-1.567 1.709-2.668 2.114-1.046-.509-2.63-.94-4.995-.94s-3.949.431-4.996.94c-1.096-.404-2.335-1.071-2.664-2.102-.152-.471-.086-.942.033-1.332.233.15.48.281.754.364a2.983 2.983 0 0 0 2.284-.223l2.648-1.412a1 1 0 0 0 .108-1.698l-2.39-1.694 1.251-.71 1.523.762.895-1.789-2-1a1 1 0 0 0-.94.024L4.588 2.353a2.996 2.996 0 0 0-1.515 3.238c-.333.517-1.192 2.086-.646 3.831.376 1.204 1.321 2.183 2.803 2.926-.277.406-.251.596-.185 1.023l-3.241.649.393 1.961 3.277-.655c.094.336.212.7.343 1.071l-4.188 1.675.742 1.857 4.243-1.697c.171.323.355.642.562.947L3.375 22.22l1.25 1.562 3.867-3.093C9.411 21.478 10.562 22 12 22s2.589-.522 3.508-1.313l3.867 3.093 1.25-1.562-3.801-3.041c.206-.306.391-.624.562-.947l4.243 1.699zM18.883 5.471a.993.993 0 0 1-.592.485.985.985 0 0 1-.761-.074l-1.22-.65 1.832-1.301.328.186c.487.26.672.867.413 1.354zM5.552 4.104l.306-.173L7.69 5.232l-1.22.65a.99.99 0 0 1-.761.075.996.996 0 0 1-.592-.485 1.011 1.011 0 0 1 .435-1.368zm1.505 9.175C7.489 12.872 8.79 12 12 12c3.238 0 4.533.888 4.945 1.272C16.68 14.771 15.504 20 12 20c-3.486 0-4.672-5.212-4.943-6.721z" />
      <Path d="M11 14a1 1 0 0 0-1.342.447c-.392.787-.16 1.302.342 1.553a1 1 0 0 0 1.342-.447c.393-.786.16-1.302-.342-1.553zM13 14a1 1 0 0 0-.447 1.342c.394.788.946.909 1.447.658a1 1 0 0 0 .447-1.341c-.394-.789-.946-.909-1.447-.659z" />
    </G>
  </Svg>
);

export default SvgComponent;
