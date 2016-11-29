import identity from 'lodash/fp/identity';
import debounce from 'lodash/fp/debounce';
import createButton from '../../../atom/button';
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

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const Button = createButton(treant, options);

  const ForumComment = (props, children) => {
    const {avatar, onPost, onChange, value, textareaDisabled, postDisabled} = props;
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
  };

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
