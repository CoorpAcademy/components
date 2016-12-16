import Inferno from 'inferno';
import {checker, createValidate} from '../../../util/validation';
import threadConditions from '../post-conditions';
import ForumPost from '../forum-post';
import style from './style.css';

const conditions = checker.shape({
  props: threadConditions,
  children: checker.none
});

const ForumThread = ({children, ...props}) => {
  const {answers = []} = props;
  const answersView = answers.map(answerProps => (
    <ForumThread {...answerProps}/>
  ));

  return (
    <div>
      <ForumPost {...props}/>
      <div className={style.answers}>
        {answersView}
      </div>
    </div>
  );
};

ForumThread.validate = createValidate(conditions);
export default ForumThread;
