import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../../util/proptypes';
import Button from '../../../atom/button';
import style from './style.css';

const ForumComment = (props, context) => {
  const {translate} = context;
  const {avatar, onPost, onChange, value, textareaDisabled, postDisabled} = props;
  const avatarView =
    avatar &&
    <div className={style.image}>
      <img src={avatar} />
    </div>;

  const button = (
    <div className={style.post}>
      <Button
        onClick={onPost}
        disabled={postDisabled}
        submitValue={translate('Post')}
        className={style.button}
      />
    </div>
  );

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {avatarView}
        <div className={style.comment}>
          <textarea
            placeholder={translate('Write something here')}
            defaultValue={value}
            onInput={onChange}
            disabled={textareaDisabled}
          />
        </div>
      </div>
      {button}
    </div>
  );
};

ForumComment.contextTypes = {
  translate: PropTypes.func
};

ForumComment.propTypes = {
  value: PropTypes.string,
  avatar: CustomPropTypes.url,
  onChange: PropTypes.func,
  onPost: PropTypes.func
};
export default ForumComment;
