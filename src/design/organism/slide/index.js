import createTitle from '../../atom/title';
import style from './slide.css';
import FontWeightFactory from '../../../behaviour/font/weight';
import ColorPrimaryFactory from '../../../behaviour/color/primary';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const ColorPrimaryBehaviour = ColorPrimaryFactory(renderer, skin);
  const ColorPrimary = ColorPrimaryBehaviour.asComponent();

  const FontWeightBehaviour = FontWeightFactory(renderer, skin);
  const FontWeight = FontWeightBehaviour.asComponent();

  const Title = createTitle(renderer, skin);
  const BigTitle = FontWeightBehaviour()(Title);
  const ColoredTitle = ColorPrimaryBehaviour({on:{color:'#666'}})(Title);
  const ColoredBigTitle = FontWeightBehaviour()(ColoredTitle);

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
