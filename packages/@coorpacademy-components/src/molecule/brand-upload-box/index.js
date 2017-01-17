import React, {PropTypes} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import shallowCompare from '../../util/shallow-compare';
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
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
