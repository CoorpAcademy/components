import createTitle from './Title';
import style from './style.css';

export default (h, {skin}) => (props) => {
  const Title = createTitle(h, {skin});

  return (
    <article
      className={style.Container}
    >
      <Title
        disabled
      >
        {props.title}
      </Title>
      <p
        className={style.SubTitle}
      >
        Saisissez votre réponse
      </p>
      <form>
        <textarea
          className={style.TextArea}
        />
        <button
          className={style.Button}
        >
          Vérifier la réponse
        </button>
      </form>
    </article>
  );
}
