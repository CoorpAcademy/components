import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={14} r={2} />
      <path d="M10 10a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM12 11a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM15 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1z" />
      <path d="M23.001 11.999a3.996 3.996 0 0 0-2.297-3.605 4.005 4.005 0 0 0-.925-4.173c-1.082-1.082-2.758-1.438-4.174-.926A4 4 0 0 0 12 1a4 4 0 0 0-3.605 2.295c-1.416-.512-3.091-.155-4.173.927a3.997 3.997 0 0 0-.926 4.174A3.997 3.997 0 0 0 1 12c0 1.582.936 2.964 2.296 3.606a4 4 0 0 0 .925 4.172c1.083 1.083 2.758 1.438 4.174.927A4.002 4.002 0 0 0 12 23c1.58 0 2.962-.936 3.604-2.295.434.156.894.238 1.361.238a3.956 3.956 0 0 0 2.813-1.165 3.996 3.996 0 0 0 .925-4.174 4.001 4.001 0 0 0 2.298-3.605zm-3.873 1.985a1 1 0 0 0-.684 1.657 1.996 1.996 0 0 1-.079 2.722c-.72.718-1.96.752-2.727.08a1 1 0 0 0-1.657.687A1.995 1.995 0 0 1 12 21a1.998 1.998 0 0 1-1.982-1.871.999.999 0 0 0-1.658-.685c-.765.672-2.005.638-2.725-.079a2 2 0 0 1-.079-2.725 1 1 0 0 0-.686-1.658A1.997 1.997 0 0 1 3 12a2 2 0 0 1 1.871-1.982 1 1 0 0 0 .686-1.658 1.996 1.996 0 0 1 .079-2.724c.718-.72 1.959-.751 2.725-.079a1 1 0 1 0 1.657-.687C10.086 3.821 10.957 3 12 3s1.914.821 1.982 1.87c.025.38.264.713.616.858a.997.997 0 0 0 1.042-.171c.765-.672 2.007-.639 2.724.078.737.738.772 1.936.08 2.727a1 1 0 0 0 .688 1.656 1.996 1.996 0 0 1 1.87 1.98 2.006 2.006 0 0 1-1.874 1.986z" />
    </g>
  </svg>
);

export default SvgComponent;
