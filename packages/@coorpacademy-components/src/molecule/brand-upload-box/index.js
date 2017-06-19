import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import getOr from 'lodash/fp/getOr';
import UploadIcon from '@coorpacademy/nova-icons/solid/data-transfer/data-upload-1';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';
import style from './style.css';

class BrandUploadBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart() {
    this.setState({
      dragging: true
    });
  }

  handleDragStop() {
    this.setState({
      dragging: false
    });
  }

  render() {
    const idBox = uniqueId('drop-box-');
    const {skin} = this.context;

    let content;

    const {description = '', browse = '', onLoad} = this.props;
    const brandColor = getOr('#00B0FF', 'common.brand', skin);

    switch (this.props.status) {
      case 'loading':
        content = (
          <div className={style.loading}>
            <Loader />
          </div>
        );
        break;

      default:
        content = (
          <div className={style.wrapper}>
            <div id={idBox} className={this.state.dragging ? style.dropping : style.default}>
              <div className={style.cont}>
                <UploadIcon color={brandColor} className={style.arrow} />
                <div className={style.desc}>
                  {description}
                </div>
                <span className={style.browse}>{browse}</span>
              </div>
              <input
                type="file"
                className={style.inputFile}
                onChange={onLoad}
                onDragEnter={this.handleDragStart}
                onDrop={this.handleDragStop}
                onDragLeave={this.handleDragStop}
              />
            </div>
          </div>
        );
    }

    return content;
  }
}

BrandUploadBox.propTypes = {
  description: PropTypes.string,
  browse: PropTypes.string,
  status: PropTypes.oneOf(['default', 'loading']),
  onLoad: PropTypes.func
};
export default BrandUploadBox;
