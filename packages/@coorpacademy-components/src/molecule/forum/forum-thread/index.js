import {checker, createValidate} from '../../../util/validation';
import threadConditions from '../post-conditions';
import createForumPost from '../forum-post';
import style from './style.css';

const conditions = checker.shape({
  props: threadConditions,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Post = createForumPost(treant, options);

  const ForumThread = (props, children) => {
    const {answers} = props;
    const answersView = answers && answers.map(answerProps => (
      <ForumThread {...answerProps}/>
    ));

    return (
      <div>
        <Post {...props}/>
        <div className={style.answers}>
          {answersView}
        </div>
      </div>
    );
  };

  ForumThread.validate = createValidate(conditions);
  return ForumThread;
};
