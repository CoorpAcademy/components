import React from 'react';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaLineFilesOfficeFileOfficePdf as PDFIcon} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const PDF = (props, context) => {
  const {description, mediaUrl, poster, onPlay} = props;
  const {translate, skin} = context;

  const white = get('common.white', skin);
  const primary = get('common.primary', skin);

  return (
    <div
      className={style.pdfFrame}
      style={{
        backgroundImage: `url(${poster})`
      }}
    >
      <PDFIcon style={{color: white}} className={style.pdfIcon} />
      <div
        className={classnames(style.pdfDescription, style.innerHTML)}
        data-name="pdfDescription"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: description}}
      />

      <Link href={mediaUrl} target="_blank" onClick={onPlay}>
        <div className={style.openPDFButton}>
          <div className={style.openPDFButtonBackground} style={{backgroundColor: primary}} />
          <label className={style.openPDFButtonLabel}>{translate('Open')}</label>
        </div>
      </Link>
    </div>
  );
};

PDF.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

PDF.propTypes = {
  description: PropTypes.string,
  mediaUrl: PropTypes.string,
  poster: PropTypes.string,
  onPlay: PropTypes.func
};

export default PDF;
