import React from 'react';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import PDFIcon from '@coorpacademy/nova-icons/lib/nova-line/files-office/file-office-pdf.web';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const PDF = (props, context) => {
  const {description, mediaUrl, onPlay} = props;
  const {translate, skin} = context;

  const white = get('common.white', skin);
  const primary = get('common.primary', skin);

  return (
    <div className={style.pdfFrame}>
      <PDFIcon color={white} className={style.pdfIcon} />
      <div className={style.pdfDescription} data-name="pdfDescription">
        {description}
      </div>
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
  onPlay: PropTypes.func
};

export default PDF;
