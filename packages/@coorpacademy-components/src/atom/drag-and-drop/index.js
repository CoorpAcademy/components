import React from "react";
import PropTypes from "prop-types";
import { uniqueId, get } from "lodash/fp";
import { NovaSolidDataTransferDataUpload1 as UploadIcon } from "@coorpacademy/nova-icons";
import Provider from "../provider";
import Loader from "../loader";
import style from "./style.css";

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart() {
    this.setState(prevState => ({
      dragging: true
    }));
  }

  handleDragStop() {
    this.setState(prevState => ({
      dragging: false
    }));
  }

  render() {
    const { skin } = this.context;
    const { dragging } = this.state;
    const brandColor = get("common.brand", skin);
    const idBox = uniqueId("drop-box-");
    const {
      children = () => null,
      title,
      description,
      uploadLabel,
      previewLabel = "",
      previewContent,
      loading = false,
      modified = false
    } = this.props;

    let previewView = null;

    console.log("DRAGGING", dragging);

    if (previewContent && previewContent.type === "image") {
      previewView = (
        <div className={style.previewView}>
          <img src={previewContent.src} />
        </div>
      );
    } else if (previewContent && previewContent.type === "video") {
      previewView = (
        <div className={{ ...style.previewView, width: "300px" }}>
          <video
            width="100%"
            controls
            src={previewContent.src}
            type="video/*"
          />
        </div>
      );
    } else if (loading) {
      previewView = (
        <div className={style.loading}>
          <Loader />
        </div>
      );
    } else {
      previewView = <span>{previewLabel}</span>;
    }

    const overlay = (
      <div className={style.overlay}>
        <UploadIcon className={style.arrow} />
        <p>{"description"}</p>
      </div>
    );

    // <div className={modified ? style.modified : style.previewWrapper}>{previewView}</div>

    return (
      <div className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.inputWrapper}>
          <div className={style.uploadLabel}>{uploadLabel}</div>
          {dragging
            ? children(this.handleDragStart, this.handleDragStop)
            : null}
        </div>
        {overlay}
      </div>
    );
  }
}

DragAndDrop.contextTypes = {
  skin: Provider.childContextTypes.skin
};

DragAndDrop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  uploadLabel: PropTypes.string,
  previewLabel: PropTypes.string,
  previewContent: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  }),
  loading: PropTypes.bool,
  modified: PropTypes.bool
};

export default DragAndDrop;
