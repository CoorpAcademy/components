import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M21.971 10.757C21.107 7.309 18.352 5.821 17 5.286V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2.286c-1.352.535-4.107 2.023-4.971 5.472A1 1 0 0 0 3 12l.38-.002A5.712 5.712 0 0 0 3 14c0 4.365 3.158 7.573 3.293 7.707A.996.996 0 0 0 7 22h10c.266 0 .52-.105.707-.293C17.842 21.573 21 18.365 21 14c0-.676-.137-1.345-.381-2.002L21 12a1 1 0 0 0 .971-1.243zM9 4h6v1H9V4zm-.861 3h7.723c.504.154 2.584.898 3.679 2.96-1.855-.099-3.491-.37-3.833-.667A1 1 0 0 0 14 10c0 .334-.096 2-2 2-1.826 0-1.992-1.537-2-2 0-.392-.252-.726-.609-.888a.944.944 0 0 0-.395-.084c-.252 0-.507.093-.699.261-.346.301-1.981.572-3.837.671C5.557 7.894 7.641 7.152 8.139 7zM19 14c0 2.854-1.764 5.202-2.444 6H7.442C6.761 19.205 5 16.873 5 14c0-.702.227-1.411.648-2.114.898-.081 1.835-.214 2.611-.443C8.73 12.746 9.875 14 12 14s3.27-1.254 3.74-2.557c.776.229 1.713.362 2.612.443.421.703.648 1.412.648 2.114z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
