import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.string.optional,
    author: checker.string.optional,
    answerTo: checker.string.optional,
    date: checker.string.optional,
    text: checker.string.optional,
    avatar: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const ForumPosts = (props, children) => {
    const {
      type,
      author,
      answerTo,
      date,
      text,
      avatar
    } = props;

    return (
      <div className={style.post}>
        <div className={style.user}>
          <img src="https://avatars0.githubusercontent.com/u/910636?v=3&amp;s=460" class="mc-avatar" onerror="if(this.src!='http://cackle.me/widget/img/anonym2.png')this.src='http://cackle.me/widget/img/anonym2.png';">
        </div>

        <div className={style.content}>
          <div className={style.head}>
            <span className={style.username}>{username}</span>
            <span className={style.date}>{date}</span>
          </div>

          <div className={style.body}>
            {text}
          </div>

          <div class="mc-comment-footer">
            <a class="mc-comment-reply" data-id="59806036" href="#">Répondre</a><a class="mc-comment-edit" data-id="59806036" href="#"><span class="mcicon-edit"></span> <span class="mc-commentlabel">Éditer</span></a><a class="mc-comment-remove" data-id="59806036" href="#"><span class="mcicon-trash"></span> <span class="mc-commentlabel">Supprimer</span></a>
            <div class="mc-comment-vote">
              <a href="#" class="mc-comment-dislike mcicon-thumbs-down" data-vote="-1" data-id="59806036"></a><a href="#" class="mc-comment-like mcicon-thumbs-up" data-vote="1" data-id="59806036"></a>
              <span class="mc-comment-rating mc-comment-" title="Evaluation du commentaire">0</span>
              </div>
          </div>
        </div>
      </div>
      );
  };

  ForumPosts.validate = createValidate(conditions);
  return ForumPosts;
};
