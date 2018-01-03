/* eslint-disable max-len */

import Button from './../src/atom/button';
import CatalogSection from './../src/atom/catalog-section';
import CenteredText from './../src/atom/centered-text';
import Checkbox from './../src/atom/checkbox';
import Clue from './../src/atom/clue';
import Cta from './../src/atom/cta';
import ImageUpload from './../src/atom/image-upload';
import InputCheckbox from './../src/atom/input-checkbox';
import InputColor from './../src/atom/input-color';
import InputDoublestep from './../src/atom/input-doublestep';
import InputHtml from './../src/atom/input-html';
import InputReadonly from './../src/atom/input-readonly';
import InputSwitch from './../src/atom/input-switch';
import InputText from './../src/atom/input-text';
import InputTextarea from './../src/atom/input-textarea';
import Label from './../src/atom/label';
import Life from './../src/atom/life';
import Link from './../src/atom/link';
import Loader from './../src/atom/loader';
import Notification from './../src/atom/notification';
import Picture from './../src/atom/picture';
import PictureBackground from './../src/atom/picture-background';
import PromoCode from './../src/atom/promo-code';
import Provider from './../src/atom/provider';
import Range from './../src/atom/range';
import ResourceMiniature from './../src/atom/resource-miniature';
import Select from './../src/atom/select';
import Slide from './../src/atom/slide';
import SocialLink from './../src/atom/social-link';
import Spinner from './../src/atom/spinner';
import Tab from './../src/atom/tab';
import TabContent from './../src/atom/tab-content';
import Title from './../src/atom/title';
import Animation from './../src/hoc/animation';
import AnimationScheduler from './../src/hoc/animation-scheduler';
import Swapper from './../src/hoc/swapper';
import Transition from './../src/hoc/transition';
import Answer from './../src/molecule/answer';
import PopinHeader from './../src/molecule/app-player/popin/popin-header';
import BattleRequest from './../src/molecule/battle-request';
import BrandCard from './../src/molecule/brand-card';
import BrandCardCreate from './../src/molecule/brand-card-create';
import BrandCreateForm from './../src/molecule/brand-create-form';
import BrandDownloadBox from './../src/molecule/brand-download-box';
import BrandFormGroup from './../src/molecule/brand-form-group';
import BrandTabs from './../src/molecule/brand-tabs';
import BrandUploadBox from './../src/molecule/brand-upload-box';
import Breadcrumbs from './../src/molecule/breadcrumbs';
import Card from './../src/molecule/card';
import BattleRequestList from './../src/molecule/dashboard/battle-request-list';
import CardsList from './../src/molecule/dashboard/cards-list';
import NewsList from './../src/molecule/dashboard/news-list';
import StartBattle from './../src/molecule/dashboard/start-battle';
import DisciplineCta from './../src/molecule/discipline-cta';
import DisciplineHeader from './../src/molecule/discipline-header';
import DisciplinePartners from './../src/molecule/discipline-partners';
import DisciplineScope from './../src/molecule/discipline-scope';
import Feedback from './../src/molecule/feedback';
import Filters from './../src/molecule/filters';
import ForumComment from './../src/molecule/forum/forum-comment';
import ForumPost from './../src/molecule/forum/forum-post';
import ForumThread from './../src/molecule/forum/forum-thread';
import MenuList from './../src/molecule/menu-list';
import ModuleBubble from './../src/molecule/module-bubble';
import ModuleCard from './../src/molecule/module-card';
import News from './../src/molecule/news';
import Pagination from './../src/molecule/pagination';
import PaymentForm from './../src/molecule/payment-form';
import Pdf from './../src/molecule/pdf';
import ProductCard from './../src/molecule/product-card';
import ProgressBar from './../src/molecule/progress-bar';
import DropDown from './../src/molecule/questions/drop-down';
import FreeText from './../src/molecule/questions/free-text';
import Qcm from './../src/molecule/questions/qcm';
import QcmDrag from './../src/molecule/questions/qcm-drag';
import QcmGraphic from './../src/molecule/questions/qcm-graphic';
import QuestionRange from './../src/molecule/questions/question-range';
import Template from './../src/molecule/questions/template';
import ResourcePlayer from './../src/molecule/resource-player';
import ScopeContent from './../src/molecule/scope-content';
import ScopeTabs from './../src/molecule/scope-tabs';
import Search from './../src/molecule/search';
import SetupSection from './../src/molecule/setup-section';
import SetupSections from './../src/molecule/setup-sections';
import SetupSlide from './../src/molecule/setup-slide';
import SetupSlider from './../src/molecule/setup-slider';
import SlidesFooter from './../src/molecule/slides/slides-footer';
import SlidesPlayer from './../src/molecule/slides/slides-player';
import SsmenuList from './../src/molecule/ssmenu-list';
import SubscriptionFreemium from './../src/molecule/subscription-freemium';
import SubscriptionPremium from './../src/molecule/subscription-premium';
import Table from './../src/molecule/table';
import ThemeImage from './../src/molecule/theme-image';
import TitledCheckbox from './../src/molecule/titled-checkbox';
import Unsubscribe from './../src/molecule/unsubscribe';
import VideoIframe from './../src/molecule/video-iframe';
import VideoPlayer from './../src/molecule/video-player';
import Container from './../src/organism/accordion/container';
import Part from './../src/organism/accordion/part';
import Toggler from './../src/organism/accordion/toggler';
import BrandForm from './../src/organism/brand-form';
import BrandTable from './../src/organism/brand-table';
import BrandUpload from './../src/organism/brand-upload';
import CardsGrid from './../src/organism/cards-grid';
import Cart from './../src/organism/cart';
import Discussion from './../src/organism/discussion';
import GridList from './../src/organism/grid-list';
import Header from './../src/organism/header';
import Hero from './../src/organism/hero';
import ImageSlider from './../src/organism/mooc/image-slider';
import MoocHeader from './../src/organism/mooc-header';
import Popin from './../src/organism/popin';
import ResourceBrowser from './../src/organism/resource-browser';
import Settings from './../src/organism/settings';
import SetupHeader from './../src/organism/setup-header';
import Sidebar from './../src/organism/sidebar';
import Slider from './../src/organism/slider';
import Activity from './../src/template/activity';
import Loading from './../src/template/app-player/loading';
import PlayerHeader from './../src/template/app-player/player/player-header';
import Player from './../src/template/app-player/player';
import PopinCorrection from './../src/template/app-player/popin-correction';
import PopinEnd from './../src/template/app-player/popin-end';
import BrandCreate from './../src/template/back-office/brand-create';
import BrandList from './../src/template/back-office/brand-list';
import BrandUpdate from './../src/template/back-office/brand-update';
import DashboardPreview from './../src/template/back-office/dashboard-preview';
import Authors from './../src/template/common/authors';
import CoorpHeader from './../src/template/common/coorp-header';
import Dashboard from './../src/template/common/dashboard';
import Discipline from './../src/template/common/discipline';
import SearchPage from './../src/template/common/search-page';
import ButtonFixtureA from '../src/atom/button/test/fixtures/a';
import ButtonFixtureClassName from '../src/atom/button/test/fixtures/class-name';
import ButtonFixtureClear from '../src/atom/button/test/fixtures/clear';
import ButtonFixtureDefault from '../src/atom/button/test/fixtures/default';
import ButtonFixtureDisabled from '../src/atom/button/test/fixtures/disabled';
import ButtonFixtureDownload from '../src/atom/button/test/fixtures/download';
import ButtonFixtureLink from '../src/atom/button/test/fixtures/link';
import ButtonFixtureSso from '../src/atom/button/test/fixtures/sso';
import CatalogSectionFixtureList from '../src/atom/catalog-section/test/fixtures/list';
import CatalogSectionFixturePicture from '../src/atom/catalog-section/test/fixtures/picture';
import CenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import CheckboxFixtureChecked from '../src/atom/checkbox/test/fixtures/checked';
import CheckboxFixtureDefault from '../src/atom/checkbox/test/fixtures/default';
import CheckboxFixtureDisabled from '../src/atom/checkbox/test/fixtures/disabled';
import CheckboxFixtureRequired from '../src/atom/checkbox/test/fixtures/required';
import ClueFixtureDefault from '../src/atom/clue/test/fixtures/default';
import ClueFixtureLink from '../src/atom/clue/test/fixtures/link';
import ClueFixtureLoading from '../src/atom/clue/test/fixtures/loading';
import CtaFixtureLightSmall from '../src/atom/cta/test/fixtures/light-small';
import CtaFixtureLight from '../src/atom/cta/test/fixtures/light';
import CtaFixturePrimarySmall from '../src/atom/cta/test/fixtures/primary-small';
import CtaFixturePrimary from '../src/atom/cta/test/fixtures/primary';
import CtaFixtureSecondarySmall from '../src/atom/cta/test/fixtures/secondary-small';
import CtaFixtureSecondary from '../src/atom/cta/test/fixtures/secondary';
import ImageUploadFixtureDesktop from '../src/atom/image-upload/test/fixtures/desktop';
import ImageUploadFixtureEmail from '../src/atom/image-upload/test/fixtures/email';
import ImageUploadFixtureLoading from '../src/atom/image-upload/test/fixtures/loading';
import ImageUploadFixtureMobile from '../src/atom/image-upload/test/fixtures/mobile';
import ImageUploadFixtureModified from '../src/atom/image-upload/test/fixtures/modified';
import ImageUploadFixtureNoPreview from '../src/atom/image-upload/test/fixtures/no-preview';
import ImageUploadFixtureWithoutImage from '../src/atom/image-upload/test/fixtures/without-image';
import InputCheckboxFixtureChecked from '../src/atom/input-checkbox/test/fixtures/checked';
import InputCheckboxFixtureDefault from '../src/atom/input-checkbox/test/fixtures/default';
import InputCheckboxFixtureDisabled from '../src/atom/input-checkbox/test/fixtures/disabled';
import InputCheckboxFixtureError from '../src/atom/input-checkbox/test/fixtures/error';
import InputCheckboxFixtureModified from '../src/atom/input-checkbox/test/fixtures/modified';
import InputCheckboxFixtureRequired from '../src/atom/input-checkbox/test/fixtures/required';
import InputColorFixtureDefault from '../src/atom/input-color/test/fixtures/default';
import InputColorFixtureEmpty from '../src/atom/input-color/test/fixtures/empty';
import InputColorFixtureError from '../src/atom/input-color/test/fixtures/error';
import InputColorFixtureModified from '../src/atom/input-color/test/fixtures/modified';
import InputDoublestepFixtureDefault from '../src/atom/input-doublestep/test/fixtures/default';
import InputDoublestepFixtureInputConfirmDisabled from '../src/atom/input-doublestep/test/fixtures/input-confirm-disabled';
import InputDoublestepFixtureInputConfirmPending from '../src/atom/input-doublestep/test/fixtures/input-confirm-pending';
import InputDoublestepFixtureInputConfirm from '../src/atom/input-doublestep/test/fixtures/input-confirm';
import InputHtmlFixtureDefault from '../src/atom/input-html/test/fixtures/default';
import InputHtmlFixtureEmpty from '../src/atom/input-html/test/fixtures/empty';
import InputHtmlFixtureError from '../src/atom/input-html/test/fixtures/error';
import InputReadonlyFixtureDefault from '../src/atom/input-readonly/test/fixtures/default';
import InputSwitchFixtureChecked from '../src/atom/input-switch/test/fixtures/checked';
import InputSwitchFixtureDisabled from '../src/atom/input-switch/test/fixtures/disabled';
import InputSwitchFixtureModified from '../src/atom/input-switch/test/fixtures/modified';
import InputSwitchFixtureNoTitle from '../src/atom/input-switch/test/fixtures/no-title';
import InputSwitchFixtureSso from '../src/atom/input-switch/test/fixtures/sso';
import InputSwitchFixtureUnchecked from '../src/atom/input-switch/test/fixtures/unchecked';
import InputTextFixtureDefault from '../src/atom/input-text/test/fixtures/default';
import InputTextFixtureDisabled from '../src/atom/input-text/test/fixtures/disabled';
import InputTextFixtureEmpty from '../src/atom/input-text/test/fixtures/empty';
import InputTextFixtureError from '../src/atom/input-text/test/fixtures/error';
import InputTextFixtureModified from '../src/atom/input-text/test/fixtures/modified';
import InputTextFixtureNotitle from '../src/atom/input-text/test/fixtures/notitle';
import InputTextFixtureRequired from '../src/atom/input-text/test/fixtures/required';
import InputTextareaFixtureDefault from '../src/atom/input-textarea/test/fixtures/default';
import InputTextareaFixtureEmpty from '../src/atom/input-textarea/test/fixtures/empty';
import InputTextareaFixtureError from '../src/atom/input-textarea/test/fixtures/error';
import LabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import LabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import LifeFixtureAnimatedExtraLife from '../src/atom/life/test/fixtures/animated-extra-life';
import LifeFixtureAnimatedFail from '../src/atom/life/test/fixtures/animated-fail';
import LifeFixtureDefault from '../src/atom/life/test/fixtures/default';
import LifeFixtureFail from '../src/atom/life/test/fixtures/fail';
import LifeFixtureNull from '../src/atom/life/test/fixtures/null';
import LifeFixtureSmall from '../src/atom/life/test/fixtures/small';
import LinkFixtureDownload from '../src/atom/link/test/fixtures/download';
import LinkFixtureHref from '../src/atom/link/test/fixtures/href';
import LinkFixtureStyledLink from '../src/atom/link/test/fixtures/styled-link';
import LoaderFixtureDefault from '../src/atom/loader/test/fixtures/default';
import NotificationFixtureDefault from '../src/atom/notification/test/fixtures/default';
import NotificationFixtureError from '../src/atom/notification/test/fixtures/error';
import NotificationFixtureWarning from '../src/atom/notification/test/fixtures/warning';
import PictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import PictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import PictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import PictureBackgroundFixtureContain from '../src/atom/picture-background/test/fixtures/contain';
import PictureBackgroundFixtureCover from '../src/atom/picture-background/test/fixtures/cover';
import PictureBackgroundFixtureDefault from '../src/atom/picture-background/test/fixtures/default';
import PictureBackgroundFixtureDesktop from '../src/atom/picture-background/test/fixtures/desktop';
import PromoCodeFixtureDefault from '../src/atom/promo-code/test/fixtures/default';
import PromoCodeFixtureError from '../src/atom/promo-code/test/fixtures/error';
import PromoCodeFixtureSuccess from '../src/atom/promo-code/test/fixtures/success';
import ProviderFixtureDefault from '../src/atom/provider/test/fixtures/default';
import RangeFixtureDefault from '../src/atom/range/test/fixtures/default';
import RangeFixtureMulti from '../src/atom/range/test/fixtures/multi';
import ResourceMiniatureFixturePdf from '../src/atom/resource-miniature/test/fixtures/pdf';
import ResourceMiniatureFixtureSelectedPdf from '../src/atom/resource-miniature/test/fixtures/selected-pdf';
import ResourceMiniatureFixtureSelectedVideo from '../src/atom/resource-miniature/test/fixtures/selected-video';
import ResourceMiniatureFixtureVideo from '../src/atom/resource-miniature/test/fixtures/video';
import SelectFixtureDefault from '../src/atom/select/test/fixtures/default';
import SelectFixtureDisabled from '../src/atom/select/test/fixtures/disabled';
import SelectFixtureFilter from '../src/atom/select/test/fixtures/filter';
import SelectFixtureInvalid from '../src/atom/select/test/fixtures/invalid';
import SelectFixtureModified from '../src/atom/select/test/fixtures/modified';
import SelectFixtureMooc from '../src/atom/select/test/fixtures/mooc';
import SelectFixtureMultipleSelected from '../src/atom/select/test/fixtures/multiple-selected';
import SelectFixtureMultiple from '../src/atom/select/test/fixtures/multiple';
import SelectFixtureQuestion from '../src/atom/select/test/fixtures/question';
import SelectFixtureRequiredWithTitle from '../src/atom/select/test/fixtures/required-with-title';
import SelectFixtureRequired from '../src/atom/select/test/fixtures/required';
import SelectFixtureSort from '../src/atom/select/test/fixtures/sort';
import SelectFixtureTemplate from '../src/atom/select/test/fixtures/template';
import SelectFixtureThematiquesLong from '../src/atom/select/test/fixtures/thematiques-long';
import SelectFixtureThematiques from '../src/atom/select/test/fixtures/thematiques';
import SlideFixtureDefault from '../src/atom/slide/test/fixtures/default';
import SlideFixtureLeft from '../src/atom/slide/test/fixtures/left';
import SlideFixtureLight from '../src/atom/slide/test/fixtures/light';
import SlideFixtureNoCta from '../src/atom/slide/test/fixtures/no-cta';
import SlideFixtureRight from '../src/atom/slide/test/fixtures/right';
import SocialLinkFixtureFacebook from '../src/atom/social-link/test/fixtures/facebook';
import SocialLinkFixtureTwitter from '../src/atom/social-link/test/fixtures/twitter';
import SpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import TabFixtureDefault from '../src/atom/tab/test/fixtures/default';
import TabContentFixtureDefault from '../src/atom/tab-content/test/fixtures/default';
import TabContentFixtureHideContentBackground from '../src/atom/tab-content/test/fixtures/hide-content-background';
import TitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
import AnimationFixtureStart from '../src/hoc/animation/test/fixtures/start';
import AnimationFixtureStop from '../src/hoc/animation/test/fixtures/stop';
import AnimationSchedulerFixtureParallel from '../src/hoc/animation-scheduler/test/fixtures/parallel';
import AnimationSchedulerFixtureSeries from '../src/hoc/animation-scheduler/test/fixtures/series';
import SwapperFixtureDefault from '../src/hoc/swapper/test/fixtures/default';
import TransitionFixtureFlipSquare from '../src/hoc/transition/test/fixtures/flip-square';
import AnswerFixtureDefault from '../src/molecule/answer/test/fixtures/default';
import AnswerFixtureDropDown from '../src/molecule/answer/test/fixtures/drop-down';
import AnswerFixtureQcmDrag from '../src/molecule/answer/test/fixtures/qcm-drag';
import AnswerFixtureQcmGraphic from '../src/molecule/answer/test/fixtures/qcm-graphic';
import AnswerFixtureQcmShort from '../src/molecule/answer/test/fixtures/qcm-short';
import AnswerFixtureQcm from '../src/molecule/answer/test/fixtures/qcm';
import AnswerFixtureRange from '../src/molecule/answer/test/fixtures/range';
import AnswerFixtureTemplate from '../src/molecule/answer/test/fixtures/template';
import PopinHeaderFixtureExhaustedExtralife from '../src/molecule/app-player/popin/popin-header/test/fixtures/exhausted-extralife';
import PopinHeaderFixtureExtralifeAccepted from '../src/molecule/app-player/popin/popin-header/test/fixtures/extralife-accepted';
import PopinHeaderFixtureExtralife from '../src/molecule/app-player/popin/popin-header/test/fixtures/extralife';
import PopinHeaderFixtureFailMultipleAnswers from '../src/molecule/app-player/popin/popin-header/test/fixtures/fail-multiple-answers';
import PopinHeaderFixtureFail from '../src/molecule/app-player/popin/popin-header/test/fixtures/fail';
import PopinHeaderFixtureLoading from '../src/molecule/app-player/popin/popin-header/test/fixtures/loading';
import PopinHeaderFixtureNextChapter from '../src/molecule/app-player/popin/popin-header/test/fixtures/next-chapter';
import PopinHeaderFixtureStarsRank from '../src/molecule/app-player/popin/popin-header/test/fixtures/stars-rank';
import PopinHeaderFixtureSuccess from '../src/molecule/app-player/popin/popin-header/test/fixtures/success';
import BattleRequestFixtureDefault from '../src/molecule/battle-request/test/fixtures/default';
import BrandCardFixtureDefault from '../src/molecule/brand-card/test/fixtures/default';
import BrandCardFixtureWithDescription from '../src/molecule/brand-card/test/fixtures/with-description';
import BrandCardCreateFixtureDefault from '../src/molecule/brand-card-create/test/fixtures/default';
import BrandCreateFormFixtureDefault from '../src/molecule/brand-create-form/test/fixtures/default';
import BrandCreateFormFixtureError from '../src/molecule/brand-create-form/test/fixtures/error';
import BrandCreateFormFixtureLoading from '../src/molecule/brand-create-form/test/fixtures/loading';
import BrandCreateFormFixtureModified from '../src/molecule/brand-create-form/test/fixtures/modified';
import BrandDownloadBoxFixtureDefault from '../src/molecule/brand-download-box/test/fixtures/default';
import BrandDownloadBoxFixtureSso from '../src/molecule/brand-download-box/test/fixtures/sso';
import BrandFormGroupFixtureDashboard from '../src/molecule/brand-form-group/test/fixtures/dashboard';
import BrandFormGroupFixtureDefault from '../src/molecule/brand-form-group/test/fixtures/default';
import BrandFormGroupFixtureDoublefield from '../src/molecule/brand-form-group/test/fixtures/doublefield';
import BrandFormGroupFixtureImages from '../src/molecule/brand-form-group/test/fixtures/images';
import BrandFormGroupFixtureLookandfeel from '../src/molecule/brand-form-group/test/fixtures/lookandfeel';
import BrandFormGroupFixtureRoles from '../src/molecule/brand-form-group/test/fixtures/roles';
import BrandFormGroupFixtureSlider from '../src/molecule/brand-form-group/test/fixtures/slider';
import BrandFormGroupFixtureSso from '../src/molecule/brand-form-group/test/fixtures/sso';
import BrandTabsFixtureDefault from '../src/molecule/brand-tabs/test/fixtures/default';
import BrandTabsFixtureLookandfeel from '../src/molecule/brand-tabs/test/fixtures/lookandfeel';
import BrandTabsFixtureSso from '../src/molecule/brand-tabs/test/fixtures/sso';
import BrandTabsFixtureUsers from '../src/molecule/brand-tabs/test/fixtures/users';
import BrandUploadBoxFixtureDefault from '../src/molecule/brand-upload-box/test/fixtures/default';
import BrandUploadBoxFixtureLoading from '../src/molecule/brand-upload-box/test/fixtures/loading';
import BrandUploadBoxFixtureSso from '../src/molecule/brand-upload-box/test/fixtures/sso';
import BreadcrumbsFixtureDefault from '../src/molecule/breadcrumbs/test/fixtures/default';
import CardFixtureAdaptivAndDisabled from '../src/molecule/card/test/fixtures/adaptiv-and-disabled';
import CardFixtureAdaptiv from '../src/molecule/card/test/fixtures/adaptiv';
import CardFixtureCatalogue from '../src/molecule/card/test/fixtures/catalogue';
import CardFixtureDefault from '../src/molecule/card/test/fixtures/default';
import CardFixtureDisabled from '../src/molecule/card/test/fixtures/disabled';
import CardFixtureEmpty from '../src/molecule/card/test/fixtures/empty';
import CardFixtureFreerunAndDisabled from '../src/molecule/card/test/fixtures/freerun-and-disabled';
import CardFixtureFreerun from '../src/molecule/card/test/fixtures/freerun';
import BattleRequestListFixtureDefault from '../src/molecule/dashboard/battle-request-list/test/fixtures/default';
import BattleRequestListFixtureEmpty from '../src/molecule/dashboard/battle-request-list/test/fixtures/empty';
import CardsListFixtureDefault from '../src/molecule/dashboard/cards-list/test/fixtures/default';
import CardsListFixtureManyEmpty from '../src/molecule/dashboard/cards-list/test/fixtures/many-empty';
import CardsListFixtureMany from '../src/molecule/dashboard/cards-list/test/fixtures/many';
import NewsListFixtureDefault from '../src/molecule/dashboard/news-list/test/fixtures/default';
import NewsListFixtureLoading from '../src/molecule/dashboard/news-list/test/fixtures/loading';
import NewsListFixtureMore from '../src/molecule/dashboard/news-list/test/fixtures/more';
import StartBattleFixtureDefault from '../src/molecule/dashboard/start-battle/test/fixtures/default';
import StartBattleFixtureHref from '../src/molecule/dashboard/start-battle/test/fixtures/href';
import DisciplineCtaFixtureDefault from '../src/molecule/discipline-cta/test/fixtures/default';
import DisciplineCtaFixtureNoStart from '../src/molecule/discipline-cta/test/fixtures/no-start';
import DisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import DisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import DisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import DisciplineHeaderFixturePortaitRatio from '../src/molecule/discipline-header/test/fixtures/portait-ratio';
import DisciplinePartnersFixtureDefault from '../src/molecule/discipline-partners/test/fixtures/default';
import DisciplinePartnersFixtureDoubleAuthors from '../src/molecule/discipline-partners/test/fixtures/double-authors';
import DisciplinePartnersFixtureMoreInfo from '../src/molecule/discipline-partners/test/fixtures/more-info';
import DisciplinePartnersFixtureNoAuthor from '../src/molecule/discipline-partners/test/fixtures/no-author';
import DisciplinePartnersFixtureNosite from '../src/molecule/discipline-partners/test/fixtures/nosite';
import DisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import DisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import DisciplineScopeFixtureMedias from '../src/molecule/discipline-scope/test/fixtures/medias';
import DisciplineScopeFixtureWithOnclick from '../src/molecule/discipline-scope/test/fixtures/with-onclick';
import FeedbackFixtureDefault from '../src/molecule/feedback/test/fixtures/default';
import FeedbackFixtureFailExitNode from '../src/molecule/feedback/test/fixtures/fail-exit-node';
import FeedbackFixtureFailureWithTitleAndDescriptionAndVideo from '../src/molecule/feedback/test/fixtures/failure-with-title-and-description-and-video';
import FeedbackFixtureSuccessExitNode from '../src/molecule/feedback/test/fixtures/success-exit-node';
import FeedbackFixtureSuccessWithTitleAndDescriptionAndImage from '../src/molecule/feedback/test/fixtures/success-with-title-and-description-and-image';
import FeedbackFixtureSuccessWithTitleAndDescriptionAndPdf from '../src/molecule/feedback/test/fixtures/success-with-title-and-description-and-pdf';
import FeedbackFixtureSuccessWithTitleAndDescription from '../src/molecule/feedback/test/fixtures/success-with-title-and-description';
import FiltersFixtureDefault from '../src/molecule/filters/test/fixtures/default';
import FiltersFixtureFiltersList from '../src/molecule/filters/test/fixtures/filters-list';
import FiltersFixtureOne from '../src/molecule/filters/test/fixtures/one';
import FiltersFixtureOnlyTimer from '../src/molecule/filters/test/fixtures/only-timer';
import FiltersFixtureOpenSorts from '../src/molecule/filters/test/fixtures/open-sorts';
import FiltersFixtureOpened from '../src/molecule/filters/test/fixtures/opened';
import FiltersFixtureThree from '../src/molecule/filters/test/fixtures/three';
import FiltersFixtureTwoOpened from '../src/molecule/filters/test/fixtures/two-opened';
import FiltersFixtureTwo from '../src/molecule/filters/test/fixtures/two';
import FiltersFixtureZero from '../src/molecule/filters/test/fixtures/zero';
import ForumCommentFixtureDefault from '../src/molecule/forum/forum-comment/test/fixtures/default';
import ForumCommentFixturePostDisabled from '../src/molecule/forum/forum-comment/test/fixtures/post-disabled';
import ForumCommentFixtureTextareaDisabled from '../src/molecule/forum/forum-comment/test/fixtures/textarea-disabled';
import ForumPostFixtureDefault from '../src/molecule/forum/forum-post/test/fixtures/default';
import ForumPostFixtureDeleted from '../src/molecule/forum/forum-post/test/fixtures/deleted';
import ForumPostFixtureEditable from '../src/molecule/forum/forum-post/test/fixtures/editable';
import ForumPostFixtureNotEditableNotRejectable from '../src/molecule/forum/forum-post/test/fixtures/not-editable-not-rejectable';
import ForumPostFixturePostsLocked from '../src/molecule/forum/forum-post/test/fixtures/posts-locked';
import ForumPostFixtureRejectable from '../src/molecule/forum/forum-post/test/fixtures/rejectable';
import ForumPostFixtureRejected from '../src/molecule/forum/forum-post/test/fixtures/rejected';
import ForumPostFixtureShowAnswerBox from '../src/molecule/forum/forum-post/test/fixtures/show-answer-box';
import ForumPostFixtureShowEditBox from '../src/molecule/forum/forum-post/test/fixtures/show-edit-box';
import ForumPostFixtureTextareasLocked from '../src/molecule/forum/forum-post/test/fixtures/textareas-locked';
import ForumThreadFixtureDeepAnswers from '../src/molecule/forum/forum-thread/test/fixtures/deep-answers';
import ForumThreadFixtureDefault from '../src/molecule/forum/forum-thread/test/fixtures/default';
import ForumThreadFixtureWithAnswers from '../src/molecule/forum/forum-thread/test/fixtures/with-answers';
import MenuListFixtureDefault from '../src/molecule/menu-list/test/fixtures/default';
import ModuleBubbleFixtureDefault from '../src/molecule/module-bubble/test/fixtures/default';
import ModuleBubbleFixtureDisabled from '../src/molecule/module-bubble/test/fixtures/disabled';
import ModuleCardFixtureActive from '../src/molecule/module-card/test/fixtures/active';
import ModuleCardFixtureRestarted from '../src/molecule/module-card/test/fixtures/restarted';
import NewsFixtureDefault from '../src/molecule/news/test/fixtures/default';
import NewsFixtureLongDescription from '../src/molecule/news/test/fixtures/long-description';
import NewsFixtureLongTitle from '../src/molecule/news/test/fixtures/long-title';
import NewsFixtureSmallDesciption from '../src/molecule/news/test/fixtures/small-desciption';
import NewsFixtureSmallTitle from '../src/molecule/news/test/fixtures/small-title';
import PaginationFixtureDefault from '../src/molecule/pagination/test/fixtures/default';
import PaginationFixtureDisabled from '../src/molecule/pagination/test/fixtures/disabled';
import PaymentFormFixtureDefault from '../src/molecule/payment-form/test/fixtures/default';
import PaymentFormFixtureError from '../src/molecule/payment-form/test/fixtures/error';
import PaymentFormFixtureWarning from '../src/molecule/payment-form/test/fixtures/warning';
import PdfFixtureDefault from '../src/molecule/pdf/test/fixtures/default';
import ProductCardFixtureDefault from '../src/molecule/product-card/test/fixtures/default';
import ProgressBarFixtureDefault from '../src/molecule/progress-bar/test/fixtures/default';
import ProgressBarFixtureMax from '../src/molecule/progress-bar/test/fixtures/max';
import DropDownFixtureDefault from '../src/molecule/questions/drop-down/test/fixtures/default';
import DropDownFixtureNoSelected from '../src/molecule/questions/drop-down/test/fixtures/no-selected';
import FreeTextFixtureDefault from '../src/molecule/questions/free-text/test/fixtures/default';
import FreeTextFixtureWithDefaultValue from '../src/molecule/questions/free-text/test/fixtures/with-default-value';
import QcmFixtureDefault from '../src/molecule/questions/qcm/test/fixtures/default';
import QcmFixtureNoSelected from '../src/molecule/questions/qcm/test/fixtures/no-selected';
import QcmFixtureShortAnswers from '../src/molecule/questions/qcm/test/fixtures/short-answers';
import QcmDragFixtureDefault from '../src/molecule/questions/qcm-drag/test/fixtures/default';
import QcmDragFixtureNoSelected from '../src/molecule/questions/qcm-drag/test/fixtures/no-selected';
import QcmGraphicFixtureDefault from '../src/molecule/questions/qcm-graphic/test/fixtures/default';
import QcmGraphicFixtureNoSelected from '../src/molecule/questions/qcm-graphic/test/fixtures/no-selected';
import QuestionRangeFixtureDefault from '../src/molecule/questions/question-range/test/fixtures/default';
import TemplateFixtureDefault from '../src/molecule/questions/template/test/fixtures/default';
import TemplateFixtureMultiple from '../src/molecule/questions/template/test/fixtures/multiple';
import ResourcePlayerFixtureImage from '../src/molecule/resource-player/test/fixtures/image';
import ResourcePlayerFixturePdf from '../src/molecule/resource-player/test/fixtures/pdf';
import ResourcePlayerFixtureVimeo from '../src/molecule/resource-player/test/fixtures/vimeo';
import ScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import ScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import ScopeContentFixtureMedias from '../src/molecule/scope-content/test/fixtures/medias';
import ScopeContentFixtureWithOnclick from '../src/molecule/scope-content/test/fixtures/with-onclick';
import ScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import ScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import SearchFixtureDefault from '../src/molecule/search/test/fixtures/default';
import SetupSectionFixtureDefault from '../src/molecule/setup-section/test/fixtures/default';
import SetupSectionFixtureFirst from '../src/molecule/setup-section/test/fixtures/first';
import SetupSectionFixtureOther from '../src/molecule/setup-section/test/fixtures/other';
import SetupSectionsFixtureDefault from '../src/molecule/setup-sections/test/fixtures/default';
import SetupSectionsFixtureLoading from '../src/molecule/setup-sections/test/fixtures/loading';
import SetupSlideFixtureDefault from '../src/molecule/setup-slide/test/fixtures/default';
import SetupSliderFixtureDefault from '../src/molecule/setup-slider/test/fixtures/default';
import SlidesFooterFixtureClueSelected from '../src/molecule/slides/slides-footer/test/fixtures/clue-selected';
import SlidesFooterFixtureDefault from '../src/molecule/slides/slides-footer/test/fixtures/default';
import SlidesFooterFixtureDisabled from '../src/molecule/slides/slides-footer/test/fixtures/disabled';
import SlidesFooterFixtureHighlighted from '../src/molecule/slides/slides-footer/test/fixtures/highlighted';
import SlidesFooterFixtureMediaSelected from '../src/molecule/slides/slides-footer/test/fixtures/media-selected';
import SlidesFooterFixtureNotify from '../src/molecule/slides/slides-footer/test/fixtures/notify';
import SlidesFooterFixtureOnlyClue from '../src/molecule/slides/slides-footer/test/fixtures/only-clue';
import SlidesFooterFixtureWithContext from '../src/molecule/slides/slides-footer/test/fixtures/with-context';
import SlidesPlayerFixtureClue from '../src/molecule/slides/slides-player/test/fixtures/clue';
import SlidesPlayerFixtureContextWithImage from '../src/molecule/slides/slides-player/test/fixtures/context-with-image';
import SlidesPlayerFixtureContextWithPdf from '../src/molecule/slides/slides-player/test/fixtures/context-with-pdf';
import SlidesPlayerFixtureContextWithVideo from '../src/molecule/slides/slides-player/test/fixtures/context-with-video';
import SlidesPlayerFixtureContext from '../src/molecule/slides/slides-player/test/fixtures/context';
import SlidesPlayerFixtureDefault from '../src/molecule/slides/slides-player/test/fixtures/default';
import SlidesPlayerFixtureDropDown from '../src/molecule/slides/slides-player/test/fixtures/drop-down';
import SlidesPlayerFixtureError from '../src/molecule/slides/slides-player/test/fixtures/error';
import SlidesPlayerFixtureFreeText from '../src/molecule/slides/slides-player/test/fixtures/free-text';
import SlidesPlayerFixtureLoading from '../src/molecule/slides/slides-player/test/fixtures/loading';
import SlidesPlayerFixtureMedia from '../src/molecule/slides/slides-player/test/fixtures/media';
import SlidesPlayerFixtureNoQuestion from '../src/molecule/slides/slides-player/test/fixtures/no-question';
import SlidesPlayerFixtureNoStep from '../src/molecule/slides/slides-player/test/fixtures/no-step';
import SlidesPlayerFixtureNoTotal from '../src/molecule/slides/slides-player/test/fixtures/no-total';
import SlidesPlayerFixtureOnlyClue from '../src/molecule/slides/slides-player/test/fixtures/only-clue';
import SlidesPlayerFixtureQcmDrag from '../src/molecule/slides/slides-player/test/fixtures/qcm-drag';
import SlidesPlayerFixtureQcmGraphic from '../src/molecule/slides/slides-player/test/fixtures/qcm-graphic';
import SlidesPlayerFixtureQcmShort from '../src/molecule/slides/slides-player/test/fixtures/qcm-short';
import SlidesPlayerFixtureQcmTemplate from '../src/molecule/slides/slides-player/test/fixtures/qcm-template';
import SlidesPlayerFixtureQcm from '../src/molecule/slides/slides-player/test/fixtures/qcm';
import SlidesPlayerFixtureRange from '../src/molecule/slides/slides-player/test/fixtures/range';
import SlidesPlayerFixtureTemplate from '../src/molecule/slides/slides-player/test/fixtures/template';
import SlidesPlayerFixtureWithMinHeight from '../src/molecule/slides/slides-player/test/fixtures/with-min-height';
import SsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import SsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import SsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import SsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import SubscriptionFreemiumFixtureDefault from '../src/molecule/subscription-freemium/test/fixtures/default';
import SubscriptionPremiumFixtureDefault from '../src/molecule/subscription-premium/test/fixtures/default';
import SubscriptionPremiumFixturePromoCode from '../src/molecule/subscription-premium/test/fixtures/promo-code';
import TableFixtureDefault from '../src/molecule/table/test/fixtures/default';
import TableFixtureNoOptions from '../src/molecule/table/test/fixtures/no-options';
import ThemeImageFixtureBg from '../src/molecule/theme-image/test/fixtures/bg';
import TitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import TitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import TitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
import UnsubscribeFixtureDefault from '../src/molecule/unsubscribe/test/fixtures/default';
import UnsubscribeFixtureSubscribed from '../src/molecule/unsubscribe/test/fixtures/subscribed';
import VideoIframeFixtureEmpty from '../src/molecule/video-iframe/test/fixtures/empty';
import VideoIframeFixtureImagePlaceholder from '../src/molecule/video-iframe/test/fixtures/image-placeholder';
import VideoIframeFixtureYoutube from '../src/molecule/video-iframe/test/fixtures/youtube';
import VideoPlayerFixtureJwplayer from '../src/molecule/video-player/test/fixtures/jwplayer';
import VideoPlayerFixtureKontiki from '../src/molecule/video-player/test/fixtures/kontiki';
import VideoPlayerFixtureVimeo from '../src/molecule/video-player/test/fixtures/vimeo';
import VideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
import ContainerFixtureDefault from '../src/organism/accordion/container/test/fixtures/default';
import PartFixtureDefault from '../src/organism/accordion/part/test/fixtures/default';
import PartFixtureOpen from '../src/organism/accordion/part/test/fixtures/open';
import TogglerFixtureAllAreOpenable from '../src/organism/accordion/toggler/test/fixtures/all-are-openable';
import TogglerFixtureOnlyOne from '../src/organism/accordion/toggler/test/fixtures/only-one';
import BrandFormFixtureDashboard from '../src/organism/brand-form/test/fixtures/dashboard';
import BrandFormFixtureDefault from '../src/organism/brand-form/test/fixtures/default';
import BrandFormFixtureGeneralSettings from '../src/organism/brand-form/test/fixtures/general-settings';
import BrandFormFixtureLookandfeel from '../src/organism/brand-form/test/fixtures/lookandfeel';
import BrandFormFixtureSso from '../src/organism/brand-form/test/fixtures/sso';
import BrandFormFixtureUserEdit from '../src/organism/brand-form/test/fixtures/user-edit';
import BrandTableFixtureDefault from '../src/organism/brand-table/test/fixtures/default';
import BrandTableFixtureEmpty from '../src/organism/brand-table/test/fixtures/empty';
import BrandTableFixtureLoading from '../src/organism/brand-table/test/fixtures/loading';
import BrandUploadFixtureDefault from '../src/organism/brand-upload/test/fixtures/default';
import BrandUploadFixtureLoading from '../src/organism/brand-upload/test/fixtures/loading';
import CardsGridFixtureCatalog from '../src/organism/cards-grid/test/fixtures/catalog';
import CardsGridFixtureEmpty from '../src/organism/cards-grid/test/fixtures/empty';
import CardsGridFixtureLoading from '../src/organism/cards-grid/test/fixtures/loading';
import CardsGridFixtureMany from '../src/organism/cards-grid/test/fixtures/many';
import CartFixtureDefault from '../src/organism/cart/test/fixtures/default';
import DiscussionFixtureDefault from '../src/organism/discussion/test/fixtures/default';
import DiscussionFixtureLoadingMore from '../src/organism/discussion/test/fixtures/loading-more';
import DiscussionFixtureModeration from '../src/organism/discussion/test/fixtures/moderation';
import DiscussionFixtureNewDiscussion from '../src/organism/discussion/test/fixtures/new-discussion';
import GridListFixtureDefault from '../src/organism/grid-list/test/fixtures/default';
import HeaderFixtureDefault from '../src/organism/header/test/fixtures/default';
import HeroFixtureDefault from '../src/organism/hero/test/fixtures/default';
import HeroFixtureNoTouch from '../src/organism/hero/test/fixtures/no-touch';
import HeroFixtureTouch from '../src/organism/hero/test/fixtures/touch';
import ImageSliderFixtureDefault from '../src/organism/mooc/image-slider/test/fixtures/default';
import ImageSliderFixtureMultipleSlides from '../src/organism/mooc/image-slider/test/fixtures/multiple-slides';
import MoocHeaderFixtureDefault from '../src/organism/mooc-header/test/fixtures/default';
import MoocHeaderFixtureLogged from '../src/organism/mooc-header/test/fixtures/logged';
import MoocHeaderFixtureSliderMultiple from '../src/organism/mooc-header/test/fixtures/slider-multiple';
import MoocHeaderFixtureSlider from '../src/organism/mooc-header/test/fixtures/slider';
import PopinFixtureDefault from '../src/organism/popin/test/fixtures/default';
import ResourceBrowserFixtureJwplayer from '../src/organism/resource-browser/test/fixtures/jwplayer';
import ResourceBrowserFixtureOneVideo from '../src/organism/resource-browser/test/fixtures/one-video';
import ResourceBrowserFixturePdfSelected from '../src/organism/resource-browser/test/fixtures/pdf-selected';
import ResourceBrowserFixtureVideoSelected from '../src/organism/resource-browser/test/fixtures/video-selected';
import SettingsFixtureDefault from '../src/organism/settings/test/fixtures/default';
import SettingsFixtureFreemium from '../src/organism/settings/test/fixtures/freemium';
import SettingsFixturePremium from '../src/organism/settings/test/fixtures/premium';
import SettingsFixturePromoCode from '../src/organism/settings/test/fixtures/promo-code';
import SetupHeaderFixtureDefault from '../src/organism/setup-header/test/fixtures/default';
import SidebarFixtureAnalytics from '../src/organism/sidebar/test/fixtures/analytics';
import SidebarFixtureCustom from '../src/organism/sidebar/test/fixtures/custom';
import SidebarFixtureDashboards from '../src/organism/sidebar/test/fixtures/dashboards';
import SidebarFixtureDefault from '../src/organism/sidebar/test/fixtures/default';
import SliderFixtureDefault from '../src/organism/slider/test/fixtures/default';
import SliderFixtureMultipleSlides from '../src/organism/slider/test/fixtures/multiple-slides';
import ActivityFixtureDefault from '../src/template/activity/test/fixtures/default';
import ActivityFixtureEmpty from '../src/template/activity/test/fixtures/empty';
import ActivityFixtureNoEngines from '../src/template/activity/test/fixtures/no-engines';
import LoadingFixtureDefault from '../src/template/app-player/loading/test/fixtures/default';
import PlayerHeaderFixtureLearner from '../src/template/app-player/player/player-header/test/fixtures/learner';
import PlayerHeaderFixtureMicrolearning from '../src/template/app-player/player/player-header/test/fixtures/microlearning';
import PlayerHeaderFixtureNoLives from '../src/template/app-player/player/player-header/test/fixtures/no-lives';
import PlayerFixtureClue from '../src/template/app-player/player/test/fixtures/clue';
import PlayerFixtureContextWithImage from '../src/template/app-player/player/test/fixtures/context-with-image';
import PlayerFixtureContextWithPdf from '../src/template/app-player/player/test/fixtures/context-with-pdf';
import PlayerFixtureContextWithVideo from '../src/template/app-player/player/test/fixtures/context-with-video';
import PlayerFixtureContext from '../src/template/app-player/player/test/fixtures/context';
import PlayerFixtureDropDown from '../src/template/app-player/player/test/fixtures/drop-down';
import PlayerFixtureEmpty from '../src/template/app-player/player/test/fixtures/empty';
import PlayerFixtureError from '../src/template/app-player/player/test/fixtures/error';
import PlayerFixtureFreeText from '../src/template/app-player/player/test/fixtures/free-text';
import PlayerFixtureMedia from '../src/template/app-player/player/test/fixtures/media';
import PlayerFixtureOnlyClue from '../src/template/app-player/player/test/fixtures/only-clue';
import PlayerFixtureQcmDrag from '../src/template/app-player/player/test/fixtures/qcm-drag';
import PlayerFixtureQcmGraphic from '../src/template/app-player/player/test/fixtures/qcm-graphic';
import PlayerFixtureQcmShort from '../src/template/app-player/player/test/fixtures/qcm-short';
import PlayerFixtureQcm from '../src/template/app-player/player/test/fixtures/qcm';
import PlayerFixtureRange from '../src/template/app-player/player/test/fixtures/range';
import PopinCorrectionFixtureCorrectClosed from '../src/template/app-player/popin-correction/test/fixtures/correct-closed';
import PopinCorrectionFixtureCorrectNextChapter from '../src/template/app-player/popin-correction/test/fixtures/correct-next-chapter';
import PopinCorrectionFixtureCorrectOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-klf';
import PopinCorrectionFixtureCorrectOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-pdf';
import PopinCorrectionFixtureCorrectOpenResourcesWithVideo from '../src/template/app-player/popin-correction/test/fixtures/correct-open-resources-with-video';
import PopinCorrectionFixtureCorrectOpenTips from '../src/template/app-player/popin-correction/test/fixtures/correct-open-tips';
import PopinCorrectionFixtureCorrectWithoutResources from '../src/template/app-player/popin-correction/test/fixtures/correct-without-resources';
import PopinCorrectionFixtureFailClosed from '../src/template/app-player/popin-correction/test/fixtures/fail-closed';
import PopinCorrectionFixtureFailJokerOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/fail-joker-open-klf';
import PopinCorrectionFixtureFailMultipleAnswers from '../src/template/app-player/popin-correction/test/fixtures/fail-multiple-answers';
import PopinCorrectionFixtureFailOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-klf';
import PopinCorrectionFixtureFailOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf';
import PopinCorrectionFixtureFailOpenResourcesWithVideo from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video';
import PopinCorrectionFixtureFailOpenTips from '../src/template/app-player/popin-correction/test/fixtures/fail-open-tips';
import PopinCorrectionFixtureLoading from '../src/template/app-player/popin-correction/test/fixtures/loading';
import PopinEndFixtureCommentIsLoading from '../src/template/app-player/popin-end/test/fixtures/comment-is-loading';
import PopinEndFixtureCommentSent from '../src/template/app-player/popin-end/test/fixtures/comment-sent';
import PopinEndFixtureComment from '../src/template/app-player/popin-end/test/fixtures/comment';
import PopinEndFixtureCorrect from '../src/template/app-player/popin-end/test/fixtures/correct';
import PopinEndFixtureDefault from '../src/template/app-player/popin-end/test/fixtures/default';
import PopinEndFixtureFail from '../src/template/app-player/popin-end/test/fixtures/fail';
import PopinEndFixtureLoading from '../src/template/app-player/popin-end/test/fixtures/loading';
import PopinEndFixtureNegativeRank from '../src/template/app-player/popin-end/test/fixtures/negative-rank';
import PopinEndFixtureNextCourse from '../src/template/app-player/popin-end/test/fixtures/next-course';
import PopinEndFixtureNextLevelAdaptiveImg from '../src/template/app-player/popin-end/test/fixtures/next-level-adaptive-img';
import PopinEndFixtureSimpleAction from '../src/template/app-player/popin-end/test/fixtures/simple-action';
import PopinEndFixtureSubscribe from '../src/template/app-player/popin-end/test/fixtures/subscribe';
import PopinEndFixtureWithLoadingRecommendations from '../src/template/app-player/popin-end/test/fixtures/with-loading-recommendations';
import PopinEndFixtureWithRecommendations from '../src/template/app-player/popin-end/test/fixtures/with-recommendations';
import BrandCreateFixtureDefault from '../src/template/back-office/brand-create/test/fixtures/default';
import BrandCreateFixtureError from '../src/template/back-office/brand-create/test/fixtures/error';
import BrandCreateFixtureLoading from '../src/template/back-office/brand-create/test/fixtures/loading';
import BrandCreateFixtureModified from '../src/template/back-office/brand-create/test/fixtures/modified';
import BrandListFixtureDefault from '../src/template/back-office/brand-list/test/fixtures/default';
import BrandListFixtureLoading from '../src/template/back-office/brand-list/test/fixtures/loading';
import BrandUpdateFixtureDashboard from '../src/template/back-office/brand-update/test/fixtures/dashboard';
import BrandUpdateFixtureDefault from '../src/template/back-office/brand-update/test/fixtures/default';
import BrandUpdateFixtureGeneralSettingsSuccess from '../src/template/back-office/brand-update/test/fixtures/general-settings-success';
import BrandUpdateFixtureGeneralSettings from '../src/template/back-office/brand-update/test/fixtures/general-settings';
import BrandUpdateFixtureLookandfeelError from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-error';
import BrandUpdateFixtureLookandfeelModified from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-modified';
import BrandUpdateFixtureLookandfeelPending from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-pending';
import BrandUpdateFixtureLookandfeelSuccess from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-success';
import BrandUpdateFixtureLookandfeel from '../src/template/back-office/brand-update/test/fixtures/lookandfeel';
import BrandUpdateFixtureSsoActivate from '../src/template/back-office/brand-update/test/fixtures/sso-activate';
import BrandUpdateFixtureSso from '../src/template/back-office/brand-update/test/fixtures/sso';
import BrandUpdateFixtureUsersEdit from '../src/template/back-office/brand-update/test/fixtures/users-edit';
import BrandUpdateFixtureUsersImportLoading from '../src/template/back-office/brand-update/test/fixtures/users-import-loading';
import BrandUpdateFixtureUsersImportSuccessful from '../src/template/back-office/brand-update/test/fixtures/users-import-successful';
import BrandUpdateFixtureUsersImport from '../src/template/back-office/brand-update/test/fixtures/users-import';
import BrandUpdateFixtureUsersList from '../src/template/back-office/brand-update/test/fixtures/users-list';
import BrandUpdateFixtureUsers from '../src/template/back-office/brand-update/test/fixtures/users';
import DashboardPreviewFixtureDefault from '../src/template/back-office/dashboard-preview/test/fixtures/default';
import DashboardPreviewFixtureError from '../src/template/back-office/dashboard-preview/test/fixtures/error';
import DashboardPreviewFixtureLoading from '../src/template/back-office/dashboard-preview/test/fixtures/loading';
import DashboardPreviewFixtureSelectedError from '../src/template/back-office/dashboard-preview/test/fixtures/selected-error';
import DashboardPreviewFixtureSelectedLoading from '../src/template/back-office/dashboard-preview/test/fixtures/selected-loading';
import DashboardPreviewFixtureSelected from '../src/template/back-office/dashboard-preview/test/fixtures/selected';
import AuthorsFixtureDefault from '../src/template/common/authors/test/fixtures/default';
import AuthorsFixtureNoSocials from '../src/template/common/authors/test/fixtures/no-socials';
import CoorpHeaderFixtureProduction from '../src/template/common/coorp-header/test/fixtures/production';
import CoorpHeaderFixtureStaging from '../src/template/common/coorp-header/test/fixtures/staging';
import DashboardFixtureDefault from '../src/template/common/dashboard/test/fixtures/default';
import DashboardFixtureEmptyRequests from '../src/template/common/dashboard/test/fixtures/empty-requests';
import DisciplineFixtureDefault from '../src/template/common/discipline/test/fixtures/default';
import DisciplineFixtureDoubleAuthor from '../src/template/common/discipline/test/fixtures/double-author';
import DisciplineFixtureEmpty from '../src/template/common/discipline/test/fixtures/empty';
import DisciplineFixtureLoading from '../src/template/common/discipline/test/fixtures/loading';
import DisciplineFixtureNoAuthor from '../src/template/common/discipline/test/fixtures/no-author';
import DisciplineFixtureNoVideo from '../src/template/common/discipline/test/fixtures/no-video';
import DisciplineFixtureWithOnclick from '../src/template/common/discipline/test/fixtures/with-onclick';
import SearchPageFixtureDefault from '../src/template/common/search-page/test/fixtures/default';
import SearchPageFixtureNoResult from '../src/template/common/search-page/test/fixtures/no-result';

export const components = {
  Atom: {
    Button,
    CatalogSection,
    CenteredText,
    Checkbox,
    Clue,
    Cta,
    ImageUpload,
    InputCheckbox,
    InputColor,
    InputDoublestep,
    InputHtml,
    InputReadonly,
    InputSwitch,
    InputText,
    InputTextarea,
    Label,
    Life,
    Link,
    Loader,
    Notification,
    Picture,
    PictureBackground,
    PromoCode,
    Provider,
    Range,
    ResourceMiniature,
    Select,
    Slide,
    SocialLink,
    Spinner,
    Tab,
    TabContent,
    Title
  },
  Hoc: {
    Animation,
    AnimationScheduler,
    Swapper,
    Transition
  },
  Molecule: {
    Answer,
    BattleRequest,
    BrandCard,
    BrandCardCreate,
    BrandCreateForm,
    BrandDownloadBox,
    BrandFormGroup,
    BrandTabs,
    BrandUploadBox,
    Breadcrumbs,
    Card,
    DisciplineCta,
    DisciplineHeader,
    DisciplinePartners,
    DisciplineScope,
    Feedback,
    Filters,
    MenuList,
    ModuleBubble,
    ModuleCard,
    News,
    Pagination,
    PaymentForm,
    Pdf,
    ProductCard,
    ProgressBar,
    ResourcePlayer,
    ScopeContent,
    ScopeTabs,
    Search,
    SetupSection,
    SetupSections,
    SetupSlide,
    SetupSlider,
    SsmenuList,
    SubscriptionFreemium,
    SubscriptionPremium,
    Table,
    ThemeImage,
    TitledCheckbox,
    Unsubscribe,
    VideoIframe,
    VideoPlayer
  },
  MoleculeAppPlayerPopin: {
    PopinHeader
  },
  MoleculeDashboard: {
    BattleRequestList,
    CardsList,
    NewsList,
    StartBattle
  },
  MoleculeForum: {
    ForumComment,
    ForumPost,
    ForumThread
  },
  MoleculeQuestions: {
    DropDown,
    FreeText,
    Qcm,
    QcmDrag,
    QcmGraphic,
    QuestionRange,
    Template
  },
  MoleculeSlides: {
    SlidesFooter,
    SlidesPlayer
  },
  OrganismAccordion: {
    Container,
    Part,
    Toggler
  },
  Organism: {
    BrandForm,
    BrandTable,
    BrandUpload,
    CardsGrid,
    Cart,
    Discussion,
    GridList,
    Header,
    Hero,
    MoocHeader,
    Popin,
    ResourceBrowser,
    Settings,
    SetupHeader,
    Sidebar,
    Slider
  },
  OrganismMooc: {
    ImageSlider
  },
  Template: {
    Activity
  },
  TemplateAppPlayer: {
    Loading,
    Player,
    PopinCorrection,
    PopinEnd
  },
  TemplateAppPlayerPlayer: {
    PlayerHeader
  },
  TemplateBackOffice: {
    BrandCreate,
    BrandList,
    BrandUpdate,
    DashboardPreview
  },
  TemplateCommon: {
    Authors,
    CoorpHeader,
    Dashboard,
    Discipline,
    SearchPage
  }
};

export const fixtures = {
  Atom: {
    Button: {
      A: ButtonFixtureA,
      ClassName: ButtonFixtureClassName,
      Clear: ButtonFixtureClear,
      Default: ButtonFixtureDefault,
      Disabled: ButtonFixtureDisabled,
      Download: ButtonFixtureDownload,
      Link: ButtonFixtureLink,
      Sso: ButtonFixtureSso
    },
    CatalogSection: {
      List: CatalogSectionFixtureList,
      Picture: CatalogSectionFixturePicture
    },
    CenteredText: {
      Default: CenteredTextFixtureDefault
    },
    Checkbox: {
      Checked: CheckboxFixtureChecked,
      Default: CheckboxFixtureDefault,
      Disabled: CheckboxFixtureDisabled,
      Required: CheckboxFixtureRequired
    },
    Clue: {
      Default: ClueFixtureDefault,
      Link: ClueFixtureLink,
      Loading: ClueFixtureLoading
    },
    Cta: {
      LightSmall: CtaFixtureLightSmall,
      Light: CtaFixtureLight,
      PrimarySmall: CtaFixturePrimarySmall,
      Primary: CtaFixturePrimary,
      SecondarySmall: CtaFixtureSecondarySmall,
      Secondary: CtaFixtureSecondary
    },
    ImageUpload: {
      Desktop: ImageUploadFixtureDesktop,
      Email: ImageUploadFixtureEmail,
      Loading: ImageUploadFixtureLoading,
      Mobile: ImageUploadFixtureMobile,
      Modified: ImageUploadFixtureModified,
      NoPreview: ImageUploadFixtureNoPreview,
      WithoutImage: ImageUploadFixtureWithoutImage
    },
    InputCheckbox: {
      Checked: InputCheckboxFixtureChecked,
      Default: InputCheckboxFixtureDefault,
      Disabled: InputCheckboxFixtureDisabled,
      Error: InputCheckboxFixtureError,
      Modified: InputCheckboxFixtureModified,
      Required: InputCheckboxFixtureRequired
    },
    InputColor: {
      Default: InputColorFixtureDefault,
      Empty: InputColorFixtureEmpty,
      Error: InputColorFixtureError,
      Modified: InputColorFixtureModified
    },
    InputDoublestep: {
      Default: InputDoublestepFixtureDefault,
      InputConfirmDisabled: InputDoublestepFixtureInputConfirmDisabled,
      InputConfirmPending: InputDoublestepFixtureInputConfirmPending,
      InputConfirm: InputDoublestepFixtureInputConfirm
    },
    InputHtml: {
      Default: InputHtmlFixtureDefault,
      Empty: InputHtmlFixtureEmpty,
      Error: InputHtmlFixtureError
    },
    InputReadonly: {
      Default: InputReadonlyFixtureDefault
    },
    InputSwitch: {
      Checked: InputSwitchFixtureChecked,
      Disabled: InputSwitchFixtureDisabled,
      Modified: InputSwitchFixtureModified,
      NoTitle: InputSwitchFixtureNoTitle,
      Sso: InputSwitchFixtureSso,
      Unchecked: InputSwitchFixtureUnchecked
    },
    InputText: {
      Default: InputTextFixtureDefault,
      Disabled: InputTextFixtureDisabled,
      Empty: InputTextFixtureEmpty,
      Error: InputTextFixtureError,
      Modified: InputTextFixtureModified,
      Notitle: InputTextFixtureNotitle,
      Required: InputTextFixtureRequired
    },
    InputTextarea: {
      Default: InputTextareaFixtureDefault,
      Empty: InputTextareaFixtureEmpty,
      Error: InputTextareaFixtureError
    },
    Label: {
      OneChild: LabelFixtureOneChild,
      TwoChildren: LabelFixtureTwoChildren
    },
    Life: {
      AnimatedExtraLife: LifeFixtureAnimatedExtraLife,
      AnimatedFail: LifeFixtureAnimatedFail,
      Default: LifeFixtureDefault,
      Fail: LifeFixtureFail,
      Null: LifeFixtureNull,
      Small: LifeFixtureSmall
    },
    Link: {
      Download: LinkFixtureDownload,
      Href: LinkFixtureHref,
      StyledLink: LinkFixtureStyledLink
    },
    Loader: {
      Default: LoaderFixtureDefault
    },
    Notification: {
      Default: NotificationFixtureDefault,
      Error: NotificationFixtureError,
      Warning: NotificationFixtureWarning
    },
    Picture: {
      Default: PictureFixtureDefault,
      Empty: PictureFixtureEmpty,
      SimpleSrc: PictureFixtureSimpleSrc
    },
    PictureBackground: {
      Contain: PictureBackgroundFixtureContain,
      Cover: PictureBackgroundFixtureCover,
      Default: PictureBackgroundFixtureDefault,
      Desktop: PictureBackgroundFixtureDesktop
    },
    PromoCode: {
      Default: PromoCodeFixtureDefault,
      Error: PromoCodeFixtureError,
      Success: PromoCodeFixtureSuccess
    },
    Provider: {
      Default: ProviderFixtureDefault
    },
    Range: {
      Default: RangeFixtureDefault,
      Multi: RangeFixtureMulti
    },
    ResourceMiniature: {
      Pdf: ResourceMiniatureFixturePdf,
      SelectedPdf: ResourceMiniatureFixtureSelectedPdf,
      SelectedVideo: ResourceMiniatureFixtureSelectedVideo,
      Video: ResourceMiniatureFixtureVideo
    },
    Select: {
      Default: SelectFixtureDefault,
      Disabled: SelectFixtureDisabled,
      Filter: SelectFixtureFilter,
      Invalid: SelectFixtureInvalid,
      Modified: SelectFixtureModified,
      Mooc: SelectFixtureMooc,
      MultipleSelected: SelectFixtureMultipleSelected,
      Multiple: SelectFixtureMultiple,
      Question: SelectFixtureQuestion,
      RequiredWithTitle: SelectFixtureRequiredWithTitle,
      Required: SelectFixtureRequired,
      Sort: SelectFixtureSort,
      Template: SelectFixtureTemplate,
      ThematiquesLong: SelectFixtureThematiquesLong,
      Thematiques: SelectFixtureThematiques
    },
    Slide: {
      Default: SlideFixtureDefault,
      Left: SlideFixtureLeft,
      Light: SlideFixtureLight,
      NoCta: SlideFixtureNoCta,
      Right: SlideFixtureRight
    },
    SocialLink: {
      Facebook: SocialLinkFixtureFacebook,
      Twitter: SocialLinkFixtureTwitter
    },
    Spinner: {
      Default: SpinnerFixtureDefault
    },
    Tab: {
      Default: TabFixtureDefault
    },
    TabContent: {
      Default: TabContentFixtureDefault,
      HideContentBackground: TabContentFixtureHideContentBackground
    },
    Title: {
      Fixture: TitleFixtureFixture
    }
  },
  Hoc: {
    Animation: {
      Start: AnimationFixtureStart,
      Stop: AnimationFixtureStop
    },
    AnimationScheduler: {
      Parallel: AnimationSchedulerFixtureParallel,
      Series: AnimationSchedulerFixtureSeries
    },
    Swapper: {
      Default: SwapperFixtureDefault
    },
    Transition: {
      FlipSquare: TransitionFixtureFlipSquare
    }
  },
  Molecule: {
    Answer: {
      Default: AnswerFixtureDefault,
      DropDown: AnswerFixtureDropDown,
      QcmDrag: AnswerFixtureQcmDrag,
      QcmGraphic: AnswerFixtureQcmGraphic,
      QcmShort: AnswerFixtureQcmShort,
      Qcm: AnswerFixtureQcm,
      Range: AnswerFixtureRange,
      Template: AnswerFixtureTemplate
    },
    BattleRequest: {
      Default: BattleRequestFixtureDefault
    },
    BrandCard: {
      Default: BrandCardFixtureDefault,
      WithDescription: BrandCardFixtureWithDescription
    },
    BrandCardCreate: {
      Default: BrandCardCreateFixtureDefault
    },
    BrandCreateForm: {
      Default: BrandCreateFormFixtureDefault,
      Error: BrandCreateFormFixtureError,
      Loading: BrandCreateFormFixtureLoading,
      Modified: BrandCreateFormFixtureModified
    },
    BrandDownloadBox: {
      Default: BrandDownloadBoxFixtureDefault,
      Sso: BrandDownloadBoxFixtureSso
    },
    BrandFormGroup: {
      Dashboard: BrandFormGroupFixtureDashboard,
      Default: BrandFormGroupFixtureDefault,
      Doublefield: BrandFormGroupFixtureDoublefield,
      Images: BrandFormGroupFixtureImages,
      Lookandfeel: BrandFormGroupFixtureLookandfeel,
      Roles: BrandFormGroupFixtureRoles,
      Slider: BrandFormGroupFixtureSlider,
      Sso: BrandFormGroupFixtureSso
    },
    BrandTabs: {
      Default: BrandTabsFixtureDefault,
      Lookandfeel: BrandTabsFixtureLookandfeel,
      Sso: BrandTabsFixtureSso,
      Users: BrandTabsFixtureUsers
    },
    BrandUploadBox: {
      Default: BrandUploadBoxFixtureDefault,
      Loading: BrandUploadBoxFixtureLoading,
      Sso: BrandUploadBoxFixtureSso
    },
    Breadcrumbs: {
      Default: BreadcrumbsFixtureDefault
    },
    Card: {
      AdaptivAndDisabled: CardFixtureAdaptivAndDisabled,
      Adaptiv: CardFixtureAdaptiv,
      Catalogue: CardFixtureCatalogue,
      Default: CardFixtureDefault,
      Disabled: CardFixtureDisabled,
      Empty: CardFixtureEmpty,
      FreerunAndDisabled: CardFixtureFreerunAndDisabled,
      Freerun: CardFixtureFreerun
    },
    DisciplineCta: {
      Default: DisciplineCtaFixtureDefault,
      NoStart: DisciplineCtaFixtureNoStart
    },
    DisciplineHeader: {
      Default: DisciplineHeaderFixtureDefault,
      NoVideoNoImage: DisciplineHeaderFixtureNoVideoNoImage,
      NoVideo: DisciplineHeaderFixtureNoVideo,
      PortaitRatio: DisciplineHeaderFixturePortaitRatio
    },
    DisciplinePartners: {
      Default: DisciplinePartnersFixtureDefault,
      DoubleAuthors: DisciplinePartnersFixtureDoubleAuthors,
      MoreInfo: DisciplinePartnersFixtureMoreInfo,
      NoAuthor: DisciplinePartnersFixtureNoAuthor,
      Nosite: DisciplinePartnersFixtureNosite
    },
    DisciplineScope: {
      Default: DisciplineScopeFixtureDefault,
      Empty: DisciplineScopeFixtureEmpty,
      Medias: DisciplineScopeFixtureMedias,
      WithOnclick: DisciplineScopeFixtureWithOnclick
    },
    Feedback: {
      Default: FeedbackFixtureDefault,
      FailExitNode: FeedbackFixtureFailExitNode,
      FailureWithTitleAndDescriptionAndVideo: FeedbackFixtureFailureWithTitleAndDescriptionAndVideo,
      SuccessExitNode: FeedbackFixtureSuccessExitNode,
      SuccessWithTitleAndDescriptionAndImage: FeedbackFixtureSuccessWithTitleAndDescriptionAndImage,
      SuccessWithTitleAndDescriptionAndPdf: FeedbackFixtureSuccessWithTitleAndDescriptionAndPdf,
      SuccessWithTitleAndDescription: FeedbackFixtureSuccessWithTitleAndDescription
    },
    Filters: {
      Default: FiltersFixtureDefault,
      FiltersList: FiltersFixtureFiltersList,
      One: FiltersFixtureOne,
      OnlyTimer: FiltersFixtureOnlyTimer,
      OpenSorts: FiltersFixtureOpenSorts,
      Opened: FiltersFixtureOpened,
      Three: FiltersFixtureThree,
      TwoOpened: FiltersFixtureTwoOpened,
      Two: FiltersFixtureTwo,
      Zero: FiltersFixtureZero
    },
    MenuList: {
      Default: MenuListFixtureDefault
    },
    ModuleBubble: {
      Default: ModuleBubbleFixtureDefault,
      Disabled: ModuleBubbleFixtureDisabled
    },
    ModuleCard: {
      Active: ModuleCardFixtureActive,
      Restarted: ModuleCardFixtureRestarted
    },
    News: {
      Default: NewsFixtureDefault,
      LongDescription: NewsFixtureLongDescription,
      LongTitle: NewsFixtureLongTitle,
      SmallDesciption: NewsFixtureSmallDesciption,
      SmallTitle: NewsFixtureSmallTitle
    },
    Pagination: {
      Default: PaginationFixtureDefault,
      Disabled: PaginationFixtureDisabled
    },
    PaymentForm: {
      Default: PaymentFormFixtureDefault,
      Error: PaymentFormFixtureError,
      Warning: PaymentFormFixtureWarning
    },
    Pdf: {
      Default: PdfFixtureDefault
    },
    ProductCard: {
      Default: ProductCardFixtureDefault
    },
    ProgressBar: {
      Default: ProgressBarFixtureDefault,
      Max: ProgressBarFixtureMax
    },
    ResourcePlayer: {
      Image: ResourcePlayerFixtureImage,
      Pdf: ResourcePlayerFixturePdf,
      Vimeo: ResourcePlayerFixtureVimeo
    },
    ScopeContent: {
      Default: ScopeContentFixtureDefault,
      Empty: ScopeContentFixtureEmpty,
      Medias: ScopeContentFixtureMedias,
      WithOnclick: ScopeContentFixtureWithOnclick
    },
    ScopeTabs: {
      Default: ScopeTabsFixtureDefault,
      Empty: ScopeTabsFixtureEmpty
    },
    Search: {
      Default: SearchFixtureDefault
    },
    SetupSection: {
      Default: SetupSectionFixtureDefault,
      First: SetupSectionFixtureFirst,
      Other: SetupSectionFixtureOther
    },
    SetupSections: {
      Default: SetupSectionsFixtureDefault,
      Loading: SetupSectionsFixtureLoading
    },
    SetupSlide: {
      Default: SetupSlideFixtureDefault
    },
    SetupSlider: {
      Default: SetupSliderFixtureDefault
    },
    SsmenuList: {
      Coorpacademy: SsmenuListFixtureCoorpacademy,
      Empty: SsmenuListFixtureEmpty,
      Formations: SsmenuListFixtureFormations,
      Solutions: SsmenuListFixtureSolutions
    },
    SubscriptionFreemium: {
      Default: SubscriptionFreemiumFixtureDefault
    },
    SubscriptionPremium: {
      Default: SubscriptionPremiumFixtureDefault,
      PromoCode: SubscriptionPremiumFixturePromoCode
    },
    Table: {
      Default: TableFixtureDefault,
      NoOptions: TableFixtureNoOptions
    },
    ThemeImage: {
      Bg: ThemeImageFixtureBg
    },
    TitledCheckbox: {
      Checked: TitledCheckboxFixtureChecked,
      NoBg: TitledCheckboxFixtureNoBg,
      NotChecked: TitledCheckboxFixtureNotChecked
    },
    Unsubscribe: {
      Default: UnsubscribeFixtureDefault,
      Subscribed: UnsubscribeFixtureSubscribed
    },
    VideoIframe: {
      Empty: VideoIframeFixtureEmpty,
      ImagePlaceholder: VideoIframeFixtureImagePlaceholder,
      Youtube: VideoIframeFixtureYoutube
    },
    VideoPlayer: {
      Jwplayer: VideoPlayerFixtureJwplayer,
      Kontiki: VideoPlayerFixtureKontiki,
      Vimeo: VideoPlayerFixtureVimeo,
      Youtube: VideoPlayerFixtureYoutube
    }
  },
  MoleculeAppPlayerPopin: {
    PopinHeader: {
      ExhaustedExtralife: PopinHeaderFixtureExhaustedExtralife,
      ExtralifeAccepted: PopinHeaderFixtureExtralifeAccepted,
      Extralife: PopinHeaderFixtureExtralife,
      FailMultipleAnswers: PopinHeaderFixtureFailMultipleAnswers,
      Fail: PopinHeaderFixtureFail,
      Loading: PopinHeaderFixtureLoading,
      NextChapter: PopinHeaderFixtureNextChapter,
      StarsRank: PopinHeaderFixtureStarsRank,
      Success: PopinHeaderFixtureSuccess
    }
  },
  MoleculeDashboard: {
    BattleRequestList: {
      Default: BattleRequestListFixtureDefault,
      Empty: BattleRequestListFixtureEmpty
    },
    CardsList: {
      Default: CardsListFixtureDefault,
      ManyEmpty: CardsListFixtureManyEmpty,
      Many: CardsListFixtureMany
    },
    NewsList: {
      Default: NewsListFixtureDefault,
      Loading: NewsListFixtureLoading,
      More: NewsListFixtureMore
    },
    StartBattle: {
      Default: StartBattleFixtureDefault,
      Href: StartBattleFixtureHref
    }
  },
  MoleculeForum: {
    ForumComment: {
      Default: ForumCommentFixtureDefault,
      PostDisabled: ForumCommentFixturePostDisabled,
      TextareaDisabled: ForumCommentFixtureTextareaDisabled
    },
    ForumPost: {
      Default: ForumPostFixtureDefault,
      Deleted: ForumPostFixtureDeleted,
      Editable: ForumPostFixtureEditable,
      NotEditableNotRejectable: ForumPostFixtureNotEditableNotRejectable,
      PostsLocked: ForumPostFixturePostsLocked,
      Rejectable: ForumPostFixtureRejectable,
      Rejected: ForumPostFixtureRejected,
      ShowAnswerBox: ForumPostFixtureShowAnswerBox,
      ShowEditBox: ForumPostFixtureShowEditBox,
      TextareasLocked: ForumPostFixtureTextareasLocked
    },
    ForumThread: {
      DeepAnswers: ForumThreadFixtureDeepAnswers,
      Default: ForumThreadFixtureDefault,
      WithAnswers: ForumThreadFixtureWithAnswers
    }
  },
  MoleculeQuestions: {
    DropDown: {
      Default: DropDownFixtureDefault,
      NoSelected: DropDownFixtureNoSelected
    },
    FreeText: {
      Default: FreeTextFixtureDefault,
      WithDefaultValue: FreeTextFixtureWithDefaultValue
    },
    Qcm: {
      Default: QcmFixtureDefault,
      NoSelected: QcmFixtureNoSelected,
      ShortAnswers: QcmFixtureShortAnswers
    },
    QcmDrag: {
      Default: QcmDragFixtureDefault,
      NoSelected: QcmDragFixtureNoSelected
    },
    QcmGraphic: {
      Default: QcmGraphicFixtureDefault,
      NoSelected: QcmGraphicFixtureNoSelected
    },
    QuestionRange: {
      Default: QuestionRangeFixtureDefault
    },
    Template: {
      Default: TemplateFixtureDefault,
      Multiple: TemplateFixtureMultiple
    }
  },
  MoleculeSlides: {
    SlidesFooter: {
      ClueSelected: SlidesFooterFixtureClueSelected,
      Default: SlidesFooterFixtureDefault,
      Disabled: SlidesFooterFixtureDisabled,
      Highlighted: SlidesFooterFixtureHighlighted,
      MediaSelected: SlidesFooterFixtureMediaSelected,
      Notify: SlidesFooterFixtureNotify,
      OnlyClue: SlidesFooterFixtureOnlyClue,
      WithContext: SlidesFooterFixtureWithContext
    },
    SlidesPlayer: {
      Clue: SlidesPlayerFixtureClue,
      ContextWithImage: SlidesPlayerFixtureContextWithImage,
      ContextWithPdf: SlidesPlayerFixtureContextWithPdf,
      ContextWithVideo: SlidesPlayerFixtureContextWithVideo,
      Context: SlidesPlayerFixtureContext,
      Default: SlidesPlayerFixtureDefault,
      DropDown: SlidesPlayerFixtureDropDown,
      Error: SlidesPlayerFixtureError,
      FreeText: SlidesPlayerFixtureFreeText,
      Loading: SlidesPlayerFixtureLoading,
      Media: SlidesPlayerFixtureMedia,
      NoQuestion: SlidesPlayerFixtureNoQuestion,
      NoStep: SlidesPlayerFixtureNoStep,
      NoTotal: SlidesPlayerFixtureNoTotal,
      OnlyClue: SlidesPlayerFixtureOnlyClue,
      QcmDrag: SlidesPlayerFixtureQcmDrag,
      QcmGraphic: SlidesPlayerFixtureQcmGraphic,
      QcmShort: SlidesPlayerFixtureQcmShort,
      QcmTemplate: SlidesPlayerFixtureQcmTemplate,
      Qcm: SlidesPlayerFixtureQcm,
      Range: SlidesPlayerFixtureRange,
      Template: SlidesPlayerFixtureTemplate,
      WithMinHeight: SlidesPlayerFixtureWithMinHeight
    }
  },
  OrganismAccordion: {
    Container: {
      Default: ContainerFixtureDefault
    },
    Part: {
      Default: PartFixtureDefault,
      Open: PartFixtureOpen
    },
    Toggler: {
      AllAreOpenable: TogglerFixtureAllAreOpenable,
      OnlyOne: TogglerFixtureOnlyOne
    }
  },
  Organism: {
    BrandForm: {
      Dashboard: BrandFormFixtureDashboard,
      Default: BrandFormFixtureDefault,
      GeneralSettings: BrandFormFixtureGeneralSettings,
      Lookandfeel: BrandFormFixtureLookandfeel,
      Sso: BrandFormFixtureSso,
      UserEdit: BrandFormFixtureUserEdit
    },
    BrandTable: {
      Default: BrandTableFixtureDefault,
      Empty: BrandTableFixtureEmpty,
      Loading: BrandTableFixtureLoading
    },
    BrandUpload: {
      Default: BrandUploadFixtureDefault,
      Loading: BrandUploadFixtureLoading
    },
    CardsGrid: {
      Catalog: CardsGridFixtureCatalog,
      Empty: CardsGridFixtureEmpty,
      Loading: CardsGridFixtureLoading,
      Many: CardsGridFixtureMany
    },
    Cart: {
      Default: CartFixtureDefault
    },
    Discussion: {
      Default: DiscussionFixtureDefault,
      LoadingMore: DiscussionFixtureLoadingMore,
      Moderation: DiscussionFixtureModeration,
      NewDiscussion: DiscussionFixtureNewDiscussion
    },
    GridList: {
      Default: GridListFixtureDefault
    },
    Header: {
      Default: HeaderFixtureDefault
    },
    Hero: {
      Default: HeroFixtureDefault,
      NoTouch: HeroFixtureNoTouch,
      Touch: HeroFixtureTouch
    },
    MoocHeader: {
      Default: MoocHeaderFixtureDefault,
      Logged: MoocHeaderFixtureLogged,
      SliderMultiple: MoocHeaderFixtureSliderMultiple,
      Slider: MoocHeaderFixtureSlider
    },
    Popin: {
      Default: PopinFixtureDefault
    },
    ResourceBrowser: {
      Jwplayer: ResourceBrowserFixtureJwplayer,
      OneVideo: ResourceBrowserFixtureOneVideo,
      PdfSelected: ResourceBrowserFixturePdfSelected,
      VideoSelected: ResourceBrowserFixtureVideoSelected
    },
    Settings: {
      Default: SettingsFixtureDefault,
      Freemium: SettingsFixtureFreemium,
      Premium: SettingsFixturePremium,
      PromoCode: SettingsFixturePromoCode
    },
    SetupHeader: {
      Default: SetupHeaderFixtureDefault
    },
    Sidebar: {
      Analytics: SidebarFixtureAnalytics,
      Custom: SidebarFixtureCustom,
      Dashboards: SidebarFixtureDashboards,
      Default: SidebarFixtureDefault
    },
    Slider: {
      Default: SliderFixtureDefault,
      MultipleSlides: SliderFixtureMultipleSlides
    }
  },
  OrganismMooc: {
    ImageSlider: {
      Default: ImageSliderFixtureDefault,
      MultipleSlides: ImageSliderFixtureMultipleSlides
    }
  },
  Template: {
    Activity: {
      Default: ActivityFixtureDefault,
      Empty: ActivityFixtureEmpty,
      NoEngines: ActivityFixtureNoEngines
    }
  },
  TemplateAppPlayer: {
    Loading: {
      Default: LoadingFixtureDefault
    },
    Player: {
      Clue: PlayerFixtureClue,
      ContextWithImage: PlayerFixtureContextWithImage,
      ContextWithPdf: PlayerFixtureContextWithPdf,
      ContextWithVideo: PlayerFixtureContextWithVideo,
      Context: PlayerFixtureContext,
      DropDown: PlayerFixtureDropDown,
      Empty: PlayerFixtureEmpty,
      Error: PlayerFixtureError,
      FreeText: PlayerFixtureFreeText,
      Media: PlayerFixtureMedia,
      OnlyClue: PlayerFixtureOnlyClue,
      QcmDrag: PlayerFixtureQcmDrag,
      QcmGraphic: PlayerFixtureQcmGraphic,
      QcmShort: PlayerFixtureQcmShort,
      Qcm: PlayerFixtureQcm,
      Range: PlayerFixtureRange
    },
    PopinCorrection: {
      CorrectClosed: PopinCorrectionFixtureCorrectClosed,
      CorrectNextChapter: PopinCorrectionFixtureCorrectNextChapter,
      CorrectOpenKlf: PopinCorrectionFixtureCorrectOpenKlf,
      CorrectOpenResourcesWithPdf: PopinCorrectionFixtureCorrectOpenResourcesWithPdf,
      CorrectOpenResourcesWithVideo: PopinCorrectionFixtureCorrectOpenResourcesWithVideo,
      CorrectOpenTips: PopinCorrectionFixtureCorrectOpenTips,
      CorrectWithoutResources: PopinCorrectionFixtureCorrectWithoutResources,
      FailClosed: PopinCorrectionFixtureFailClosed,
      FailJokerOpenKlf: PopinCorrectionFixtureFailJokerOpenKlf,
      FailMultipleAnswers: PopinCorrectionFixtureFailMultipleAnswers,
      FailOpenKlf: PopinCorrectionFixtureFailOpenKlf,
      FailOpenResourcesWithPdf: PopinCorrectionFixtureFailOpenResourcesWithPdf,
      FailOpenResourcesWithVideo: PopinCorrectionFixtureFailOpenResourcesWithVideo,
      FailOpenTips: PopinCorrectionFixtureFailOpenTips,
      Loading: PopinCorrectionFixtureLoading
    },
    PopinEnd: {
      CommentIsLoading: PopinEndFixtureCommentIsLoading,
      CommentSent: PopinEndFixtureCommentSent,
      Comment: PopinEndFixtureComment,
      Correct: PopinEndFixtureCorrect,
      Default: PopinEndFixtureDefault,
      Fail: PopinEndFixtureFail,
      Loading: PopinEndFixtureLoading,
      NegativeRank: PopinEndFixtureNegativeRank,
      NextCourse: PopinEndFixtureNextCourse,
      NextLevelAdaptiveImg: PopinEndFixtureNextLevelAdaptiveImg,
      SimpleAction: PopinEndFixtureSimpleAction,
      Subscribe: PopinEndFixtureSubscribe,
      WithLoadingRecommendations: PopinEndFixtureWithLoadingRecommendations,
      WithRecommendations: PopinEndFixtureWithRecommendations
    }
  },
  TemplateAppPlayerPlayer: {
    PlayerHeader: {
      Learner: PlayerHeaderFixtureLearner,
      Microlearning: PlayerHeaderFixtureMicrolearning,
      NoLives: PlayerHeaderFixtureNoLives
    }
  },
  TemplateBackOffice: {
    BrandCreate: {
      Default: BrandCreateFixtureDefault,
      Error: BrandCreateFixtureError,
      Loading: BrandCreateFixtureLoading,
      Modified: BrandCreateFixtureModified
    },
    BrandList: {
      Default: BrandListFixtureDefault,
      Loading: BrandListFixtureLoading
    },
    BrandUpdate: {
      Dashboard: BrandUpdateFixtureDashboard,
      Default: BrandUpdateFixtureDefault,
      GeneralSettingsSuccess: BrandUpdateFixtureGeneralSettingsSuccess,
      GeneralSettings: BrandUpdateFixtureGeneralSettings,
      LookandfeelError: BrandUpdateFixtureLookandfeelError,
      LookandfeelModified: BrandUpdateFixtureLookandfeelModified,
      LookandfeelPending: BrandUpdateFixtureLookandfeelPending,
      LookandfeelSuccess: BrandUpdateFixtureLookandfeelSuccess,
      Lookandfeel: BrandUpdateFixtureLookandfeel,
      SsoActivate: BrandUpdateFixtureSsoActivate,
      Sso: BrandUpdateFixtureSso,
      UsersEdit: BrandUpdateFixtureUsersEdit,
      UsersImportLoading: BrandUpdateFixtureUsersImportLoading,
      UsersImportSuccessful: BrandUpdateFixtureUsersImportSuccessful,
      UsersImport: BrandUpdateFixtureUsersImport,
      UsersList: BrandUpdateFixtureUsersList,
      Users: BrandUpdateFixtureUsers
    },
    DashboardPreview: {
      Default: DashboardPreviewFixtureDefault,
      Error: DashboardPreviewFixtureError,
      Loading: DashboardPreviewFixtureLoading,
      SelectedError: DashboardPreviewFixtureSelectedError,
      SelectedLoading: DashboardPreviewFixtureSelectedLoading,
      Selected: DashboardPreviewFixtureSelected
    }
  },
  TemplateCommon: {
    Authors: {
      Default: AuthorsFixtureDefault,
      NoSocials: AuthorsFixtureNoSocials
    },
    CoorpHeader: {
      Production: CoorpHeaderFixtureProduction,
      Staging: CoorpHeaderFixtureStaging
    },
    Dashboard: {
      Default: DashboardFixtureDefault,
      EmptyRequests: DashboardFixtureEmptyRequests
    },
    Discipline: {
      Default: DisciplineFixtureDefault,
      DoubleAuthor: DisciplineFixtureDoubleAuthor,
      Empty: DisciplineFixtureEmpty,
      Loading: DisciplineFixtureLoading,
      NoAuthor: DisciplineFixtureNoAuthor,
      NoVideo: DisciplineFixtureNoVideo,
      WithOnclick: DisciplineFixtureWithOnclick
    },
    SearchPage: {
      Default: SearchPageFixtureDefault,
      NoResult: SearchPageFixtureNoResult
    }
  }
};
