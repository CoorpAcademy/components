import createTitle from '../../atom/title';
import style from './slide.css';
import applyColorPrimary from '../../behaviour/color/primary';

export default (h, {skin}) => (props) => {
  const Title = createTitle(h, {skin});
  const ColorPrimary = applyColorPrimary(h, {skin});

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

        <ColorPrimary
          on={{
            backgroundColor: style.defaultColor
          }}
        >
          <button
            className={style.button}
          >
            Vérifier la réponse
          </button>
        </ColorPrimary>

      </form>
    </article>
  );
}
