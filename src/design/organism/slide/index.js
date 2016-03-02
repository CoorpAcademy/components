import createTitle from '../../atom/title';
import style from './slide.css';
import FontWeightBehaviour from '../../../behaviour/font/weight';
import ColorPrimaryBehaviour from '../../../behaviour/color/primary';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const Title = createTitle(renderer, skin);

  const ColorPrimary = ColorPrimaryBehaviour(renderer, skin);
  const FontWeight = FontWeightBehaviour(renderer, skin);

  const BigTitle = FontWeight.decorate(Title);
  const ColoredTitle = ColorPrimary.decorate(Title);
  const ColoredBigTitle = FontWeight.decorate(ColoredTitle);

  return (
    <article
      className={style.container}
    >
      <ColoredTitle>
        ColoredTitle
      </ColoredTitle>

      <ColoredBigTitle>
        ColoredBigTitle
      </ColoredBigTitle>

      <BigTitle>
        BigTitle
      </BigTitle>

      <FontWeight>
        <ColorPrimary>
          <Title>
            ColorPrimary + FontWeight wrapped title
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
};
