import h from '../h';

import Title from './Title';
import style from './style.css';

export default (props) => (
  <article
    className={style.Container}
  >
    <Title>
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
