import style from './style.css';

export default (React) => (props) => {
  return (
    <article
        className={ style.Container }
    >
      <div>
        <h1
          className={ style.Title }
        >
          Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?
        </h1>
        <p
          className={ style.SubTitle }
        >
          Saisissez votre réponse.
        </p>
      </div>
      <form>
        <textarea
          className={ style.TextArea }
        />
        <button
          className={ style.Button }
        >
          Vérifier la réponse
        </button>
      </form>
    </article>
  );
}
