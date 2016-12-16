import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const icons = {
  mail: '0xe902',
  'google-plus': '0xe903',
  facebook: '0xe904',
  twitter: '0xe905',
  linkedin: '0xe906',
  instagram: '0xe907',
  youtube: '0xe908',
  vimeo: '0xe909',
  pinterest: '0xe910'
};

const conditions = checker.shape({
  props: checker.shape({
    ref: checker.string,
    link: checker.string
  }).strict,
  children: checker.none
});

const SocialLink = ({children, ...props}) => {
  const {
    ref,
    link
  } = props;

  return (
    <a
      href={link}
      className={style.link}
      target={'_blank'}
    >{String.fromCharCode(icons[ref])}
    </a>
  );
};

SocialLink.validate = createValidate(conditions);
export default SocialLink;
