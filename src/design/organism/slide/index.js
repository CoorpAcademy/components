import createTitle from '../../atom/title';
import style from './slide.css';
import ColorPrimaryBehaviour from '../../../behaviour/color/primary';
import FontWeightBehaviour from '../../../behaviour/font/weight';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const Title = createTitle(renderer, skin);

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
