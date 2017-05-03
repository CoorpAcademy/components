import React from 'react';
import PropTypes from 'prop-types';
import Cta from '../../atom/cta';
import Link from '../../atom/link';
import style from './style.css';

const News = (props, context) => {
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
          <div
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
              __html: description
            }}
          />
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

News.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  authorLogo: PropTypes.string,
  cta: PropTypes.shape({
    href: PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  })
};

export default News;
