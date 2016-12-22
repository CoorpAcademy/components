import React from 'react';
import threadShape from '../post-conditions';
import ForumPost from '../forum-post';
import style from './style.css';

const ForumThread = ({children, ...props}) => {
  const {answers = []} = props;
  const answersView = answers.map((answerProps, index) => (
    <ForumThread
      key={index}
      {...answerProps}
    />
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

ForumThread.propTypes = {
  ...threadShape
};
export default ForumThread;
