import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cta from '../../atom/cta';
import Link from '../../atom/link';
import style from './style.css';

const News = (props, context) => {
  const {image, title, date, description, authorLogo, cta} = props;

  return (
    <div className={style.news}>
      <div className={style.image}>
        {cta ? (
          <Link
            href={cta.href}
            className={style.linkImage}
            target={cta.target}
            data-name="news-image"
          >
            <img src={image} />
          </Link>
        ) : (
          <img src={image} />
        )}
      </div>
      <div className={style.infos}>
        <Link
          href={cta && cta.href}
          title={title}
          className={classnames(style.title, style.innerHTML)}
          target={cta && cta.target}
          data-name="news-title"
          dangerouslySetInnerHTML={{__html: title}}
        />
        <div className={style.date}>{date}</div>
        <div className={style.description}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: description}}
          />
        </div>
        <div className={style.bottom}>
          <div className={style.author}>
            <img src={authorLogo} />
          </div>
          {cta ? <Cta {...cta} secondary name="news-cta" /> : null}
        </div>
      </div>
      {cta ? <Link className={style.link} href={cta.href} target={cta.target} /> : null}
    </div>
  );
};

News.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  authorLogo: PropTypes.string,
  cta: PropTypes.shape(Cta.propTypes)
};

export default News;
