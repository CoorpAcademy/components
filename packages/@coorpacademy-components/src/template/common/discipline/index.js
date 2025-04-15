import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import PropTypes from 'prop-types';
import DisciplineCTA from '../../../molecule/discipline-cta';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplinePartners from '../../../molecule/discipline-partners';
import DisciplineScope from '../../../molecule/discipline-scope';
import DisciplineAssociatedSkills from '../../../molecule/discipline-associated-skills';
import Share, {ShareFeedback, ShareStatusProvider} from '../../../molecule/share';
import AddToMyList, {
  AddToMyListFeedback,
  AddToMyListStatusProvider
} from '../../../molecule/add-to-my-list';
import ScopeContent from '../../../molecule/scope-content';
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
    content = null,
    start,
    buy,
    startLabel,
    skills = [],
    onSkillClick,
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
    disableAddToMyList = false,
    lastUpdated
  } = props;

  const authorSection = isEmpty(authors) ? null : (
    <div className={style.partners}>
      <DisciplinePartners authors={authors} />
    </div>
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

  const disciplineContent =
    content || !isEmpty(levels) ? (
      <div className={style.content}>
        {content ? <ScopeContent content={content} /> : null}
        {!isEmpty(levels) ? (
          <DisciplineScope
            content={level}
            levels={levels}
            selected={selected}
            onClick={changeLevel}
          />
        ) : null}
      </div>
    ) : null;

  const disciplineHeader = (
    <div className={style.header}>
      <DisciplineHeader
        image={image}
        video={video}
        title={title}
        description={description}
        lastUpdated={lastUpdated}
      />
    </div>
  );

  const discipline = (
    <div data-name="discipline" className={style.container} key="discipline">
      <div className={style.leftSection}>
        {disciplineHeader}
        <div className={style.mobileAuthorCtaSection}>
          <div className={style.columnReverse}>
            <div className={style.cta}>{disciplineCTA}</div>
            {disableAddToMyList ? null : (
              <AddToMyList
                style={style.addToMyListBtn}
                addToMyListButton={addToMyListButton}
                favorite={favorite}
                onFavoriteClick={onFavoriteClick}
                key={'addToMyListTablet'}
              />
            )}
            {disableShare ? null : (
              <Share
                style={style.shareBtn}
                wording={shareWording}
                text={shareText}
                key={'shareTablet'}
              />
            )}
          </div>
          <DisciplineAssociatedSkills skills={skills} onSkillClick={onSkillClick} />
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
                {disableShare ? null : (
                  <Share
                    style={style.shareBtn}
                    wording={shareWording}
                    text={shareText}
                    key={'shareDesktop'}
                  />
                )}
                {disableAddToMyList ? null : (
                  <AddToMyList
                    style={style.addToMyListBtn}
                    addToMyListButton={addToMyListButton}
                    favorite={favorite}
                    onFavoriteClick={onFavoriteClick}
                    key={'addToMyListDesktop'}
                  />
                )}
              </div>
            )}
          </div>
          <DisciplineAssociatedSkills skills={skills} onSkillClick={onSkillClick} />
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
    <>
      {shareFeedBack}
      {discipline}
    </>
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
  content: ScopeContent.propTypes.content,
  shareWording: Share.propTypes.wording,
  shareText: Share.propTypes.text,
  shareSuccessWording: ShareFeedback.propTypes.successWording,
  shareErrorWording: ShareFeedback.propTypes.errorWording,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string,
      locale: PropTypes.string,
      focused: PropTypes.bool
    })
  ),
  onSkillClick: PropTypes.func,
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
