import React from 'react';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PDFIcon from '@coorpacademy/nova-icons/line/files-office/file-office-pdf';
import ResourceMiniature from '../../atom/resource-miniature';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import VideoPlayer from '../../molecule/video-iframe';
import style from './style.css';

const SelectedVideo = ({videoId, autoplay = false}) =>
  <VideoPlayer type="vimeo" id={videoId} height="100%" width="auto" autoplay={autoplay} />;

const SelectedPDF = (props, context) => {
  const {description, mediaUrl} = props;
  const {translate, skin} = context;

  const dark = get('common.dark', skin);
  const brand = get('common.brand', skin);

  return (
    <div className={style.pdfFrame}>
      <PDFIcon color={dark} className={style.pdfIcon} />
      <div className={style.pdfDescription}>{description}</div>
      <Link href={mediaUrl} target="_blank">
        <div className={style.openPDFButton} style={{borderColor: brand, color: brand}}>
          <div className={style.openPDFButtonBackground} style={{backgroundColor: brand}} />
          <label className={style.openPDFButtonLabel}>{translate('Open')}</label>
        </div>
      </Link>
    </div>
  );
};

SelectedPDF.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

const SELECTED_TYPES = {
  video: SelectedVideo,
  pdf: SelectedPDF
};

const ResourceBrowser = props => {
  const {resources, className} = props;
  const selectedResource = resources.find(({selected}) => selected);
  const SelectedResourceType = selectedResource && SELECTED_TYPES[selectedResource.type];

  return (
    <div className={classnames(style.default, className)}>
      <div className={style.playerWrapper}>
        {selectedResource ? <SelectedResourceType {...selectedResource} /> : null}
      </div>
      <div className={style.resourcesList}>
        {resources.map(resource => <ResourceMiniature key={resource._id} {...resource} />)}
      </div>
    </div>
  );
};

const resourcePropTypeBase = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const videoPropType = PropTypes.shape({
  ...resourcePropTypeBase,
  videoId: VideoPlayer.propTypes.id.isRequired,
  autoplay: VideoPlayer.propTypes.autoplay
});

const pdfPropType = PropTypes.shape({
  ...resourcePropTypeBase,
  mediaUrl: PropTypes.string.isRequired
});

ResourceBrowser.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.oneOfType([videoPropType, pdfPropType]))
};

export default ResourceBrowser;
