import createTitle from '../../atom/title';
import style from './slide.css';
import applyColorPrimary from '../../../behaviour/color/primary';
import applyFontWeight from '../../../behaviour/font/weight';

export default (options, skin) => (props) => {
  const {h} = options;

  const ColorPrimary = applyColorPrimary(options, skin);
  const FontWeight = applyFontWeight(options, skin);

  const Title = createTitle(options, skin);

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
