import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import classnames from 'classnames';
import {SrcPropType} from '../../../util/proptypes';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import style from './style.css';

const ForumComment = (props, context) => {
  const {translate, skin} = context;
  const {avatar, onPost, onChange, value, textareaDisabled, postDisabled, newPost = false} = props;

  const primary = get('common.primary', skin);

  const avatarView =
    avatar &&
    <div className={style.image}>
      <img src={avatar} />
    </div>;

  const button = (
    <div className={style.post}>
      <Button
        type="link"
        onClick={onPost}
        disabled={postDisabled}
        submitValue={translate('Post')}
        className={postDisabled ? style.disabledButton : style.button}
      />
    </div>
  );

  return (
    <div
      data-name="forumComment"
      className={classnames(style.container, newPost ? style.newPost : null)}
    >
      <div className={classnames(style.wrapper, newPost ? style.newPost : null)}>
        {avatarView}
        <div className={style.comment}>
          <textarea
            placeholder={translate('Write something here')}
            value={value}
            onChange={onChange}
            disabled={textareaDisabled}
          />
        </div>
      </div>
      {button}
    </div>
  );
};

ForumComment.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

ForumComment.propTypes = {
  value: PropTypes.string,
  avatar: SrcPropType,
  onChange: PropTypes.func,
  onPost: PropTypes.func,
  newPost: PropTypes.bool
};
export default ForumComment;
