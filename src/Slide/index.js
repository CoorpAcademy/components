import createTitle from './Title';
import style from './style.css';

export default (h, {skin}) => (props) => {
  const Title = createTitle(h, {skin});

  return (
    <article
      className={style.container}
    >
      <Title
        disabled
      >
        {props.title}
      </Title>
      <p
        className={style.subTitle}
      >
        Saisissez votre réponse
      </p>
      <form>
        <textarea
          className={style.textArea}
        />
        <button
          className={style.button}
        >
          Vérifier la réponse
        </button>
      </form>
    </article>
  );
}
