import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import PropTypes from 'prop-types';
import DisciplineCTA from '../../../molecule/discipline-cta';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplinePartners from '../../../molecule/discipline-partners';
import DisciplineScope from '../../../molecule/discipline-scope';
import Share, {ShareFeedback, ShareStatusProvider} from '../../../molecule/share';
import AddToMyList, {
  AddToMyListFeedback,
  AddToMyListStatusProvider
} from '../../../molecule/add-to-my-list';
import style from './style.css';

const Discipline = (props, context) => {
  const {
    selected = 0,
    level,
    levels,
    changeLevel,
    image,
    title = '',
    video,
    authors = [],
    description = '',
    start,
    buy,
    startLabel,
    buyLabel,
    shareWording,
    shareText,
    shareSuccessWording,
    shareErrorWording,
    addToMyListButton,
    favorite,
    onFavoriteClick,
    addToMyListText,
    removeFromMyListText
  } = props;

  const authorSection = isEmpty(authors) ? null : (
    <div className={style.partners}>
      <DisciplinePartners authors={authors} />
    </div>
  );

  return (
    <ShareStatusProvider>
      <AddToMyListStatusProvider>
        <div>
          <ShareFeedback errorWording={shareErrorWording} successWording={shareSuccessWording} />
          <AddToMyListFeedback
            addToMyListText={addToMyListText}
            removeFromMyListText={removeFromMyListText}
            favorite={favorite}
          />
          <div data-name="discipline" className={style.container}>
            <div className={style.leftSection}>
              <div className={style.header}>
                <DisciplineHeader
                  image={image}
                  video={video}
                  title={title}
                  description={description}
                />
              </div>
              <div className={style.mobileAuthorCtaSection}>
                <div className={style.columnReverse}>
                  <div className={style.cta}>
                    <DisciplineCTA
                      type={'discipline'}
                      start={start}
                      buy={buy}
                      startLabel={startLabel}
                      buyLabel={buyLabel}
                    />
                  </div>
                  <AddToMyList
                    style={style.addToMyListBtnTablet}
                    addToMyListButton={addToMyListButton}
                    favorite={favorite}
                    onFavoriteClick={onFavoriteClick}
                  />
                  <Share wording={shareWording} text={shareText} />
                </div>
                <div className={style.partners}>
                  <DisciplinePartners authors={authors} />
                </div>
              </div>
              <div className={style.content}>
                <DisciplineScope
                  content={level}
                  levels={levels}
                  selected={selected}
                  onClick={changeLevel}
                />
              </div>
            </div>
            <div className={style.rightSection}>
              <div className={style.stickySection}>
                <div className={style.cta}>
                  <DisciplineCTA
                    type={'discipline'}
                    start={start}
                    buy={buy}
                    startLabel={startLabel}
                    buyLabel={buyLabel}
                  />

                  <div className={style.buttons}>
                    <Share style={style.shareBtn} wording={shareWording} text={shareText} />
                    <AddToMyList
                      style={style.addToMyListBtn}
                      addToMyListButton={addToMyListButton}
                      favorite={favorite}
                      onFavoriteClick={onFavoriteClick}
                    />
                  </div>
                </div>
                {authorSection}
              </div>
            </div>
          </div>
        </div>
      </AddToMyListStatusProvider>
    </ShareStatusProvider>
  );
};

Discipline.propTypes = {
  image: DisciplineHeader.propTypes.image,
  video: DisciplineHeader.propTypes.video,
  title: DisciplineHeader.propTypes.title,
  description: DisciplineHeader.propTypes.description,
  start: DisciplineCTA.propTypes.start,
  buy: DisciplineCTA.propTypes.buy,
  startLabel: DisciplineCTA.propTypes.startLabel,
  buyLabel: DisciplineCTA.propTypes.buyLabel,
  authors: DisciplinePartners.propTypes.authors,
  level: DisciplineScope.propTypes.content,
  levels: DisciplineScope.propTypes.levels,
  selected: DisciplineScope.propTypes.selected,
  changeLevel: DisciplineScope.propTypes.onClick,
  shareWording: Share.propTypes.wording,
  shareText: Share.propTypes.text,
  shareSuccessWording: ShareFeedback.propTypes.successWording,
  shareErrorWording: ShareFeedback.propTypes.errorWording,
  addToMyListText: AddToMyListFeedback.propTypes.addToMyListText,
  removeFromMyListText: AddToMyListFeedback.propTypes.removeFromMyListText,
  addToMyListButton: AddToMyList.propTypes.addToMyListButton,
  onFavoriteClick: AddToMyList.propTypes.onFavoriteClick,
  favorite: AddToMyList.propTypes.favorite
};

Discipline.contextTypes = {
  translate: PropTypes.func
};

export default Discipline;
