import style from './slide.css';

import createTitle from '../../atom/title';
import createModuleBubble from '../../molecule/module-bubble';

import FontNormalBehaviour from '../../../behaviour/font/normal';
import ColorPrimaryBehaviour from '../../../behaviour/color/primary';

export default (engine, options) => (props) => {
  const {h} = engine;

  const Title = createTitle(engine, options);
  const ModuleBubble = createModuleBubble(engine, options);

  const ColorPrimary = ColorPrimaryBehaviour(engine, options);
  const FontNormal = FontNormalBehaviour(engine, options);

  const BigTitle = FontNormal.decorate(Title);
  const ColoredTitle = ColorPrimary.decorate(Title);
  const ColoredBigTitle = FontNormal.decorate(ColoredTitle);

  return (
    <article
      className={style.container}
    >
      <ModuleBubble>
      </ModuleBubble>

      <ColoredTitle>
        ColoredTitle
      </ColoredTitle>

      <ColoredBigTitle>
        ColoredBigTitle
      </ColoredBigTitle>

      <BigTitle>
        BigTitle
      </BigTitle>

      <FontNormal>
        <ColorPrimary>
          <Title>
            ColorPrimary + FontNormal wrapped title
          </Title>
        </ColorPrimary>
      </FontNormal>

      <p
        className={style.subTitle}
      >
        Saisissez votre réponse
      </p>
      <form
        onSubmit={e => props.onValidate() && false}
      >
        <textarea
          className={style.textArea}
          onChange={e => props.onChange(e.target.value)}
        />

          <input
            type="button"
            className={style.button}
            onClick={e => props.onValidate()}
            value="Vérifier la réponse"
          />

      </form>
    </article>
  );
};
