import React, {PropTypes} from 'react';
import Cta from '../../atom/cta';
import Link from '../../atom/link';
import style from './style.css';

const News = (props, context) => {
  const {translate, skin} = context;
  const {
    image,
    title,
    date,
    description,
    authorLogo,
    cta
  } = props;

  cta.secondary = true;

  return (
    <div className={style.news}>
      <div className={style.image}>
        <img src={image} />
      </div>
      <div className={style.infos}>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.date}>{date}</div>
        <div className={style.description}>
          {description}
        </div>
        <div className={style.bottom}>
          <div className={style.author}>
            <img src={authorLogo} />
          </div>
          <Cta {...cta} />
        </div>
      </div>
      <Link className={style.link}
        href={cta.href}
        target={cta.target}
      />
    </div>
  );
};

News.contextTypes = {
  skin: React.PropTypes.object
};

News.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  description: React.PropTypes.string,
  authorLogo: React.PropTypes.string,
  cta: React.PropTypes.shape({
    href: React.PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  })
};

export default News;
