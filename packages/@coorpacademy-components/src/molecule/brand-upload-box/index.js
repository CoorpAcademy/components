import React, {PropTypes} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import Loader from '../../atom/loader';
import style from './style.css';

class BrandUploadBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.onDragStartBound = this.onDragStart.bind(this);
    this.onDragStopBound = this.onDragStop.bind(this);
  }

  onDragStart() {
    this.setState({
      dragging: true
    });
  };

  onDragStop() {
    this.setState({
      dragging: false
    });
  };

  render() {
    const idBox = uniqueId('drop-box-');
    let content;

    const {
      description = '',
      browse = '',
      onLoad
    } = this.props;

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
            <div
              id={idBox}
              className={this.state.dragging ? style.dropping : style.default}
            >
              <div className={style.cont}>
                <i className={style.arrow} />
                <div className={style.desc}>
                  {description}
                </div>
                <span className={style.browse}>{browse}</span>
              </div>
              <input
                type='file'
                className={style.inputFile}
                onChange={onLoad}
                onDragEnter={this.onDragStartBound}
                onDrop={this.onDragStopBound}
                onDragLeave={this.onDragStopBound}
              />
            </div>
          </div>
        );
    }

    return content;
  }
};

BrandUploadBox.propTypes = {
  description: PropTypes.string,
  browse: PropTypes.string,
  status: PropTypes.oneOf(['default', 'loading', 'dropping']),
  onLoad: PropTypes.func
};
export default BrandUploadBox;
