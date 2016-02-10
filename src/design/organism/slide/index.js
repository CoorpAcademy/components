import createTitle from '../../atom/title';
import style from './slide.css';
import applyColorPrimary from '../../../behaviour/color/primary';
import applyFontWeight from '../../../behaviour/font/weight';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const ColorPrimary = applyColorPrimary(renderer, skin);
  const FontWeight = applyFontWeight(renderer, skin);

  const Title = createTitle(renderer, skin);

  return (
    <article
      className={style.container}
    >

      <FontWeight>
        <ColorPrimary
          on={{
            color: style.defaultColor
          }}
        >
          <Title
            disabled
          >
            {props.title}
          </Title>
        </ColorPrimary>
      </FontWeight>

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
