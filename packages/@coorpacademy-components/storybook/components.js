/* eslint-disable max-len */

import AtomButton from './../src/atom/button';
import AtomCatalogSection from './../src/atom/catalog-section';
import AtomCenteredText from './../src/atom/centered-text';
import AtomCheckbox from './../src/atom/checkbox';
import AtomClue from './../src/atom/clue';
import AtomCta from './../src/atom/cta';
import AtomDragAndDrop from './../src/atom/drag-and-drop';
import AtomImageUpload from './../src/atom/image-upload';
import AtomInputCheckbox from './../src/atom/input-checkbox';
import AtomInputColor from './../src/atom/input-color';
import AtomInputDoublestep from './../src/atom/input-doublestep';
import AtomInputHtml from './../src/atom/input-html';
import AtomInputReadonly from './../src/atom/input-readonly';
import AtomInputSwitch from './../src/atom/input-switch';
import AtomInputText from './../src/atom/input-text';
import AtomInputTextarea from './../src/atom/input-textarea';
import AtomLabel from './../src/atom/label';
import AtomLife from './../src/atom/life';
import AtomLink from './../src/atom/link';
import AtomLoader from './../src/atom/loader';
import AtomLoaderTarget from './../src/atom/loader-target';
import AtomNotification from './../src/atom/notification';
import AtomPicture from './../src/atom/picture';
import AtomPictureBackground from './../src/atom/picture-background';
import AtomPromoCode from './../src/atom/promo-code';
import AtomProvider from './../src/atom/provider';
import AtomRadioGroup from './../src/atom/radio-group';
import AtomRange from './../src/atom/range';
import AtomResourceMiniature from './../src/atom/resource-miniature';
import AtomSelect from './../src/atom/select';
import AtomSlide from './../src/atom/slide';
import AtomSocialLink from './../src/atom/social-link';
import AtomSpinner from './../src/atom/spinner';
import AtomTab from './../src/atom/tab';
import AtomTabContent from './../src/atom/tab-content';
import AtomTitle from './../src/atom/title';
import AtomVideoUpload from './../src/atom/video-upload';
import HocAnimation from './../src/hoc/animation';
import HocAnimationScheduler from './../src/hoc/animation-scheduler';
import HocLateralTransition from './../src/hoc/lateral-transition';
import HocSwapper from './../src/hoc/swapper';
import HocTransition from './../src/hoc/transition';
import MoleculeAnswer from './../src/molecule/answer';
import MoleculeBattleRequest from './../src/molecule/battle-request';
import MoleculeBrandCard from './../src/molecule/brand-card';
import MoleculeBrandCardCreate from './../src/molecule/brand-card-create';
import MoleculeBrandCreateForm from './../src/molecule/brand-create-form';
import MoleculeBrandDownloadBox from './../src/molecule/brand-download-box';
import MoleculeBrandFormGroup from './../src/molecule/brand-form-group';
import MoleculeBrandTabs from './../src/molecule/brand-tabs';
import MoleculeBrandUploadBox from './../src/molecule/brand-upload-box';
import MoleculeBreadcrumbs from './../src/molecule/breadcrumbs';
import MoleculeCard from './../src/molecule/card';
import MoleculeCookieBanner from './../src/molecule/cookie-banner';
import MoleculeDashboardBattleRequestList from './../src/molecule/dashboard/battle-request-list';
import MoleculeDashboardCardsList from './../src/molecule/dashboard/cards-list';
import MoleculeDashboardNewsList from './../src/molecule/dashboard/news-list';
import MoleculeDashboardStartBattle from './../src/molecule/dashboard/start-battle';
import MoleculeDisciplineCta from './../src/molecule/discipline-cta';
import MoleculeDisciplineHeader from './../src/molecule/discipline-header';
import MoleculeDisciplinePartners from './../src/molecule/discipline-partners';
import MoleculeDisciplineScope from './../src/molecule/discipline-scope';
import MoleculeFeedback from './../src/molecule/feedback';
import MoleculeFilters from './../src/molecule/filters';
import MoleculeForumForumComment from './../src/molecule/forum/forum-comment';
import MoleculeForumForumPost from './../src/molecule/forum/forum-post';
import MoleculeForumForumThread from './../src/molecule/forum/forum-thread';
import MoleculeMenuList from './../src/molecule/menu-list';
import MoleculeModuleBubble from './../src/molecule/module-bubble';
import MoleculeModuleCard from './../src/molecule/module-card';
import MoleculeNews from './../src/molecule/news';
import MoleculePagination from './../src/molecule/pagination';
import MoleculePaymentForm from './../src/molecule/payment-form';
import MoleculePdf from './../src/molecule/pdf';
import MoleculeProductCard from './../src/molecule/product-card';
import MoleculeProgressBar from './../src/molecule/progress-bar';
import MoleculeQuestionsDropDown from './../src/molecule/questions/drop-down';
import MoleculeQuestionsFreeText from './../src/molecule/questions/free-text';
import MoleculeQuestionsQcm from './../src/molecule/questions/qcm';
import MoleculeQuestionsQcmDrag from './../src/molecule/questions/qcm-drag';
import MoleculeQuestionsQcmGraphic from './../src/molecule/questions/qcm-graphic';
import MoleculeQuestionsQuestionRange from './../src/molecule/questions/question-range';
import MoleculeQuestionsTemplate from './../src/molecule/questions/template';
import MoleculeResourcePlayer from './../src/molecule/resource-player';
import MoleculeScopeContent from './../src/molecule/scope-content';
import MoleculeScopeTabs from './../src/molecule/scope-tabs';
import MoleculeSearch from './../src/molecule/search';
import MoleculeSearchForm from './../src/molecule/search-form';
import MoleculeSetupSection from './../src/molecule/setup-section';
import MoleculeSetupSections from './../src/molecule/setup-sections';
import MoleculeSetupSlide from './../src/molecule/setup-slide';
import MoleculeSetupSlider from './../src/molecule/setup-slider';
import MoleculeSideNotification from './../src/molecule/side-notification';
import MoleculeSsmenuList from './../src/molecule/ssmenu-list';
import MoleculeSubscriptionFreemium from './../src/molecule/subscription-freemium';
import MoleculeSubscriptionPremium from './../src/molecule/subscription-premium';
import MoleculeTable from './../src/molecule/table';
import MoleculeThemeImage from './../src/molecule/theme-image';
import MoleculeTitledCheckbox from './../src/molecule/titled-checkbox';
import MoleculeUnsubscribe from './../src/molecule/unsubscribe';
import MoleculeVideoIframe from './../src/molecule/video-iframe';
import MoleculeVideoPlayer from './../src/molecule/video-player';
import OrganismAccordionContainer from './../src/organism/accordion/container';
import OrganismAccordionPart from './../src/organism/accordion/part';
import OrganismAccordionToggler from './../src/organism/accordion/toggler';
import OrganismBrandForm from './../src/organism/brand-form';
import OrganismBrandTable from './../src/organism/brand-table';
import OrganismBrandUpload from './../src/organism/brand-upload';
import OrganismCardsGrid from './../src/organism/cards-grid';
import OrganismCart from './../src/organism/cart';
import OrganismDiscussion from './../src/organism/discussion';
import OrganismGridList from './../src/organism/grid-list';
import OrganismHeader from './../src/organism/header';
import OrganismHero from './../src/organism/hero';
import OrganismMoocImageSlider from './../src/organism/mooc/image-slider';
import OrganismMoocHeader from './../src/organism/mooc-header';
import OrganismNotifications from './../src/organism/notifications';
import OrganismPopin from './../src/organism/popin';
import OrganismResourceBrowser from './../src/organism/resource-browser';
import OrganismSettings from './../src/organism/settings';
import OrganismSetupHeader from './../src/organism/setup-header';
import OrganismSidebar from './../src/organism/sidebar';
import OrganismSlider from './../src/organism/slider';
import OrganismUserPreferences from './../src/organism/user-preferences';
import TemplateActivity from './../src/template/activity';
import TemplateAppPlayerLoading from './../src/template/app-player/loading';
import TemplateAppPlayerPlayerPlayerHeader from './../src/template/app-player/player/player-header';
import TemplateAppPlayerPlayerSlidesSlidesFooter from './../src/template/app-player/player/slides/slides-footer';
import TemplateAppPlayerPlayerSlidesSlidesPlayer from './../src/template/app-player/player/slides/slides-player';
import TemplateAppPlayerPlayer from './../src/template/app-player/player';
import TemplateAppPlayerPopinCorrection from './../src/template/app-player/popin-correction';
import TemplateAppPlayerPopinEnd from './../src/template/app-player/popin-end';
import TemplateAppPlayerPopinHeader from './../src/template/app-player/popin-header';
import TemplateAppRacingAdmin from './../src/template/app-racing/admin';
import TemplateAppRacingGameRace from './../src/template/app-racing/game/race';
import TemplateAppRacingGameStatus from './../src/template/app-racing/game/status';
import TemplateAppRacingGameTimer from './../src/template/app-racing/game/timer';
import TemplateAppRacingGame from './../src/template/app-racing/game';
import TemplateBackOfficeBrandCreate from './../src/template/back-office/brand-create';
import TemplateBackOfficeBrandList from './../src/template/back-office/brand-list';
import TemplateBackOfficeBrandUpdate from './../src/template/back-office/brand-update';
import TemplateBackOfficeDashboardPreview from './../src/template/back-office/dashboard-preview';
import TemplateCockpitJwUploader from './../src/template/cockpit/jw-uploader';
import TemplateCommonAuthors from './../src/template/common/authors';
import TemplateCommonCoorpHeader from './../src/template/common/coorp-header';
import TemplateCommonDashboard from './../src/template/common/dashboard';
import TemplateCommonDiscipline from './../src/template/common/discipline';
import TemplateCommonSearchPage from './../src/template/common/search-page';
import TemplateTeamBuilderAvatar from './../src/template/team-builder/avatar';
import TemplateTeamBuilderMotionnedTeam from './../src/template/team-builder/motionned-team';
import TemplateTeamBuilderTeamAvatar from './../src/template/team-builder/teamAvatar';
import TemplateTeamBuilder from './../src/template/team-builder';
import AtomButtonFixtureA from '../src/atom/button/test/fixtures/a';
import AtomButtonFixtureClassName from '../src/atom/button/test/fixtures/class-name';
import AtomButtonFixtureClear from '../src/atom/button/test/fixtures/clear';
import AtomButtonFixtureDefault from '../src/atom/button/test/fixtures/default';
import AtomButtonFixtureDisabled from '../src/atom/button/test/fixtures/disabled';
import AtomButtonFixtureDownload from '../src/atom/button/test/fixtures/download';
import AtomButtonFixtureLink from '../src/atom/button/test/fixtures/link';
import AtomButtonFixtureSso from '../src/atom/button/test/fixtures/sso';
import AtomCatalogSectionFixtureList from '../src/atom/catalog-section/test/fixtures/list';
import AtomCatalogSectionFixturePicture from '../src/atom/catalog-section/test/fixtures/picture';
import AtomCenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import AtomCheckboxFixtureChecked from '../src/atom/checkbox/test/fixtures/checked';
import AtomCheckboxFixtureDefault from '../src/atom/checkbox/test/fixtures/default';
import AtomCheckboxFixtureDisabled from '../src/atom/checkbox/test/fixtures/disabled';
import AtomCheckboxFixtureRequired from '../src/atom/checkbox/test/fixtures/required';
import AtomClueFixtureDefault from '../src/atom/clue/test/fixtures/default';
import AtomClueFixtureLink from '../src/atom/clue/test/fixtures/link';
import AtomClueFixtureLoading from '../src/atom/clue/test/fixtures/loading';
import AtomCtaFixtureDisabled from '../src/atom/cta/test/fixtures/disabled';
import AtomCtaFixtureLightSmall from '../src/atom/cta/test/fixtures/light-small';
import AtomCtaFixtureLight from '../src/atom/cta/test/fixtures/light';
import AtomCtaFixturePrimarySmall from '../src/atom/cta/test/fixtures/primary-small';
import AtomCtaFixturePrimary from '../src/atom/cta/test/fixtures/primary';
import AtomCtaFixtureSecondarySmall from '../src/atom/cta/test/fixtures/secondary-small';
import AtomCtaFixtureSecondary from '../src/atom/cta/test/fixtures/secondary';
import AtomDragAndDropFixtureDefault from '../src/atom/drag-and-drop/test/fixtures/default';
import AtomDragAndDropFixtureLoading from '../src/atom/drag-and-drop/test/fixtures/loading';
import AtomDragAndDropFixtureWithChildren from '../src/atom/drag-and-drop/test/fixtures/with-children';
import AtomDragAndDropFixtureWithImage from '../src/atom/drag-and-drop/test/fixtures/with-image';
import AtomDragAndDropFixtureWithVideo from '../src/atom/drag-and-drop/test/fixtures/with-video';
import AtomImageUploadFixtureDesktop from '../src/atom/image-upload/test/fixtures/desktop';
import AtomImageUploadFixtureEmail from '../src/atom/image-upload/test/fixtures/email';
import AtomImageUploadFixtureMobile from '../src/atom/image-upload/test/fixtures/mobile';
import AtomImageUploadFixtureModified from '../src/atom/image-upload/test/fixtures/modified';
import AtomImageUploadFixtureWithoutImage from '../src/atom/image-upload/test/fixtures/without-image';
import AtomInputCheckboxFixtureChecked from '../src/atom/input-checkbox/test/fixtures/checked';
import AtomInputCheckboxFixtureDefault from '../src/atom/input-checkbox/test/fixtures/default';
import AtomInputCheckboxFixtureDisabled from '../src/atom/input-checkbox/test/fixtures/disabled';
import AtomInputCheckboxFixtureError from '../src/atom/input-checkbox/test/fixtures/error';
import AtomInputCheckboxFixtureModified from '../src/atom/input-checkbox/test/fixtures/modified';
import AtomInputCheckboxFixtureRequired from '../src/atom/input-checkbox/test/fixtures/required';
import AtomInputColorFixtureDefault from '../src/atom/input-color/test/fixtures/default';
import AtomInputColorFixtureEmpty from '../src/atom/input-color/test/fixtures/empty';
import AtomInputColorFixtureError from '../src/atom/input-color/test/fixtures/error';
import AtomInputColorFixtureModified from '../src/atom/input-color/test/fixtures/modified';
import AtomInputDoublestepFixtureDefault from '../src/atom/input-doublestep/test/fixtures/default';
import AtomInputDoublestepFixtureInputConfirmDisabled from '../src/atom/input-doublestep/test/fixtures/input-confirm-disabled';
import AtomInputDoublestepFixtureInputConfirmPending from '../src/atom/input-doublestep/test/fixtures/input-confirm-pending';
import AtomInputDoublestepFixtureInputConfirm from '../src/atom/input-doublestep/test/fixtures/input-confirm';
import AtomInputHtmlFixtureDefault from '../src/atom/input-html/test/fixtures/default';
import AtomInputHtmlFixtureEmpty from '../src/atom/input-html/test/fixtures/empty';
import AtomInputHtmlFixtureError from '../src/atom/input-html/test/fixtures/error';
import AtomInputReadonlyFixtureDefault from '../src/atom/input-readonly/test/fixtures/default';
import AtomInputSwitchFixtureChecked from '../src/atom/input-switch/test/fixtures/checked';
import AtomInputSwitchFixtureDisabled from '../src/atom/input-switch/test/fixtures/disabled';
import AtomInputSwitchFixtureModified from '../src/atom/input-switch/test/fixtures/modified';
import AtomInputSwitchFixtureNoTitle from '../src/atom/input-switch/test/fixtures/no-title';
import AtomInputSwitchFixtureSso from '../src/atom/input-switch/test/fixtures/sso';
import AtomInputSwitchFixtureUnchecked from '../src/atom/input-switch/test/fixtures/unchecked';
import AtomInputTextFixtureDefault from '../src/atom/input-text/test/fixtures/default';
import AtomInputTextFixtureDisabled from '../src/atom/input-text/test/fixtures/disabled';
import AtomInputTextFixtureEmpty from '../src/atom/input-text/test/fixtures/empty';
import AtomInputTextFixtureError from '../src/atom/input-text/test/fixtures/error';
import AtomInputTextFixtureModified from '../src/atom/input-text/test/fixtures/modified';
import AtomInputTextFixtureNotitle from '../src/atom/input-text/test/fixtures/notitle';
import AtomInputTextFixtureRequired from '../src/atom/input-text/test/fixtures/required';
import AtomInputTextareaFixtureDefault from '../src/atom/input-textarea/test/fixtures/default';
import AtomInputTextareaFixtureEmpty from '../src/atom/input-textarea/test/fixtures/empty';
import AtomInputTextareaFixtureError from '../src/atom/input-textarea/test/fixtures/error';
import AtomLabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import AtomLabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import AtomLifeFixtureAnimatedExtraLife from '../src/atom/life/test/fixtures/animated-extra-life';
import AtomLifeFixtureAnimatedFail from '../src/atom/life/test/fixtures/animated-fail';
import AtomLifeFixtureDefault from '../src/atom/life/test/fixtures/default';
import AtomLifeFixtureFail from '../src/atom/life/test/fixtures/fail';
import AtomLifeFixtureNull from '../src/atom/life/test/fixtures/null';
import AtomLifeFixtureOverlayedExtraLife from '../src/atom/life/test/fixtures/overlayed-extra-life';
import AtomLifeFixtureSmall from '../src/atom/life/test/fixtures/small';
import AtomLinkFixtureDownload from '../src/atom/link/test/fixtures/download';
import AtomLinkFixtureHref from '../src/atom/link/test/fixtures/href';
import AtomLinkFixtureStyledLink from '../src/atom/link/test/fixtures/styled-link';
import AtomLoaderFixtureDefault from '../src/atom/loader/test/fixtures/default';
import AtomLoaderTargetFixtureBig from '../src/atom/loader-target/test/fixtures/big';
import AtomLoaderTargetFixtureDefault from '../src/atom/loader-target/test/fixtures/default';
import AtomNotificationFixtureDefault from '../src/atom/notification/test/fixtures/default';
import AtomNotificationFixtureError from '../src/atom/notification/test/fixtures/error';
import AtomNotificationFixtureWarning from '../src/atom/notification/test/fixtures/warning';
import AtomPictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import AtomPictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import AtomPictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import AtomPictureFixtureSvg from '../src/atom/picture/test/fixtures/svg';
import AtomPictureBackgroundFixtureContain from '../src/atom/picture-background/test/fixtures/contain';
import AtomPictureBackgroundFixtureCover from '../src/atom/picture-background/test/fixtures/cover';
import AtomPictureBackgroundFixtureDefault from '../src/atom/picture-background/test/fixtures/default';
import AtomPictureBackgroundFixtureDesktop from '../src/atom/picture-background/test/fixtures/desktop';
import AtomPromoCodeFixtureDefault from '../src/atom/promo-code/test/fixtures/default';
import AtomPromoCodeFixtureError from '../src/atom/promo-code/test/fixtures/error';
import AtomPromoCodeFixtureSuccess from '../src/atom/promo-code/test/fixtures/success';
import AtomProviderFixtureDefault from '../src/atom/provider/test/fixtures/default';
import AtomRadioGroupFixtureDefault from '../src/atom/radio-group/test/fixtures/default';
import AtomRadioGroupFixtureEmpty from '../src/atom/radio-group/test/fixtures/empty';
import AtomRadioGroupFixtureLastSelected from '../src/atom/radio-group/test/fixtures/last-selected';
import AtomRangeFixtureDefault from '../src/atom/range/test/fixtures/default';
import AtomRangeFixtureMulti from '../src/atom/range/test/fixtures/multi';
import AtomResourceMiniatureFixturePdf from '../src/atom/resource-miniature/test/fixtures/pdf';
import AtomResourceMiniatureFixtureSelectedPdf from '../src/atom/resource-miniature/test/fixtures/selected-pdf';
import AtomResourceMiniatureFixtureSelectedVideo from '../src/atom/resource-miniature/test/fixtures/selected-video';
import AtomResourceMiniatureFixtureVideo from '../src/atom/resource-miniature/test/fixtures/video';
import AtomSelectFixtureDefault from '../src/atom/select/test/fixtures/default';
import AtomSelectFixtureDisabled from '../src/atom/select/test/fixtures/disabled';
import AtomSelectFixtureFilter from '../src/atom/select/test/fixtures/filter';
import AtomSelectFixtureInvalid from '../src/atom/select/test/fixtures/invalid';
import AtomSelectFixtureModified from '../src/atom/select/test/fixtures/modified';
import AtomSelectFixtureMooc from '../src/atom/select/test/fixtures/mooc';
import AtomSelectFixtureMultipleSelected from '../src/atom/select/test/fixtures/multiple-selected';
import AtomSelectFixtureMultiple from '../src/atom/select/test/fixtures/multiple';
import AtomSelectFixtureQuestion from '../src/atom/select/test/fixtures/question';
import AtomSelectFixtureRequiredWithTitle from '../src/atom/select/test/fixtures/required-with-title';
import AtomSelectFixtureRequired from '../src/atom/select/test/fixtures/required';
import AtomSelectFixtureSort from '../src/atom/select/test/fixtures/sort';
import AtomSelectFixtureTemplate from '../src/atom/select/test/fixtures/template';
import AtomSelectFixtureThematiquesLong from '../src/atom/select/test/fixtures/thematiques-long';
import AtomSelectFixtureThematiques from '../src/atom/select/test/fixtures/thematiques';
import AtomSlideFixtureDefault from '../src/atom/slide/test/fixtures/default';
import AtomSlideFixtureLeft from '../src/atom/slide/test/fixtures/left';
import AtomSlideFixtureLight from '../src/atom/slide/test/fixtures/light';
import AtomSlideFixtureNoCta from '../src/atom/slide/test/fixtures/no-cta';
import AtomSlideFixtureRight from '../src/atom/slide/test/fixtures/right';
import AtomSocialLinkFixtureFacebook from '../src/atom/social-link/test/fixtures/facebook';
import AtomSocialLinkFixtureTwitter from '../src/atom/social-link/test/fixtures/twitter';
import AtomSpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import AtomTabFixtureDefault from '../src/atom/tab/test/fixtures/default';
import AtomTabContentFixtureDefault from '../src/atom/tab-content/test/fixtures/default';
import AtomTabContentFixtureHideContentBackground from '../src/atom/tab-content/test/fixtures/hide-content-background';
import AtomTitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
import AtomVideoUploadFixtureDesktop from '../src/atom/video-upload/test/fixtures/desktop';
import AtomVideoUploadFixtureLoading from '../src/atom/video-upload/test/fixtures/loading';
import AtomVideoUploadFixtureModified from '../src/atom/video-upload/test/fixtures/modified';
import AtomVideoUploadFixtureNoPreview from '../src/atom/video-upload/test/fixtures/no-preview';
import AtomVideoUploadFixtureWithoutVideo from '../src/atom/video-upload/test/fixtures/without-video';
import HocAnimationFixtureStart from '../src/hoc/animation/test/fixtures/start';
import HocAnimationFixtureStop from '../src/hoc/animation/test/fixtures/stop';
import HocAnimationSchedulerFixtureParallel from '../src/hoc/animation-scheduler/test/fixtures/parallel';
import HocAnimationSchedulerFixtureSeries from '../src/hoc/animation-scheduler/test/fixtures/series';
import HocLateralTransitionFixtureDefault from '../src/hoc/lateral-transition/test/fixtures/default';
import HocSwapperFixtureDefault from '../src/hoc/swapper/test/fixtures/default';
import HocTransitionFixtureFlipSquare from '../src/hoc/transition/test/fixtures/flip-square';
import MoleculeAnswerFixtureDefault from '../src/molecule/answer/test/fixtures/default';
import MoleculeAnswerFixtureDropDown from '../src/molecule/answer/test/fixtures/drop-down';
import MoleculeAnswerFixtureQcmDrag from '../src/molecule/answer/test/fixtures/qcm-drag';
import MoleculeAnswerFixtureQcmGraphic from '../src/molecule/answer/test/fixtures/qcm-graphic';
import MoleculeAnswerFixtureQcmShortVideo from '../src/molecule/answer/test/fixtures/qcm-short-video';
import MoleculeAnswerFixtureQcmShort from '../src/molecule/answer/test/fixtures/qcm-short';
import MoleculeAnswerFixtureQcm from '../src/molecule/answer/test/fixtures/qcm';
import MoleculeAnswerFixtureRange from '../src/molecule/answer/test/fixtures/range';
import MoleculeAnswerFixtureTemplate from '../src/molecule/answer/test/fixtures/template';
import MoleculeBattleRequestFixtureDefault from '../src/molecule/battle-request/test/fixtures/default';
import MoleculeBrandCardFixtureDefault from '../src/molecule/brand-card/test/fixtures/default';
import MoleculeBrandCardFixtureWithDescription from '../src/molecule/brand-card/test/fixtures/with-description';
import MoleculeBrandCardCreateFixtureDefault from '../src/molecule/brand-card-create/test/fixtures/default';
import MoleculeBrandCreateFormFixtureDefault from '../src/molecule/brand-create-form/test/fixtures/default';
import MoleculeBrandCreateFormFixtureError from '../src/molecule/brand-create-form/test/fixtures/error';
import MoleculeBrandCreateFormFixtureLoading from '../src/molecule/brand-create-form/test/fixtures/loading';
import MoleculeBrandCreateFormFixtureModified from '../src/molecule/brand-create-form/test/fixtures/modified';
import MoleculeBrandDownloadBoxFixtureDefault from '../src/molecule/brand-download-box/test/fixtures/default';
import MoleculeBrandDownloadBoxFixtureDownloadOneLoginTokens from '../src/molecule/brand-download-box/test/fixtures/download-one-login-tokens';
import MoleculeBrandDownloadBoxFixtureSso from '../src/molecule/brand-download-box/test/fixtures/sso';
import MoleculeBrandFormGroupFixtureAnalytics from '../src/molecule/brand-form-group/test/fixtures/analytics';
import MoleculeBrandFormGroupFixtureDashboard from '../src/molecule/brand-form-group/test/fixtures/dashboard';
import MoleculeBrandFormGroupFixtureDefault from '../src/molecule/brand-form-group/test/fixtures/default';
import MoleculeBrandFormGroupFixtureDoublefield from '../src/molecule/brand-form-group/test/fixtures/doublefield';
import MoleculeBrandFormGroupFixtureImages from '../src/molecule/brand-form-group/test/fixtures/images';
import MoleculeBrandFormGroupFixtureLookandfeel from '../src/molecule/brand-form-group/test/fixtures/lookandfeel';
import MoleculeBrandFormGroupFixtureRoles from '../src/molecule/brand-form-group/test/fixtures/roles';
import MoleculeBrandFormGroupFixtureSlider from '../src/molecule/brand-form-group/test/fixtures/slider';
import MoleculeBrandFormGroupFixtureSso from '../src/molecule/brand-form-group/test/fixtures/sso';
import MoleculeBrandTabsFixtureAnalytics from '../src/molecule/brand-tabs/test/fixtures/analytics';
import MoleculeBrandTabsFixtureDefault from '../src/molecule/brand-tabs/test/fixtures/default';
import MoleculeBrandTabsFixtureLookandfeel from '../src/molecule/brand-tabs/test/fixtures/lookandfeel';
import MoleculeBrandTabsFixtureSso from '../src/molecule/brand-tabs/test/fixtures/sso';
import MoleculeBrandTabsFixtureUsers from '../src/molecule/brand-tabs/test/fixtures/users';
import MoleculeBrandUploadBoxFixtureDefault from '../src/molecule/brand-upload-box/test/fixtures/default';
import MoleculeBrandUploadBoxFixtureLoading from '../src/molecule/brand-upload-box/test/fixtures/loading';
import MoleculeBrandUploadBoxFixtureSso from '../src/molecule/brand-upload-box/test/fixtures/sso';
import MoleculeBreadcrumbsFixtureDefault from '../src/molecule/breadcrumbs/test/fixtures/default';
import MoleculeCardFixtureAdaptivAndDisabled from '../src/molecule/card/test/fixtures/adaptiv-and-disabled';
import MoleculeCardFixtureAdaptiv from '../src/molecule/card/test/fixtures/adaptiv';
import MoleculeCardFixtureCatalogue from '../src/molecule/card/test/fixtures/catalogue';
import MoleculeCardFixtureDefault from '../src/molecule/card/test/fixtures/default';
import MoleculeCardFixtureDisabled from '../src/molecule/card/test/fixtures/disabled';
import MoleculeCardFixtureEmpty from '../src/molecule/card/test/fixtures/empty';
import MoleculeCardFixtureFreerunAndDisabled from '../src/molecule/card/test/fixtures/freerun-and-disabled';
import MoleculeCardFixtureFreerun from '../src/molecule/card/test/fixtures/freerun';
import MoleculeCookieBannerFixtureDefault from '../src/molecule/cookie-banner/test/fixtures/default';
import MoleculeDashboardBattleRequestListFixtureDefault from '../src/molecule/dashboard/battle-request-list/test/fixtures/default';
import MoleculeDashboardBattleRequestListFixtureEmpty from '../src/molecule/dashboard/battle-request-list/test/fixtures/empty';
import MoleculeDashboardCardsListFixtureDefault from '../src/molecule/dashboard/cards-list/test/fixtures/default';
import MoleculeDashboardCardsListFixtureManyEmpty from '../src/molecule/dashboard/cards-list/test/fixtures/many-empty';
import MoleculeDashboardCardsListFixtureMany from '../src/molecule/dashboard/cards-list/test/fixtures/many';
import MoleculeDashboardCardsListFixtureMicrolearning from '../src/molecule/dashboard/cards-list/test/fixtures/microlearning';
import MoleculeDashboardCardsListFixtureNoIcon from '../src/molecule/dashboard/cards-list/test/fixtures/no-icon';
import MoleculeDashboardNewsListFixtureDefault from '../src/molecule/dashboard/news-list/test/fixtures/default';
import MoleculeDashboardNewsListFixtureLoading from '../src/molecule/dashboard/news-list/test/fixtures/loading';
import MoleculeDashboardNewsListFixtureMore from '../src/molecule/dashboard/news-list/test/fixtures/more';
import MoleculeDashboardStartBattleFixtureDefault from '../src/molecule/dashboard/start-battle/test/fixtures/default';
import MoleculeDashboardStartBattleFixtureHref from '../src/molecule/dashboard/start-battle/test/fixtures/href';
import MoleculeDisciplineCtaFixtureDefault from '../src/molecule/discipline-cta/test/fixtures/default';
import MoleculeDisciplineCtaFixtureNoStart from '../src/molecule/discipline-cta/test/fixtures/no-start';
import MoleculeDisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import MoleculeDisciplineHeaderFixtureJwplayer from '../src/molecule/discipline-header/test/fixtures/jwplayer';
import MoleculeDisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import MoleculeDisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import MoleculeDisciplineHeaderFixturePortaitRatio from '../src/molecule/discipline-header/test/fixtures/portait-ratio';
import MoleculeDisciplineHeaderFixtureVimeo from '../src/molecule/discipline-header/test/fixtures/vimeo';
import MoleculeDisciplinePartnersFixtureDefault from '../src/molecule/discipline-partners/test/fixtures/default';
import MoleculeDisciplinePartnersFixtureDoubleAuthors from '../src/molecule/discipline-partners/test/fixtures/double-authors';
import MoleculeDisciplinePartnersFixtureMoreInfo from '../src/molecule/discipline-partners/test/fixtures/more-info';
import MoleculeDisciplinePartnersFixtureNoAuthor from '../src/molecule/discipline-partners/test/fixtures/no-author';
import MoleculeDisciplinePartnersFixtureNosite from '../src/molecule/discipline-partners/test/fixtures/nosite';
import MoleculeDisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import MoleculeDisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import MoleculeDisciplineScopeFixtureMedias from '../src/molecule/discipline-scope/test/fixtures/medias';
import MoleculeDisciplineScopeFixtureWithOnclick from '../src/molecule/discipline-scope/test/fixtures/with-onclick';
import MoleculeFeedbackFixtureDefault from '../src/molecule/feedback/test/fixtures/default';
import MoleculeFeedbackFixtureFailExitNode from '../src/molecule/feedback/test/fixtures/fail-exit-node';
import MoleculeFeedbackFixtureFailureWithTitleAndDescriptionAndVideo from '../src/molecule/feedback/test/fixtures/failure-with-title-and-description-and-video';
import MoleculeFeedbackFixtureSuccessExitNode from '../src/molecule/feedback/test/fixtures/success-exit-node';
import MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndImage from '../src/molecule/feedback/test/fixtures/success-with-title-and-description-and-image';
import MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndPdf from '../src/molecule/feedback/test/fixtures/success-with-title-and-description-and-pdf';
import MoleculeFeedbackFixtureSuccessWithTitleAndDescription from '../src/molecule/feedback/test/fixtures/success-with-title-and-description';
import MoleculeFiltersFixtureDefault from '../src/molecule/filters/test/fixtures/default';
import MoleculeFiltersFixtureFiltersList from '../src/molecule/filters/test/fixtures/filters-list';
import MoleculeFiltersFixtureOne from '../src/molecule/filters/test/fixtures/one';
import MoleculeFiltersFixtureOnlyRadioGroup from '../src/molecule/filters/test/fixtures/only-radio-group';
import MoleculeFiltersFixtureOnlyTimer from '../src/molecule/filters/test/fixtures/only-timer';
import MoleculeFiltersFixtureOpenSorts from '../src/molecule/filters/test/fixtures/open-sorts';
import MoleculeFiltersFixtureOpened from '../src/molecule/filters/test/fixtures/opened';
import MoleculeFiltersFixtureThree from '../src/molecule/filters/test/fixtures/three';
import MoleculeFiltersFixtureTwoOpened from '../src/molecule/filters/test/fixtures/two-opened';
import MoleculeFiltersFixtureTwo from '../src/molecule/filters/test/fixtures/two';
import MoleculeFiltersFixtureZero from '../src/molecule/filters/test/fixtures/zero';
import MoleculeForumForumCommentFixtureDefault from '../src/molecule/forum/forum-comment/test/fixtures/default';
import MoleculeForumForumCommentFixturePostDisabled from '../src/molecule/forum/forum-comment/test/fixtures/post-disabled';
import MoleculeForumForumCommentFixtureTextareaDisabled from '../src/molecule/forum/forum-comment/test/fixtures/textarea-disabled';
import MoleculeForumForumPostFixtureDefault from '../src/molecule/forum/forum-post/test/fixtures/default';
import MoleculeForumForumPostFixtureDeleted from '../src/molecule/forum/forum-post/test/fixtures/deleted';
import MoleculeForumForumPostFixtureEditable from '../src/molecule/forum/forum-post/test/fixtures/editable';
import MoleculeForumForumPostFixtureNotEditableNotRejectable from '../src/molecule/forum/forum-post/test/fixtures/not-editable-not-rejectable';
import MoleculeForumForumPostFixturePostsLocked from '../src/molecule/forum/forum-post/test/fixtures/posts-locked';
import MoleculeForumForumPostFixtureRejectable from '../src/molecule/forum/forum-post/test/fixtures/rejectable';
import MoleculeForumForumPostFixtureRejected from '../src/molecule/forum/forum-post/test/fixtures/rejected';
import MoleculeForumForumPostFixtureShowAnswerBox from '../src/molecule/forum/forum-post/test/fixtures/show-answer-box';
import MoleculeForumForumPostFixtureShowEditBox from '../src/molecule/forum/forum-post/test/fixtures/show-edit-box';
import MoleculeForumForumPostFixtureTextareasLocked from '../src/molecule/forum/forum-post/test/fixtures/textareas-locked';
import MoleculeForumForumThreadFixtureDeepAnswers from '../src/molecule/forum/forum-thread/test/fixtures/deep-answers';
import MoleculeForumForumThreadFixtureDefault from '../src/molecule/forum/forum-thread/test/fixtures/default';
import MoleculeForumForumThreadFixtureWithAnswers from '../src/molecule/forum/forum-thread/test/fixtures/with-answers';
import MoleculeMenuListFixtureDefault from '../src/molecule/menu-list/test/fixtures/default';
import MoleculeModuleBubbleFixtureDefault from '../src/molecule/module-bubble/test/fixtures/default';
import MoleculeModuleBubbleFixtureDisabled from '../src/molecule/module-bubble/test/fixtures/disabled';
import MoleculeModuleCardFixtureActive from '../src/molecule/module-card/test/fixtures/active';
import MoleculeModuleCardFixtureRestarted from '../src/molecule/module-card/test/fixtures/restarted';
import MoleculeNewsFixtureDefault from '../src/molecule/news/test/fixtures/default';
import MoleculeNewsFixtureLongDescription from '../src/molecule/news/test/fixtures/long-description';
import MoleculeNewsFixtureLongTitle from '../src/molecule/news/test/fixtures/long-title';
import MoleculeNewsFixtureSmallDesciption from '../src/molecule/news/test/fixtures/small-desciption';
import MoleculeNewsFixtureSmallTitle from '../src/molecule/news/test/fixtures/small-title';
import MoleculePaginationFixtureDefault from '../src/molecule/pagination/test/fixtures/default';
import MoleculePaginationFixtureDisabled from '../src/molecule/pagination/test/fixtures/disabled';
import MoleculePaymentFormFixtureDefault from '../src/molecule/payment-form/test/fixtures/default';
import MoleculePaymentFormFixtureError from '../src/molecule/payment-form/test/fixtures/error';
import MoleculePaymentFormFixtureWarning from '../src/molecule/payment-form/test/fixtures/warning';
import MoleculePdfFixtureDefault from '../src/molecule/pdf/test/fixtures/default';
import MoleculeProductCardFixtureDefault from '../src/molecule/product-card/test/fixtures/default';
import MoleculeProgressBarFixtureDefault from '../src/molecule/progress-bar/test/fixtures/default';
import MoleculeProgressBarFixtureMax from '../src/molecule/progress-bar/test/fixtures/max';
import MoleculeQuestionsDropDownFixtureDefault from '../src/molecule/questions/drop-down/test/fixtures/default';
import MoleculeQuestionsDropDownFixtureNoSelected from '../src/molecule/questions/drop-down/test/fixtures/no-selected';
import MoleculeQuestionsFreeTextFixtureDefault from '../src/molecule/questions/free-text/test/fixtures/default';
import MoleculeQuestionsFreeTextFixtureWithDefaultValue from '../src/molecule/questions/free-text/test/fixtures/with-default-value';
import MoleculeQuestionsQcmFixtureDefault from '../src/molecule/questions/qcm/test/fixtures/default';
import MoleculeQuestionsQcmFixtureNoSelected from '../src/molecule/questions/qcm/test/fixtures/no-selected';
import MoleculeQuestionsQcmFixtureShortAnswers from '../src/molecule/questions/qcm/test/fixtures/short-answers';
import MoleculeQuestionsQcmDragFixtureDefault from '../src/molecule/questions/qcm-drag/test/fixtures/default';
import MoleculeQuestionsQcmDragFixtureNoSelected from '../src/molecule/questions/qcm-drag/test/fixtures/no-selected';
import MoleculeQuestionsQcmGraphicFixtureDefault from '../src/molecule/questions/qcm-graphic/test/fixtures/default';
import MoleculeQuestionsQcmGraphicFixtureNoSelected from '../src/molecule/questions/qcm-graphic/test/fixtures/no-selected';
import MoleculeQuestionsQuestionRangeFixtureDefault from '../src/molecule/questions/question-range/test/fixtures/default';
import MoleculeQuestionsTemplateFixtureDefault from '../src/molecule/questions/template/test/fixtures/default';
import MoleculeQuestionsTemplateFixtureMultiple from '../src/molecule/questions/template/test/fixtures/multiple';
import MoleculeResourcePlayerFixtureImage from '../src/molecule/resource-player/test/fixtures/image';
import MoleculeResourcePlayerFixtureJwplayerWithOverlay from '../src/molecule/resource-player/test/fixtures/jwplayer-with-overlay';
import MoleculeResourcePlayerFixturePdfWithOverlay from '../src/molecule/resource-player/test/fixtures/pdf-with-overlay';
import MoleculeResourcePlayerFixturePdf from '../src/molecule/resource-player/test/fixtures/pdf';
import MoleculeResourcePlayerFixtureVimeoWithOverlay from '../src/molecule/resource-player/test/fixtures/vimeo-with-overlay';
import MoleculeResourcePlayerFixtureVimeo from '../src/molecule/resource-player/test/fixtures/vimeo';
import MoleculeScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import MoleculeScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import MoleculeScopeContentFixtureMedias from '../src/molecule/scope-content/test/fixtures/medias';
import MoleculeScopeContentFixtureWithOnclick from '../src/molecule/scope-content/test/fixtures/with-onclick';
import MoleculeScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import MoleculeScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import MoleculeSearchFixtureDefault from '../src/molecule/search/test/fixtures/default';
import MoleculeSearchFixtureWithValue from '../src/molecule/search/test/fixtures/with-value';
import MoleculeSearchFormFixtureDefault from '../src/molecule/search-form/test/fixtures/default';
import MoleculeSetupSectionFixtureAnalyticsBoutique from '../src/molecule/setup-section/test/fixtures/analytics-boutique';
import MoleculeSetupSectionFixtureAnalyticsBranch from '../src/molecule/setup-section/test/fixtures/analytics-branch';
import MoleculeSetupSectionFixtureAnalyticsRegion from '../src/molecule/setup-section/test/fixtures/analytics-region';
import MoleculeSetupSectionFixtureDefault from '../src/molecule/setup-section/test/fixtures/default';
import MoleculeSetupSectionFixtureFirst from '../src/molecule/setup-section/test/fixtures/first';
import MoleculeSetupSectionFixtureNoContentTypes from '../src/molecule/setup-section/test/fixtures/no-content-types';
import MoleculeSetupSectionFixtureOther from '../src/molecule/setup-section/test/fixtures/other';
import MoleculeSetupSectionsFixtureAnalytics from '../src/molecule/setup-sections/test/fixtures/analytics';
import MoleculeSetupSectionsFixtureDashboard from '../src/molecule/setup-sections/test/fixtures/dashboard';
import MoleculeSetupSectionsFixtureDefault from '../src/molecule/setup-sections/test/fixtures/default';
import MoleculeSetupSectionsFixtureLoading from '../src/molecule/setup-sections/test/fixtures/loading';
import MoleculeSetupSlideFixtureDefault from '../src/molecule/setup-slide/test/fixtures/default';
import MoleculeSetupSliderFixtureDefault from '../src/molecule/setup-slider/test/fixtures/default';
import MoleculeSideNotificationFixtureDefault from '../src/molecule/side-notification/test/fixtures/default';
import MoleculeSsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import MoleculeSsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import MoleculeSsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import MoleculeSsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import MoleculeSubscriptionFreemiumFixtureDefault from '../src/molecule/subscription-freemium/test/fixtures/default';
import MoleculeSubscriptionPremiumFixtureDefault from '../src/molecule/subscription-premium/test/fixtures/default';
import MoleculeSubscriptionPremiumFixturePromoCode from '../src/molecule/subscription-premium/test/fixtures/promo-code';
import MoleculeTableFixtureDefault from '../src/molecule/table/test/fixtures/default';
import MoleculeTableFixtureNoOptions from '../src/molecule/table/test/fixtures/no-options';
import MoleculeThemeImageFixtureBg from '../src/molecule/theme-image/test/fixtures/bg';
import MoleculeTitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import MoleculeTitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import MoleculeTitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
import MoleculeUnsubscribeFixtureDefault from '../src/molecule/unsubscribe/test/fixtures/default';
import MoleculeUnsubscribeFixtureSubscribed from '../src/molecule/unsubscribe/test/fixtures/subscribed';
import MoleculeVideoIframeFixtureEmpty from '../src/molecule/video-iframe/test/fixtures/empty';
import MoleculeVideoIframeFixtureImagePlaceholder from '../src/molecule/video-iframe/test/fixtures/image-placeholder';
import MoleculeVideoIframeFixtureJwplayer from '../src/molecule/video-iframe/test/fixtures/jwplayer';
import MoleculeVideoIframeFixtureUptale from '../src/molecule/video-iframe/test/fixtures/uptale';
import MoleculeVideoIframeFixtureYoutube from '../src/molecule/video-iframe/test/fixtures/youtube';
import MoleculeVideoPlayerFixtureJwplayerRegular from '../src/molecule/video-player/test/fixtures/jwplayer-regular';
import MoleculeVideoPlayerFixtureJwplayer from '../src/molecule/video-player/test/fixtures/jwplayer';
import MoleculeVideoPlayerFixtureKontiki from '../src/molecule/video-player/test/fixtures/kontiki';
import MoleculeVideoPlayerFixtureUptale from '../src/molecule/video-player/test/fixtures/uptale';
import MoleculeVideoPlayerFixtureVimeo from '../src/molecule/video-player/test/fixtures/vimeo';
import MoleculeVideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
import OrganismAccordionContainerFixtureDefault from '../src/organism/accordion/container/test/fixtures/default';
import OrganismAccordionPartFixtureDefault from '../src/organism/accordion/part/test/fixtures/default';
import OrganismAccordionPartFixtureOpen from '../src/organism/accordion/part/test/fixtures/open';
import OrganismAccordionTogglerFixtureAllAreOpenable from '../src/organism/accordion/toggler/test/fixtures/all-are-openable';
import OrganismAccordionTogglerFixtureOnlyOne from '../src/organism/accordion/toggler/test/fixtures/only-one';
import OrganismBrandFormFixtureAnalytics from '../src/organism/brand-form/test/fixtures/analytics';
import OrganismBrandFormFixtureDashboard from '../src/organism/brand-form/test/fixtures/dashboard';
import OrganismBrandFormFixtureDefault from '../src/organism/brand-form/test/fixtures/default';
import OrganismBrandFormFixtureGeneralSettings from '../src/organism/brand-form/test/fixtures/general-settings';
import OrganismBrandFormFixtureLookandfeel from '../src/organism/brand-form/test/fixtures/lookandfeel';
import OrganismBrandFormFixtureSso from '../src/organism/brand-form/test/fixtures/sso';
import OrganismBrandFormFixtureUserEdit from '../src/organism/brand-form/test/fixtures/user-edit';
import OrganismBrandTableFixtureDefault from '../src/organism/brand-table/test/fixtures/default';
import OrganismBrandTableFixtureEmpty from '../src/organism/brand-table/test/fixtures/empty';
import OrganismBrandTableFixtureLoading from '../src/organism/brand-table/test/fixtures/loading';
import OrganismBrandUploadFixtureDefault from '../src/organism/brand-upload/test/fixtures/default';
import OrganismBrandUploadFixtureLoading from '../src/organism/brand-upload/test/fixtures/loading';
import OrganismCardsGridFixtureCatalog from '../src/organism/cards-grid/test/fixtures/catalog';
import OrganismCardsGridFixtureEmpty from '../src/organism/cards-grid/test/fixtures/empty';
import OrganismCardsGridFixtureLoading from '../src/organism/cards-grid/test/fixtures/loading';
import OrganismCardsGridFixtureMany from '../src/organism/cards-grid/test/fixtures/many';
import OrganismCartFixtureDefault from '../src/organism/cart/test/fixtures/default';
import OrganismDiscussionFixtureDefault from '../src/organism/discussion/test/fixtures/default';
import OrganismDiscussionFixtureLoadingMore from '../src/organism/discussion/test/fixtures/loading-more';
import OrganismDiscussionFixtureModeration from '../src/organism/discussion/test/fixtures/moderation';
import OrganismDiscussionFixtureNewDiscussion from '../src/organism/discussion/test/fixtures/new-discussion';
import OrganismGridListFixtureDefault from '../src/organism/grid-list/test/fixtures/default';
import OrganismHeaderFixtureDefault from '../src/organism/header/test/fixtures/default';
import OrganismHeroFixtureDefault from '../src/organism/hero/test/fixtures/default';
import OrganismHeroFixtureNoTouch from '../src/organism/hero/test/fixtures/no-touch';
import OrganismHeroFixtureTouch from '../src/organism/hero/test/fixtures/touch';
import OrganismMoocImageSliderFixtureDefault from '../src/organism/mooc/image-slider/test/fixtures/default';
import OrganismMoocImageSliderFixtureMultipleSlides from '../src/organism/mooc/image-slider/test/fixtures/multiple-slides';
import OrganismMoocHeaderFixtureDefault from '../src/organism/mooc-header/test/fixtures/default';
import OrganismMoocHeaderFixtureLogged from '../src/organism/mooc-header/test/fixtures/logged';
import OrganismMoocHeaderFixtureSliderMultiple from '../src/organism/mooc-header/test/fixtures/slider-multiple';
import OrganismMoocHeaderFixtureSlider from '../src/organism/mooc-header/test/fixtures/slider';
import OrganismMoocHeaderFixtureUserChangePassword from '../src/organism/mooc-header/test/fixtures/user-change-password';
import OrganismNotificationsFixtureDefault from '../src/organism/notifications/test/fixtures/default';
import OrganismPopinFixtureDefault from '../src/organism/popin/test/fixtures/default';
import OrganismResourceBrowserFixtureJwplayerWithOverlay from '../src/organism/resource-browser/test/fixtures/jwplayer-with-overlay';
import OrganismResourceBrowserFixtureJwplayer from '../src/organism/resource-browser/test/fixtures/jwplayer';
import OrganismResourceBrowserFixtureKontiki from '../src/organism/resource-browser/test/fixtures/kontiki';
import OrganismResourceBrowserFixtureOneVideo from '../src/organism/resource-browser/test/fixtures/one-video';
import OrganismResourceBrowserFixturePdfWithOverlay from '../src/organism/resource-browser/test/fixtures/pdf-with-overlay';
import OrganismResourceBrowserFixturePdf from '../src/organism/resource-browser/test/fixtures/pdf';
import OrganismResourceBrowserFixtureVimeoWithOverlay from '../src/organism/resource-browser/test/fixtures/vimeo-with-overlay';
import OrganismResourceBrowserFixtureVimeo from '../src/organism/resource-browser/test/fixtures/vimeo';
import OrganismSettingsFixtureDefault from '../src/organism/settings/test/fixtures/default';
import OrganismSettingsFixtureFreemium from '../src/organism/settings/test/fixtures/freemium';
import OrganismSettingsFixturePremium from '../src/organism/settings/test/fixtures/premium';
import OrganismSettingsFixturePromoCode from '../src/organism/settings/test/fixtures/promo-code';
import OrganismSetupHeaderFixtureDefault from '../src/organism/setup-header/test/fixtures/default';
import OrganismSetupHeaderFixtureFromDashboards from '../src/organism/setup-header/test/fixtures/from-dashboards';
import OrganismSidebarFixtureAnalytics from '../src/organism/sidebar/test/fixtures/analytics';
import OrganismSidebarFixtureCustom from '../src/organism/sidebar/test/fixtures/custom';
import OrganismSidebarFixtureDashboards from '../src/organism/sidebar/test/fixtures/dashboards';
import OrganismSidebarFixtureDefault from '../src/organism/sidebar/test/fixtures/default';
import OrganismSliderFixtureDefault from '../src/organism/slider/test/fixtures/default';
import OrganismSliderFixtureMultipleSlides from '../src/organism/slider/test/fixtures/multiple-slides';
import OrganismUserPreferencesFixtureDefault from '../src/organism/user-preferences/test/fixtures/default';
import TemplateActivityFixtureAllEngines from '../src/template/activity/test/fixtures/all-engines';
import TemplateActivityFixtureDefault from '../src/template/activity/test/fixtures/default';
import TemplateActivityFixtureEmpty from '../src/template/activity/test/fixtures/empty';
import TemplateActivityFixtureNoEngines from '../src/template/activity/test/fixtures/no-engines';
import TemplateAppPlayerLoadingFixtureDefault from '../src/template/app-player/loading/test/fixtures/default';
import TemplateAppPlayerPlayerPlayerHeaderFixtureLearner from '../src/template/app-player/player/player-header/test/fixtures/learner';
import TemplateAppPlayerPlayerPlayerHeaderFixtureMicrolearning from '../src/template/app-player/player/player-header/test/fixtures/microlearning';
import TemplateAppPlayerPlayerPlayerHeaderFixtureNoLives from '../src/template/app-player/player/player-header/test/fixtures/no-lives';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureClueSelected from '../src/template/app-player/player/slides/slides-footer/test/fixtures/clue-selected';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureDefault from '../src/template/app-player/player/slides/slides-footer/test/fixtures/default';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureDisabled from '../src/template/app-player/player/slides/slides-footer/test/fixtures/disabled';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureHighlighted from '../src/template/app-player/player/slides/slides-footer/test/fixtures/highlighted';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureMediaSelected from '../src/template/app-player/player/slides/slides-footer/test/fixtures/media-selected';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureNoClue from '../src/template/app-player/player/slides/slides-footer/test/fixtures/no-clue';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureNotify from '../src/template/app-player/player/slides/slides-footer/test/fixtures/notify';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureOnlyClue from '../src/template/app-player/player/slides/slides-footer/test/fixtures/only-clue';
import TemplateAppPlayerPlayerSlidesSlidesFooterFixtureWithContext from '../src/template/app-player/player/slides/slides-footer/test/fixtures/with-context';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureClue from '../src/template/app-player/player/slides/slides-player/test/fixtures/clue';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithImage from '../src/template/app-player/player/slides/slides-player/test/fixtures/context-with-image';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithPdf from '../src/template/app-player/player/slides/slides-player/test/fixtures/context-with-pdf';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithVideo from '../src/template/app-player/player/slides/slides-player/test/fixtures/context-with-video';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContext from '../src/template/app-player/player/slides/slides-player/test/fixtures/context';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureDefault from '../src/template/app-player/player/slides/slides-player/test/fixtures/default';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureDropDown from '../src/template/app-player/player/slides/slides-player/test/fixtures/drop-down';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureError from '../src/template/app-player/player/slides/slides-player/test/fixtures/error';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureFreeText from '../src/template/app-player/player/slides/slides-player/test/fixtures/free-text';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureLoading from '../src/template/app-player/player/slides/slides-player/test/fixtures/loading';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureMedia from '../src/template/app-player/player/slides/slides-player/test/fixtures/media';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoClue from '../src/template/app-player/player/slides/slides-player/test/fixtures/no-clue';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoQuestion from '../src/template/app-player/player/slides/slides-player/test/fixtures/no-question';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoStep from '../src/template/app-player/player/slides/slides-player/test/fixtures/no-step';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoTotal from '../src/template/app-player/player/slides/slides-player/test/fixtures/no-total';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureOnlyClue from '../src/template/app-player/player/slides/slides-player/test/fixtures/only-clue';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmDrag from '../src/template/app-player/player/slides/slides-player/test/fixtures/qcm-drag';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmGraphic from '../src/template/app-player/player/slides/slides-player/test/fixtures/qcm-graphic';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmShort from '../src/template/app-player/player/slides/slides-player/test/fixtures/qcm-short';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmTemplate from '../src/template/app-player/player/slides/slides-player/test/fixtures/qcm-template';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcm from '../src/template/app-player/player/slides/slides-player/test/fixtures/qcm';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureRange from '../src/template/app-player/player/slides/slides-player/test/fixtures/range';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureTemplate from '../src/template/app-player/player/slides/slides-player/test/fixtures/template';
import TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureWithMinHeight from '../src/template/app-player/player/slides/slides-player/test/fixtures/with-min-height';
import TemplateAppPlayerPlayerFixtureBackground from '../src/template/app-player/player/test/fixtures/background';
import TemplateAppPlayerPlayerFixtureClue from '../src/template/app-player/player/test/fixtures/clue';
import TemplateAppPlayerPlayerFixtureContextWithImage from '../src/template/app-player/player/test/fixtures/context-with-image';
import TemplateAppPlayerPlayerFixtureContextWithPdf from '../src/template/app-player/player/test/fixtures/context-with-pdf';
import TemplateAppPlayerPlayerFixtureContextWithVideo from '../src/template/app-player/player/test/fixtures/context-with-video';
import TemplateAppPlayerPlayerFixtureContext from '../src/template/app-player/player/test/fixtures/context';
import TemplateAppPlayerPlayerFixtureDropDown from '../src/template/app-player/player/test/fixtures/drop-down';
import TemplateAppPlayerPlayerFixtureEmpty from '../src/template/app-player/player/test/fixtures/empty';
import TemplateAppPlayerPlayerFixtureError from '../src/template/app-player/player/test/fixtures/error';
import TemplateAppPlayerPlayerFixtureFreeText from '../src/template/app-player/player/test/fixtures/free-text';
import TemplateAppPlayerPlayerFixtureMedia from '../src/template/app-player/player/test/fixtures/media';
import TemplateAppPlayerPlayerFixtureNoClue from '../src/template/app-player/player/test/fixtures/no-clue';
import TemplateAppPlayerPlayerFixtureOnlyClue from '../src/template/app-player/player/test/fixtures/only-clue';
import TemplateAppPlayerPlayerFixtureQcmDrag from '../src/template/app-player/player/test/fixtures/qcm-drag';
import TemplateAppPlayerPlayerFixtureQcmGraphic from '../src/template/app-player/player/test/fixtures/qcm-graphic';
import TemplateAppPlayerPlayerFixtureQcmShort from '../src/template/app-player/player/test/fixtures/qcm-short';
import TemplateAppPlayerPlayerFixtureQcm from '../src/template/app-player/player/test/fixtures/qcm';
import TemplateAppPlayerPlayerFixtureRange from '../src/template/app-player/player/test/fixtures/range';
import TemplateAppPlayerPopinCorrectionFixtureCorrectClosed from '../src/template/app-player/popin-correction/test/fixtures/correct-closed';
import TemplateAppPlayerPopinCorrectionFixtureCorrectNextChapter from '../src/template/app-player/popin-correction/test/fixtures/correct-next-chapter';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-klf';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-pdf';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithVideo from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-video';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenTips from '../src/template/app-player/popin-correction/test/fixtures/correct-open-tips';
import TemplateAppPlayerPopinCorrectionFixtureCorrectWithoutResources from '../src/template/app-player/popin-correction/test/fixtures/correct-without-resources';
import TemplateAppPlayerPopinCorrectionFixtureFailClosed from '../src/template/app-player/popin-correction/test/fixtures/fail-closed';
import TemplateAppPlayerPopinCorrectionFixtureFailMultipleAnswers from '../src/template/app-player/popin-correction/test/fixtures/fail-multiple-answers';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-klf';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdfAndOverlay from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf-and-overlay';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoAndOverlay from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video-and-overlay';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoExtralifeGranted from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video-extralife-granted';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenTips from '../src/template/app-player/popin-correction/test/fixtures/fail-open-tips';
import TemplateAppPlayerPopinCorrectionFixtureLoading from '../src/template/app-player/popin-correction/test/fixtures/loading';
import TemplateAppPlayerPopinEndFixtureCommentIsLoading from '../src/template/app-player/popin-end/test/fixtures/comment-is-loading';
import TemplateAppPlayerPopinEndFixtureCommentSent from '../src/template/app-player/popin-end/test/fixtures/comment-sent';
import TemplateAppPlayerPopinEndFixtureComment from '../src/template/app-player/popin-end/test/fixtures/comment';
import TemplateAppPlayerPopinEndFixtureCorrect from '../src/template/app-player/popin-end/test/fixtures/correct';
import TemplateAppPlayerPopinEndFixtureDefault from '../src/template/app-player/popin-end/test/fixtures/default';
import TemplateAppPlayerPopinEndFixtureFail from '../src/template/app-player/popin-end/test/fixtures/fail';
import TemplateAppPlayerPopinEndFixtureLoading from '../src/template/app-player/popin-end/test/fixtures/loading';
import TemplateAppPlayerPopinEndFixtureNegativeRank from '../src/template/app-player/popin-end/test/fixtures/negative-rank';
import TemplateAppPlayerPopinEndFixtureNextCourse from '../src/template/app-player/popin-end/test/fixtures/next-course';
import TemplateAppPlayerPopinEndFixtureNextLevelAdaptiveImg from '../src/template/app-player/popin-end/test/fixtures/next-level-adaptive-img';
import TemplateAppPlayerPopinEndFixtureSimpleAction from '../src/template/app-player/popin-end/test/fixtures/simple-action';
import TemplateAppPlayerPopinEndFixtureSubscribe from '../src/template/app-player/popin-end/test/fixtures/subscribe';
import TemplateAppPlayerPopinEndFixtureWithLoadingRecommendations from '../src/template/app-player/popin-end/test/fixtures/with-loading-recommendations';
import TemplateAppPlayerPopinEndFixtureWithRecommendations from '../src/template/app-player/popin-end/test/fixtures/with-recommendations';
import TemplateAppPlayerPopinHeaderFixtureExhaustedExtralife from '../src/template/app-player/popin-header/test/fixtures/exhausted-extralife';
import TemplateAppPlayerPopinHeaderFixtureExtralifeAccepted from '../src/template/app-player/popin-header/test/fixtures/extralife-accepted';
import TemplateAppPlayerPopinHeaderFixtureExtralife from '../src/template/app-player/popin-header/test/fixtures/extralife';
import TemplateAppPlayerPopinHeaderFixtureFailMultipleAnswers from '../src/template/app-player/popin-header/test/fixtures/fail-multiple-answers';
import TemplateAppPlayerPopinHeaderFixtureFail from '../src/template/app-player/popin-header/test/fixtures/fail';
import TemplateAppPlayerPopinHeaderFixtureLoading from '../src/template/app-player/popin-header/test/fixtures/loading';
import TemplateAppPlayerPopinHeaderFixtureNextChapter from '../src/template/app-player/popin-header/test/fixtures/next-chapter';
import TemplateAppPlayerPopinHeaderFixtureStarsRank from '../src/template/app-player/popin-header/test/fixtures/stars-rank';
import TemplateAppPlayerPopinHeaderFixtureSuccess from '../src/template/app-player/popin-header/test/fixtures/success';
import TemplateAppRacingAdminFixtureDefault from '../src/template/app-racing/admin/test/fixtures/default';
import TemplateAppRacingGameRaceFixtureDefault from '../src/template/app-racing/game/race/test/fixtures/default';
import TemplateAppRacingGameRaceFixtureNoTower from '../src/template/app-racing/game/race/test/fixtures/no-tower';
import TemplateAppRacingGameStatusFixtureQuestionStatus from '../src/template/app-racing/game/status/test/fixtures/question-status';
import TemplateAppRacingGameStatusFixtureRaceStatus from '../src/template/app-racing/game/status/test/fixtures/race-status';
import TemplateAppRacingGameStatusFixtureReadyToAnswerAllInMiddle from '../src/template/app-racing/game/status/test/fixtures/ready-to-answer-all-in-middle';
import TemplateAppRacingGameStatusFixtureReadyToAnswerSpread from '../src/template/app-racing/game/status/test/fixtures/ready-to-answer-spread';
import TemplateAppRacingGameStatusFixtureWaitingAnswer from '../src/template/app-racing/game/status/test/fixtures/waiting-answer';
import TemplateAppRacingGameTimerFixtureDefault from '../src/template/app-racing/game/timer/test/fixtures/default';
import TemplateAppRacingGameFixtureGameOver from '../src/template/app-racing/game/test/fixtures/game-over';
import TemplateAppRacingGameFixtureNoTower from '../src/template/app-racing/game/test/fixtures/no-tower';
import TemplateAppRacingGameFixtureQuestionAllInMiddle from '../src/template/app-racing/game/test/fixtures/question-all-in-middle';
import TemplateAppRacingGameFixtureRaceAllInMiddle from '../src/template/app-racing/game/test/fixtures/race-all-in-middle';
import TemplateAppRacingGameFixtureRaceHighlightBadAnswer from '../src/template/app-racing/game/test/fixtures/race-highlight-bad-answer';
import TemplateAppRacingGameFixtureRaceHighlightBadFirstAnswer from '../src/template/app-racing/game/test/fixtures/race-highlight-bad-first-answer';
import TemplateAppRacingGameFixtureRaceHighlightGoodAnswer from '../src/template/app-racing/game/test/fixtures/race-highlight-good-answer';
import TemplateAppRacingGameFixtureRaceLostAndNew from '../src/template/app-racing/game/test/fixtures/race-lost-and-new';
import TemplateAppRacingGameFixtureReadyForQuestion from '../src/template/app-racing/game/test/fixtures/ready-for-question';
import TemplateAppRacingGameFixtureReadyToAnswerSpread from '../src/template/app-racing/game/test/fixtures/ready-to-answer-spread';
import TemplateAppRacingGameFixtureStart from '../src/template/app-racing/game/test/fixtures/start';
import TemplateAppRacingGameFixtureWaitingAnswer from '../src/template/app-racing/game/test/fixtures/waiting-answer';
import TemplateAppRacingGameFixtureWaitingForAllInMiddle from '../src/template/app-racing/game/test/fixtures/waiting-for-all-in-middle';
import TemplateBackOfficeBrandCreateFixtureDefault from '../src/template/back-office/brand-create/test/fixtures/default';
import TemplateBackOfficeBrandCreateFixtureError from '../src/template/back-office/brand-create/test/fixtures/error';
import TemplateBackOfficeBrandCreateFixtureLoading from '../src/template/back-office/brand-create/test/fixtures/loading';
import TemplateBackOfficeBrandCreateFixtureModified from '../src/template/back-office/brand-create/test/fixtures/modified';
import TemplateBackOfficeBrandListFixtureDefault from '../src/template/back-office/brand-list/test/fixtures/default';
import TemplateBackOfficeBrandListFixtureLoading from '../src/template/back-office/brand-list/test/fixtures/loading';
import TemplateBackOfficeBrandUpdateFixtureAnalytics from '../src/template/back-office/brand-update/test/fixtures/analytics';
import TemplateBackOfficeBrandUpdateFixtureDashboard from '../src/template/back-office/brand-update/test/fixtures/dashboard';
import TemplateBackOfficeBrandUpdateFixtureDefault from '../src/template/back-office/brand-update/test/fixtures/default';
import TemplateBackOfficeBrandUpdateFixtureGeneralSettingsSuccess from '../src/template/back-office/brand-update/test/fixtures/general-settings-success';
import TemplateBackOfficeBrandUpdateFixtureGeneralSettings from '../src/template/back-office/brand-update/test/fixtures/general-settings';
import TemplateBackOfficeBrandUpdateFixtureLoader from '../src/template/back-office/brand-update/test/fixtures/loader';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelError from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-error';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelModified from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-modified';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelPending from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-pending';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelSuccess from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-success';
import TemplateBackOfficeBrandUpdateFixtureLookandfeel from '../src/template/back-office/brand-update/test/fixtures/lookandfeel';
import TemplateBackOfficeBrandUpdateFixtureSsoActivate from '../src/template/back-office/brand-update/test/fixtures/sso-activate';
import TemplateBackOfficeBrandUpdateFixtureSso from '../src/template/back-office/brand-update/test/fixtures/sso';
import TemplateBackOfficeBrandUpdateFixtureUsersEdit from '../src/template/back-office/brand-update/test/fixtures/users-edit';
import TemplateBackOfficeBrandUpdateFixtureUsersImportLoading from '../src/template/back-office/brand-update/test/fixtures/users-import-loading';
import TemplateBackOfficeBrandUpdateFixtureUsersImportSuccessful from '../src/template/back-office/brand-update/test/fixtures/users-import-successful';
import TemplateBackOfficeBrandUpdateFixtureUsersImport from '../src/template/back-office/brand-update/test/fixtures/users-import';
import TemplateBackOfficeBrandUpdateFixtureUsersList from '../src/template/back-office/brand-update/test/fixtures/users-list';
import TemplateBackOfficeBrandUpdateFixtureUsers from '../src/template/back-office/brand-update/test/fixtures/users';
import TemplateBackOfficeDashboardPreviewFixtureDefault from '../src/template/back-office/dashboard-preview/test/fixtures/default';
import TemplateBackOfficeDashboardPreviewFixtureError from '../src/template/back-office/dashboard-preview/test/fixtures/error';
import TemplateBackOfficeDashboardPreviewFixtureLoading from '../src/template/back-office/dashboard-preview/test/fixtures/loading';
import TemplateBackOfficeDashboardPreviewFixtureSelectedError from '../src/template/back-office/dashboard-preview/test/fixtures/selected-error';
import TemplateBackOfficeDashboardPreviewFixtureSelectedLoading from '../src/template/back-office/dashboard-preview/test/fixtures/selected-loading';
import TemplateBackOfficeDashboardPreviewFixtureSelected from '../src/template/back-office/dashboard-preview/test/fixtures/selected';
import TemplateCockpitJwUploaderFixtureDefault from '../src/template/cockpit/jw-uploader/test/fixtures/default';
import TemplateCommonAuthorsFixtureDefault from '../src/template/common/authors/test/fixtures/default';
import TemplateCommonAuthorsFixtureNoSocials from '../src/template/common/authors/test/fixtures/no-socials';
import TemplateCommonCoorpHeaderFixtureProduction from '../src/template/common/coorp-header/test/fixtures/production';
import TemplateCommonCoorpHeaderFixtureStaging from '../src/template/common/coorp-header/test/fixtures/staging';
import TemplateCommonDashboardFixtureDefault from '../src/template/common/dashboard/test/fixtures/default';
import TemplateCommonDashboardFixtureEmptyRequests from '../src/template/common/dashboard/test/fixtures/empty-requests';
import TemplateCommonDisciplineFixtureDefault from '../src/template/common/discipline/test/fixtures/default';
import TemplateCommonDisciplineFixtureDoubleAuthor from '../src/template/common/discipline/test/fixtures/double-author';
import TemplateCommonDisciplineFixtureEmpty from '../src/template/common/discipline/test/fixtures/empty';
import TemplateCommonDisciplineFixtureJwplayer from '../src/template/common/discipline/test/fixtures/jwplayer';
import TemplateCommonDisciplineFixtureLoading from '../src/template/common/discipline/test/fixtures/loading';
import TemplateCommonDisciplineFixtureNoAuthor from '../src/template/common/discipline/test/fixtures/no-author';
import TemplateCommonDisciplineFixtureNoVideo from '../src/template/common/discipline/test/fixtures/no-video';
import TemplateCommonDisciplineFixtureVimeo from '../src/template/common/discipline/test/fixtures/vimeo';
import TemplateCommonDisciplineFixtureWithOnclick from '../src/template/common/discipline/test/fixtures/with-onclick';
import TemplateCommonSearchPageFixtureDefault from '../src/template/common/search-page/test/fixtures/default';
import TemplateCommonSearchPageFixtureNoResultWithRecommendations from '../src/template/common/search-page/test/fixtures/no-result-with-recommendations';
import TemplateCommonSearchPageFixtureNoResult from '../src/template/common/search-page/test/fixtures/no-result';
import TemplateTeamBuilderAvatarFixtureDefault from '../src/template/team-builder/avatar/test/fixtures/default';
import TemplateTeamBuilderMotionnedTeamFixtureDefault from '../src/template/team-builder/motionned-team/test/fixtures/default';
import TemplateTeamBuilderMotionnedTeamFixtureEmptyProps from '../src/template/team-builder/motionned-team/test/fixtures/empty-props';
import TemplateTeamBuilderTeamAvatarFixtureDefault from '../src/template/team-builder/teamAvatar/test/fixtures/default';
import TemplateTeamBuilderFixtureDefault from '../src/template/team-builder/test/fixtures/default';
import TemplateTeamBuilderFixtureReadyToStart from '../src/template/team-builder/test/fixtures/ready-to-start';
import TemplateTeamBuilderFixtureTeamSelected from '../src/template/team-builder/test/fixtures/team-selected';
import TemplateTeamBuilderFixtureWaitForOthers from '../src/template/team-builder/test/fixtures/wait-for-others';

export const components = {
  Atom: {
    AtomButton,
    AtomCatalogSection,
    AtomCenteredText,
    AtomCheckbox,
    AtomClue,
    AtomCta,
    AtomDragAndDrop,
    AtomImageUpload,
    AtomInputCheckbox,
    AtomInputColor,
    AtomInputDoublestep,
    AtomInputHtml,
    AtomInputReadonly,
    AtomInputSwitch,
    AtomInputText,
    AtomInputTextarea,
    AtomLabel,
    AtomLife,
    AtomLink,
    AtomLoader,
    AtomLoaderTarget,
    AtomNotification,
    AtomPicture,
    AtomPictureBackground,
    AtomPromoCode,
    AtomProvider,
    AtomRadioGroup,
    AtomRange,
    AtomResourceMiniature,
    AtomSelect,
    AtomSlide,
    AtomSocialLink,
    AtomSpinner,
    AtomTab,
    AtomTabContent,
    AtomTitle,
    AtomVideoUpload
  },
  Hoc: {
    HocAnimation,
    HocAnimationScheduler,
    HocLateralTransition,
    HocSwapper,
    HocTransition
  },
  Molecule: {
    MoleculeAnswer,
    MoleculeBattleRequest,
    MoleculeBrandCard,
    MoleculeBrandCardCreate,
    MoleculeBrandCreateForm,
    MoleculeBrandDownloadBox,
    MoleculeBrandFormGroup,
    MoleculeBrandTabs,
    MoleculeBrandUploadBox,
    MoleculeBreadcrumbs,
    MoleculeCard,
    MoleculeCookieBanner,
    MoleculeDisciplineCta,
    MoleculeDisciplineHeader,
    MoleculeDisciplinePartners,
    MoleculeDisciplineScope,
    MoleculeFeedback,
    MoleculeFilters,
    MoleculeMenuList,
    MoleculeModuleBubble,
    MoleculeModuleCard,
    MoleculeNews,
    MoleculePagination,
    MoleculePaymentForm,
    MoleculePdf,
    MoleculeProductCard,
    MoleculeProgressBar,
    MoleculeResourcePlayer,
    MoleculeScopeContent,
    MoleculeScopeTabs,
    MoleculeSearch,
    MoleculeSearchForm,
    MoleculeSetupSection,
    MoleculeSetupSections,
    MoleculeSetupSlide,
    MoleculeSetupSlider,
    MoleculeSideNotification,
    MoleculeSsmenuList,
    MoleculeSubscriptionFreemium,
    MoleculeSubscriptionPremium,
    MoleculeTable,
    MoleculeThemeImage,
    MoleculeTitledCheckbox,
    MoleculeUnsubscribe,
    MoleculeVideoIframe,
    MoleculeVideoPlayer
  },
  MoleculeDashboard: {
    MoleculeDashboardBattleRequestList,
    MoleculeDashboardCardsList,
    MoleculeDashboardNewsList,
    MoleculeDashboardStartBattle
  },
  MoleculeForum: {
    MoleculeForumForumComment,
    MoleculeForumForumPost,
    MoleculeForumForumThread
  },
  MoleculeQuestions: {
    MoleculeQuestionsDropDown,
    MoleculeQuestionsFreeText,
    MoleculeQuestionsQcm,
    MoleculeQuestionsQcmDrag,
    MoleculeQuestionsQcmGraphic,
    MoleculeQuestionsQuestionRange,
    MoleculeQuestionsTemplate
  },
  OrganismAccordion: {
    OrganismAccordionContainer,
    OrganismAccordionPart,
    OrganismAccordionToggler
  },
  Organism: {
    OrganismBrandForm,
    OrganismBrandTable,
    OrganismBrandUpload,
    OrganismCardsGrid,
    OrganismCart,
    OrganismDiscussion,
    OrganismGridList,
    OrganismHeader,
    OrganismHero,
    OrganismMoocHeader,
    OrganismNotifications,
    OrganismPopin,
    OrganismResourceBrowser,
    OrganismSettings,
    OrganismSetupHeader,
    OrganismSidebar,
    OrganismSlider,
    OrganismUserPreferences
  },
  OrganismMooc: {
    OrganismMoocImageSlider
  },
  Template: {
    TemplateActivity,
    TemplateTeamBuilder
  },
  TemplateAppPlayer: {
    TemplateAppPlayerLoading,
    TemplateAppPlayerPlayer,
    TemplateAppPlayerPopinCorrection,
    TemplateAppPlayerPopinEnd,
    TemplateAppPlayerPopinHeader
  },
  TemplateAppPlayerPlayer: {
    TemplateAppPlayerPlayerPlayerHeader
  },
  TemplateAppPlayerPlayerSlides: {
    TemplateAppPlayerPlayerSlidesSlidesFooter,
    TemplateAppPlayerPlayerSlidesSlidesPlayer
  },
  TemplateAppRacing: {
    TemplateAppRacingAdmin,
    TemplateAppRacingGame
  },
  TemplateAppRacingGame: {
    TemplateAppRacingGameRace,
    TemplateAppRacingGameStatus,
    TemplateAppRacingGameTimer
  },
  TemplateBackOffice: {
    TemplateBackOfficeBrandCreate,
    TemplateBackOfficeBrandList,
    TemplateBackOfficeBrandUpdate,
    TemplateBackOfficeDashboardPreview
  },
  TemplateCockpit: {
    TemplateCockpitJwUploader
  },
  TemplateCommon: {
    TemplateCommonAuthors,
    TemplateCommonCoorpHeader,
    TemplateCommonDashboard,
    TemplateCommonDiscipline,
    TemplateCommonSearchPage
  },
  TemplateTeamBuilder: {
    TemplateTeamBuilderAvatar,
    TemplateTeamBuilderMotionnedTeam,
    TemplateTeamBuilderTeamAvatar
  }
};

export const fixtures = {
  Atom: {
    AtomButton: {
      A: AtomButtonFixtureA,
      ClassName: AtomButtonFixtureClassName,
      Clear: AtomButtonFixtureClear,
      Default: AtomButtonFixtureDefault,
      Disabled: AtomButtonFixtureDisabled,
      Download: AtomButtonFixtureDownload,
      Link: AtomButtonFixtureLink,
      Sso: AtomButtonFixtureSso
    },
    AtomCatalogSection: {
      List: AtomCatalogSectionFixtureList,
      Picture: AtomCatalogSectionFixturePicture
    },
    AtomCenteredText: {
      Default: AtomCenteredTextFixtureDefault
    },
    AtomCheckbox: {
      Checked: AtomCheckboxFixtureChecked,
      Default: AtomCheckboxFixtureDefault,
      Disabled: AtomCheckboxFixtureDisabled,
      Required: AtomCheckboxFixtureRequired
    },
    AtomClue: {
      Default: AtomClueFixtureDefault,
      Link: AtomClueFixtureLink,
      Loading: AtomClueFixtureLoading
    },
    AtomCta: {
      Disabled: AtomCtaFixtureDisabled,
      LightSmall: AtomCtaFixtureLightSmall,
      Light: AtomCtaFixtureLight,
      PrimarySmall: AtomCtaFixturePrimarySmall,
      Primary: AtomCtaFixturePrimary,
      SecondarySmall: AtomCtaFixtureSecondarySmall,
      Secondary: AtomCtaFixtureSecondary
    },
    AtomDragAndDrop: {
      Default: AtomDragAndDropFixtureDefault,
      Loading: AtomDragAndDropFixtureLoading,
      WithChildren: AtomDragAndDropFixtureWithChildren,
      WithImage: AtomDragAndDropFixtureWithImage,
      WithVideo: AtomDragAndDropFixtureWithVideo
    },
    AtomImageUpload: {
      Desktop: AtomImageUploadFixtureDesktop,
      Email: AtomImageUploadFixtureEmail,
      Mobile: AtomImageUploadFixtureMobile,
      Modified: AtomImageUploadFixtureModified,
      WithoutImage: AtomImageUploadFixtureWithoutImage
    },
    AtomInputCheckbox: {
      Checked: AtomInputCheckboxFixtureChecked,
      Default: AtomInputCheckboxFixtureDefault,
      Disabled: AtomInputCheckboxFixtureDisabled,
      Error: AtomInputCheckboxFixtureError,
      Modified: AtomInputCheckboxFixtureModified,
      Required: AtomInputCheckboxFixtureRequired
    },
    AtomInputColor: {
      Default: AtomInputColorFixtureDefault,
      Empty: AtomInputColorFixtureEmpty,
      Error: AtomInputColorFixtureError,
      Modified: AtomInputColorFixtureModified
    },
    AtomInputDoublestep: {
      Default: AtomInputDoublestepFixtureDefault,
      InputConfirmDisabled: AtomInputDoublestepFixtureInputConfirmDisabled,
      InputConfirmPending: AtomInputDoublestepFixtureInputConfirmPending,
      InputConfirm: AtomInputDoublestepFixtureInputConfirm
    },
    AtomInputHtml: {
      Default: AtomInputHtmlFixtureDefault,
      Empty: AtomInputHtmlFixtureEmpty,
      Error: AtomInputHtmlFixtureError
    },
    AtomInputReadonly: {
      Default: AtomInputReadonlyFixtureDefault
    },
    AtomInputSwitch: {
      Checked: AtomInputSwitchFixtureChecked,
      Disabled: AtomInputSwitchFixtureDisabled,
      Modified: AtomInputSwitchFixtureModified,
      NoTitle: AtomInputSwitchFixtureNoTitle,
      Sso: AtomInputSwitchFixtureSso,
      Unchecked: AtomInputSwitchFixtureUnchecked
    },
    AtomInputText: {
      Default: AtomInputTextFixtureDefault,
      Disabled: AtomInputTextFixtureDisabled,
      Empty: AtomInputTextFixtureEmpty,
      Error: AtomInputTextFixtureError,
      Modified: AtomInputTextFixtureModified,
      Notitle: AtomInputTextFixtureNotitle,
      Required: AtomInputTextFixtureRequired
    },
    AtomInputTextarea: {
      Default: AtomInputTextareaFixtureDefault,
      Empty: AtomInputTextareaFixtureEmpty,
      Error: AtomInputTextareaFixtureError
    },
    AtomLabel: {
      OneChild: AtomLabelFixtureOneChild,
      TwoChildren: AtomLabelFixtureTwoChildren
    },
    AtomLife: {
      AnimatedExtraLife: AtomLifeFixtureAnimatedExtraLife,
      AnimatedFail: AtomLifeFixtureAnimatedFail,
      Default: AtomLifeFixtureDefault,
      Fail: AtomLifeFixtureFail,
      Null: AtomLifeFixtureNull,
      OverlayedExtraLife: AtomLifeFixtureOverlayedExtraLife,
      Small: AtomLifeFixtureSmall
    },
    AtomLink: {
      Download: AtomLinkFixtureDownload,
      Href: AtomLinkFixtureHref,
      StyledLink: AtomLinkFixtureStyledLink
    },
    AtomLoader: {
      Default: AtomLoaderFixtureDefault
    },
    AtomLoaderTarget: {
      Big: AtomLoaderTargetFixtureBig,
      Default: AtomLoaderTargetFixtureDefault
    },
    AtomNotification: {
      Default: AtomNotificationFixtureDefault,
      Error: AtomNotificationFixtureError,
      Warning: AtomNotificationFixtureWarning
    },
    AtomPicture: {
      Default: AtomPictureFixtureDefault,
      Empty: AtomPictureFixtureEmpty,
      SimpleSrc: AtomPictureFixtureSimpleSrc,
      Svg: AtomPictureFixtureSvg
    },
    AtomPictureBackground: {
      Contain: AtomPictureBackgroundFixtureContain,
      Cover: AtomPictureBackgroundFixtureCover,
      Default: AtomPictureBackgroundFixtureDefault,
      Desktop: AtomPictureBackgroundFixtureDesktop
    },
    AtomPromoCode: {
      Default: AtomPromoCodeFixtureDefault,
      Error: AtomPromoCodeFixtureError,
      Success: AtomPromoCodeFixtureSuccess
    },
    AtomProvider: {
      Default: AtomProviderFixtureDefault
    },
    AtomRadioGroup: {
      Default: AtomRadioGroupFixtureDefault,
      Empty: AtomRadioGroupFixtureEmpty,
      LastSelected: AtomRadioGroupFixtureLastSelected
    },
    AtomRange: {
      Default: AtomRangeFixtureDefault,
      Multi: AtomRangeFixtureMulti
    },
    AtomResourceMiniature: {
      Pdf: AtomResourceMiniatureFixturePdf,
      SelectedPdf: AtomResourceMiniatureFixtureSelectedPdf,
      SelectedVideo: AtomResourceMiniatureFixtureSelectedVideo,
      Video: AtomResourceMiniatureFixtureVideo
    },
    AtomSelect: {
      Default: AtomSelectFixtureDefault,
      Disabled: AtomSelectFixtureDisabled,
      Filter: AtomSelectFixtureFilter,
      Invalid: AtomSelectFixtureInvalid,
      Modified: AtomSelectFixtureModified,
      Mooc: AtomSelectFixtureMooc,
      MultipleSelected: AtomSelectFixtureMultipleSelected,
      Multiple: AtomSelectFixtureMultiple,
      Question: AtomSelectFixtureQuestion,
      RequiredWithTitle: AtomSelectFixtureRequiredWithTitle,
      Required: AtomSelectFixtureRequired,
      Sort: AtomSelectFixtureSort,
      Template: AtomSelectFixtureTemplate,
      ThematiquesLong: AtomSelectFixtureThematiquesLong,
      Thematiques: AtomSelectFixtureThematiques
    },
    AtomSlide: {
      Default: AtomSlideFixtureDefault,
      Left: AtomSlideFixtureLeft,
      Light: AtomSlideFixtureLight,
      NoCta: AtomSlideFixtureNoCta,
      Right: AtomSlideFixtureRight
    },
    AtomSocialLink: {
      Facebook: AtomSocialLinkFixtureFacebook,
      Twitter: AtomSocialLinkFixtureTwitter
    },
    AtomSpinner: {
      Default: AtomSpinnerFixtureDefault
    },
    AtomTab: {
      Default: AtomTabFixtureDefault
    },
    AtomTabContent: {
      Default: AtomTabContentFixtureDefault,
      HideContentBackground: AtomTabContentFixtureHideContentBackground
    },
    AtomTitle: {
      Fixture: AtomTitleFixtureFixture
    },
    AtomVideoUpload: {
      Desktop: AtomVideoUploadFixtureDesktop,
      Loading: AtomVideoUploadFixtureLoading,
      Modified: AtomVideoUploadFixtureModified,
      NoPreview: AtomVideoUploadFixtureNoPreview,
      WithoutVideo: AtomVideoUploadFixtureWithoutVideo
    }
  },
  Hoc: {
    HocAnimation: {
      Start: HocAnimationFixtureStart,
      Stop: HocAnimationFixtureStop
    },
    HocAnimationScheduler: {
      Parallel: HocAnimationSchedulerFixtureParallel,
      Series: HocAnimationSchedulerFixtureSeries
    },
    HocLateralTransition: {
      Default: HocLateralTransitionFixtureDefault
    },
    HocSwapper: {
      Default: HocSwapperFixtureDefault
    },
    HocTransition: {
      FlipSquare: HocTransitionFixtureFlipSquare
    }
  },
  Molecule: {
    MoleculeAnswer: {
      Default: MoleculeAnswerFixtureDefault,
      DropDown: MoleculeAnswerFixtureDropDown,
      QcmDrag: MoleculeAnswerFixtureQcmDrag,
      QcmGraphic: MoleculeAnswerFixtureQcmGraphic,
      QcmShortVideo: MoleculeAnswerFixtureQcmShortVideo,
      QcmShort: MoleculeAnswerFixtureQcmShort,
      Qcm: MoleculeAnswerFixtureQcm,
      Range: MoleculeAnswerFixtureRange,
      Template: MoleculeAnswerFixtureTemplate
    },
    MoleculeBattleRequest: {
      Default: MoleculeBattleRequestFixtureDefault
    },
    MoleculeBrandCard: {
      Default: MoleculeBrandCardFixtureDefault,
      WithDescription: MoleculeBrandCardFixtureWithDescription
    },
    MoleculeBrandCardCreate: {
      Default: MoleculeBrandCardCreateFixtureDefault
    },
    MoleculeBrandCreateForm: {
      Default: MoleculeBrandCreateFormFixtureDefault,
      Error: MoleculeBrandCreateFormFixtureError,
      Loading: MoleculeBrandCreateFormFixtureLoading,
      Modified: MoleculeBrandCreateFormFixtureModified
    },
    MoleculeBrandDownloadBox: {
      Default: MoleculeBrandDownloadBoxFixtureDefault,
      DownloadOneLoginTokens: MoleculeBrandDownloadBoxFixtureDownloadOneLoginTokens,
      Sso: MoleculeBrandDownloadBoxFixtureSso
    },
    MoleculeBrandFormGroup: {
      Analytics: MoleculeBrandFormGroupFixtureAnalytics,
      Dashboard: MoleculeBrandFormGroupFixtureDashboard,
      Default: MoleculeBrandFormGroupFixtureDefault,
      Doublefield: MoleculeBrandFormGroupFixtureDoublefield,
      Images: MoleculeBrandFormGroupFixtureImages,
      Lookandfeel: MoleculeBrandFormGroupFixtureLookandfeel,
      Roles: MoleculeBrandFormGroupFixtureRoles,
      Slider: MoleculeBrandFormGroupFixtureSlider,
      Sso: MoleculeBrandFormGroupFixtureSso
    },
    MoleculeBrandTabs: {
      Analytics: MoleculeBrandTabsFixtureAnalytics,
      Default: MoleculeBrandTabsFixtureDefault,
      Lookandfeel: MoleculeBrandTabsFixtureLookandfeel,
      Sso: MoleculeBrandTabsFixtureSso,
      Users: MoleculeBrandTabsFixtureUsers
    },
    MoleculeBrandUploadBox: {
      Default: MoleculeBrandUploadBoxFixtureDefault,
      Loading: MoleculeBrandUploadBoxFixtureLoading,
      Sso: MoleculeBrandUploadBoxFixtureSso
    },
    MoleculeBreadcrumbs: {
      Default: MoleculeBreadcrumbsFixtureDefault
    },
    MoleculeCard: {
      AdaptivAndDisabled: MoleculeCardFixtureAdaptivAndDisabled,
      Adaptiv: MoleculeCardFixtureAdaptiv,
      Catalogue: MoleculeCardFixtureCatalogue,
      Default: MoleculeCardFixtureDefault,
      Disabled: MoleculeCardFixtureDisabled,
      Empty: MoleculeCardFixtureEmpty,
      FreerunAndDisabled: MoleculeCardFixtureFreerunAndDisabled,
      Freerun: MoleculeCardFixtureFreerun
    },
    MoleculeCookieBanner: {
      Default: MoleculeCookieBannerFixtureDefault
    },
    MoleculeDisciplineCta: {
      Default: MoleculeDisciplineCtaFixtureDefault,
      NoStart: MoleculeDisciplineCtaFixtureNoStart
    },
    MoleculeDisciplineHeader: {
      Default: MoleculeDisciplineHeaderFixtureDefault,
      Jwplayer: MoleculeDisciplineHeaderFixtureJwplayer,
      NoVideoNoImage: MoleculeDisciplineHeaderFixtureNoVideoNoImage,
      NoVideo: MoleculeDisciplineHeaderFixtureNoVideo,
      PortaitRatio: MoleculeDisciplineHeaderFixturePortaitRatio,
      Vimeo: MoleculeDisciplineHeaderFixtureVimeo
    },
    MoleculeDisciplinePartners: {
      Default: MoleculeDisciplinePartnersFixtureDefault,
      DoubleAuthors: MoleculeDisciplinePartnersFixtureDoubleAuthors,
      MoreInfo: MoleculeDisciplinePartnersFixtureMoreInfo,
      NoAuthor: MoleculeDisciplinePartnersFixtureNoAuthor,
      Nosite: MoleculeDisciplinePartnersFixtureNosite
    },
    MoleculeDisciplineScope: {
      Default: MoleculeDisciplineScopeFixtureDefault,
      Empty: MoleculeDisciplineScopeFixtureEmpty,
      Medias: MoleculeDisciplineScopeFixtureMedias,
      WithOnclick: MoleculeDisciplineScopeFixtureWithOnclick
    },
    MoleculeFeedback: {
      Default: MoleculeFeedbackFixtureDefault,
      FailExitNode: MoleculeFeedbackFixtureFailExitNode,
      FailureWithTitleAndDescriptionAndVideo: MoleculeFeedbackFixtureFailureWithTitleAndDescriptionAndVideo,
      SuccessExitNode: MoleculeFeedbackFixtureSuccessExitNode,
      SuccessWithTitleAndDescriptionAndImage: MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndImage,
      SuccessWithTitleAndDescriptionAndPdf: MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndPdf,
      SuccessWithTitleAndDescription: MoleculeFeedbackFixtureSuccessWithTitleAndDescription
    },
    MoleculeFilters: {
      Default: MoleculeFiltersFixtureDefault,
      FiltersList: MoleculeFiltersFixtureFiltersList,
      One: MoleculeFiltersFixtureOne,
      OnlyRadioGroup: MoleculeFiltersFixtureOnlyRadioGroup,
      OnlyTimer: MoleculeFiltersFixtureOnlyTimer,
      OpenSorts: MoleculeFiltersFixtureOpenSorts,
      Opened: MoleculeFiltersFixtureOpened,
      Three: MoleculeFiltersFixtureThree,
      TwoOpened: MoleculeFiltersFixtureTwoOpened,
      Two: MoleculeFiltersFixtureTwo,
      Zero: MoleculeFiltersFixtureZero
    },
    MoleculeMenuList: {
      Default: MoleculeMenuListFixtureDefault
    },
    MoleculeModuleBubble: {
      Default: MoleculeModuleBubbleFixtureDefault,
      Disabled: MoleculeModuleBubbleFixtureDisabled
    },
    MoleculeModuleCard: {
      Active: MoleculeModuleCardFixtureActive,
      Restarted: MoleculeModuleCardFixtureRestarted
    },
    MoleculeNews: {
      Default: MoleculeNewsFixtureDefault,
      LongDescription: MoleculeNewsFixtureLongDescription,
      LongTitle: MoleculeNewsFixtureLongTitle,
      SmallDesciption: MoleculeNewsFixtureSmallDesciption,
      SmallTitle: MoleculeNewsFixtureSmallTitle
    },
    MoleculePagination: {
      Default: MoleculePaginationFixtureDefault,
      Disabled: MoleculePaginationFixtureDisabled
    },
    MoleculePaymentForm: {
      Default: MoleculePaymentFormFixtureDefault,
      Error: MoleculePaymentFormFixtureError,
      Warning: MoleculePaymentFormFixtureWarning
    },
    MoleculePdf: {
      Default: MoleculePdfFixtureDefault
    },
    MoleculeProductCard: {
      Default: MoleculeProductCardFixtureDefault
    },
    MoleculeProgressBar: {
      Default: MoleculeProgressBarFixtureDefault,
      Max: MoleculeProgressBarFixtureMax
    },
    MoleculeResourcePlayer: {
      Image: MoleculeResourcePlayerFixtureImage,
      JwplayerWithOverlay: MoleculeResourcePlayerFixtureJwplayerWithOverlay,
      PdfWithOverlay: MoleculeResourcePlayerFixturePdfWithOverlay,
      Pdf: MoleculeResourcePlayerFixturePdf,
      VimeoWithOverlay: MoleculeResourcePlayerFixtureVimeoWithOverlay,
      Vimeo: MoleculeResourcePlayerFixtureVimeo
    },
    MoleculeScopeContent: {
      Default: MoleculeScopeContentFixtureDefault,
      Empty: MoleculeScopeContentFixtureEmpty,
      Medias: MoleculeScopeContentFixtureMedias,
      WithOnclick: MoleculeScopeContentFixtureWithOnclick
    },
    MoleculeScopeTabs: {
      Default: MoleculeScopeTabsFixtureDefault,
      Empty: MoleculeScopeTabsFixtureEmpty
    },
    MoleculeSearch: {
      Default: MoleculeSearchFixtureDefault,
      WithValue: MoleculeSearchFixtureWithValue
    },
    MoleculeSearchForm: {
      Default: MoleculeSearchFormFixtureDefault
    },
    MoleculeSetupSection: {
      AnalyticsBoutique: MoleculeSetupSectionFixtureAnalyticsBoutique,
      AnalyticsBranch: MoleculeSetupSectionFixtureAnalyticsBranch,
      AnalyticsRegion: MoleculeSetupSectionFixtureAnalyticsRegion,
      Default: MoleculeSetupSectionFixtureDefault,
      First: MoleculeSetupSectionFixtureFirst,
      NoContentTypes: MoleculeSetupSectionFixtureNoContentTypes,
      Other: MoleculeSetupSectionFixtureOther
    },
    MoleculeSetupSections: {
      Analytics: MoleculeSetupSectionsFixtureAnalytics,
      Dashboard: MoleculeSetupSectionsFixtureDashboard,
      Default: MoleculeSetupSectionsFixtureDefault,
      Loading: MoleculeSetupSectionsFixtureLoading
    },
    MoleculeSetupSlide: {
      Default: MoleculeSetupSlideFixtureDefault
    },
    MoleculeSetupSlider: {
      Default: MoleculeSetupSliderFixtureDefault
    },
    MoleculeSideNotification: {
      Default: MoleculeSideNotificationFixtureDefault
    },
    MoleculeSsmenuList: {
      Coorpacademy: MoleculeSsmenuListFixtureCoorpacademy,
      Empty: MoleculeSsmenuListFixtureEmpty,
      Formations: MoleculeSsmenuListFixtureFormations,
      Solutions: MoleculeSsmenuListFixtureSolutions
    },
    MoleculeSubscriptionFreemium: {
      Default: MoleculeSubscriptionFreemiumFixtureDefault
    },
    MoleculeSubscriptionPremium: {
      Default: MoleculeSubscriptionPremiumFixtureDefault,
      PromoCode: MoleculeSubscriptionPremiumFixturePromoCode
    },
    MoleculeTable: {
      Default: MoleculeTableFixtureDefault,
      NoOptions: MoleculeTableFixtureNoOptions
    },
    MoleculeThemeImage: {
      Bg: MoleculeThemeImageFixtureBg
    },
    MoleculeTitledCheckbox: {
      Checked: MoleculeTitledCheckboxFixtureChecked,
      NoBg: MoleculeTitledCheckboxFixtureNoBg,
      NotChecked: MoleculeTitledCheckboxFixtureNotChecked
    },
    MoleculeUnsubscribe: {
      Default: MoleculeUnsubscribeFixtureDefault,
      Subscribed: MoleculeUnsubscribeFixtureSubscribed
    },
    MoleculeVideoIframe: {
      Empty: MoleculeVideoIframeFixtureEmpty,
      ImagePlaceholder: MoleculeVideoIframeFixtureImagePlaceholder,
      Jwplayer: MoleculeVideoIframeFixtureJwplayer,
      Uptale: MoleculeVideoIframeFixtureUptale,
      Youtube: MoleculeVideoIframeFixtureYoutube
    },
    MoleculeVideoPlayer: {
      JwplayerRegular: MoleculeVideoPlayerFixtureJwplayerRegular,
      Jwplayer: MoleculeVideoPlayerFixtureJwplayer,
      Kontiki: MoleculeVideoPlayerFixtureKontiki,
      Uptale: MoleculeVideoPlayerFixtureUptale,
      Vimeo: MoleculeVideoPlayerFixtureVimeo,
      Youtube: MoleculeVideoPlayerFixtureYoutube
    }
  },
  MoleculeDashboard: {
    MoleculeDashboardBattleRequestList: {
      Default: MoleculeDashboardBattleRequestListFixtureDefault,
      Empty: MoleculeDashboardBattleRequestListFixtureEmpty
    },
    MoleculeDashboardCardsList: {
      Default: MoleculeDashboardCardsListFixtureDefault,
      ManyEmpty: MoleculeDashboardCardsListFixtureManyEmpty,
      Many: MoleculeDashboardCardsListFixtureMany,
      Microlearning: MoleculeDashboardCardsListFixtureMicrolearning,
      NoIcon: MoleculeDashboardCardsListFixtureNoIcon
    },
    MoleculeDashboardNewsList: {
      Default: MoleculeDashboardNewsListFixtureDefault,
      Loading: MoleculeDashboardNewsListFixtureLoading,
      More: MoleculeDashboardNewsListFixtureMore
    },
    MoleculeDashboardStartBattle: {
      Default: MoleculeDashboardStartBattleFixtureDefault,
      Href: MoleculeDashboardStartBattleFixtureHref
    }
  },
  MoleculeForum: {
    MoleculeForumForumComment: {
      Default: MoleculeForumForumCommentFixtureDefault,
      PostDisabled: MoleculeForumForumCommentFixturePostDisabled,
      TextareaDisabled: MoleculeForumForumCommentFixtureTextareaDisabled
    },
    MoleculeForumForumPost: {
      Default: MoleculeForumForumPostFixtureDefault,
      Deleted: MoleculeForumForumPostFixtureDeleted,
      Editable: MoleculeForumForumPostFixtureEditable,
      NotEditableNotRejectable: MoleculeForumForumPostFixtureNotEditableNotRejectable,
      PostsLocked: MoleculeForumForumPostFixturePostsLocked,
      Rejectable: MoleculeForumForumPostFixtureRejectable,
      Rejected: MoleculeForumForumPostFixtureRejected,
      ShowAnswerBox: MoleculeForumForumPostFixtureShowAnswerBox,
      ShowEditBox: MoleculeForumForumPostFixtureShowEditBox,
      TextareasLocked: MoleculeForumForumPostFixtureTextareasLocked
    },
    MoleculeForumForumThread: {
      DeepAnswers: MoleculeForumForumThreadFixtureDeepAnswers,
      Default: MoleculeForumForumThreadFixtureDefault,
      WithAnswers: MoleculeForumForumThreadFixtureWithAnswers
    }
  },
  MoleculeQuestions: {
    MoleculeQuestionsDropDown: {
      Default: MoleculeQuestionsDropDownFixtureDefault,
      NoSelected: MoleculeQuestionsDropDownFixtureNoSelected
    },
    MoleculeQuestionsFreeText: {
      Default: MoleculeQuestionsFreeTextFixtureDefault,
      WithDefaultValue: MoleculeQuestionsFreeTextFixtureWithDefaultValue
    },
    MoleculeQuestionsQcm: {
      Default: MoleculeQuestionsQcmFixtureDefault,
      NoSelected: MoleculeQuestionsQcmFixtureNoSelected,
      ShortAnswers: MoleculeQuestionsQcmFixtureShortAnswers
    },
    MoleculeQuestionsQcmDrag: {
      Default: MoleculeQuestionsQcmDragFixtureDefault,
      NoSelected: MoleculeQuestionsQcmDragFixtureNoSelected
    },
    MoleculeQuestionsQcmGraphic: {
      Default: MoleculeQuestionsQcmGraphicFixtureDefault,
      NoSelected: MoleculeQuestionsQcmGraphicFixtureNoSelected
    },
    MoleculeQuestionsQuestionRange: {
      Default: MoleculeQuestionsQuestionRangeFixtureDefault
    },
    MoleculeQuestionsTemplate: {
      Default: MoleculeQuestionsTemplateFixtureDefault,
      Multiple: MoleculeQuestionsTemplateFixtureMultiple
    }
  },
  OrganismAccordion: {
    OrganismAccordionContainer: {
      Default: OrganismAccordionContainerFixtureDefault
    },
    OrganismAccordionPart: {
      Default: OrganismAccordionPartFixtureDefault,
      Open: OrganismAccordionPartFixtureOpen
    },
    OrganismAccordionToggler: {
      AllAreOpenable: OrganismAccordionTogglerFixtureAllAreOpenable,
      OnlyOne: OrganismAccordionTogglerFixtureOnlyOne
    }
  },
  Organism: {
    OrganismBrandForm: {
      Analytics: OrganismBrandFormFixtureAnalytics,
      Dashboard: OrganismBrandFormFixtureDashboard,
      Default: OrganismBrandFormFixtureDefault,
      GeneralSettings: OrganismBrandFormFixtureGeneralSettings,
      Lookandfeel: OrganismBrandFormFixtureLookandfeel,
      Sso: OrganismBrandFormFixtureSso,
      UserEdit: OrganismBrandFormFixtureUserEdit
    },
    OrganismBrandTable: {
      Default: OrganismBrandTableFixtureDefault,
      Empty: OrganismBrandTableFixtureEmpty,
      Loading: OrganismBrandTableFixtureLoading
    },
    OrganismBrandUpload: {
      Default: OrganismBrandUploadFixtureDefault,
      Loading: OrganismBrandUploadFixtureLoading
    },
    OrganismCardsGrid: {
      Catalog: OrganismCardsGridFixtureCatalog,
      Empty: OrganismCardsGridFixtureEmpty,
      Loading: OrganismCardsGridFixtureLoading,
      Many: OrganismCardsGridFixtureMany
    },
    OrganismCart: {
      Default: OrganismCartFixtureDefault
    },
    OrganismDiscussion: {
      Default: OrganismDiscussionFixtureDefault,
      LoadingMore: OrganismDiscussionFixtureLoadingMore,
      Moderation: OrganismDiscussionFixtureModeration,
      NewDiscussion: OrganismDiscussionFixtureNewDiscussion
    },
    OrganismGridList: {
      Default: OrganismGridListFixtureDefault
    },
    OrganismHeader: {
      Default: OrganismHeaderFixtureDefault
    },
    OrganismHero: {
      Default: OrganismHeroFixtureDefault,
      NoTouch: OrganismHeroFixtureNoTouch,
      Touch: OrganismHeroFixtureTouch
    },
    OrganismMoocHeader: {
      Default: OrganismMoocHeaderFixtureDefault,
      Logged: OrganismMoocHeaderFixtureLogged,
      SliderMultiple: OrganismMoocHeaderFixtureSliderMultiple,
      Slider: OrganismMoocHeaderFixtureSlider,
      UserChangePassword: OrganismMoocHeaderFixtureUserChangePassword
    },
    OrganismNotifications: {
      Default: OrganismNotificationsFixtureDefault
    },
    OrganismPopin: {
      Default: OrganismPopinFixtureDefault
    },
    OrganismResourceBrowser: {
      JwplayerWithOverlay: OrganismResourceBrowserFixtureJwplayerWithOverlay,
      Jwplayer: OrganismResourceBrowserFixtureJwplayer,
      Kontiki: OrganismResourceBrowserFixtureKontiki,
      OneVideo: OrganismResourceBrowserFixtureOneVideo,
      PdfWithOverlay: OrganismResourceBrowserFixturePdfWithOverlay,
      Pdf: OrganismResourceBrowserFixturePdf,
      VimeoWithOverlay: OrganismResourceBrowserFixtureVimeoWithOverlay,
      Vimeo: OrganismResourceBrowserFixtureVimeo
    },
    OrganismSettings: {
      Default: OrganismSettingsFixtureDefault,
      Freemium: OrganismSettingsFixtureFreemium,
      Premium: OrganismSettingsFixturePremium,
      PromoCode: OrganismSettingsFixturePromoCode
    },
    OrganismSetupHeader: {
      Default: OrganismSetupHeaderFixtureDefault,
      FromDashboards: OrganismSetupHeaderFixtureFromDashboards
    },
    OrganismSidebar: {
      Analytics: OrganismSidebarFixtureAnalytics,
      Custom: OrganismSidebarFixtureCustom,
      Dashboards: OrganismSidebarFixtureDashboards,
      Default: OrganismSidebarFixtureDefault
    },
    OrganismSlider: {
      Default: OrganismSliderFixtureDefault,
      MultipleSlides: OrganismSliderFixtureMultipleSlides
    },
    OrganismUserPreferences: {
      Default: OrganismUserPreferencesFixtureDefault
    }
  },
  OrganismMooc: {
    OrganismMoocImageSlider: {
      Default: OrganismMoocImageSliderFixtureDefault,
      MultipleSlides: OrganismMoocImageSliderFixtureMultipleSlides
    }
  },
  Template: {
    TemplateActivity: {
      AllEngines: TemplateActivityFixtureAllEngines,
      Default: TemplateActivityFixtureDefault,
      Empty: TemplateActivityFixtureEmpty,
      NoEngines: TemplateActivityFixtureNoEngines
    },
    TemplateTeamBuilder: {
      Default: TemplateTeamBuilderFixtureDefault,
      ReadyToStart: TemplateTeamBuilderFixtureReadyToStart,
      TeamSelected: TemplateTeamBuilderFixtureTeamSelected,
      WaitForOthers: TemplateTeamBuilderFixtureWaitForOthers
    }
  },
  TemplateAppPlayer: {
    TemplateAppPlayerLoading: {
      Default: TemplateAppPlayerLoadingFixtureDefault
    },
    TemplateAppPlayerPlayer: {
      Background: TemplateAppPlayerPlayerFixtureBackground,
      Clue: TemplateAppPlayerPlayerFixtureClue,
      ContextWithImage: TemplateAppPlayerPlayerFixtureContextWithImage,
      ContextWithPdf: TemplateAppPlayerPlayerFixtureContextWithPdf,
      ContextWithVideo: TemplateAppPlayerPlayerFixtureContextWithVideo,
      Context: TemplateAppPlayerPlayerFixtureContext,
      DropDown: TemplateAppPlayerPlayerFixtureDropDown,
      Empty: TemplateAppPlayerPlayerFixtureEmpty,
      Error: TemplateAppPlayerPlayerFixtureError,
      FreeText: TemplateAppPlayerPlayerFixtureFreeText,
      Media: TemplateAppPlayerPlayerFixtureMedia,
      NoClue: TemplateAppPlayerPlayerFixtureNoClue,
      OnlyClue: TemplateAppPlayerPlayerFixtureOnlyClue,
      QcmDrag: TemplateAppPlayerPlayerFixtureQcmDrag,
      QcmGraphic: TemplateAppPlayerPlayerFixtureQcmGraphic,
      QcmShort: TemplateAppPlayerPlayerFixtureQcmShort,
      Qcm: TemplateAppPlayerPlayerFixtureQcm,
      Range: TemplateAppPlayerPlayerFixtureRange
    },
    TemplateAppPlayerPopinCorrection: {
      CorrectClosed: TemplateAppPlayerPopinCorrectionFixtureCorrectClosed,
      CorrectNextChapter: TemplateAppPlayerPopinCorrectionFixtureCorrectNextChapter,
      CorrectOpenKlf: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenKlf,
      CorrectOpenResourcesWithPdf: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithPdf,
      CorrectOpenResourcesWithVideo: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithVideo,
      CorrectOpenTips: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenTips,
      CorrectWithoutResources: TemplateAppPlayerPopinCorrectionFixtureCorrectWithoutResources,
      FailClosed: TemplateAppPlayerPopinCorrectionFixtureFailClosed,
      FailMultipleAnswers: TemplateAppPlayerPopinCorrectionFixtureFailMultipleAnswers,
      FailOpenKlf: TemplateAppPlayerPopinCorrectionFixtureFailOpenKlf,
      FailOpenResourcesWithPdfAndOverlay: TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdfAndOverlay,
      FailOpenResourcesWithPdf: TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdf,
      FailOpenResourcesWithVideoAndOverlay: TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoAndOverlay,
      FailOpenResourcesWithVideoExtralifeGranted: TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoExtralifeGranted,
      FailOpenTips: TemplateAppPlayerPopinCorrectionFixtureFailOpenTips,
      Loading: TemplateAppPlayerPopinCorrectionFixtureLoading
    },
    TemplateAppPlayerPopinEnd: {
      CommentIsLoading: TemplateAppPlayerPopinEndFixtureCommentIsLoading,
      CommentSent: TemplateAppPlayerPopinEndFixtureCommentSent,
      Comment: TemplateAppPlayerPopinEndFixtureComment,
      Correct: TemplateAppPlayerPopinEndFixtureCorrect,
      Default: TemplateAppPlayerPopinEndFixtureDefault,
      Fail: TemplateAppPlayerPopinEndFixtureFail,
      Loading: TemplateAppPlayerPopinEndFixtureLoading,
      NegativeRank: TemplateAppPlayerPopinEndFixtureNegativeRank,
      NextCourse: TemplateAppPlayerPopinEndFixtureNextCourse,
      NextLevelAdaptiveImg: TemplateAppPlayerPopinEndFixtureNextLevelAdaptiveImg,
      SimpleAction: TemplateAppPlayerPopinEndFixtureSimpleAction,
      Subscribe: TemplateAppPlayerPopinEndFixtureSubscribe,
      WithLoadingRecommendations: TemplateAppPlayerPopinEndFixtureWithLoadingRecommendations,
      WithRecommendations: TemplateAppPlayerPopinEndFixtureWithRecommendations
    },
    TemplateAppPlayerPopinHeader: {
      ExhaustedExtralife: TemplateAppPlayerPopinHeaderFixtureExhaustedExtralife,
      ExtralifeAccepted: TemplateAppPlayerPopinHeaderFixtureExtralifeAccepted,
      Extralife: TemplateAppPlayerPopinHeaderFixtureExtralife,
      FailMultipleAnswers: TemplateAppPlayerPopinHeaderFixtureFailMultipleAnswers,
      Fail: TemplateAppPlayerPopinHeaderFixtureFail,
      Loading: TemplateAppPlayerPopinHeaderFixtureLoading,
      NextChapter: TemplateAppPlayerPopinHeaderFixtureNextChapter,
      StarsRank: TemplateAppPlayerPopinHeaderFixtureStarsRank,
      Success: TemplateAppPlayerPopinHeaderFixtureSuccess
    }
  },
  TemplateAppPlayerPlayer: {
    TemplateAppPlayerPlayerPlayerHeader: {
      Learner: TemplateAppPlayerPlayerPlayerHeaderFixtureLearner,
      Microlearning: TemplateAppPlayerPlayerPlayerHeaderFixtureMicrolearning,
      NoLives: TemplateAppPlayerPlayerPlayerHeaderFixtureNoLives
    }
  },
  TemplateAppPlayerPlayerSlides: {
    TemplateAppPlayerPlayerSlidesSlidesFooter: {
      ClueSelected: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureClueSelected,
      Default: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureDefault,
      Disabled: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureDisabled,
      Highlighted: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureHighlighted,
      MediaSelected: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureMediaSelected,
      NoClue: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureNoClue,
      Notify: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureNotify,
      OnlyClue: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureOnlyClue,
      WithContext: TemplateAppPlayerPlayerSlidesSlidesFooterFixtureWithContext
    },
    TemplateAppPlayerPlayerSlidesSlidesPlayer: {
      Clue: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureClue,
      ContextWithImage: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithImage,
      ContextWithPdf: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithPdf,
      ContextWithVideo: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContextWithVideo,
      Context: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureContext,
      Default: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureDefault,
      DropDown: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureDropDown,
      Error: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureError,
      FreeText: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureFreeText,
      Loading: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureLoading,
      Media: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureMedia,
      NoClue: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoClue,
      NoQuestion: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoQuestion,
      NoStep: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoStep,
      NoTotal: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureNoTotal,
      OnlyClue: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureOnlyClue,
      QcmDrag: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmDrag,
      QcmGraphic: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmGraphic,
      QcmShort: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmShort,
      QcmTemplate: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcmTemplate,
      Qcm: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureQcm,
      Range: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureRange,
      Template: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureTemplate,
      WithMinHeight: TemplateAppPlayerPlayerSlidesSlidesPlayerFixtureWithMinHeight
    }
  },
  TemplateAppRacing: {
    TemplateAppRacingAdmin: {
      Default: TemplateAppRacingAdminFixtureDefault
    },
    TemplateAppRacingGame: {
      GameOver: TemplateAppRacingGameFixtureGameOver,
      NoTower: TemplateAppRacingGameFixtureNoTower,
      QuestionAllInMiddle: TemplateAppRacingGameFixtureQuestionAllInMiddle,
      RaceAllInMiddle: TemplateAppRacingGameFixtureRaceAllInMiddle,
      RaceHighlightBadAnswer: TemplateAppRacingGameFixtureRaceHighlightBadAnswer,
      RaceHighlightBadFirstAnswer: TemplateAppRacingGameFixtureRaceHighlightBadFirstAnswer,
      RaceHighlightGoodAnswer: TemplateAppRacingGameFixtureRaceHighlightGoodAnswer,
      RaceLostAndNew: TemplateAppRacingGameFixtureRaceLostAndNew,
      ReadyForQuestion: TemplateAppRacingGameFixtureReadyForQuestion,
      ReadyToAnswerSpread: TemplateAppRacingGameFixtureReadyToAnswerSpread,
      Start: TemplateAppRacingGameFixtureStart,
      WaitingAnswer: TemplateAppRacingGameFixtureWaitingAnswer,
      WaitingForAllInMiddle: TemplateAppRacingGameFixtureWaitingForAllInMiddle
    }
  },
  TemplateAppRacingGame: {
    TemplateAppRacingGameRace: {
      Default: TemplateAppRacingGameRaceFixtureDefault,
      NoTower: TemplateAppRacingGameRaceFixtureNoTower
    },
    TemplateAppRacingGameStatus: {
      QuestionStatus: TemplateAppRacingGameStatusFixtureQuestionStatus,
      RaceStatus: TemplateAppRacingGameStatusFixtureRaceStatus,
      ReadyToAnswerAllInMiddle: TemplateAppRacingGameStatusFixtureReadyToAnswerAllInMiddle,
      ReadyToAnswerSpread: TemplateAppRacingGameStatusFixtureReadyToAnswerSpread,
      WaitingAnswer: TemplateAppRacingGameStatusFixtureWaitingAnswer
    },
    TemplateAppRacingGameTimer: {
      Default: TemplateAppRacingGameTimerFixtureDefault
    }
  },
  TemplateBackOffice: {
    TemplateBackOfficeBrandCreate: {
      Default: TemplateBackOfficeBrandCreateFixtureDefault,
      Error: TemplateBackOfficeBrandCreateFixtureError,
      Loading: TemplateBackOfficeBrandCreateFixtureLoading,
      Modified: TemplateBackOfficeBrandCreateFixtureModified
    },
    TemplateBackOfficeBrandList: {
      Default: TemplateBackOfficeBrandListFixtureDefault,
      Loading: TemplateBackOfficeBrandListFixtureLoading
    },
    TemplateBackOfficeBrandUpdate: {
      Analytics: TemplateBackOfficeBrandUpdateFixtureAnalytics,
      Dashboard: TemplateBackOfficeBrandUpdateFixtureDashboard,
      Default: TemplateBackOfficeBrandUpdateFixtureDefault,
      GeneralSettingsSuccess: TemplateBackOfficeBrandUpdateFixtureGeneralSettingsSuccess,
      GeneralSettings: TemplateBackOfficeBrandUpdateFixtureGeneralSettings,
      Loader: TemplateBackOfficeBrandUpdateFixtureLoader,
      LookandfeelError: TemplateBackOfficeBrandUpdateFixtureLookandfeelError,
      LookandfeelModified: TemplateBackOfficeBrandUpdateFixtureLookandfeelModified,
      LookandfeelPending: TemplateBackOfficeBrandUpdateFixtureLookandfeelPending,
      LookandfeelSuccess: TemplateBackOfficeBrandUpdateFixtureLookandfeelSuccess,
      Lookandfeel: TemplateBackOfficeBrandUpdateFixtureLookandfeel,
      SsoActivate: TemplateBackOfficeBrandUpdateFixtureSsoActivate,
      Sso: TemplateBackOfficeBrandUpdateFixtureSso,
      UsersEdit: TemplateBackOfficeBrandUpdateFixtureUsersEdit,
      UsersImportLoading: TemplateBackOfficeBrandUpdateFixtureUsersImportLoading,
      UsersImportSuccessful: TemplateBackOfficeBrandUpdateFixtureUsersImportSuccessful,
      UsersImport: TemplateBackOfficeBrandUpdateFixtureUsersImport,
      UsersList: TemplateBackOfficeBrandUpdateFixtureUsersList,
      Users: TemplateBackOfficeBrandUpdateFixtureUsers
    },
    TemplateBackOfficeDashboardPreview: {
      Default: TemplateBackOfficeDashboardPreviewFixtureDefault,
      Error: TemplateBackOfficeDashboardPreviewFixtureError,
      Loading: TemplateBackOfficeDashboardPreviewFixtureLoading,
      SelectedError: TemplateBackOfficeDashboardPreviewFixtureSelectedError,
      SelectedLoading: TemplateBackOfficeDashboardPreviewFixtureSelectedLoading,
      Selected: TemplateBackOfficeDashboardPreviewFixtureSelected
    }
  },
  TemplateCockpit: {
    TemplateCockpitJwUploader: {
      Default: TemplateCockpitJwUploaderFixtureDefault
    }
  },
  TemplateCommon: {
    TemplateCommonAuthors: {
      Default: TemplateCommonAuthorsFixtureDefault,
      NoSocials: TemplateCommonAuthorsFixtureNoSocials
    },
    TemplateCommonCoorpHeader: {
      Production: TemplateCommonCoorpHeaderFixtureProduction,
      Staging: TemplateCommonCoorpHeaderFixtureStaging
    },
    TemplateCommonDashboard: {
      Default: TemplateCommonDashboardFixtureDefault,
      EmptyRequests: TemplateCommonDashboardFixtureEmptyRequests
    },
    TemplateCommonDiscipline: {
      Default: TemplateCommonDisciplineFixtureDefault,
      DoubleAuthor: TemplateCommonDisciplineFixtureDoubleAuthor,
      Empty: TemplateCommonDisciplineFixtureEmpty,
      Jwplayer: TemplateCommonDisciplineFixtureJwplayer,
      Loading: TemplateCommonDisciplineFixtureLoading,
      NoAuthor: TemplateCommonDisciplineFixtureNoAuthor,
      NoVideo: TemplateCommonDisciplineFixtureNoVideo,
      Vimeo: TemplateCommonDisciplineFixtureVimeo,
      WithOnclick: TemplateCommonDisciplineFixtureWithOnclick
    },
    TemplateCommonSearchPage: {
      Default: TemplateCommonSearchPageFixtureDefault,
      NoResultWithRecommendations: TemplateCommonSearchPageFixtureNoResultWithRecommendations,
      NoResult: TemplateCommonSearchPageFixtureNoResult
    }
  },
  TemplateTeamBuilder: {
    TemplateTeamBuilderAvatar: {
      Default: TemplateTeamBuilderAvatarFixtureDefault
    },
    TemplateTeamBuilderMotionnedTeam: {
      Default: TemplateTeamBuilderMotionnedTeamFixtureDefault,
      EmptyProps: TemplateTeamBuilderMotionnedTeamFixtureEmptyProps
    },
    TemplateTeamBuilderTeamAvatar: {
      Default: TemplateTeamBuilderTeamAvatarFixtureDefault
    }
  }
};
