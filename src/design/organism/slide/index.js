import createTitle from '../../atom/title';
import style from './slide.css';
import FontWeightBehaviour from '../../../behaviour/font/weight';
import ColorPrimaryBehaviour from '../../../behaviour/color/primary';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const Color = (props) => {
    const vTree = renderer.map(props.children, renderer.resolve).pop();
    return renderer.clone(vTree, {
      style: {
        color: 'pink'
      }
    });
  };

  const Font = (props) => {
    const vTree = renderer.map(props.children, renderer.resolve).pop();
    return renderer.clone(vTree, {
      style: {
        fontSize: '2em'
      }
    });
  };

  const ColorPrimary = ColorPrimaryBehaviour(renderer, skin);
  const FontWeight = FontWeightBehaviour(renderer, skin);

  const Title = createTitle(renderer, skin);
  const BigTitle = FontWeight.decorate(Title);
  const ColoredTitle = ColorPrimary.decorate(Title);
  const ColoredBigTitle = FontWeight.decorate(ColoredTitle);

  return (
    <article
      className={style.container}
    >
      <Font>
        <Color>
          <Title>
            Yolo
          </Title>
        </Color>
      </Font>

      <ColoredTitle>
        Colored Title
      </ColoredTitle>

      <BigTitle>
        BigTitle
      </BigTitle>

      <ColoredBigTitle>
        ColoredBigTitle
      </ColoredBigTitle>

      <ColorPrimary>
        <FontWeight>
          <Title>
            ColorPrimary + FontWeight wrapped title
          </Title>
        </FontWeight>
      </ColorPrimary>

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
