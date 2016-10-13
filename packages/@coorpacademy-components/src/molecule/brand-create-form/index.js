import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;

  const HoverFill = HoverFillBehaviour(treant, options);

  const BrandCreateForm = (props, children) => {
    const {error} = props;

    const className = error ? style.error : style.default;

    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>{translate('Choose a domain name')}</h1>
        </div>
        <form className={style.content}>
          <h2>{translate('Domain name')}</h2>
          <div className={style.description}>
            {translate('Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula portra felis.')}
          </div>
          <div className={className}>
            <label>
              <input type='text'></input>.coorpacademy.com
            </label>
          </div>
          <HoverFill>
            <div className={style.save}>
              <input type='submit' value={translate('Create')}/>
            </div>
          </HoverFill>
        </form>
      </div>
    );
  };

  BrandCreateForm.validate = createValidate(conditions);
  return BrandCreateForm;
};
