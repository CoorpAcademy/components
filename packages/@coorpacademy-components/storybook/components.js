/* eslint-disable max-len */

import AtomAutocomplete from './../src/atom/autocomplete';
import AtomAvatar from './../src/atom/avatar';
import AtomButton from './../src/atom/button';
import AtomCatalogSection from './../src/atom/catalog-section';
import AtomCenteredText from './../src/atom/centered-text';
import AtomCheckbox from './../src/atom/checkbox';
import AtomClue from './../src/atom/clue';
import AtomCta from './../src/atom/cta';
import AtomDifficultyLevel from './../src/atom/difficulty-level';
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
import HocSwapper from './../src/hoc/swapper';
import HocTransition from './../src/hoc/transition';
import MoleculeAddToMyList from './../src/molecule/add-to-my-list';
import MoleculeAnswer from './../src/molecule/answer';
import MoleculeAudio from './../src/molecule/audio';
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
import MoleculeCardContent from './../src/molecule/card-content';
import MoleculeCardWithButton from './../src/molecule/card-with-button';
import MoleculeCockpitPopin from './../src/molecule/cockpit-popin';
import MoleculeCookieBanner from './../src/molecule/cookie-banner';
import MoleculeDashboardBattleRequestList from './../src/molecule/dashboard/battle-request-list';
import MoleculeDashboardCardsList from './../src/molecule/dashboard/cards-list';
import MoleculeDashboardNewsList from './../src/molecule/dashboard/news-list';
import MoleculeDashboardStartBattle from './../src/molecule/dashboard/start-battle';
import MoleculeDisciplineCta from './../src/molecule/discipline-cta';
import MoleculeDisciplineHeader from './../src/molecule/discipline-header';
import MoleculeDisciplinePartners from './../src/molecule/discipline-partners';
import MoleculeDisciplineScope from './../src/molecule/discipline-scope';
import MoleculeDragAndDrop from './../src/molecule/drag-and-drop';
import MoleculeExternalContentButton from './../src/molecule/external-content-button';
import MoleculeExternalContentViewer from './../src/molecule/external-content-viewer';
import MoleculeFeedback from './../src/molecule/feedback';
import MoleculeFilters from './../src/molecule/filters';
import MoleculeForumForumComment from './../src/molecule/forum/forum-comment';
import MoleculeForumForumPost from './../src/molecule/forum/forum-post';
import MoleculeForumForumThread from './../src/molecule/forum/forum-thread';
import MoleculeHero from './../src/molecule/hero';
import MoleculeLoginAlert from './../src/molecule/login-alert';
import MoleculeMenuList from './../src/molecule/menu-list';
import MoleculeMessagePopin from './../src/molecule/message-popin';
import MoleculeModal from './../src/molecule/modal';
import MoleculeModuleBubble from './../src/molecule/module-bubble';
import MoleculeModuleCard from './../src/molecule/module-card';
import MoleculeNews from './../src/molecule/news';
import MoleculeNotificationBanner from './../src/molecule/notification-banner';
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
import MoleculeSelectMultiple from './../src/molecule/select-multiple';
import MoleculeSetupCohortItem from './../src/molecule/setup-cohort-item';
import MoleculeSetupSection from './../src/molecule/setup-section';
import MoleculeSetupSections from './../src/molecule/setup-sections';
import MoleculeSetupSlide from './../src/molecule/setup-slide';
import MoleculeSetupSlider from './../src/molecule/setup-slider';
import MoleculeShare from './../src/molecule/share';
import MoleculeSsmenuList from './../src/molecule/ssmenu-list';
import MoleculeSubscriptionFreemium from './../src/molecule/subscription-freemium';
import MoleculeSubscriptionPremium from './../src/molecule/subscription-premium';
import MoleculeTable from './../src/molecule/table';
import MoleculeTeamsPopin from './../src/molecule/teams-popin';
import MoleculeThemeImage from './../src/molecule/theme-image';
import MoleculeTitledCheckbox from './../src/molecule/titled-checkbox';
import MoleculeUnsubscribe from './../src/molecule/unsubscribe';
import MoleculeVideoIframe from './../src/molecule/video-iframe';
import MoleculeVideoPlayer from './../src/molecule/video-player';
import OrganismAccordionContainer from './../src/organism/accordion/container';
import OrganismAccordionCoorpManagerPart from './../src/organism/accordion/coorp-manager/part';
import OrganismAccordionCoorpManager from './../src/organism/accordion/coorp-manager';
import OrganismAccordionPart from './../src/organism/accordion/part';
import OrganismAccordionToggler from './../src/organism/accordion/toggler';
import OrganismBrandAnalytics from './../src/organism/brand-analytics';
import OrganismBrandDashboard from './../src/organism/brand-dashboard';
import OrganismBrandForm from './../src/organism/brand-form';
import OrganismBrandTable from './../src/organism/brand-table';
import OrganismBrandUpload from './../src/organism/brand-upload';
import OrganismCardsGrid from './../src/organism/cards-grid';
import OrganismCart from './../src/organism/cart';
import OrganismDiscussion from './../src/organism/discussion';
import OrganismGetTheApp from './../src/organism/get-the-app';
import OrganismGridList from './../src/organism/grid-list';
import OrganismHeader from './../src/organism/header';
import OrganismHero from './../src/organism/hero';
import OrganismMoocImageSlider from './../src/organism/mooc/image-slider';
import OrganismMoocFooter from './../src/organism/mooc-footer';
import OrganismMoocHeader from './../src/organism/mooc-header';
import OrganismPopin from './../src/organism/popin';
import OrganismResourceBrowser from './../src/organism/resource-browser';
import OrganismSettings from './../src/organism/settings';
import OrganismSetupHeader from './../src/organism/setup-header';
import OrganismSidebar from './../src/organism/sidebar';
import OrganismSlider from './../src/organism/slider';
import OrganismUserPreferences from './../src/organism/user-preferences';
import TemplateActivity from './../src/template/activity';
import TemplateAppPlayerLoading from './../src/template/app-player/loading';
import TemplateAppPlayerPlayerSlidesFooter from './../src/template/app-player/player/slides/footer';
import TemplateAppPlayerPlayerSlidesHeader from './../src/template/app-player/player/slides/header';
import TemplateAppPlayerPlayerSlides from './../src/template/app-player/player/slides';
import TemplateAppPlayerPlayer from './../src/template/app-player/player';
import TemplateAppPlayerPopinCorrection from './../src/template/app-player/popin-correction';
import TemplateAppPlayerPopinEnd from './../src/template/app-player/popin-end';
import TemplateAppPlayerPopinHeader from './../src/template/app-player/popin-header';
import TemplateBackOfficeBrandCreate from './../src/template/back-office/brand-create';
import TemplateBackOfficeBrandList from './../src/template/back-office/brand-list';
import TemplateBackOfficeBrandUpdate from './../src/template/back-office/brand-update';
import TemplateBackOfficeDashboardPreview from './../src/template/back-office/dashboard-preview';
import TemplateBattleRequests from './../src/template/battle-requests';
import TemplateCockpitJwUploader from './../src/template/cockpit/jw-uploader';
import TemplateCommonAuthors from './../src/template/common/authors';
import TemplateCommonCoorpHeader from './../src/template/common/coorp-header';
import TemplateCommonDashboard from './../src/template/common/dashboard';
import TemplateCommonDiscipline from './../src/template/common/discipline';
import TemplateCommonSearchPage from './../src/template/common/search-page';
import TemplateExternalCourse from './../src/template/external-course';
import TemplateTeamsDashboard from './../src/template/teams-dashboard';
import AtomAutocompleteFixtureDefault from '../src/atom/autocomplete/test/fixtures/default';
import AtomAutocompleteFixtureError from '../src/atom/autocomplete/test/fixtures/error';
import AtomAutocompleteFixtureFilled from '../src/atom/autocomplete/test/fixtures/filled';
import AtomAutocompleteFixtureModified from '../src/atom/autocomplete/test/fixtures/modified';
import AtomAvatarFixtureDefault from '../src/atom/avatar/test/fixtures/default';
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
import AtomCtaFixtureCertification from '../src/atom/cta/test/fixtures/certification';
import AtomCtaFixtureDisabled from '../src/atom/cta/test/fixtures/disabled';
import AtomCtaFixtureLightSmall from '../src/atom/cta/test/fixtures/light-small';
import AtomCtaFixtureLight from '../src/atom/cta/test/fixtures/light';
import AtomCtaFixtureLogout from '../src/atom/cta/test/fixtures/logout';
import AtomCtaFixtureNoSubmitValue from '../src/atom/cta/test/fixtures/no-submit-value';
import AtomCtaFixturePrimarySmall from '../src/atom/cta/test/fixtures/primary-small';
import AtomCtaFixturePrimary from '../src/atom/cta/test/fixtures/primary';
import AtomCtaFixtureRectangularSecondaryFullwidth from '../src/atom/cta/test/fixtures/rectangular-secondary-fullwidth';
import AtomCtaFixtureRectangularSecondary from '../src/atom/cta/test/fixtures/rectangular-secondary';
import AtomCtaFixtureRectangular from '../src/atom/cta/test/fixtures/rectangular';
import AtomCtaFixtureSecondarySmall from '../src/atom/cta/test/fixtures/secondary-small';
import AtomCtaFixtureSecondary from '../src/atom/cta/test/fixtures/secondary';
import AtomDifficultyLevelFixtureEasy from '../src/atom/difficulty-level/test/fixtures/easy';
import AtomDifficultyLevelFixtureHard from '../src/atom/difficulty-level/test/fixtures/hard';
import AtomDifficultyLevelFixtureNormal from '../src/atom/difficulty-level/test/fixtures/normal';
import AtomDifficultyLevelFixtureUnknown from '../src/atom/difficulty-level/test/fixtures/unknown';
import AtomDragAndDropFixtureDefault from '../src/atom/drag-and-drop/test/fixtures/default';
import AtomDragAndDropFixtureLoading from '../src/atom/drag-and-drop/test/fixtures/loading';
import AtomDragAndDropFixtureWithChildren from '../src/atom/drag-and-drop/test/fixtures/with-children';
import AtomDragAndDropFixtureWithImageReset from '../src/atom/drag-and-drop/test/fixtures/with-image-reset';
import AtomDragAndDropFixtureWithImage from '../src/atom/drag-and-drop/test/fixtures/with-image';
import AtomDragAndDropFixtureWithVideo from '../src/atom/drag-and-drop/test/fixtures/with-video';
import AtomImageUploadFixtureDesktopResetDescriptionMultiple from '../src/atom/image-upload/test/fixtures/desktop-reset-description-multiple';
import AtomImageUploadFixtureDesktopResetDescriptionOnlyPng from '../src/atom/image-upload/test/fixtures/desktop-reset-description-only-png';
import AtomImageUploadFixtureDesktopResetDescription from '../src/atom/image-upload/test/fixtures/desktop-reset-description';
import AtomImageUploadFixtureDesktopResetNoDescription from '../src/atom/image-upload/test/fixtures/desktop-reset-no-description';
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
import AtomInputDoublestepFixtureDisabled from '../src/atom/input-doublestep/test/fixtures/disabled';
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
import AtomResourceMiniatureFixtureAudio from '../src/atom/resource-miniature/test/fixtures/audio';
import AtomResourceMiniatureFixturePdf from '../src/atom/resource-miniature/test/fixtures/pdf';
import AtomResourceMiniatureFixtureSelectedPdf from '../src/atom/resource-miniature/test/fixtures/selected-pdf';
import AtomResourceMiniatureFixtureSelectedVideo from '../src/atom/resource-miniature/test/fixtures/selected-video';
import AtomResourceMiniatureFixtureVideo from '../src/atom/resource-miniature/test/fixtures/video';
import AtomSelectFixtureDefault from '../src/atom/select/test/fixtures/default';
import AtomSelectFixtureDisabled from '../src/atom/select/test/fixtures/disabled';
import AtomSelectFixtureError from '../src/atom/select/test/fixtures/error';
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
import AtomSocialLinkFixtureFacebookFooter from '../src/atom/social-link/test/fixtures/facebook-footer';
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
import HocSwapperFixtureDefault from '../src/hoc/swapper/test/fixtures/default';
import HocTransitionFixtureFlipSquare from '../src/hoc/transition/test/fixtures/flip-square';
import MoleculeAddToMyListFixtureDefault from '../src/molecule/add-to-my-list/test/fixtures/default';
import MoleculeAddToMyListFixtureFavorite from '../src/molecule/add-to-my-list/test/fixtures/favorite';
import MoleculeAnswerFixtureAudio from '../src/molecule/answer/test/fixtures/audio';
import MoleculeAnswerFixtureDefault from '../src/molecule/answer/test/fixtures/default';
import MoleculeAnswerFixtureDropDown from '../src/molecule/answer/test/fixtures/drop-down';
import MoleculeAnswerFixtureQcmArabic from '../src/molecule/answer/test/fixtures/qcm-arabic';
import MoleculeAnswerFixtureQcmDrag from '../src/molecule/answer/test/fixtures/qcm-drag';
import MoleculeAnswerFixtureQcmGraphic from '../src/molecule/answer/test/fixtures/qcm-graphic';
import MoleculeAnswerFixtureQcmShortAudio from '../src/molecule/answer/test/fixtures/qcm-short-audio';
import MoleculeAnswerFixtureQcmShortVideo from '../src/molecule/answer/test/fixtures/qcm-short-video';
import MoleculeAnswerFixtureQcmShort from '../src/molecule/answer/test/fixtures/qcm-short';
import MoleculeAnswerFixtureQcm from '../src/molecule/answer/test/fixtures/qcm';
import MoleculeAnswerFixtureRange from '../src/molecule/answer/test/fixtures/range';
import MoleculeAnswerFixtureTemplate from '../src/molecule/answer/test/fixtures/template';
import MoleculeAudioFixtureDefault from '../src/molecule/audio/test/fixtures/default';
import MoleculeAudioFixtureWithPoster from '../src/molecule/audio/test/fixtures/with-poster';
import MoleculeBattleRequestFixtureArabic from '../src/molecule/battle-request/test/fixtures/arabic';
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
import MoleculeBrandFormGroupFixtureAnimations from '../src/molecule/brand-form-group/test/fixtures/animations';
import MoleculeBrandFormGroupFixtureCohort from '../src/molecule/brand-form-group/test/fixtures/cohort';
import MoleculeBrandFormGroupFixtureDashboard from '../src/molecule/brand-form-group/test/fixtures/dashboard';
import MoleculeBrandFormGroupFixtureDefault from '../src/molecule/brand-form-group/test/fixtures/default';
import MoleculeBrandFormGroupFixtureDoublefield from '../src/molecule/brand-form-group/test/fixtures/doublefield';
import MoleculeBrandFormGroupFixtureImages from '../src/molecule/brand-form-group/test/fixtures/images';
import MoleculeBrandFormGroupFixtureLookandfeel from '../src/molecule/brand-form-group/test/fixtures/lookandfeel';
import MoleculeBrandFormGroupFixtureRoles from '../src/molecule/brand-form-group/test/fixtures/roles';
import MoleculeBrandFormGroupFixtureSlider from '../src/molecule/brand-form-group/test/fixtures/slider';
import MoleculeBrandFormGroupFixtureSso from '../src/molecule/brand-form-group/test/fixtures/sso';
import MoleculeBrandTabsFixtureAnalytics from '../src/molecule/brand-tabs/test/fixtures/analytics';
import MoleculeBrandTabsFixtureCohort from '../src/molecule/brand-tabs/test/fixtures/cohort';
import MoleculeBrandTabsFixtureDefault from '../src/molecule/brand-tabs/test/fixtures/default';
import MoleculeBrandTabsFixtureImportusers from '../src/molecule/brand-tabs/test/fixtures/importusers';
import MoleculeBrandTabsFixtureLight from '../src/molecule/brand-tabs/test/fixtures/light';
import MoleculeBrandTabsFixtureLms from '../src/molecule/brand-tabs/test/fixtures/lms';
import MoleculeBrandTabsFixtureLookandfeel from '../src/molecule/brand-tabs/test/fixtures/lookandfeel';
import MoleculeBrandTabsFixtureManageusers from '../src/molecule/brand-tabs/test/fixtures/manageusers';
import MoleculeBrandTabsFixtureSso from '../src/molecule/brand-tabs/test/fixtures/sso';
import MoleculeBrandUploadBoxFixtureDefault from '../src/molecule/brand-upload-box/test/fixtures/default';
import MoleculeBrandUploadBoxFixtureLoading from '../src/molecule/brand-upload-box/test/fixtures/loading';
import MoleculeBrandUploadBoxFixtureSso from '../src/molecule/brand-upload-box/test/fixtures/sso';
import MoleculeBreadcrumbsFixtureDefault from '../src/molecule/breadcrumbs/test/fixtures/default';
import MoleculeCardFixtureAdaptivAndDisabled from '../src/molecule/card/test/fixtures/adaptiv-and-disabled';
import MoleculeCardFixtureAdaptiv from '../src/molecule/card/test/fixtures/adaptiv';
import MoleculeCardFixtureArabic from '../src/molecule/card/test/fixtures/arabic';
import MoleculeCardFixtureArticle from '../src/molecule/card/test/fixtures/article';
import MoleculeCardFixtureDefault from '../src/molecule/card/test/fixtures/default';
import MoleculeCardFixtureDisabled from '../src/molecule/card/test/fixtures/disabled';
import MoleculeCardFixtureEmpty from '../src/molecule/card/test/fixtures/empty';
import MoleculeCardFixtureExternalContent from '../src/molecule/card/test/fixtures/external-content';
import MoleculeCardFixtureFavorite from '../src/molecule/card/test/fixtures/favorite';
import MoleculeCardFixtureFreerunAndDisabled from '../src/molecule/card/test/fixtures/freerun-and-disabled';
import MoleculeCardFixtureFreerun from '../src/molecule/card/test/fixtures/freerun';
import MoleculeCardFixturePodcast from '../src/molecule/card/test/fixtures/podcast';
import MoleculeCardFixtureScorm from '../src/molecule/card/test/fixtures/scorm';
import MoleculeCardFixtureVideo from '../src/molecule/card/test/fixtures/video';
import MoleculeCardContentFixtureAdaptivAndDisabled from '../src/molecule/card-content/test/fixtures/adaptiv-and-disabled';
import MoleculeCardContentFixtureAdaptiv from '../src/molecule/card-content/test/fixtures/adaptiv';
import MoleculeCardContentFixtureArabicHero from '../src/molecule/card-content/test/fixtures/arabic-hero';
import MoleculeCardContentFixtureCardNoProgressBar from '../src/molecule/card-content/test/fixtures/card-no-progress-bar';
import MoleculeCardContentFixtureCard from '../src/molecule/card-content/test/fixtures/card';
import MoleculeCardContentFixtureDisabled from '../src/molecule/card-content/test/fixtures/disabled';
import MoleculeCardContentFixtureEmpty from '../src/molecule/card-content/test/fixtures/empty';
import MoleculeCardContentFixtureHero from '../src/molecule/card-content/test/fixtures/hero';
import MoleculeCardWithButtonFixtureDefault from '../src/molecule/card-with-button/test/fixtures/default';
import MoleculeCardWithButtonFixtureWithAvatar from '../src/molecule/card-with-button/test/fixtures/with-avatar';
import MoleculeCardWithButtonFixtureWithoutLabel from '../src/molecule/card-with-button/test/fixtures/without-label';
import MoleculeCockpitPopinFixtureDefault from '../src/molecule/cockpit-popin/test/fixtures/default';
import MoleculeCockpitPopinFixtureLoading from '../src/molecule/cockpit-popin/test/fixtures/loading';
import MoleculeCockpitPopinFixtureVideoTranslate from '../src/molecule/cockpit-popin/test/fixtures/video-translate';
import MoleculeCookieBannerFixtureDefault from '../src/molecule/cookie-banner/test/fixtures/default';
import MoleculeDashboardBattleRequestListFixtureDefault from '../src/molecule/dashboard/battle-request-list/test/fixtures/default';
import MoleculeDashboardBattleRequestListFixtureEmpty from '../src/molecule/dashboard/battle-request-list/test/fixtures/empty';
import MoleculeDashboardCardsListFixtureDefault from '../src/molecule/dashboard/cards-list/test/fixtures/default';
import MoleculeDashboardCardsListFixtureManyEmpty from '../src/molecule/dashboard/cards-list/test/fixtures/many-empty';
import MoleculeDashboardCardsListFixtureMany from '../src/molecule/dashboard/cards-list/test/fixtures/many';
import MoleculeDashboardCardsListFixtureMicrolearning from '../src/molecule/dashboard/cards-list/test/fixtures/microlearning';
import MoleculeDashboardCardsListFixtureNoIcon from '../src/molecule/dashboard/cards-list/test/fixtures/no-icon';
import MoleculeDashboardCardsListFixturePerformance from '../src/molecule/dashboard/cards-list/test/fixtures/performance';
import MoleculeDashboardNewsListFixtureDefault from '../src/molecule/dashboard/news-list/test/fixtures/default';
import MoleculeDashboardNewsListFixtureLoading from '../src/molecule/dashboard/news-list/test/fixtures/loading';
import MoleculeDashboardNewsListFixtureMore from '../src/molecule/dashboard/news-list/test/fixtures/more';
import MoleculeDashboardStartBattleFixtureDefault from '../src/molecule/dashboard/start-battle/test/fixtures/default';
import MoleculeDashboardStartBattleFixtureHref from '../src/molecule/dashboard/start-battle/test/fixtures/href';
import MoleculeDisciplineCtaFixtureDefault from '../src/molecule/discipline-cta/test/fixtures/default';
import MoleculeDisciplineCtaFixtureNoStart from '../src/molecule/discipline-cta/test/fixtures/no-start';
import MoleculeDisciplineHeaderFixtureArabic from '../src/molecule/discipline-header/test/fixtures/arabic';
import MoleculeDisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import MoleculeDisciplineHeaderFixtureJwplayer from '../src/molecule/discipline-header/test/fixtures/jwplayer';
import MoleculeDisciplineHeaderFixtureLongDescription from '../src/molecule/discipline-header/test/fixtures/long-description';
import MoleculeDisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import MoleculeDisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import MoleculeDisciplineHeaderFixturePortaitRatio from '../src/molecule/discipline-header/test/fixtures/portait-ratio';
import MoleculeDisciplineHeaderFixtureVimeo from '../src/molecule/discipline-header/test/fixtures/vimeo';
import MoleculeDisciplinePartnersFixtureDefault from '../src/molecule/discipline-partners/test/fixtures/default';
import MoleculeDisciplinePartnersFixtureDoubleAuthors from '../src/molecule/discipline-partners/test/fixtures/double-authors';
import MoleculeDisciplinePartnersFixtureMoreInfo from '../src/molecule/discipline-partners/test/fixtures/more-info';
import MoleculeDisciplinePartnersFixtureNoAuthor from '../src/molecule/discipline-partners/test/fixtures/no-author';
import MoleculeDisciplinePartnersFixtureNosite from '../src/molecule/discipline-partners/test/fixtures/nosite';
import MoleculeDisciplineScopeFixtureArabic from '../src/molecule/discipline-scope/test/fixtures/arabic';
import MoleculeDisciplineScopeFixtureAudio from '../src/molecule/discipline-scope/test/fixtures/audio';
import MoleculeDisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import MoleculeDisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import MoleculeDisciplineScopeFixtureMedias from '../src/molecule/discipline-scope/test/fixtures/medias';
import MoleculeDisciplineScopeFixturePdf from '../src/molecule/discipline-scope/test/fixtures/pdf';
import MoleculeDisciplineScopeFixtureVimeo from '../src/molecule/discipline-scope/test/fixtures/vimeo';
import MoleculeDisciplineScopeFixtureWithOnclick from '../src/molecule/discipline-scope/test/fixtures/with-onclick';
import MoleculeDragAndDropFixtureDefault from '../src/molecule/drag-and-drop/test/fixtures/default';
import MoleculeDragAndDropFixtureError from '../src/molecule/drag-and-drop/test/fixtures/error';
import MoleculeDragAndDropFixtureLoading from '../src/molecule/drag-and-drop/test/fixtures/loading';
import MoleculeDragAndDropFixtureReadyInvalid from '../src/molecule/drag-and-drop/test/fixtures/ready-invalid';
import MoleculeDragAndDropFixtureReady from '../src/molecule/drag-and-drop/test/fixtures/ready';
import MoleculeDragAndDropFixtureSuccessVideo from '../src/molecule/drag-and-drop/test/fixtures/success-video';
import MoleculeDragAndDropFixtureSuccess from '../src/molecule/drag-and-drop/test/fixtures/success';
import MoleculeExternalContentButtonFixtureArticle from '../src/molecule/external-content-button/test/fixtures/article';
import MoleculeExternalContentButtonFixturePodcast from '../src/molecule/external-content-button/test/fixtures/podcast';
import MoleculeExternalContentButtonFixtureScorm from '../src/molecule/external-content-button/test/fixtures/scorm';
import MoleculeExternalContentButtonFixtureVideo from '../src/molecule/external-content-button/test/fixtures/video';
import MoleculeExternalContentViewerFixtureArticle from '../src/molecule/external-content-viewer/test/fixtures/article';
import MoleculeExternalContentViewerFixtureDefault from '../src/molecule/external-content-viewer/test/fixtures/default';
import MoleculeExternalContentViewerFixtureH5P from '../src/molecule/external-content-viewer/test/fixtures/h5p';
import MoleculeExternalContentViewerFixturePodcastCockpitMode from '../src/molecule/external-content-viewer/test/fixtures/podcast-cockpit-mode';
import MoleculeExternalContentViewerFixturePodcastNoBackground from '../src/molecule/external-content-viewer/test/fixtures/podcast-no-background';
import MoleculeExternalContentViewerFixturePodcast from '../src/molecule/external-content-viewer/test/fixtures/podcast';
import MoleculeExternalContentViewerFixtureVideo from '../src/molecule/external-content-viewer/test/fixtures/video';
import MoleculeExternalContentViewerFixtureYoutubePodcast from '../src/molecule/external-content-viewer/test/fixtures/youtube-podcast';
import MoleculeFeedbackFixtureDefault from '../src/molecule/feedback/test/fixtures/default';
import MoleculeFeedbackFixtureFailExitNode from '../src/molecule/feedback/test/fixtures/fail-exit-node';
import MoleculeFeedbackFixtureFailureWithTitleAndDescriptionAndVideo from '../src/molecule/feedback/test/fixtures/failure-with-title-and-description-and-video';
import MoleculeFeedbackFixtureSuccessExitNode from '../src/molecule/feedback/test/fixtures/success-exit-node';
import MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndAudio from '../src/molecule/feedback/test/fixtures/success-with-title-and-description-and-audio';
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
import MoleculeHeroFixtureArabic from '../src/molecule/hero/test/fixtures/arabic';
import MoleculeHeroFixtureHero from '../src/molecule/hero/test/fixtures/hero';
import MoleculeLoginAlertFixtureDefault from '../src/molecule/login-alert/test/fixtures/default';
import MoleculeMenuListFixtureDefault from '../src/molecule/menu-list/test/fixtures/default';
import MoleculeMessagePopinFixtureDefault from '../src/molecule/message-popin/test/fixtures/default';
import MoleculeModalFixtureDefault from '../src/molecule/modal/test/fixtures/default';
import MoleculeModuleBubbleFixtureDefault from '../src/molecule/module-bubble/test/fixtures/default';
import MoleculeModuleBubbleFixtureDisabled from '../src/molecule/module-bubble/test/fixtures/disabled';
import MoleculeModuleBubbleFixtureFiltered from '../src/molecule/module-bubble/test/fixtures/filtered';
import MoleculeModuleCardFixtureActive from '../src/molecule/module-card/test/fixtures/active';
import MoleculeModuleCardFixtureArabic from '../src/molecule/module-card/test/fixtures/arabic';
import MoleculeModuleCardFixtureRestarted from '../src/molecule/module-card/test/fixtures/restarted';
import MoleculeNewsFixtureArabic from '../src/molecule/news/test/fixtures/arabic';
import MoleculeNewsFixtureDefault from '../src/molecule/news/test/fixtures/default';
import MoleculeNewsFixtureLongDescription from '../src/molecule/news/test/fixtures/long-description';
import MoleculeNewsFixtureLongTitle from '../src/molecule/news/test/fixtures/long-title';
import MoleculeNewsFixtureSmallDesciption from '../src/molecule/news/test/fixtures/small-desciption';
import MoleculeNewsFixtureSmallTitle from '../src/molecule/news/test/fixtures/small-title';
import MoleculeNotificationBannerFixtureDefault from '../src/molecule/notification-banner/test/fixtures/default';
import MoleculeNotificationBannerFixtureFeature from '../src/molecule/notification-banner/test/fixtures/feature';
import MoleculeNotificationBannerFixtureSurvey from '../src/molecule/notification-banner/test/fixtures/survey';
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
import MoleculeQuestionsQcmFixtureArabic from '../src/molecule/questions/qcm/test/fixtures/arabic';
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
import MoleculeResourcePlayerFixtureAudio from '../src/molecule/resource-player/test/fixtures/audio';
import MoleculeResourcePlayerFixtureImage from '../src/molecule/resource-player/test/fixtures/image';
import MoleculeResourcePlayerFixtureJwplayerWithOverlay from '../src/molecule/resource-player/test/fixtures/jwplayer-with-overlay';
import MoleculeResourcePlayerFixturePdfWithOverlay from '../src/molecule/resource-player/test/fixtures/pdf-with-overlay';
import MoleculeResourcePlayerFixturePdf from '../src/molecule/resource-player/test/fixtures/pdf';
import MoleculeResourcePlayerFixtureVimeoWithOverlay from '../src/molecule/resource-player/test/fixtures/vimeo-with-overlay';
import MoleculeResourcePlayerFixtureVimeo from '../src/molecule/resource-player/test/fixtures/vimeo';
import MoleculeScopeContentFixtureArabic from '../src/molecule/scope-content/test/fixtures/arabic';
import MoleculeScopeContentFixtureAudio from '../src/molecule/scope-content/test/fixtures/audio';
import MoleculeScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import MoleculeScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import MoleculeScopeContentFixtureMedias from '../src/molecule/scope-content/test/fixtures/medias';
import MoleculeScopeContentFixturePdf from '../src/molecule/scope-content/test/fixtures/pdf';
import MoleculeScopeContentFixtureVimeo from '../src/molecule/scope-content/test/fixtures/vimeo';
import MoleculeScopeContentFixtureWithOnclick from '../src/molecule/scope-content/test/fixtures/with-onclick';
import MoleculeScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import MoleculeScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import MoleculeScopeTabsFixtureWithoutStatus from '../src/molecule/scope-tabs/test/fixtures/without-status';
import MoleculeSearchFixtureDefault from '../src/molecule/search/test/fixtures/default';
import MoleculeSearchFixtureWithValue from '../src/molecule/search/test/fixtures/with-value';
import MoleculeSearchFormFixtureDefault from '../src/molecule/search-form/test/fixtures/default';
import MoleculeSelectMultipleFixtureCheckedCockpitTheme from '../src/molecule/select-multiple/test/fixtures/checked-cockpit-theme';
import MoleculeSelectMultipleFixtureCheckedSetupTheme from '../src/molecule/select-multiple/test/fixtures/checked-setup-theme';
import MoleculeSelectMultipleFixtureChecked from '../src/molecule/select-multiple/test/fixtures/checked';
import MoleculeSelectMultipleFixtureDefault from '../src/molecule/select-multiple/test/fixtures/default';
import MoleculeSelectMultipleFixtureSetupThemeError from '../src/molecule/select-multiple/test/fixtures/setup-theme-error';
import MoleculeSelectMultipleFixtureSetupTheme from '../src/molecule/select-multiple/test/fixtures/setup-theme';
import MoleculeSetupCohortItemFixtureCreateNewValid from '../src/molecule/setup-cohort-item/test/fixtures/create-new-valid';
import MoleculeSetupCohortItemFixtureCreateNew from '../src/molecule/setup-cohort-item/test/fixtures/create-new';
import MoleculeSetupCohortItemFixtureDefault from '../src/molecule/setup-cohort-item/test/fixtures/default';
import MoleculeSetupCohortItemFixtureDisabledSubmit from '../src/molecule/setup-cohort-item/test/fixtures/disabled-submit';
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
import MoleculeSetupSlideFixtureAlertMessage from '../src/molecule/setup-slide/test/fixtures/alert-message';
import MoleculeSetupSlideFixtureCheckbox from '../src/molecule/setup-slide/test/fixtures/checkbox';
import MoleculeSetupSlideFixtureCohort from '../src/molecule/setup-slide/test/fixtures/cohort';
import MoleculeSetupSlideFixtureCreateNewCohort from '../src/molecule/setup-slide/test/fixtures/create-new-cohort';
import MoleculeSetupSlideFixtureDefault from '../src/molecule/setup-slide/test/fixtures/default';
import MoleculeSetupSlideFixtureSplitForm from '../src/molecule/setup-slide/test/fixtures/split-form';
import MoleculeSetupSliderFixtureDefaultCohort from '../src/molecule/setup-slider/test/fixtures/default-cohort';
import MoleculeSetupSliderFixtureDefault from '../src/molecule/setup-slider/test/fixtures/default';
import MoleculeShareFixtureDefault from '../src/molecule/share/test/fixtures/default';
import MoleculeSsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import MoleculeSsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import MoleculeSsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import MoleculeSsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import MoleculeSubscriptionFreemiumFixtureDefault from '../src/molecule/subscription-freemium/test/fixtures/default';
import MoleculeSubscriptionPremiumFixtureDefault from '../src/molecule/subscription-premium/test/fixtures/default';
import MoleculeSubscriptionPremiumFixturePromoCode from '../src/molecule/subscription-premium/test/fixtures/promo-code';
import MoleculeTableFixtureCockpitTheme from '../src/molecule/table/test/fixtures/cockpit-theme';
import MoleculeTableFixtureDefault from '../src/molecule/table/test/fixtures/default';
import MoleculeTableFixtureNoOptions from '../src/molecule/table/test/fixtures/no-options';
import MoleculeTableFixtureReadonly from '../src/molecule/table/test/fixtures/readonly';
import MoleculeTeamsPopinFixtureDefault from '../src/molecule/teams-popin/test/fixtures/default';
import MoleculeTeamsPopinFixtureLoadingBackground from '../src/molecule/teams-popin/test/fixtures/loading-background';
import MoleculeTeamsPopinFixtureLoading from '../src/molecule/teams-popin/test/fixtures/loading';
import MoleculeTeamsPopinFixtureLoginBackground from '../src/molecule/teams-popin/test/fixtures/login-background';
import MoleculeTeamsPopinFixtureLoginFaild from '../src/molecule/teams-popin/test/fixtures/login-faild';
import MoleculeTeamsPopinFixtureLogin from '../src/molecule/teams-popin/test/fixtures/login';
import MoleculeTeamsPopinFixtureNotTeamsAccount from '../src/molecule/teams-popin/test/fixtures/not-teams-account';
import MoleculeTeamsPopinFixtureWithoutButton from '../src/molecule/teams-popin/test/fixtures/without-button';
import MoleculeTeamsPopinFixtureWrong from '../src/molecule/teams-popin/test/fixtures/wrong';
import MoleculeThemeImageFixtureBg from '../src/molecule/theme-image/test/fixtures/bg';
import MoleculeTitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import MoleculeTitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import MoleculeTitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
import MoleculeUnsubscribeFixtureDefault from '../src/molecule/unsubscribe/test/fixtures/default';
import MoleculeUnsubscribeFixtureSubscribed from '../src/molecule/unsubscribe/test/fixtures/subscribed';
import MoleculeVideoIframeFixtureEmpty from '../src/molecule/video-iframe/test/fixtures/empty';
import MoleculeVideoIframeFixtureH5P from '../src/molecule/video-iframe/test/fixtures/h5p';
import MoleculeVideoIframeFixtureImagePlaceholder from '../src/molecule/video-iframe/test/fixtures/image-placeholder';
import MoleculeVideoIframeFixtureJwplayer from '../src/molecule/video-iframe/test/fixtures/jwplayer';
import MoleculeVideoIframeFixtureOmniPlayer from '../src/molecule/video-iframe/test/fixtures/omni-player';
import MoleculeVideoIframeFixtureUptale from '../src/molecule/video-iframe/test/fixtures/uptale';
import MoleculeVideoIframeFixtureYoutube from '../src/molecule/video-iframe/test/fixtures/youtube';
import MoleculeVideoPlayerFixtureH5P from '../src/molecule/video-player/test/fixtures/h5p';
import MoleculeVideoPlayerFixtureJwplayerWithSubtitles from '../src/molecule/video-player/test/fixtures/jwplayer-with-subtitles';
import MoleculeVideoPlayerFixtureJwplayer from '../src/molecule/video-player/test/fixtures/jwplayer';
import MoleculeVideoPlayerFixtureKontiki from '../src/molecule/video-player/test/fixtures/kontiki';
import MoleculeVideoPlayerFixtureMp4 from '../src/molecule/video-player/test/fixtures/mp4';
import MoleculeVideoPlayerFixtureOmniPlayer from '../src/molecule/video-player/test/fixtures/omni-player';
import MoleculeVideoPlayerFixtureUptale from '../src/molecule/video-player/test/fixtures/uptale';
import MoleculeVideoPlayerFixtureVimeo from '../src/molecule/video-player/test/fixtures/vimeo';
import MoleculeVideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
import OrganismAccordionContainerFixtureDefault from '../src/organism/accordion/container/test/fixtures/default';
import OrganismAccordionContainerFixtureNoChildren from '../src/organism/accordion/container/test/fixtures/no-children';
import OrganismAccordionContainerFixtureOneChildren from '../src/organism/accordion/container/test/fixtures/one-children';
import OrganismAccordionCoorpManagerPartFixtureDefaut from '../src/organism/accordion/coorp-manager/part/test/fixtures/defaut';
import OrganismAccordionCoorpManagerFixtureDefault from '../src/organism/accordion/coorp-manager/test/fixtures/default';
import OrganismAccordionPartFixtureDefault from '../src/organism/accordion/part/test/fixtures/default';
import OrganismAccordionPartFixtureOpen from '../src/organism/accordion/part/test/fixtures/open';
import OrganismAccordionTogglerFixtureAllAreOpenable from '../src/organism/accordion/toggler/test/fixtures/all-are-openable';
import OrganismAccordionTogglerFixtureNoChildrens from '../src/organism/accordion/toggler/test/fixtures/no-childrens';
import OrganismAccordionTogglerFixtureOnlyOne from '../src/organism/accordion/toggler/test/fixtures/only-one';
import OrganismBrandAnalyticsFixtureDefault from '../src/organism/brand-analytics/test/fixtures/default';
import OrganismBrandAnalyticsFixtureError from '../src/organism/brand-analytics/test/fixtures/error';
import OrganismBrandAnalyticsFixtureLoading from '../src/organism/brand-analytics/test/fixtures/loading';
import OrganismBrandAnalyticsFixtureSelectedError from '../src/organism/brand-analytics/test/fixtures/selected-error';
import OrganismBrandAnalyticsFixtureSelectedLoading from '../src/organism/brand-analytics/test/fixtures/selected-loading';
import OrganismBrandAnalyticsFixtureSelected from '../src/organism/brand-analytics/test/fixtures/selected';
import OrganismBrandDashboardFixtureDefault from '../src/organism/brand-dashboard/test/fixtures/default';
import OrganismBrandFormFixtureAnalytics from '../src/organism/brand-form/test/fixtures/analytics';
import OrganismBrandFormFixtureAnimations from '../src/organism/brand-form/test/fixtures/animations';
import OrganismBrandFormFixtureCohort from '../src/organism/brand-form/test/fixtures/cohort';
import OrganismBrandFormFixtureDashboard from '../src/organism/brand-form/test/fixtures/dashboard';
import OrganismBrandFormFixtureDefault from '../src/organism/brand-form/test/fixtures/default';
import OrganismBrandFormFixtureGeneralSettings from '../src/organism/brand-form/test/fixtures/general-settings';
import OrganismBrandFormFixtureLms from '../src/organism/brand-form/test/fixtures/lms';
import OrganismBrandFormFixtureLookandfeel from '../src/organism/brand-form/test/fixtures/lookandfeel';
import OrganismBrandFormFixtureManageusersEdit from '../src/organism/brand-form/test/fixtures/manageusers-edit';
import OrganismBrandFormFixtureSso from '../src/organism/brand-form/test/fixtures/sso';
import OrganismBrandTableFixtureAnimations from '../src/organism/brand-table/test/fixtures/animations';
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
import OrganismGetTheAppFixtureDefault from '../src/organism/get-the-app/test/fixtures/default';
import OrganismGridListFixtureDefault from '../src/organism/grid-list/test/fixtures/default';
import OrganismHeaderFixtureDefault from '../src/organism/header/test/fixtures/default';
import OrganismHeroFixtureDefault from '../src/organism/hero/test/fixtures/default';
import OrganismHeroFixtureNoTouch from '../src/organism/hero/test/fixtures/no-touch';
import OrganismHeroFixtureTouch from '../src/organism/hero/test/fixtures/touch';
import OrganismMoocImageSliderFixtureDefault from '../src/organism/mooc/image-slider/test/fixtures/default';
import OrganismMoocImageSliderFixtureMultipleSlides from '../src/organism/mooc/image-slider/test/fixtures/multiple-slides';
import OrganismMoocFooterFixtureDefault from '../src/organism/mooc-footer/test/fixtures/default';
import OrganismMoocFooterFixtureNoMobileapps from '../src/organism/mooc-footer/test/fixtures/no-mobileapps';
import OrganismMoocFooterFixtureNoSections from '../src/organism/mooc-footer/test/fixtures/no-sections';
import OrganismMoocFooterFixtureNoSocialLinks from '../src/organism/mooc-footer/test/fixtures/no-social-links';
import OrganismMoocFooterFixtureNotEnoughPermissionsRoleNoMobileapp from '../src/organism/mooc-footer/test/fixtures/not-enough-permissions-role-no-mobileapp';
import OrganismMoocFooterFixtureNotEnoughPermissionsRole from '../src/organism/mooc-footer/test/fixtures/not-enough-permissions-role';
import OrganismMoocHeaderFixtureDefault from '../src/organism/mooc-header/test/fixtures/default';
import OrganismMoocHeaderFixtureLinkOnly from '../src/organism/mooc-header/test/fixtures/link-only';
import OrganismMoocHeaderFixtureLoggedWithBattleNotifications from '../src/organism/mooc-header/test/fixtures/logged-with-battle-notifications';
import OrganismMoocHeaderFixtureLogged from '../src/organism/mooc-header/test/fixtures/logged';
import OrganismMoocHeaderFixtureMobileSmallLogoFormat from '../src/organism/mooc-header/test/fixtures/mobile-small-logo-format';
import OrganismMoocHeaderFixtureMobileWideLogoFormat from '../src/organism/mooc-header/test/fixtures/mobile-wide-logo-format';
import OrganismMoocHeaderFixtureOnHeaderActionHandlers from '../src/organism/mooc-header/test/fixtures/on-header-action-handlers';
import OrganismMoocHeaderFixtureTeamsFrench from '../src/organism/mooc-header/test/fixtures/teams-french';
import OrganismMoocHeaderFixtureTeams from '../src/organism/mooc-header/test/fixtures/teams';
import OrganismMoocHeaderFixtureUserChangePassword from '../src/organism/mooc-header/test/fixtures/user-change-password';
import OrganismPopinFixtureDefault from '../src/organism/popin/test/fixtures/default';
import OrganismResourceBrowserFixtureArabic from '../src/organism/resource-browser/test/fixtures/arabic';
import OrganismResourceBrowserFixtureAudio from '../src/organism/resource-browser/test/fixtures/audio';
import OrganismResourceBrowserFixtureH5P from '../src/organism/resource-browser/test/fixtures/h5p';
import OrganismResourceBrowserFixtureJwplayerWithOverlay from '../src/organism/resource-browser/test/fixtures/jwplayer-with-overlay';
import OrganismResourceBrowserFixtureJwplayer from '../src/organism/resource-browser/test/fixtures/jwplayer';
import OrganismResourceBrowserFixtureKontiki from '../src/organism/resource-browser/test/fixtures/kontiki';
import OrganismResourceBrowserFixtureMp4 from '../src/organism/resource-browser/test/fixtures/mp4';
import OrganismResourceBrowserFixtureOmniPlayer from '../src/organism/resource-browser/test/fixtures/omni-player';
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
import OrganismSidebarFixtureOldAnalytics from '../src/organism/sidebar/test/fixtures/old-analytics';
import OrganismSidebarFixtureShowcase from '../src/organism/sidebar/test/fixtures/showcase';
import OrganismSliderFixtureDefault from '../src/organism/slider/test/fixtures/default';
import OrganismSliderFixtureMultipleSlides from '../src/organism/slider/test/fixtures/multiple-slides';
import OrganismUserPreferencesFixtureDefault from '../src/organism/user-preferences/test/fixtures/default';
import TemplateActivityFixtureAllEngines from '../src/template/activity/test/fixtures/all-engines';
import TemplateActivityFixtureArabic from '../src/template/activity/test/fixtures/arabic';
import TemplateActivityFixtureDefault from '../src/template/activity/test/fixtures/default';
import TemplateActivityFixtureEmpty from '../src/template/activity/test/fixtures/empty';
import TemplateActivityFixtureNoEngines from '../src/template/activity/test/fixtures/no-engines';
import TemplateAppPlayerLoadingFixtureDefault from '../src/template/app-player/loading/test/fixtures/default';
import TemplateAppPlayerPlayerSlidesFooterFixtureClueSelected from '../src/template/app-player/player/slides/footer/test/fixtures/clue-selected';
import TemplateAppPlayerPlayerSlidesFooterFixtureDefault from '../src/template/app-player/player/slides/footer/test/fixtures/default';
import TemplateAppPlayerPlayerSlidesFooterFixtureDisabled from '../src/template/app-player/player/slides/footer/test/fixtures/disabled';
import TemplateAppPlayerPlayerSlidesFooterFixtureHighlighted from '../src/template/app-player/player/slides/footer/test/fixtures/highlighted';
import TemplateAppPlayerPlayerSlidesFooterFixtureMediaSelected from '../src/template/app-player/player/slides/footer/test/fixtures/media-selected';
import TemplateAppPlayerPlayerSlidesFooterFixtureNoClue from '../src/template/app-player/player/slides/footer/test/fixtures/no-clue';
import TemplateAppPlayerPlayerSlidesFooterFixtureNotify from '../src/template/app-player/player/slides/footer/test/fixtures/notify';
import TemplateAppPlayerPlayerSlidesFooterFixtureOnlyClue from '../src/template/app-player/player/slides/footer/test/fixtures/only-clue';
import TemplateAppPlayerPlayerSlidesFooterFixtureWithContext from '../src/template/app-player/player/slides/footer/test/fixtures/with-context';
import TemplateAppPlayerPlayerSlidesHeaderFixtureAdaptive from '../src/template/app-player/player/slides/header/test/fixtures/adaptive';
import TemplateAppPlayerPlayerSlidesHeaderFixtureArabicLearner from '../src/template/app-player/player/slides/header/test/fixtures/arabic-learner';
import TemplateAppPlayerPlayerSlidesHeaderFixtureArabicMicrolearning from '../src/template/app-player/player/slides/header/test/fixtures/arabic-microlearning';
import TemplateAppPlayerPlayerSlidesHeaderFixtureInfiniteLives from '../src/template/app-player/player/slides/header/test/fixtures/infinite-lives';
import TemplateAppPlayerPlayerSlidesHeaderFixtureLearner from '../src/template/app-player/player/slides/header/test/fixtures/learner';
import TemplateAppPlayerPlayerSlidesHeaderFixtureMicrolearning from '../src/template/app-player/player/slides/header/test/fixtures/microlearning';
import TemplateAppPlayerPlayerSlidesFixtureArabicContext from '../src/template/app-player/player/slides/test/fixtures/arabic-context';
import TemplateAppPlayerPlayerSlidesFixtureArabicQcm from '../src/template/app-player/player/slides/test/fixtures/arabic-qcm';
import TemplateAppPlayerPlayerSlidesFixtureArabicResources from '../src/template/app-player/player/slides/test/fixtures/arabic-resources';
import TemplateAppPlayerPlayerSlidesFixtureArabic from '../src/template/app-player/player/slides/test/fixtures/arabic';
import TemplateAppPlayerPlayerSlidesFixtureClue from '../src/template/app-player/player/slides/test/fixtures/clue';
import TemplateAppPlayerPlayerSlidesFixtureContextWithAudio from '../src/template/app-player/player/slides/test/fixtures/context-with-audio';
import TemplateAppPlayerPlayerSlidesFixtureContextWithImage from '../src/template/app-player/player/slides/test/fixtures/context-with-image';
import TemplateAppPlayerPlayerSlidesFixtureContextWithPdf from '../src/template/app-player/player/slides/test/fixtures/context-with-pdf';
import TemplateAppPlayerPlayerSlidesFixtureContextWithVideo from '../src/template/app-player/player/slides/test/fixtures/context-with-video';
import TemplateAppPlayerPlayerSlidesFixtureContext from '../src/template/app-player/player/slides/test/fixtures/context';
import TemplateAppPlayerPlayerSlidesFixtureDefault from '../src/template/app-player/player/slides/test/fixtures/default';
import TemplateAppPlayerPlayerSlidesFixtureDropDown from '../src/template/app-player/player/slides/test/fixtures/drop-down';
import TemplateAppPlayerPlayerSlidesFixtureError from '../src/template/app-player/player/slides/test/fixtures/error';
import TemplateAppPlayerPlayerSlidesFixtureFreeText from '../src/template/app-player/player/slides/test/fixtures/free-text';
import TemplateAppPlayerPlayerSlidesFixtureLoading from '../src/template/app-player/player/slides/test/fixtures/loading';
import TemplateAppPlayerPlayerSlidesFixtureMediaH5P from '../src/template/app-player/player/slides/test/fixtures/media-h5p';
import TemplateAppPlayerPlayerSlidesFixtureMediaOmniPlayer from '../src/template/app-player/player/slides/test/fixtures/media-omni-player';
import TemplateAppPlayerPlayerSlidesFixtureMedia from '../src/template/app-player/player/slides/test/fixtures/media';
import TemplateAppPlayerPlayerSlidesFixtureNoClue from '../src/template/app-player/player/slides/test/fixtures/no-clue';
import TemplateAppPlayerPlayerSlidesFixtureNoQuestion from '../src/template/app-player/player/slides/test/fixtures/no-question';
import TemplateAppPlayerPlayerSlidesFixtureNoStep from '../src/template/app-player/player/slides/test/fixtures/no-step';
import TemplateAppPlayerPlayerSlidesFixtureNoTotal from '../src/template/app-player/player/slides/test/fixtures/no-total';
import TemplateAppPlayerPlayerSlidesFixtureOnlyClue from '../src/template/app-player/player/slides/test/fixtures/only-clue';
import TemplateAppPlayerPlayerSlidesFixtureQcmDrag from '../src/template/app-player/player/slides/test/fixtures/qcm-drag';
import TemplateAppPlayerPlayerSlidesFixtureQcmGraphic from '../src/template/app-player/player/slides/test/fixtures/qcm-graphic';
import TemplateAppPlayerPlayerSlidesFixtureQcmSeeLessonNoStep from '../src/template/app-player/player/slides/test/fixtures/qcm-see-lesson-no-step';
import TemplateAppPlayerPlayerSlidesFixtureQcmSeeLesson from '../src/template/app-player/player/slides/test/fixtures/qcm-see-lesson';
import TemplateAppPlayerPlayerSlidesFixtureQcmShort from '../src/template/app-player/player/slides/test/fixtures/qcm-short';
import TemplateAppPlayerPlayerSlidesFixtureQcmTemplate from '../src/template/app-player/player/slides/test/fixtures/qcm-template';
import TemplateAppPlayerPlayerSlidesFixtureQcmWithReviewLesson from '../src/template/app-player/player/slides/test/fixtures/qcm-with-review-lesson';
import TemplateAppPlayerPlayerSlidesFixtureQcm from '../src/template/app-player/player/slides/test/fixtures/qcm';
import TemplateAppPlayerPlayerSlidesFixtureRange from '../src/template/app-player/player/slides/test/fixtures/range';
import TemplateAppPlayerPlayerSlidesFixtureTemplate from '../src/template/app-player/player/slides/test/fixtures/template';
import TemplateAppPlayerPlayerSlidesFixtureWithMinHeight from '../src/template/app-player/player/slides/test/fixtures/with-min-height';
import TemplateAppPlayerPlayerFixtureArabicQcm from '../src/template/app-player/player/test/fixtures/arabic-qcm';
import TemplateAppPlayerPlayerFixtureBackground from '../src/template/app-player/player/test/fixtures/background';
import TemplateAppPlayerPlayerFixtureClue from '../src/template/app-player/player/test/fixtures/clue';
import TemplateAppPlayerPlayerFixtureContextWithAudio from '../src/template/app-player/player/test/fixtures/context-with-audio';
import TemplateAppPlayerPlayerFixtureContextWithImage from '../src/template/app-player/player/test/fixtures/context-with-image';
import TemplateAppPlayerPlayerFixtureContextWithPdf from '../src/template/app-player/player/test/fixtures/context-with-pdf';
import TemplateAppPlayerPlayerFixtureContextWithVideo from '../src/template/app-player/player/test/fixtures/context-with-video';
import TemplateAppPlayerPlayerFixtureContext from '../src/template/app-player/player/test/fixtures/context';
import TemplateAppPlayerPlayerFixtureDropDown from '../src/template/app-player/player/test/fixtures/drop-down';
import TemplateAppPlayerPlayerFixtureEmpty from '../src/template/app-player/player/test/fixtures/empty';
import TemplateAppPlayerPlayerFixtureError from '../src/template/app-player/player/test/fixtures/error';
import TemplateAppPlayerPlayerFixtureFreeText from '../src/template/app-player/player/test/fixtures/free-text';
import TemplateAppPlayerPlayerFixtureMediaImage from '../src/template/app-player/player/test/fixtures/media-image';
import TemplateAppPlayerPlayerFixtureMediaOmniPlayer from '../src/template/app-player/player/test/fixtures/media-omni-player';
import TemplateAppPlayerPlayerFixtureMedia from '../src/template/app-player/player/test/fixtures/media';
import TemplateAppPlayerPlayerFixtureNoClue from '../src/template/app-player/player/test/fixtures/no-clue';
import TemplateAppPlayerPlayerFixtureOnlyClue from '../src/template/app-player/player/test/fixtures/only-clue';
import TemplateAppPlayerPlayerFixtureQcmDrag from '../src/template/app-player/player/test/fixtures/qcm-drag';
import TemplateAppPlayerPlayerFixtureQcmGraphic from '../src/template/app-player/player/test/fixtures/qcm-graphic';
import TemplateAppPlayerPlayerFixtureQcmShort from '../src/template/app-player/player/test/fixtures/qcm-short';
import TemplateAppPlayerPlayerFixtureQcm from '../src/template/app-player/player/test/fixtures/qcm';
import TemplateAppPlayerPlayerFixtureRange from '../src/template/app-player/player/test/fixtures/range';
import TemplateAppPlayerPopinCorrectionFixtureCorrectClosedWithoutKlfAndTips from '../src/template/app-player/popin-correction/test/fixtures/correct-closed-without-klf-and-tips';
import TemplateAppPlayerPopinCorrectionFixtureCorrectClosed from '../src/template/app-player/popin-correction/test/fixtures/correct-closed';
import TemplateAppPlayerPopinCorrectionFixtureCorrectNextChapter from '../src/template/app-player/popin-correction/test/fixtures/correct-next-chapter';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-klf';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-pdf';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithVideo from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-video';
import TemplateAppPlayerPopinCorrectionFixtureCorrectOpenTips from '../src/template/app-player/popin-correction/test/fixtures/correct-open-tips';
import TemplateAppPlayerPopinCorrectionFixtureCorrectWithoutResources from '../src/template/app-player/popin-correction/test/fixtures/correct-without-resources';
import TemplateAppPlayerPopinCorrectionFixtureFailClosed from '../src/template/app-player/popin-correction/test/fixtures/fail-closed';
import TemplateAppPlayerPopinCorrectionFixtureFailMultipleAnswersArabic from '../src/template/app-player/popin-correction/test/fixtures/fail-multiple-answers-arabic';
import TemplateAppPlayerPopinCorrectionFixtureFailMultipleAnswers from '../src/template/app-player/popin-correction/test/fixtures/fail-multiple-answers';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-klf';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdfAndOverlay from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf-and-overlay';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoAndOverlay from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video-and-overlay';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenResourcesWithVideoExtralifeGranted from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video-extralife-granted';
import TemplateAppPlayerPopinCorrectionFixtureFailOpenTips from '../src/template/app-player/popin-correction/test/fixtures/fail-open-tips';
import TemplateAppPlayerPopinCorrectionFixtureLoading from '../src/template/app-player/popin-correction/test/fixtures/loading';
import TemplateAppPlayerPopinEndFixtureAdaptive from '../src/template/app-player/popin-end/test/fixtures/adaptive';
import TemplateAppPlayerPopinEndFixtureArabicCorrect from '../src/template/app-player/popin-end/test/fixtures/arabic-correct';
import TemplateAppPlayerPopinEndFixtureArabicNextLevelAdaptiveImg from '../src/template/app-player/popin-end/test/fixtures/arabic-next-level-adaptive-img';
import TemplateAppPlayerPopinEndFixtureArabicWithRecommendations from '../src/template/app-player/popin-end/test/fixtures/arabic-with-recommendations';
import TemplateAppPlayerPopinEndFixtureCommentIsLoading from '../src/template/app-player/popin-end/test/fixtures/comment-is-loading';
import TemplateAppPlayerPopinEndFixtureCommentSent from '../src/template/app-player/popin-end/test/fixtures/comment-sent';
import TemplateAppPlayerPopinEndFixtureComment from '../src/template/app-player/popin-end/test/fixtures/comment';
import TemplateAppPlayerPopinEndFixtureCorrect from '../src/template/app-player/popin-end/test/fixtures/correct';
import TemplateAppPlayerPopinEndFixtureDefault from '../src/template/app-player/popin-end/test/fixtures/default';
import TemplateAppPlayerPopinEndFixtureFail from '../src/template/app-player/popin-end/test/fixtures/fail';
import TemplateAppPlayerPopinEndFixtureInfiniteLives from '../src/template/app-player/popin-end/test/fixtures/infinite-lives';
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
import TemplateBackOfficeBrandCreateFixtureDefault from '../src/template/back-office/brand-create/test/fixtures/default';
import TemplateBackOfficeBrandCreateFixtureError from '../src/template/back-office/brand-create/test/fixtures/error';
import TemplateBackOfficeBrandCreateFixtureLoading from '../src/template/back-office/brand-create/test/fixtures/loading';
import TemplateBackOfficeBrandCreateFixtureModified from '../src/template/back-office/brand-create/test/fixtures/modified';
import TemplateBackOfficeBrandListFixtureDefault from '../src/template/back-office/brand-list/test/fixtures/default';
import TemplateBackOfficeBrandListFixtureLoading from '../src/template/back-office/brand-list/test/fixtures/loading';
import TemplateBackOfficeBrandListFixtureRh from '../src/template/back-office/brand-list/test/fixtures/rh';
import TemplateBackOfficeBrandUpdateFixtureAnalytics from '../src/template/back-office/brand-update/test/fixtures/analytics';
import TemplateBackOfficeBrandUpdateFixtureAnimations from '../src/template/back-office/brand-update/test/fixtures/animations';
import TemplateBackOfficeBrandUpdateFixtureCohortError from '../src/template/back-office/brand-update/test/fixtures/cohort-error';
import TemplateBackOfficeBrandUpdateFixtureCohort from '../src/template/back-office/brand-update/test/fixtures/cohort';
import TemplateBackOfficeBrandUpdateFixtureDashboard from '../src/template/back-office/brand-update/test/fixtures/dashboard';
import TemplateBackOfficeBrandUpdateFixtureDashboardsAnalytics from '../src/template/back-office/brand-update/test/fixtures/dashboards-analytics';
import TemplateBackOfficeBrandUpdateFixtureDefault from '../src/template/back-office/brand-update/test/fixtures/default';
import TemplateBackOfficeBrandUpdateFixtureGeneralSettingsSuccess from '../src/template/back-office/brand-update/test/fixtures/general-settings-success';
import TemplateBackOfficeBrandUpdateFixtureGeneralSettings from '../src/template/back-office/brand-update/test/fixtures/general-settings';
import TemplateBackOfficeBrandUpdateFixtureHome from '../src/template/back-office/brand-update/test/fixtures/home';
import TemplateBackOfficeBrandUpdateFixtureLmsError from '../src/template/back-office/brand-update/test/fixtures/lms-error';
import TemplateBackOfficeBrandUpdateFixtureLmsModified from '../src/template/back-office/brand-update/test/fixtures/lms-modified';
import TemplateBackOfficeBrandUpdateFixtureLmsSuccess from '../src/template/back-office/brand-update/test/fixtures/lms-success';
import TemplateBackOfficeBrandUpdateFixtureLms from '../src/template/back-office/brand-update/test/fixtures/lms';
import TemplateBackOfficeBrandUpdateFixtureLoader from '../src/template/back-office/brand-update/test/fixtures/loader';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelError from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-error';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelModified from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-modified';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelPending from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-pending';
import TemplateBackOfficeBrandUpdateFixtureLookandfeelSuccess from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-success';
import TemplateBackOfficeBrandUpdateFixtureLookandfeel from '../src/template/back-office/brand-update/test/fixtures/lookandfeel';
import TemplateBackOfficeBrandUpdateFixtureManageusersEdit from '../src/template/back-office/brand-update/test/fixtures/manageusers-edit';
import TemplateBackOfficeBrandUpdateFixtureManageusersList from '../src/template/back-office/brand-update/test/fixtures/manageusers-list';
import TemplateBackOfficeBrandUpdateFixtureManageusers from '../src/template/back-office/brand-update/test/fixtures/manageusers';
import TemplateBackOfficeBrandUpdateFixtureSsoActivate from '../src/template/back-office/brand-update/test/fixtures/sso-activate';
import TemplateBackOfficeBrandUpdateFixtureSso from '../src/template/back-office/brand-update/test/fixtures/sso';
import TemplateBackOfficeBrandUpdateFixtureUploadusersLoading from '../src/template/back-office/brand-update/test/fixtures/uploadusers-loading';
import TemplateBackOfficeBrandUpdateFixtureUploadusersSuccessful from '../src/template/back-office/brand-update/test/fixtures/uploadusers-successful';
import TemplateBackOfficeBrandUpdateFixtureUploadusers from '../src/template/back-office/brand-update/test/fixtures/uploadusers';
import TemplateBackOfficeDashboardPreviewFixtureDefault from '../src/template/back-office/dashboard-preview/test/fixtures/default';
import TemplateBackOfficeDashboardPreviewFixtureError from '../src/template/back-office/dashboard-preview/test/fixtures/error';
import TemplateBackOfficeDashboardPreviewFixtureLoading from '../src/template/back-office/dashboard-preview/test/fixtures/loading';
import TemplateBackOfficeDashboardPreviewFixtureSelectedError from '../src/template/back-office/dashboard-preview/test/fixtures/selected-error';
import TemplateBackOfficeDashboardPreviewFixtureSelectedLoading from '../src/template/back-office/dashboard-preview/test/fixtures/selected-loading';
import TemplateBackOfficeDashboardPreviewFixtureSelected from '../src/template/back-office/dashboard-preview/test/fixtures/selected';
import TemplateBattleRequestsFixtureDefault from '../src/template/battle-requests/test/fixtures/default';
import TemplateCockpitJwUploaderFixtureDefault from '../src/template/cockpit/jw-uploader/test/fixtures/default';
import TemplateCommonAuthorsFixtureDefault from '../src/template/common/authors/test/fixtures/default';
import TemplateCommonAuthorsFixtureNoSocials from '../src/template/common/authors/test/fixtures/no-socials';
import TemplateCommonCoorpHeaderFixtureProduction from '../src/template/common/coorp-header/test/fixtures/production';
import TemplateCommonCoorpHeaderFixtureStaging from '../src/template/common/coorp-header/test/fixtures/staging';
import TemplateCommonDashboardFixtureDefault from '../src/template/common/dashboard/test/fixtures/default';
import TemplateCommonDashboardFixtureEmptyRequests from '../src/template/common/dashboard/test/fixtures/empty-requests';
import TemplateCommonDashboardFixtureWithHeroCard from '../src/template/common/dashboard/test/fixtures/with-hero-card';
import TemplateCommonDisciplineFixtureAddToMyList from '../src/template/common/discipline/test/fixtures/add-to-my-list';
import TemplateCommonDisciplineFixtureArabic from '../src/template/common/discipline/test/fixtures/arabic';
import TemplateCommonDisciplineFixtureDefault from '../src/template/common/discipline/test/fixtures/default';
import TemplateCommonDisciplineFixtureDisableAddToMyList from '../src/template/common/discipline/test/fixtures/disable-add-to-my-list';
import TemplateCommonDisciplineFixtureDisableShareAndAddToMyList from '../src/template/common/discipline/test/fixtures/disable-share-and-add-to-my-list';
import TemplateCommonDisciplineFixtureDisableShare from '../src/template/common/discipline/test/fixtures/disable-share';
import TemplateCommonDisciplineFixtureDoubleAuthor from '../src/template/common/discipline/test/fixtures/double-author';
import TemplateCommonDisciplineFixtureEmpty from '../src/template/common/discipline/test/fixtures/empty';
import TemplateCommonDisciplineFixtureExternalCourseWithVideo from '../src/template/common/discipline/test/fixtures/external-course-with-video';
import TemplateCommonDisciplineFixtureExternalCourseWithoutImage from '../src/template/common/discipline/test/fixtures/external-course-without-image';
import TemplateCommonDisciplineFixtureExternalCourse from '../src/template/common/discipline/test/fixtures/external-course';
import TemplateCommonDisciplineFixtureJwplayer from '../src/template/common/discipline/test/fixtures/jwplayer';
import TemplateCommonDisciplineFixtureLoading from '../src/template/common/discipline/test/fixtures/loading';
import TemplateCommonDisciplineFixtureNoAuthor from '../src/template/common/discipline/test/fixtures/no-author';
import TemplateCommonDisciplineFixtureNoVideo from '../src/template/common/discipline/test/fixtures/no-video';
import TemplateCommonDisciplineFixtureShare from '../src/template/common/discipline/test/fixtures/share';
import TemplateCommonDisciplineFixtureVimeo from '../src/template/common/discipline/test/fixtures/vimeo';
import TemplateCommonDisciplineFixtureWithOnclick from '../src/template/common/discipline/test/fixtures/with-onclick';
import TemplateCommonSearchPageFixtureDefault from '../src/template/common/search-page/test/fixtures/default';
import TemplateCommonSearchPageFixtureNoResultWithRecommendations from '../src/template/common/search-page/test/fixtures/no-result-with-recommendations';
import TemplateCommonSearchPageFixtureNoResult from '../src/template/common/search-page/test/fixtures/no-result';
import TemplateExternalCourseFixtureArabic from '../src/template/external-course/test/fixtures/arabic';
import TemplateExternalCourseFixtureArticle from '../src/template/external-course/test/fixtures/article';
import TemplateExternalCourseFixtureDefault from '../src/template/external-course/test/fixtures/default';
import TemplateExternalCourseFixtureH5P from '../src/template/external-course/test/fixtures/h5p';
import TemplateExternalCourseFixtureLoading from '../src/template/external-course/test/fixtures/loading';
import TemplateExternalCourseFixturePodcastCockpitMode from '../src/template/external-course/test/fixtures/podcast-cockpit-mode';
import TemplateExternalCourseFixturePodcastNoBackground from '../src/template/external-course/test/fixtures/podcast-no-background';
import TemplateExternalCourseFixturePodcast from '../src/template/external-course/test/fixtures/podcast';
import TemplateExternalCourseFixtureVideo from '../src/template/external-course/test/fixtures/video';
import TemplateExternalCourseFixtureYoutubePodcast from '../src/template/external-course/test/fixtures/youtube-podcast';
import TemplateTeamsDashboardFixtureDefault from '../src/template/teams-dashboard/test/fixtures/default';
import TemplateTeamsDashboardFixtureIsLoading from '../src/template/teams-dashboard/test/fixtures/is-loading';
import TemplateTeamsDashboardFixtureMobile from '../src/template/teams-dashboard/test/fixtures/mobile';

export const components = {
  Atom: {
    AtomAutocomplete,
    AtomAvatar,
    AtomButton,
    AtomCatalogSection,
    AtomCenteredText,
    AtomCheckbox,
    AtomClue,
    AtomCta,
    AtomDifficultyLevel,
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
    HocSwapper,
    HocTransition
  },
  Molecule: {
    MoleculeAddToMyList,
    MoleculeAnswer,
    MoleculeAudio,
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
    MoleculeCardContent,
    MoleculeCardWithButton,
    MoleculeCockpitPopin,
    MoleculeCookieBanner,
    MoleculeDisciplineCta,
    MoleculeDisciplineHeader,
    MoleculeDisciplinePartners,
    MoleculeDisciplineScope,
    MoleculeDragAndDrop,
    MoleculeExternalContentButton,
    MoleculeExternalContentViewer,
    MoleculeFeedback,
    MoleculeFilters,
    MoleculeHero,
    MoleculeLoginAlert,
    MoleculeMenuList,
    MoleculeMessagePopin,
    MoleculeModal,
    MoleculeModuleBubble,
    MoleculeModuleCard,
    MoleculeNews,
    MoleculeNotificationBanner,
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
    MoleculeSelectMultiple,
    MoleculeSetupCohortItem,
    MoleculeSetupSection,
    MoleculeSetupSections,
    MoleculeSetupSlide,
    MoleculeSetupSlider,
    MoleculeShare,
    MoleculeSsmenuList,
    MoleculeSubscriptionFreemium,
    MoleculeSubscriptionPremium,
    MoleculeTable,
    MoleculeTeamsPopin,
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
    OrganismAccordionCoorpManager,
    OrganismAccordionPart,
    OrganismAccordionToggler
  },
  OrganismAccordionCoorpManager: {
    OrganismAccordionCoorpManagerPart
  },
  Organism: {
    OrganismBrandAnalytics,
    OrganismBrandDashboard,
    OrganismBrandForm,
    OrganismBrandTable,
    OrganismBrandUpload,
    OrganismCardsGrid,
    OrganismCart,
    OrganismDiscussion,
    OrganismGetTheApp,
    OrganismGridList,
    OrganismHeader,
    OrganismHero,
    OrganismMoocFooter,
    OrganismMoocHeader,
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
    TemplateBattleRequests,
    TemplateExternalCourse,
    TemplateTeamsDashboard
  },
  TemplateAppPlayer: {
    TemplateAppPlayerLoading,
    TemplateAppPlayerPlayer,
    TemplateAppPlayerPopinCorrection,
    TemplateAppPlayerPopinEnd,
    TemplateAppPlayerPopinHeader
  },
  TemplateAppPlayerPlayerSlides: {
    TemplateAppPlayerPlayerSlidesFooter,
    TemplateAppPlayerPlayerSlidesHeader
  },
  TemplateAppPlayerPlayer: {
    TemplateAppPlayerPlayerSlides
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
  }
};

export const fixtures = {
  Atom: {
    AtomAutocomplete: {
      Default: AtomAutocompleteFixtureDefault,
      Error: AtomAutocompleteFixtureError,
      Filled: AtomAutocompleteFixtureFilled,
      Modified: AtomAutocompleteFixtureModified
    },
    AtomAvatar: {
      Default: AtomAvatarFixtureDefault
    },
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
      Certification: AtomCtaFixtureCertification,
      Disabled: AtomCtaFixtureDisabled,
      LightSmall: AtomCtaFixtureLightSmall,
      Light: AtomCtaFixtureLight,
      Logout: AtomCtaFixtureLogout,
      NoSubmitValue: AtomCtaFixtureNoSubmitValue,
      PrimarySmall: AtomCtaFixturePrimarySmall,
      Primary: AtomCtaFixturePrimary,
      RectangularSecondaryFullwidth: AtomCtaFixtureRectangularSecondaryFullwidth,
      RectangularSecondary: AtomCtaFixtureRectangularSecondary,
      Rectangular: AtomCtaFixtureRectangular,
      SecondarySmall: AtomCtaFixtureSecondarySmall,
      Secondary: AtomCtaFixtureSecondary
    },
    AtomDifficultyLevel: {
      Easy: AtomDifficultyLevelFixtureEasy,
      Hard: AtomDifficultyLevelFixtureHard,
      Normal: AtomDifficultyLevelFixtureNormal,
      Unknown: AtomDifficultyLevelFixtureUnknown
    },
    AtomDragAndDrop: {
      Default: AtomDragAndDropFixtureDefault,
      Loading: AtomDragAndDropFixtureLoading,
      WithChildren: AtomDragAndDropFixtureWithChildren,
      WithImageReset: AtomDragAndDropFixtureWithImageReset,
      WithImage: AtomDragAndDropFixtureWithImage,
      WithVideo: AtomDragAndDropFixtureWithVideo
    },
    AtomImageUpload: {
      DesktopResetDescriptionMultiple: AtomImageUploadFixtureDesktopResetDescriptionMultiple,
      DesktopResetDescriptionOnlyPng: AtomImageUploadFixtureDesktopResetDescriptionOnlyPng,
      DesktopResetDescription: AtomImageUploadFixtureDesktopResetDescription,
      DesktopResetNoDescription: AtomImageUploadFixtureDesktopResetNoDescription,
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
      Disabled: AtomInputDoublestepFixtureDisabled,
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
      Audio: AtomResourceMiniatureFixtureAudio,
      Pdf: AtomResourceMiniatureFixturePdf,
      SelectedPdf: AtomResourceMiniatureFixtureSelectedPdf,
      SelectedVideo: AtomResourceMiniatureFixtureSelectedVideo,
      Video: AtomResourceMiniatureFixtureVideo
    },
    AtomSelect: {
      Default: AtomSelectFixtureDefault,
      Disabled: AtomSelectFixtureDisabled,
      Error: AtomSelectFixtureError,
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
      FacebookFooter: AtomSocialLinkFixtureFacebookFooter,
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
    HocSwapper: {
      Default: HocSwapperFixtureDefault
    },
    HocTransition: {
      FlipSquare: HocTransitionFixtureFlipSquare
    }
  },
  Molecule: {
    MoleculeAddToMyList: {
      Default: MoleculeAddToMyListFixtureDefault,
      Favorite: MoleculeAddToMyListFixtureFavorite
    },
    MoleculeAnswer: {
      Audio: MoleculeAnswerFixtureAudio,
      Default: MoleculeAnswerFixtureDefault,
      DropDown: MoleculeAnswerFixtureDropDown,
      QcmArabic: MoleculeAnswerFixtureQcmArabic,
      QcmDrag: MoleculeAnswerFixtureQcmDrag,
      QcmGraphic: MoleculeAnswerFixtureQcmGraphic,
      QcmShortAudio: MoleculeAnswerFixtureQcmShortAudio,
      QcmShortVideo: MoleculeAnswerFixtureQcmShortVideo,
      QcmShort: MoleculeAnswerFixtureQcmShort,
      Qcm: MoleculeAnswerFixtureQcm,
      Range: MoleculeAnswerFixtureRange,
      Template: MoleculeAnswerFixtureTemplate
    },
    MoleculeAudio: {
      Default: MoleculeAudioFixtureDefault,
      WithPoster: MoleculeAudioFixtureWithPoster
    },
    MoleculeBattleRequest: {
      Arabic: MoleculeBattleRequestFixtureArabic,
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
      Animations: MoleculeBrandFormGroupFixtureAnimations,
      Cohort: MoleculeBrandFormGroupFixtureCohort,
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
      Cohort: MoleculeBrandTabsFixtureCohort,
      Default: MoleculeBrandTabsFixtureDefault,
      Importusers: MoleculeBrandTabsFixtureImportusers,
      Light: MoleculeBrandTabsFixtureLight,
      Lms: MoleculeBrandTabsFixtureLms,
      Lookandfeel: MoleculeBrandTabsFixtureLookandfeel,
      Manageusers: MoleculeBrandTabsFixtureManageusers,
      Sso: MoleculeBrandTabsFixtureSso
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
      Arabic: MoleculeCardFixtureArabic,
      Article: MoleculeCardFixtureArticle,
      Default: MoleculeCardFixtureDefault,
      Disabled: MoleculeCardFixtureDisabled,
      Empty: MoleculeCardFixtureEmpty,
      ExternalContent: MoleculeCardFixtureExternalContent,
      Favorite: MoleculeCardFixtureFavorite,
      FreerunAndDisabled: MoleculeCardFixtureFreerunAndDisabled,
      Freerun: MoleculeCardFixtureFreerun,
      Podcast: MoleculeCardFixturePodcast,
      Scorm: MoleculeCardFixtureScorm,
      Video: MoleculeCardFixtureVideo
    },
    MoleculeCardContent: {
      AdaptivAndDisabled: MoleculeCardContentFixtureAdaptivAndDisabled,
      Adaptiv: MoleculeCardContentFixtureAdaptiv,
      ArabicHero: MoleculeCardContentFixtureArabicHero,
      CardNoProgressBar: MoleculeCardContentFixtureCardNoProgressBar,
      Card: MoleculeCardContentFixtureCard,
      Disabled: MoleculeCardContentFixtureDisabled,
      Empty: MoleculeCardContentFixtureEmpty,
      Hero: MoleculeCardContentFixtureHero
    },
    MoleculeCardWithButton: {
      Default: MoleculeCardWithButtonFixtureDefault,
      WithAvatar: MoleculeCardWithButtonFixtureWithAvatar,
      WithoutLabel: MoleculeCardWithButtonFixtureWithoutLabel
    },
    MoleculeCockpitPopin: {
      Default: MoleculeCockpitPopinFixtureDefault,
      Loading: MoleculeCockpitPopinFixtureLoading,
      VideoTranslate: MoleculeCockpitPopinFixtureVideoTranslate
    },
    MoleculeCookieBanner: {
      Default: MoleculeCookieBannerFixtureDefault
    },
    MoleculeDisciplineCta: {
      Default: MoleculeDisciplineCtaFixtureDefault,
      NoStart: MoleculeDisciplineCtaFixtureNoStart
    },
    MoleculeDisciplineHeader: {
      Arabic: MoleculeDisciplineHeaderFixtureArabic,
      Default: MoleculeDisciplineHeaderFixtureDefault,
      Jwplayer: MoleculeDisciplineHeaderFixtureJwplayer,
      LongDescription: MoleculeDisciplineHeaderFixtureLongDescription,
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
      Arabic: MoleculeDisciplineScopeFixtureArabic,
      Audio: MoleculeDisciplineScopeFixtureAudio,
      Default: MoleculeDisciplineScopeFixtureDefault,
      Empty: MoleculeDisciplineScopeFixtureEmpty,
      Medias: MoleculeDisciplineScopeFixtureMedias,
      Pdf: MoleculeDisciplineScopeFixturePdf,
      Vimeo: MoleculeDisciplineScopeFixtureVimeo,
      WithOnclick: MoleculeDisciplineScopeFixtureWithOnclick
    },
    MoleculeDragAndDrop: {
      Default: MoleculeDragAndDropFixtureDefault,
      Error: MoleculeDragAndDropFixtureError,
      Loading: MoleculeDragAndDropFixtureLoading,
      ReadyInvalid: MoleculeDragAndDropFixtureReadyInvalid,
      Ready: MoleculeDragAndDropFixtureReady,
      SuccessVideo: MoleculeDragAndDropFixtureSuccessVideo,
      Success: MoleculeDragAndDropFixtureSuccess
    },
    MoleculeExternalContentButton: {
      Article: MoleculeExternalContentButtonFixtureArticle,
      Podcast: MoleculeExternalContentButtonFixturePodcast,
      Scorm: MoleculeExternalContentButtonFixtureScorm,
      Video: MoleculeExternalContentButtonFixtureVideo
    },
    MoleculeExternalContentViewer: {
      Article: MoleculeExternalContentViewerFixtureArticle,
      Default: MoleculeExternalContentViewerFixtureDefault,
      H5P: MoleculeExternalContentViewerFixtureH5P,
      PodcastCockpitMode: MoleculeExternalContentViewerFixturePodcastCockpitMode,
      PodcastNoBackground: MoleculeExternalContentViewerFixturePodcastNoBackground,
      Podcast: MoleculeExternalContentViewerFixturePodcast,
      Video: MoleculeExternalContentViewerFixtureVideo,
      YoutubePodcast: MoleculeExternalContentViewerFixtureYoutubePodcast
    },
    MoleculeFeedback: {
      Default: MoleculeFeedbackFixtureDefault,
      FailExitNode: MoleculeFeedbackFixtureFailExitNode,
      FailureWithTitleAndDescriptionAndVideo: MoleculeFeedbackFixtureFailureWithTitleAndDescriptionAndVideo,
      SuccessExitNode: MoleculeFeedbackFixtureSuccessExitNode,
      SuccessWithTitleAndDescriptionAndAudio: MoleculeFeedbackFixtureSuccessWithTitleAndDescriptionAndAudio,
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
    MoleculeHero: {
      Arabic: MoleculeHeroFixtureArabic,
      Hero: MoleculeHeroFixtureHero
    },
    MoleculeLoginAlert: {
      Default: MoleculeLoginAlertFixtureDefault
    },
    MoleculeMenuList: {
      Default: MoleculeMenuListFixtureDefault
    },
    MoleculeMessagePopin: {
      Default: MoleculeMessagePopinFixtureDefault
    },
    MoleculeModal: {
      Default: MoleculeModalFixtureDefault
    },
    MoleculeModuleBubble: {
      Default: MoleculeModuleBubbleFixtureDefault,
      Disabled: MoleculeModuleBubbleFixtureDisabled,
      Filtered: MoleculeModuleBubbleFixtureFiltered
    },
    MoleculeModuleCard: {
      Active: MoleculeModuleCardFixtureActive,
      Arabic: MoleculeModuleCardFixtureArabic,
      Restarted: MoleculeModuleCardFixtureRestarted
    },
    MoleculeNews: {
      Arabic: MoleculeNewsFixtureArabic,
      Default: MoleculeNewsFixtureDefault,
      LongDescription: MoleculeNewsFixtureLongDescription,
      LongTitle: MoleculeNewsFixtureLongTitle,
      SmallDesciption: MoleculeNewsFixtureSmallDesciption,
      SmallTitle: MoleculeNewsFixtureSmallTitle
    },
    MoleculeNotificationBanner: {
      Default: MoleculeNotificationBannerFixtureDefault,
      Feature: MoleculeNotificationBannerFixtureFeature,
      Survey: MoleculeNotificationBannerFixtureSurvey
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
      Audio: MoleculeResourcePlayerFixtureAudio,
      Image: MoleculeResourcePlayerFixtureImage,
      JwplayerWithOverlay: MoleculeResourcePlayerFixtureJwplayerWithOverlay,
      PdfWithOverlay: MoleculeResourcePlayerFixturePdfWithOverlay,
      Pdf: MoleculeResourcePlayerFixturePdf,
      VimeoWithOverlay: MoleculeResourcePlayerFixtureVimeoWithOverlay,
      Vimeo: MoleculeResourcePlayerFixtureVimeo
    },
    MoleculeScopeContent: {
      Arabic: MoleculeScopeContentFixtureArabic,
      Audio: MoleculeScopeContentFixtureAudio,
      Default: MoleculeScopeContentFixtureDefault,
      Empty: MoleculeScopeContentFixtureEmpty,
      Medias: MoleculeScopeContentFixtureMedias,
      Pdf: MoleculeScopeContentFixturePdf,
      Vimeo: MoleculeScopeContentFixtureVimeo,
      WithOnclick: MoleculeScopeContentFixtureWithOnclick
    },
    MoleculeScopeTabs: {
      Default: MoleculeScopeTabsFixtureDefault,
      Empty: MoleculeScopeTabsFixtureEmpty,
      WithoutStatus: MoleculeScopeTabsFixtureWithoutStatus
    },
    MoleculeSearch: {
      Default: MoleculeSearchFixtureDefault,
      WithValue: MoleculeSearchFixtureWithValue
    },
    MoleculeSearchForm: {
      Default: MoleculeSearchFormFixtureDefault
    },
    MoleculeSelectMultiple: {
      CheckedCockpitTheme: MoleculeSelectMultipleFixtureCheckedCockpitTheme,
      CheckedSetupTheme: MoleculeSelectMultipleFixtureCheckedSetupTheme,
      Checked: MoleculeSelectMultipleFixtureChecked,
      Default: MoleculeSelectMultipleFixtureDefault,
      SetupThemeError: MoleculeSelectMultipleFixtureSetupThemeError,
      SetupTheme: MoleculeSelectMultipleFixtureSetupTheme
    },
    MoleculeSetupCohortItem: {
      CreateNewValid: MoleculeSetupCohortItemFixtureCreateNewValid,
      CreateNew: MoleculeSetupCohortItemFixtureCreateNew,
      Default: MoleculeSetupCohortItemFixtureDefault,
      DisabledSubmit: MoleculeSetupCohortItemFixtureDisabledSubmit
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
      AlertMessage: MoleculeSetupSlideFixtureAlertMessage,
      Checkbox: MoleculeSetupSlideFixtureCheckbox,
      Cohort: MoleculeSetupSlideFixtureCohort,
      CreateNewCohort: MoleculeSetupSlideFixtureCreateNewCohort,
      Default: MoleculeSetupSlideFixtureDefault,
      SplitForm: MoleculeSetupSlideFixtureSplitForm
    },
    MoleculeSetupSlider: {
      DefaultCohort: MoleculeSetupSliderFixtureDefaultCohort,
      Default: MoleculeSetupSliderFixtureDefault
    },
    MoleculeShare: {
      Default: MoleculeShareFixtureDefault
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
      CockpitTheme: MoleculeTableFixtureCockpitTheme,
      Default: MoleculeTableFixtureDefault,
      NoOptions: MoleculeTableFixtureNoOptions,
      Readonly: MoleculeTableFixtureReadonly
    },
    MoleculeTeamsPopin: {
      Default: MoleculeTeamsPopinFixtureDefault,
      LoadingBackground: MoleculeTeamsPopinFixtureLoadingBackground,
      Loading: MoleculeTeamsPopinFixtureLoading,
      LoginBackground: MoleculeTeamsPopinFixtureLoginBackground,
      LoginFaild: MoleculeTeamsPopinFixtureLoginFaild,
      Login: MoleculeTeamsPopinFixtureLogin,
      NotTeamsAccount: MoleculeTeamsPopinFixtureNotTeamsAccount,
      WithoutButton: MoleculeTeamsPopinFixtureWithoutButton,
      Wrong: MoleculeTeamsPopinFixtureWrong
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
      H5P: MoleculeVideoIframeFixtureH5P,
      ImagePlaceholder: MoleculeVideoIframeFixtureImagePlaceholder,
      Jwplayer: MoleculeVideoIframeFixtureJwplayer,
      OmniPlayer: MoleculeVideoIframeFixtureOmniPlayer,
      Uptale: MoleculeVideoIframeFixtureUptale,
      Youtube: MoleculeVideoIframeFixtureYoutube
    },
    MoleculeVideoPlayer: {
      H5P: MoleculeVideoPlayerFixtureH5P,
      JwplayerWithSubtitles: MoleculeVideoPlayerFixtureJwplayerWithSubtitles,
      Jwplayer: MoleculeVideoPlayerFixtureJwplayer,
      Kontiki: MoleculeVideoPlayerFixtureKontiki,
      Mp4: MoleculeVideoPlayerFixtureMp4,
      OmniPlayer: MoleculeVideoPlayerFixtureOmniPlayer,
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
      NoIcon: MoleculeDashboardCardsListFixtureNoIcon,
      Performance: MoleculeDashboardCardsListFixturePerformance
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
      Arabic: MoleculeQuestionsQcmFixtureArabic,
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
      Default: OrganismAccordionContainerFixtureDefault,
      NoChildren: OrganismAccordionContainerFixtureNoChildren,
      OneChildren: OrganismAccordionContainerFixtureOneChildren
    },
    OrganismAccordionCoorpManager: {
      Default: OrganismAccordionCoorpManagerFixtureDefault
    },
    OrganismAccordionPart: {
      Default: OrganismAccordionPartFixtureDefault,
      Open: OrganismAccordionPartFixtureOpen
    },
    OrganismAccordionToggler: {
      AllAreOpenable: OrganismAccordionTogglerFixtureAllAreOpenable,
      NoChildrens: OrganismAccordionTogglerFixtureNoChildrens,
      OnlyOne: OrganismAccordionTogglerFixtureOnlyOne
    }
  },
  OrganismAccordionCoorpManager: {
    OrganismAccordionCoorpManagerPart: {
      Defaut: OrganismAccordionCoorpManagerPartFixtureDefaut
    }
  },
  Organism: {
    OrganismBrandAnalytics: {
      Default: OrganismBrandAnalyticsFixtureDefault,
      Error: OrganismBrandAnalyticsFixtureError,
      Loading: OrganismBrandAnalyticsFixtureLoading,
      SelectedError: OrganismBrandAnalyticsFixtureSelectedError,
      SelectedLoading: OrganismBrandAnalyticsFixtureSelectedLoading,
      Selected: OrganismBrandAnalyticsFixtureSelected
    },
    OrganismBrandDashboard: {
      Default: OrganismBrandDashboardFixtureDefault
    },
    OrganismBrandForm: {
      Analytics: OrganismBrandFormFixtureAnalytics,
      Animations: OrganismBrandFormFixtureAnimations,
      Cohort: OrganismBrandFormFixtureCohort,
      Dashboard: OrganismBrandFormFixtureDashboard,
      Default: OrganismBrandFormFixtureDefault,
      GeneralSettings: OrganismBrandFormFixtureGeneralSettings,
      Lms: OrganismBrandFormFixtureLms,
      Lookandfeel: OrganismBrandFormFixtureLookandfeel,
      ManageusersEdit: OrganismBrandFormFixtureManageusersEdit,
      Sso: OrganismBrandFormFixtureSso
    },
    OrganismBrandTable: {
      Animations: OrganismBrandTableFixtureAnimations,
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
    OrganismGetTheApp: {
      Default: OrganismGetTheAppFixtureDefault
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
    OrganismMoocFooter: {
      Default: OrganismMoocFooterFixtureDefault,
      NoMobileapps: OrganismMoocFooterFixtureNoMobileapps,
      NoSections: OrganismMoocFooterFixtureNoSections,
      NoSocialLinks: OrganismMoocFooterFixtureNoSocialLinks,
      NotEnoughPermissionsRoleNoMobileapp: OrganismMoocFooterFixtureNotEnoughPermissionsRoleNoMobileapp,
      NotEnoughPermissionsRole: OrganismMoocFooterFixtureNotEnoughPermissionsRole
    },
    OrganismMoocHeader: {
      Default: OrganismMoocHeaderFixtureDefault,
      LinkOnly: OrganismMoocHeaderFixtureLinkOnly,
      LoggedWithBattleNotifications: OrganismMoocHeaderFixtureLoggedWithBattleNotifications,
      Logged: OrganismMoocHeaderFixtureLogged,
      MobileSmallLogoFormat: OrganismMoocHeaderFixtureMobileSmallLogoFormat,
      MobileWideLogoFormat: OrganismMoocHeaderFixtureMobileWideLogoFormat,
      OnHeaderActionHandlers: OrganismMoocHeaderFixtureOnHeaderActionHandlers,
      TeamsFrench: OrganismMoocHeaderFixtureTeamsFrench,
      Teams: OrganismMoocHeaderFixtureTeams,
      UserChangePassword: OrganismMoocHeaderFixtureUserChangePassword
    },
    OrganismPopin: {
      Default: OrganismPopinFixtureDefault
    },
    OrganismResourceBrowser: {
      Arabic: OrganismResourceBrowserFixtureArabic,
      Audio: OrganismResourceBrowserFixtureAudio,
      H5P: OrganismResourceBrowserFixtureH5P,
      JwplayerWithOverlay: OrganismResourceBrowserFixtureJwplayerWithOverlay,
      Jwplayer: OrganismResourceBrowserFixtureJwplayer,
      Kontiki: OrganismResourceBrowserFixtureKontiki,
      Mp4: OrganismResourceBrowserFixtureMp4,
      OmniPlayer: OrganismResourceBrowserFixtureOmniPlayer,
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
      Default: OrganismSidebarFixtureDefault,
      OldAnalytics: OrganismSidebarFixtureOldAnalytics,
      Showcase: OrganismSidebarFixtureShowcase
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
      Arabic: TemplateActivityFixtureArabic,
      Default: TemplateActivityFixtureDefault,
      Empty: TemplateActivityFixtureEmpty,
      NoEngines: TemplateActivityFixtureNoEngines
    },
    TemplateBattleRequests: {
      Default: TemplateBattleRequestsFixtureDefault
    },
    TemplateExternalCourse: {
      Arabic: TemplateExternalCourseFixtureArabic,
      Article: TemplateExternalCourseFixtureArticle,
      Default: TemplateExternalCourseFixtureDefault,
      H5P: TemplateExternalCourseFixtureH5P,
      Loading: TemplateExternalCourseFixtureLoading,
      PodcastCockpitMode: TemplateExternalCourseFixturePodcastCockpitMode,
      PodcastNoBackground: TemplateExternalCourseFixturePodcastNoBackground,
      Podcast: TemplateExternalCourseFixturePodcast,
      Video: TemplateExternalCourseFixtureVideo,
      YoutubePodcast: TemplateExternalCourseFixtureYoutubePodcast
    },
    TemplateTeamsDashboard: {
      Default: TemplateTeamsDashboardFixtureDefault,
      IsLoading: TemplateTeamsDashboardFixtureIsLoading,
      Mobile: TemplateTeamsDashboardFixtureMobile
    }
  },
  TemplateAppPlayer: {
    TemplateAppPlayerLoading: {
      Default: TemplateAppPlayerLoadingFixtureDefault
    },
    TemplateAppPlayerPlayer: {
      ArabicQcm: TemplateAppPlayerPlayerFixtureArabicQcm,
      Background: TemplateAppPlayerPlayerFixtureBackground,
      Clue: TemplateAppPlayerPlayerFixtureClue,
      ContextWithAudio: TemplateAppPlayerPlayerFixtureContextWithAudio,
      ContextWithImage: TemplateAppPlayerPlayerFixtureContextWithImage,
      ContextWithPdf: TemplateAppPlayerPlayerFixtureContextWithPdf,
      ContextWithVideo: TemplateAppPlayerPlayerFixtureContextWithVideo,
      Context: TemplateAppPlayerPlayerFixtureContext,
      DropDown: TemplateAppPlayerPlayerFixtureDropDown,
      Empty: TemplateAppPlayerPlayerFixtureEmpty,
      Error: TemplateAppPlayerPlayerFixtureError,
      FreeText: TemplateAppPlayerPlayerFixtureFreeText,
      MediaImage: TemplateAppPlayerPlayerFixtureMediaImage,
      MediaOmniPlayer: TemplateAppPlayerPlayerFixtureMediaOmniPlayer,
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
      CorrectClosedWithoutKlfAndTips: TemplateAppPlayerPopinCorrectionFixtureCorrectClosedWithoutKlfAndTips,
      CorrectClosed: TemplateAppPlayerPopinCorrectionFixtureCorrectClosed,
      CorrectNextChapter: TemplateAppPlayerPopinCorrectionFixtureCorrectNextChapter,
      CorrectOpenKlf: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenKlf,
      CorrectOpenResourcesWithPdf: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithPdf,
      CorrectOpenResourcesWithVideo: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenResourcesWithVideo,
      CorrectOpenTips: TemplateAppPlayerPopinCorrectionFixtureCorrectOpenTips,
      CorrectWithoutResources: TemplateAppPlayerPopinCorrectionFixtureCorrectWithoutResources,
      FailClosed: TemplateAppPlayerPopinCorrectionFixtureFailClosed,
      FailMultipleAnswersArabic: TemplateAppPlayerPopinCorrectionFixtureFailMultipleAnswersArabic,
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
      Adaptive: TemplateAppPlayerPopinEndFixtureAdaptive,
      ArabicCorrect: TemplateAppPlayerPopinEndFixtureArabicCorrect,
      ArabicNextLevelAdaptiveImg: TemplateAppPlayerPopinEndFixtureArabicNextLevelAdaptiveImg,
      ArabicWithRecommendations: TemplateAppPlayerPopinEndFixtureArabicWithRecommendations,
      CommentIsLoading: TemplateAppPlayerPopinEndFixtureCommentIsLoading,
      CommentSent: TemplateAppPlayerPopinEndFixtureCommentSent,
      Comment: TemplateAppPlayerPopinEndFixtureComment,
      Correct: TemplateAppPlayerPopinEndFixtureCorrect,
      Default: TemplateAppPlayerPopinEndFixtureDefault,
      Fail: TemplateAppPlayerPopinEndFixtureFail,
      InfiniteLives: TemplateAppPlayerPopinEndFixtureInfiniteLives,
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
  TemplateAppPlayerPlayerSlides: {
    TemplateAppPlayerPlayerSlidesFooter: {
      ClueSelected: TemplateAppPlayerPlayerSlidesFooterFixtureClueSelected,
      Default: TemplateAppPlayerPlayerSlidesFooterFixtureDefault,
      Disabled: TemplateAppPlayerPlayerSlidesFooterFixtureDisabled,
      Highlighted: TemplateAppPlayerPlayerSlidesFooterFixtureHighlighted,
      MediaSelected: TemplateAppPlayerPlayerSlidesFooterFixtureMediaSelected,
      NoClue: TemplateAppPlayerPlayerSlidesFooterFixtureNoClue,
      Notify: TemplateAppPlayerPlayerSlidesFooterFixtureNotify,
      OnlyClue: TemplateAppPlayerPlayerSlidesFooterFixtureOnlyClue,
      WithContext: TemplateAppPlayerPlayerSlidesFooterFixtureWithContext
    },
    TemplateAppPlayerPlayerSlidesHeader: {
      Adaptive: TemplateAppPlayerPlayerSlidesHeaderFixtureAdaptive,
      ArabicLearner: TemplateAppPlayerPlayerSlidesHeaderFixtureArabicLearner,
      ArabicMicrolearning: TemplateAppPlayerPlayerSlidesHeaderFixtureArabicMicrolearning,
      InfiniteLives: TemplateAppPlayerPlayerSlidesHeaderFixtureInfiniteLives,
      Learner: TemplateAppPlayerPlayerSlidesHeaderFixtureLearner,
      Microlearning: TemplateAppPlayerPlayerSlidesHeaderFixtureMicrolearning
    }
  },
  TemplateAppPlayerPlayer: {
    TemplateAppPlayerPlayerSlides: {
      ArabicContext: TemplateAppPlayerPlayerSlidesFixtureArabicContext,
      ArabicQcm: TemplateAppPlayerPlayerSlidesFixtureArabicQcm,
      ArabicResources: TemplateAppPlayerPlayerSlidesFixtureArabicResources,
      Arabic: TemplateAppPlayerPlayerSlidesFixtureArabic,
      Clue: TemplateAppPlayerPlayerSlidesFixtureClue,
      ContextWithAudio: TemplateAppPlayerPlayerSlidesFixtureContextWithAudio,
      ContextWithImage: TemplateAppPlayerPlayerSlidesFixtureContextWithImage,
      ContextWithPdf: TemplateAppPlayerPlayerSlidesFixtureContextWithPdf,
      ContextWithVideo: TemplateAppPlayerPlayerSlidesFixtureContextWithVideo,
      Context: TemplateAppPlayerPlayerSlidesFixtureContext,
      Default: TemplateAppPlayerPlayerSlidesFixtureDefault,
      DropDown: TemplateAppPlayerPlayerSlidesFixtureDropDown,
      Error: TemplateAppPlayerPlayerSlidesFixtureError,
      FreeText: TemplateAppPlayerPlayerSlidesFixtureFreeText,
      Loading: TemplateAppPlayerPlayerSlidesFixtureLoading,
      MediaH5P: TemplateAppPlayerPlayerSlidesFixtureMediaH5P,
      MediaOmniPlayer: TemplateAppPlayerPlayerSlidesFixtureMediaOmniPlayer,
      Media: TemplateAppPlayerPlayerSlidesFixtureMedia,
      NoClue: TemplateAppPlayerPlayerSlidesFixtureNoClue,
      NoQuestion: TemplateAppPlayerPlayerSlidesFixtureNoQuestion,
      NoStep: TemplateAppPlayerPlayerSlidesFixtureNoStep,
      NoTotal: TemplateAppPlayerPlayerSlidesFixtureNoTotal,
      OnlyClue: TemplateAppPlayerPlayerSlidesFixtureOnlyClue,
      QcmDrag: TemplateAppPlayerPlayerSlidesFixtureQcmDrag,
      QcmGraphic: TemplateAppPlayerPlayerSlidesFixtureQcmGraphic,
      QcmSeeLessonNoStep: TemplateAppPlayerPlayerSlidesFixtureQcmSeeLessonNoStep,
      QcmSeeLesson: TemplateAppPlayerPlayerSlidesFixtureQcmSeeLesson,
      QcmShort: TemplateAppPlayerPlayerSlidesFixtureQcmShort,
      QcmTemplate: TemplateAppPlayerPlayerSlidesFixtureQcmTemplate,
      QcmWithReviewLesson: TemplateAppPlayerPlayerSlidesFixtureQcmWithReviewLesson,
      Qcm: TemplateAppPlayerPlayerSlidesFixtureQcm,
      Range: TemplateAppPlayerPlayerSlidesFixtureRange,
      Template: TemplateAppPlayerPlayerSlidesFixtureTemplate,
      WithMinHeight: TemplateAppPlayerPlayerSlidesFixtureWithMinHeight
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
      Loading: TemplateBackOfficeBrandListFixtureLoading,
      Rh: TemplateBackOfficeBrandListFixtureRh
    },
    TemplateBackOfficeBrandUpdate: {
      Analytics: TemplateBackOfficeBrandUpdateFixtureAnalytics,
      Animations: TemplateBackOfficeBrandUpdateFixtureAnimations,
      CohortError: TemplateBackOfficeBrandUpdateFixtureCohortError,
      Cohort: TemplateBackOfficeBrandUpdateFixtureCohort,
      Dashboard: TemplateBackOfficeBrandUpdateFixtureDashboard,
      DashboardsAnalytics: TemplateBackOfficeBrandUpdateFixtureDashboardsAnalytics,
      Default: TemplateBackOfficeBrandUpdateFixtureDefault,
      GeneralSettingsSuccess: TemplateBackOfficeBrandUpdateFixtureGeneralSettingsSuccess,
      GeneralSettings: TemplateBackOfficeBrandUpdateFixtureGeneralSettings,
      Home: TemplateBackOfficeBrandUpdateFixtureHome,
      LmsError: TemplateBackOfficeBrandUpdateFixtureLmsError,
      LmsModified: TemplateBackOfficeBrandUpdateFixtureLmsModified,
      LmsSuccess: TemplateBackOfficeBrandUpdateFixtureLmsSuccess,
      Lms: TemplateBackOfficeBrandUpdateFixtureLms,
      Loader: TemplateBackOfficeBrandUpdateFixtureLoader,
      LookandfeelError: TemplateBackOfficeBrandUpdateFixtureLookandfeelError,
      LookandfeelModified: TemplateBackOfficeBrandUpdateFixtureLookandfeelModified,
      LookandfeelPending: TemplateBackOfficeBrandUpdateFixtureLookandfeelPending,
      LookandfeelSuccess: TemplateBackOfficeBrandUpdateFixtureLookandfeelSuccess,
      Lookandfeel: TemplateBackOfficeBrandUpdateFixtureLookandfeel,
      ManageusersEdit: TemplateBackOfficeBrandUpdateFixtureManageusersEdit,
      ManageusersList: TemplateBackOfficeBrandUpdateFixtureManageusersList,
      Manageusers: TemplateBackOfficeBrandUpdateFixtureManageusers,
      SsoActivate: TemplateBackOfficeBrandUpdateFixtureSsoActivate,
      Sso: TemplateBackOfficeBrandUpdateFixtureSso,
      UploadusersLoading: TemplateBackOfficeBrandUpdateFixtureUploadusersLoading,
      UploadusersSuccessful: TemplateBackOfficeBrandUpdateFixtureUploadusersSuccessful,
      Uploadusers: TemplateBackOfficeBrandUpdateFixtureUploadusers
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
      EmptyRequests: TemplateCommonDashboardFixtureEmptyRequests,
      WithHeroCard: TemplateCommonDashboardFixtureWithHeroCard
    },
    TemplateCommonDiscipline: {
      AddToMyList: TemplateCommonDisciplineFixtureAddToMyList,
      Arabic: TemplateCommonDisciplineFixtureArabic,
      Default: TemplateCommonDisciplineFixtureDefault,
      DisableAddToMyList: TemplateCommonDisciplineFixtureDisableAddToMyList,
      DisableShareAndAddToMyList: TemplateCommonDisciplineFixtureDisableShareAndAddToMyList,
      DisableShare: TemplateCommonDisciplineFixtureDisableShare,
      DoubleAuthor: TemplateCommonDisciplineFixtureDoubleAuthor,
      Empty: TemplateCommonDisciplineFixtureEmpty,
      ExternalCourseWithVideo: TemplateCommonDisciplineFixtureExternalCourseWithVideo,
      ExternalCourseWithoutImage: TemplateCommonDisciplineFixtureExternalCourseWithoutImage,
      ExternalCourse: TemplateCommonDisciplineFixtureExternalCourse,
      Jwplayer: TemplateCommonDisciplineFixtureJwplayer,
      Loading: TemplateCommonDisciplineFixtureLoading,
      NoAuthor: TemplateCommonDisciplineFixtureNoAuthor,
      NoVideo: TemplateCommonDisciplineFixtureNoVideo,
      Share: TemplateCommonDisciplineFixtureShare,
      Vimeo: TemplateCommonDisciplineFixtureVimeo,
      WithOnclick: TemplateCommonDisciplineFixtureWithOnclick
    },
    TemplateCommonSearchPage: {
      Default: TemplateCommonSearchPageFixtureDefault,
      NoResultWithRecommendations: TemplateCommonSearchPageFixtureNoResultWithRecommendations,
      NoResult: TemplateCommonSearchPageFixtureNoResult
    }
  }
};
