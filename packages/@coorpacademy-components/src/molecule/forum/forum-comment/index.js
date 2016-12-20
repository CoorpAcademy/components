import React from 'react';
import identity from 'lodash/fp/identity';
import debounce from 'lodash/fp/debounce';
import Button from '../../../atom/button';
import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    value: checker.string.optional,
    avatar: checker.url.optional,
    onChange: checker.func.optional,
    onPost: checker.func.optional
  }),
  children: checker.none
});

class ForumComment extends React.Component {
  render() {
    const {translate} = this.context;
    const {avatar, onPost, onChange, value, textareaDisabled, postDisabled} = this.props;
    const avatarView = avatar && (
      <div className={style.image}>
        <img src={avatar} />
      </div>
    );

    const button = (
      <div
        className={style.post}
      >
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
              value={value}
              oninput={debounce(400, onChange)}
              disabled={textareaDisabled}
            />
          </div>
        </div>
      {button}
      </div>
    );
  }
}

ForumComment.contextTypes = {
  translate: React.PropTypes.function
};

ForumComment.validate = createValidate(conditions);
export default ForumComment;
