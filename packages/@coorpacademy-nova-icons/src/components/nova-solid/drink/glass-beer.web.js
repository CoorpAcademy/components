import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 10h-.557A3.953 3.953 0 0 0 20 7.999c0-2.206-1.795-4-4-4-.312 0-.623.038-.928.114A5.007 5.007 0 0 0 11 2a4.986 4.986 0 0 0-3.978 2H7C4.795 4 3 5.794 3 8c0 1.419.752 2.669 1.871 3.378L4.086 20H3v2h16v-2h-1.086l-.092-1H20c1.104 0 2-.897 2-2v-5a2 2 0 0 0-2-2zm-10 5v4H8v-4h2zm2-1h2v5h-2v-5zM7.353 6.037a.995.995 0 0 0 1.045-.496A2.998 2.998 0 0 1 11 4c1.165 0 2.234.69 2.723 1.76.113.248.324.439.582.53.258.088.542.068.785-.057 1.39-.716 2.91.36 2.91 1.766 0 1.148-.975 2-2 2-.58 0-1.134-.263-1.519-.723-.16-.189-.524-.341-.704-.354a1.006 1.006 0 0 0-.429.078c-.678.27-.467.602-1.608.894A.992.992 0 0 0 11 11c0 .551-.449 1-1 1s-1-.449-1.002-.961c0-.411.056-.686-.36-1.013a1.001 1.001 0 0 0-.619-.215C7.778 9.811 7.391 10 7 10a2.034 2.034 0 0 1-1.585-.794A1.982 1.982 0 0 1 5 7.999c0-1.2 1.074-2.189 2.353-1.962zM20 17h-2.359l-.455-5H20v5z"
    />
  </svg>
);

export default SvgComponent;
