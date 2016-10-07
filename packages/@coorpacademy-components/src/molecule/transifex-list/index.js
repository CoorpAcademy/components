import {checker, createValidate} from '../../util/validation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const TransifexList = (props, children) => {
    return (
      <ul id="tx-live-lang-picker" class="txlive-langselector-list notranslate">
        <li data-value="fr">Français</li>
        <li data-value="en">English</li>
      </ul>
    );
  };

  TransifexList.validate = createValidate(conditions);
  return TransifexList;
};
