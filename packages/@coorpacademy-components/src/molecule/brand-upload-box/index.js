import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, get} from 'lodash/fp';
import {NovaSolidDataTransferDataUpload1 as UploadIcon} from '@coorpacademy/nova-icons';
import Loader from '../../atom/loader';
import style from './style.css';

class BrandUploadBox extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    browse: PropTypes.string,
    status: PropTypes.oneOf(['default', 'loading']),
    onLoad: PropTypes.func
  };

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
    const {status} = this.props;
    const {dragging} = this.state;

    let content;

    const {description = '', browse = '', onLoad, name} = this.props;
    const brandColor = get('common.brand', skin);

    switch (status) {
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
            <div id={idBox} className={dragging ? style.dropping : style.default}>
              <div className={style.cont}>
                <UploadIcon style={{color: brandColor}} className={style.arrow} />
                <div className={style.desc}>{description}</div>
                <span className={style.browse}>{browse}</span>
              </div>
              <input
                type="file"
                name={name}
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

export default BrandUploadBox;
