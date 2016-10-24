import identity from 'lodash/fp/identity';
import uniqueId from 'lodash/fp/uniqueId';
import HoverFillBehaviour from '../../../behaviour/effects/hover-fill';
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

  const HoverFill = HoverFillBehaviour(treant, options);

  const ForumComment = (props, children) => {
    const {avatar, onPost, onChange, value} = props;
    const avatarView = avatar && (
      <div className={style.image}>
        <img src={avatar} />
      </div>
    );

    const idButton = uniqueId('forum-post-button-');

    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          {avatarView}
          <div className={style.comment}>
            <textarea
              placeholder={translate('Write something here')}
              value={value}
              oninput={e => {
                const button = document.getElementById(idButton);
                button.disabled = e.currentTarget.value.length === 0;
                onChange(e);
              }}
            />
          </div>
        </div>
        <div
          className={style.post}
        >
          <HoverFill>
            <button
              id={idButton}
              disabled={!value || value.length === 0}
              onClick={e => {
                const button = document.getElementById(idButton);
                if (!button.disabled) {
                  onPost(e);
                }
              }}
            >
              {translate('Post')}
            </button>
          </HoverFill>
        </div>
      </div>
    );
  };

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
