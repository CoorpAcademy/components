import React from "react";
import PropTypes from "prop-types";
import Tag from "../../atom/tag";
import ButtonLink from "../../atom/button-link";
import BulletPointMenuButton from "../../molecule/bullet-point-menu-button";
import style from "./style.css";

const CustomPlaylist = (props) => {
  const { title } = props;
  return (
    <div className={style.wrapper} style={{ marginTop: "150px" }}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <div>
          <Tag label="Published" type="published" />
        </div>
        <div className={style.edit}>
          <ButtonLink
            type="secondary"
            label="Edit"
            ariaLabel="aria button"
            dataName="default-button"
            icon={{
              position: "left",
              type: "edit",
            }}
          />
        </div>
        <BulletPointMenuButton
          buttonAriaLabel="aria button"
          menuAriaLabel="aria menu"
          buttons={[
            {
              "data-name": "menu-archive-button",
              label: "Archive",
              type: "default",
            },
            {
              "data-name": "menu-delete-button",
              label: "Delete",
              type: "dangerous",
            },
          ]}
        />
      </div>
    </div>
  );
};

CustomPlaylist.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomPlaylist;
