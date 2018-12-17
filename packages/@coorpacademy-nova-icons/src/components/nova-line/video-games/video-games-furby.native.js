import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M2.691 2.138c1.458.313 3.756 1.032 4.788 2.227-1.254.813-2.313 1.951-3.087 3.313a4.623 4.623 0 0 1-.793-.479c-1.641-1.232-1.244-3.776-.908-5.061zm17.706 5.061a4.623 4.623 0 0 1-.793.479c-.774-1.361-1.833-2.5-3.087-3.313 1.031-1.195 3.329-1.915 4.787-2.228.337 1.286.734 3.83-.907 5.062zM5 21.998c.027-.222.245-1 1.998-1 1.841 0 1.99.858 2 1H5zm9.998 0c.01-.142.159-1 2-1 1.753 0 1.971.778 1.998 1h-3.998zm-2 0v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-.56-.262-1.384-.985-2.029a4.95 4.95 0 0 0 .985-2.971v-4c0-1.029-.141-2.107-.553-3.5a6.715 6.715 0 0 0 1.152-.699c3.451-2.59 1.42-7.937 1.332-8.164a1.009 1.009 0 0 0-1.066-.628c-.604.082-5.345.803-7.171 3.45a8.155 8.155 0 0 0-5.388 0C7.478.81 2.736.089 2.133.007a1.01 1.01 0 0 0-1.067.628C.979.861-1.053 6.208 2.398 8.798c.384.288.769.517 1.152.699-.412 1.393-.553 2.471-.553 3.5v4c0 1.095.354 2.122.985 2.971-.724.645-.985 1.469-.985 2.029v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h2.001zm-1.006-9.267c-.24 0-.578.184-.768.356a3.484 3.484 0 0 1-2.33.91c-2.3 0-4.523-2.453-2.899-5h12.006c1.624 2.547-.6 5-2.899 5a3.484 3.484 0 0 1-2.33-.91c-.189-.172-.527-.356-.768-.356h-.012zM7.385 6.998c1.232-1.24 2.846-2 4.613-2s3.381.76 4.613 2H7.385zm2.666 13c-.615-.564-1.57-1-3.053-1-.412 0-.781.038-1.119.097a2.957 2.957 0 0 1-.881-2.097v-2.622a5.484 5.484 0 0 0 3.896 1.622c1.067 0 2.204-.416 3.098-1.005h.012c.894.589 2.03 1.005 3.098 1.005a5.484 5.484 0 0 0 3.896-1.622v2.622c0 .803-.326 1.54-.881 2.097a6.355 6.355 0 0 0-1.119-.097c-1.482 0-2.438.436-3.053 1h-3.894z" />
      <Path d="M9.395 9.998a1 1 0 1 1-2 0c0-.085.028-.163.049-.241-.273.341-.445.77-.445 1.241A2 2 0 1 0 8.597 9.04a.984.984 0 0 1 .798.958zM15.395 9.998a1 1 0 1 1-2 0c0-.085.028-.163.049-.241-.273.341-.445.77-.445 1.241a2 2 0 1 0 1.598-1.958.984.984 0 0 1 .798.958z" />
    </G>
  </Svg>
);

export default SvgComponent;
