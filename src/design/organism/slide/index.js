import createTitle from '../../atom/title';
import style from './slide.css';
import ColorPrimaryBehaviour from '../../../behaviour/color/primary';
import FontWeightBehaviour from '../../../behaviour/font/weight';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const ColorPrimary = ColorPrimaryBehaviour.createComponent(renderer, skin);
  const FontWeight = FontWeightBehaviour.createComponent(renderer, skin);

  const Title = createTitle(renderer, skin);
  const BigTitle = FontWeightBehaviour.on(Title)(renderer, skin);
  const ColoredTitle = ColorPrimaryBehaviour.on(Title, {on:{color:'#666'}})(renderer, skin);
  const ColoredBigTitle = FontWeightBehaviour.on(ColoredTitle)(renderer, skin);

  return (
    <article
      className={style.container}
    >

      <ColoredTitle>
        Colored Title
      </ColoredTitle>

      <BigTitle>
        BigTitle
      </BigTitle>

      <ColoredBigTitle>
        ColoredBigTitle
      </ColoredBigTitle>

      <ColorPrimary
        on={{
          color: style.defaultColor
        }}
      >
        <FontWeight>
          <Title>
            color-primary + font-weight wrappers on title
          </Title>
        </FontWeight>
      </ColorPrimary>

      <FontWeight>
        <Title>
            font-weight wrapper on title
        </Title>
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
