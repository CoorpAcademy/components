import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      d="M16 5.75a.748.748 0 0 0-.983-.712l-5 1.63a.746.746 0 0 0-.517.711v3.175a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H11v-4l3.5-1.141v2.771a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H16V5.75z"
      fill="currentColor"
    />
    <path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.767L9.361 15h5.277l5.721-4.768A1.002 1.002 0 0 1 22 11v9c0 1.102-.896 2-2 2zM4 13.134V20h16.002L20 13.134l-4.359 3.633c-.18.15-.407.233-.641.233H9c-.234 0-.461-.082-.641-.232L4 13.134zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
