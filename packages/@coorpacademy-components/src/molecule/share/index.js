import React, {useState, useCallback, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaCompositionCoorpacademyShare as ShareIcon,
  NovaCompositionCoorpacademyAttention as AttentionIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import styles from './style.css';

const SHARE_STATUS = {
  IDLE: 'IDLE',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

const copyTextViaExecCommand = text => {
  const textarea = document.createElement('textarea');

  textarea.style.border = '0';
  textarea.style.padding = '0';
  textarea.style.margin = '0';
  textarea.style.position = 'absolute';
  textarea.setAttribute('readonly', '');
  textarea.value = text;

  // Element.append is not supported on IE11 :/
  // eslint-disable-next-line unicorn/prefer-node-append
  document.body.appendChild(textarea);
  let status = SHARE_STATUS.IDLE;

  try {
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand('copy');
    status = SHARE_STATUS.SUCCESS;
  } catch (error) {
    status = SHARE_STATUS.ERROR;
  }
  textarea.remove();
  return status;
};

const StatusContext = React.createContext(SHARE_STATUS.IDLE);

export const ShareStatusProvider = ({children}) => {
  const [status, setStatus] = useState(SHARE_STATUS.IDLE);
  useEffect(() => {
    let timeoutId;
    const DURATION = 3000;
    if (status !== SHARE_STATUS.IDLE) {
      timeoutId = setTimeout(() => setStatus(SHARE_STATUS.IDLE), DURATION);
    }
    return () => clearTimeout(timeoutId);
  }, [status]);
  return <StatusContext.Provider value={[status, setStatus]}>{children}</StatusContext.Provider>;
};

export const ShareFeedback = ({successWording, errorWording}) => {
  const [status] = useContext(StatusContext);
  if (status === SHARE_STATUS.IDLE) return null;

  return (
    <div
      className={classnames(styles.feedback, status === SHARE_STATUS.ERROR && styles.errorFeedback)}
    >
      {status === SHARE_STATUS.SUCCESS ? (
        <CheckIcon className={styles.checkIcon} width={13} height={13} />
      ) : (
        <AttentionIcon className={styles.checkIcon} width={13} height={13} />
      )}
      <p>{status === SHARE_STATUS.SUCCESS ? successWording : errorWording}</p>
    </div>
  );
};

const Share = ({style, text, wording}) => {
  const [, setStatus] = useContext(StatusContext);
  const onClick = useCallback(async () => {
    const browserSupportsClipboardWriteText =
      'clipboard' in navigator && 'writeText' in navigator.clipboard;
    if (browserSupportsClipboardWriteText) {
      try {
        await navigator.clipboard.writeText(text);
        setStatus(SHARE_STATUS.SUCCESS);
      } catch (error) {
        setStatus(SHARE_STATUS.ERROR);
      }
      return;
    } else {
      const copyStatus = copyTextViaExecCommand(text);
      setStatus(copyStatus);
    }
    return;
  }, [setStatus]);

  return (
    <div className={(styles.container, style)}>
      <Link onClick={onClick} className={styles.cta}>
        <div className={styles.wrapper}>
          <ShareIcon className={styles.shareIcon} width={18} height={18} />
          <p>{wording}</p>
        </div>
      </Link>
    </div>
  );
};

ShareStatusProvider.propTypes = {
  children: PropTypes.node
};

ShareFeedback.propTypes = {
  successWording: PropTypes.string,
  errorWording: PropTypes.string
};

Share.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  wording: PropTypes.string
};

export default Share;
