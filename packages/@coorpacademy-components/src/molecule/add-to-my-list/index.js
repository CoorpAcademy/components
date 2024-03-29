import React, {useState, useContext, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaCompositionNavigationMore as MoreIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import styles from './style.css';

const ADD_TO_MY_LIST_STATUS = {
  IDLE: 'IDLE',
  SUCCESS: 'SUCCESS'
};

const StatusContext = React.createContext(ADD_TO_MY_LIST_STATUS.IDLE);

export const AddToMyListStatusProvider = ({children}) => {
  const [status, setStatus] = useState(ADD_TO_MY_LIST_STATUS.IDLE);
  useEffect(() => {
    let timeoutId;
    const DURATION = 3000;
    if (status !== ADD_TO_MY_LIST_STATUS.IDLE) {
      timeoutId = setTimeout(() => setStatus(ADD_TO_MY_LIST_STATUS.IDLE), DURATION);
    }
    return () => clearTimeout(timeoutId);
  }, [status]);
  const statusValue = useMemo(() => [status, setStatus], [status, setStatus]);
  return <StatusContext.Provider value={statusValue}>{children}</StatusContext.Provider>;
};

export const AddToMyListFeedback = ({addToMyListText, removeFromMyListText, favorite}) => {
  const [status] = useContext(StatusContext);
  if (status === ADD_TO_MY_LIST_STATUS.IDLE) return null;

  return (
    <div
      className={classnames(styles.feedback)}
      data-testid="add-to-my-list-feedback"
      data-name={'add-to-my-list-feedback'}
    >
      <CheckIcon className={styles.checkIcon} width={13} height={13} />
      <p role="status">{favorite ? addToMyListText : removeFromMyListText}</p>
    </div>
  );
};

const AddToMyList = ({style, addToMyListButton, favorite, onFavoriteClick}) => {
  const [, setStatus] = useContext(StatusContext);
  const cb = () => setStatus(ADD_TO_MY_LIST_STATUS.SUCCESS);

  function onClick() {
    onFavoriteClick(cb);
  }

  return (
    <div className={(styles.container, style)}>
      <Link
        data-testid="add-to-my-list-button"
        data-name={'add-to-my-list-button'}
        onClick={onClick}
        className={styles.cta}
      >
        <div className={styles.wrapper}>
          {favorite ? (
            <CheckIcon className={styles.shareIcon} width={15} height={15} />
          ) : (
            <MoreIcon className={styles.shareIcon} width={12} height={12} />
          )}
          <p>{addToMyListButton}</p>
        </div>
      </Link>
    </div>
  );
};

AddToMyListStatusProvider.propTypes = {
  children: PropTypes.node
};

AddToMyListFeedback.propTypes = {
  addToMyListText: PropTypes.string,
  removeFromMyListText: PropTypes.string,
  favorite: PropTypes.bool
};

AddToMyList.propTypes = {
  style: PropTypes.string,
  addToMyListButton: PropTypes.string,
  favorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func
};

export default AddToMyList;
