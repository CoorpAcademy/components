import Style from './style.css';

export default (React) => ({ option, onClick}) => {
  const { id, title, count=0, active=false, total=100 } = option;
  const handleClick = () => onClick(option);

  return (
    <div
      className={ Style.Container }
    >
      <span
        className={ Style.Progress }
        style={ { width: count/total*100 } }
      />
      <a
        className={ active ? Style.ActivePollOption : Style.PollOption }
        onClick={ handleClick }
      >
        { title }
      </a>
    </div>
  );
};
