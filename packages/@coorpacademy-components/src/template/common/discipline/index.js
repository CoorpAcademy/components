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
    removeFromMyListText,
    disableShare = false,
    disableAddToMyList = false
  } = props;

  const authorSection = isEmpty(authors) ? null : (
    <div className={style.partners}>
      <DisciplinePartners authors={authors} />
    </div>
  );

  const buildAddToMyList = options => (
    <AddToMyList
      style={options.isTablet ? style.addToMyListBtnTablet : style.addToMyListBtn}
      addToMyListButton={addToMyListButton}
      favorite={favorite}
      onFavoriteClick={onFavoriteClick}
    />
  );

  const buildShare = options => (
    <Share
      style={options.isTablet ? style.shareBtnTablet : style.shareBtn}
      wording={shareWording}
      text={shareText}
    />
  );

  const disciplineCTA = (
    <DisciplineCTA
      type={'discipline'}
      start={start}
      buy={buy}
      startLabel={startLabel}
      buyLabel={buyLabel}
    />
  );

  const disciplineContent = (
    <div className={style.content}>
      <DisciplineScope content={level} levels={levels} selected={selected} onClick={changeLevel} />
    </div>
  );

  const disciplineHeader = (
    <div className={style.header}>
      <DisciplineHeader image={image} video={video} title={title} description={description} />
    </div>
  );

  const discipline = (
    <div data-name="discipline" className={style.container} key="discipline">
      <div className={style.leftSection}>
        {disciplineHeader}
        <div className={style.mobileAuthorCtaSection}>
          <div className={style.columnReverse}>
            <div className={style.cta}>{disciplineCTA}</div>
            {disableAddToMyList
              ? null
              : buildAddToMyList({
                  isTablet: true
                })}
            {disableShare ? null : buildShare({isTablet: true})}
          </div>
          {authorSection}
        </div>
        {disciplineContent}
      </div>
      <div className={style.rightSection}>
        <div className={style.stickySection}>
          <div className={style.cta}>
            {disciplineCTA}
            {disableShare && disableAddToMyList ? null : (
              <div className={style.buttons}>
                <Share style={style.shareBtn} wording={shareWording} text={shareText} />
                {disableShare ? null : buildShare({isTablet: false})}
                {disableAddToMyList
                  ? null
                  : buildAddToMyList({
                      isTablet: false
                    })}
              </div>
            )}
          </div>
          {authorSection}
        </div>
      </div>
    </div>
  );

  const shareFeedBack = disableShare ? null : (
    <ShareFeedback
      errorWording={shareErrorWording}
      successWording={shareSuccessWording}
      key="shareFeedBack"
    />
  );

  const addToMyListFeedback = disableAddToMyList ? null : (
    <AddToMyListFeedback
      addToMyListText={addToMyListText}
      removeFromMyListText={removeFromMyListText}
      favorite={favorite}
    />
  );

  const addToMyListProviderWrap = disableAddToMyList ? (
    [shareFeedBack, discipline]
  ) : (
    <AddToMyListStatusProvider>
      {shareFeedBack}
      {addToMyListFeedback}
      {discipline}
    </AddToMyListStatusProvider>
  );
  const shareProviderWrap = disableShare ? (
    addToMyListProviderWrap
  ) : (
    <ShareStatusProvider>{addToMyListProviderWrap}</ShareStatusProvider>
  );

  return shareProviderWrap;
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
  favorite: AddToMyList.propTypes.favorite,
  disableShare: PropTypes.bool,
  disableAddToMyList: PropTypes.bool
};

Discipline.contextTypes = {
  translate: PropTypes.func
};

export default Discipline;
