/* eslint-disable max-len */

import Button from '../src/atom/button';
import CatalogSection from '../src/atom/catalog-section';
import CenteredText from '../src/atom/centered-text';
import Checkbox from '../src/atom/checkbox';
import Clue from '../src/atom/clue';
import Cta from '../src/atom/cta';
import ImageUpload from '../src/atom/image-upload';
import InputCheckbox from '../src/atom/input-checkbox';
import InputColor from '../src/atom/input-color';
import InputDoublestep from '../src/atom/input-doublestep';
import InputReadonly from '../src/atom/input-readonly';
import InputSwitch from '../src/atom/input-switch';
import InputText from '../src/atom/input-text';
import InputTextarea from '../src/atom/input-textarea';
import Label from '../src/atom/label';
import Life from '../src/atom/life';
import Link from '../src/atom/link';
import Loader from '../src/atom/loader';
import Notification from '../src/atom/notification';
import PictureBackground from '../src/atom/picture-background';
import Picture from '../src/atom/picture';
import PromoCode from '../src/atom/promo-code';
import Provider from '../src/atom/provider';
import Range from '../src/atom/range';
import ResourceMiniature from '../src/atom/resource-miniature';
import Select from '../src/atom/select';
import Slide from '../src/atom/slide';
import SocialLink from '../src/atom/social-link';
import Spinner from '../src/atom/spinner';
import TabContent from '../src/atom/tab-content';
import Tab from '../src/atom/tab';
import Title from '../src/atom/title';
import Answer from '../src/molecule/answer';
import BattleRequest from '../src/molecule/battle-request';
import BrandCardCreate from '../src/molecule/brand-card-create';
import BrandCard from '../src/molecule/brand-card';
import BrandCreateForm from '../src/molecule/brand-create-form';
import BrandDownloadBox from '../src/molecule/brand-download-box';
import BrandFormGroup from '../src/molecule/brand-form-group';
import BrandTabs from '../src/molecule/brand-tabs';
import BrandUploadBox from '../src/molecule/brand-upload-box';
import Breadcrumbs from '../src/molecule/breadcrumbs';
import Card from '../src/molecule/card';
import DisciplineCta from '../src/molecule/discipline-cta';
import DisciplineHeader from '../src/molecule/discipline-header';
import DisciplinePartners from '../src/molecule/discipline-partners';
import DisciplineScope from '../src/molecule/discipline-scope';
import Filters from '../src/molecule/filters';
import MenuList from '../src/molecule/menu-list';
import ModuleBubble from '../src/molecule/module-bubble';
import ModuleCard from '../src/molecule/module-card';
import News from '../src/molecule/news';
import Pagination from '../src/molecule/pagination';
import PaymentForm from '../src/molecule/payment-form';
import Pdf from '../src/molecule/pdf';
import ProductCard from '../src/molecule/product-card';
import ProgressBar from '../src/molecule/progress-bar';
import ScopeContent from '../src/molecule/scope-content';
import ScopeTabs from '../src/molecule/scope-tabs';
import Search from '../src/molecule/search';
import SetupSection from '../src/molecule/setup-section';
import SetupSections from '../src/molecule/setup-sections';
import SetupSlide from '../src/molecule/setup-slide';
import SetupSlider from '../src/molecule/setup-slider';
import SsmenuList from '../src/molecule/ssmenu-list';
import SubscriptionFreemium from '../src/molecule/subscription-freemium';
import SubscriptionPremium from '../src/molecule/subscription-premium';
import Table from '../src/molecule/table';
import ThemeImage from '../src/molecule/theme-image';
import TitledCheckbox from '../src/molecule/titled-checkbox';
import Unsubscribe from '../src/molecule/unsubscribe';
import VideoIframe from '../src/molecule/video-iframe';
import VideoPlayer from '../src/molecule/video-player';
import PopinHeader from '../src/molecule/app-player/popin/popin-header';
import BattleRequestList from '../src/molecule/dashboard/battle-request-list';
import CardsList from '../src/molecule/dashboard/cards-list';
import NewsList from '../src/molecule/dashboard/news-list';
import StartBattle from '../src/molecule/dashboard/start-battle';
import ForumComment from '../src/molecule/forum/forum-comment';
import ForumPost from '../src/molecule/forum/forum-post';
import ForumThread from '../src/molecule/forum/forum-thread';
import DropDown from '../src/molecule/questions/drop-down';
import FreeText from '../src/molecule/questions/free-text';
import QcmDrag from '../src/molecule/questions/qcm-drag';
import QcmGraphic from '../src/molecule/questions/qcm-graphic';
import Qcm from '../src/molecule/questions/qcm';
import QuestionRange from '../src/molecule/questions/question-range';
import Template from '../src/molecule/questions/template';
import SlidesFooter from '../src/molecule/slides/slides-footer';
import SlidesHeader from '../src/molecule/slides/slides-header';
import SlidesPlayer from '../src/molecule/slides/slides-player';
import Container from '../src/organism/accordion/container';
import Part from '../src/organism/accordion/part';
import Toggler from '../src/organism/accordion/toggler';
import BrandForm from '../src/organism/brand-form';
import BrandTable from '../src/organism/brand-table';
import BrandUpload from '../src/organism/brand-upload';
import CardsGrid from '../src/organism/cards-grid';
import Cart from '../src/organism/cart';
import Discussion from '../src/organism/discussion';
import GridList from '../src/organism/grid-list';
import Header from '../src/organism/header';
import Hero from '../src/organism/hero';
import MoocHeader from '../src/organism/mooc-header';
import Popin from '../src/organism/popin';
import ResourceBrowser from '../src/organism/resource-browser';
import Settings from '../src/organism/settings';
import SetupHeader from '../src/organism/setup-header';
import Sidebar from '../src/organism/sidebar';
import Slider from '../src/organism/slider';
import ImageSlider from '../src/organism/mooc/image-slider';
import Loading from '../src/template/app-player/loading';
import Player from '../src/template/app-player/player';
import PopinCorrection from '../src/template/app-player/popin-correction';
import PopinEnd from '../src/template/app-player/popin-end';
import BrandCreate from '../src/template/back-office/brand-create';
import BrandList from '../src/template/back-office/brand-list';
import BrandUpdate from '../src/template/back-office/brand-update';
import Authors from '../src/template/common/authors';
import CoorpHeader from '../src/template/common/coorp-header';
import Dashboard from '../src/template/common/dashboard';
import Discipline from '../src/template/common/discipline';
import SearchPage from '../src/template/common/search-page';
import ButtonFixtureA from '../src/atom/button/test/fixtures/a';
import ButtonFixtureBlue from '../src/atom/button/test/fixtures/blue';
import ButtonFixtureCentered from '../src/atom/button/test/fixtures/centered';
import ButtonFixtureClassName from '../src/atom/button/test/fixtures/class-name';
import ButtonFixtureClear from '../src/atom/button/test/fixtures/clear';
import ButtonFixtureDark from '../src/atom/button/test/fixtures/dark';
import ButtonFixtureDefault from '../src/atom/button/test/fixtures/default';
import ButtonFixtureDisabled from '../src/atom/button/test/fixtures/disabled';
import ButtonFixtureLight from '../src/atom/button/test/fixtures/light';
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
import InputTextFixtureRequired from '../src/atom/input-text/test/fixtures/required';
import InputTextareaFixtureDefault from '../src/atom/input-textarea/test/fixtures/default';
import InputTextareaFixtureEmpty from '../src/atom/input-textarea/test/fixtures/empty';
import InputTextareaFixtureError from '../src/atom/input-textarea/test/fixtures/error';
import LabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import LabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import LifeFixtureAnimatedFail from '../src/atom/life/test/fixtures/animated-fail';
import LifeFixtureDefault from '../src/atom/life/test/fixtures/default';
import LifeFixtureFail from '../src/atom/life/test/fixtures/fail';
import LifeFixtureSmall from '../src/atom/life/test/fixtures/small';
import LinkFixtureHref from '../src/atom/link/test/fixtures/href';
import LinkFixtureStyledLink from '../src/atom/link/test/fixtures/styled-link';
import LoaderFixtureDefault from '../src/atom/loader/test/fixtures/default';
import NotificationFixtureDefault from '../src/atom/notification/test/fixtures/default';
import NotificationFixtureError from '../src/atom/notification/test/fixtures/error';
import NotificationFixtureWarning from '../src/atom/notification/test/fixtures/warning';
import PictureBackgroundFixtureContain from '../src/atom/picture-background/test/fixtures/contain';
import PictureBackgroundFixtureCover from '../src/atom/picture-background/test/fixtures/cover';
import PictureBackgroundFixtureDefault from '../src/atom/picture-background/test/fixtures/default';
import PictureBackgroundFixtureDesktop from '../src/atom/picture-background/test/fixtures/desktop';
import PictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import PictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import PictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
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
import SlideFixtureRight from '../src/atom/slide/test/fixtures/right';
import SocialLinkFixtureFacebook from '../src/atom/social-link/test/fixtures/facebook';
import SocialLinkFixtureTwitter from '../src/atom/social-link/test/fixtures/twitter';
import SpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import TabContentFixtureDefault from '../src/atom/tab-content/test/fixtures/default';
import TabContentFixtureHideContentBackground from '../src/atom/tab-content/test/fixtures/hide-content-background';
import TabFixtureDefault from '../src/atom/tab/test/fixtures/default';
import TitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
import AnswerFixtureDefault from '../src/molecule/answer/test/fixtures/default';
import AnswerFixtureDropDown from '../src/molecule/answer/test/fixtures/drop-down';
import AnswerFixtureQcmDrag from '../src/molecule/answer/test/fixtures/qcm-drag';
import AnswerFixtureQcmGraphic from '../src/molecule/answer/test/fixtures/qcm-graphic';
import AnswerFixtureQcmShort from '../src/molecule/answer/test/fixtures/qcm-short';
import AnswerFixtureQcm from '../src/molecule/answer/test/fixtures/qcm';
import AnswerFixtureRange from '../src/molecule/answer/test/fixtures/range';
import AnswerFixtureTemplate from '../src/molecule/answer/test/fixtures/template';
import BattleRequestFixtureDefault from '../src/molecule/battle-request/test/fixtures/default';
import BrandCardCreateFixtureDefault from '../src/molecule/brand-card-create/test/fixtures/default';
import BrandCardFixtureDefault from '../src/molecule/brand-card/test/fixtures/default';
import BrandCreateFormFixtureDefault from '../src/molecule/brand-create-form/test/fixtures/default';
import BrandCreateFormFixtureError from '../src/molecule/brand-create-form/test/fixtures/error';
import BrandCreateFormFixtureLoading from '../src/molecule/brand-create-form/test/fixtures/loading';
import BrandCreateFormFixtureModified from '../src/molecule/brand-create-form/test/fixtures/modified';
import BrandDownloadBoxFixtureDefault from '../src/molecule/brand-download-box/test/fixtures/default';
import BrandDownloadBoxFixtureSso from '../src/molecule/brand-download-box/test/fixtures/sso';
import BrandFormGroupFixtureDashboard from '../src/molecule/brand-form-group/test/fixtures/dashboard';
import BrandFormGroupFixtureDefault from '../src/molecule/brand-form-group/test/fixtures/default';
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
import DisciplineCtaFixtureDefault from '../src/molecule/discipline-cta/test/fixtures/default';
import DisciplineCtaFixtureNoStart from '../src/molecule/discipline-cta/test/fixtures/no-start';
import DisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import DisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import DisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import DisciplinePartnersFixtureDefault from '../src/molecule/discipline-partners/test/fixtures/default';
import DisciplinePartnersFixtureDoubleAuthors from '../src/molecule/discipline-partners/test/fixtures/double-authors';
import DisciplinePartnersFixtureMoreInfo from '../src/molecule/discipline-partners/test/fixtures/more-info';
import DisciplinePartnersFixtureNoAuthor from '../src/molecule/discipline-partners/test/fixtures/no-author';
import DisciplinePartnersFixtureNosite from '../src/molecule/discipline-partners/test/fixtures/nosite';
import DisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import DisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import DisciplineScopeFixtureMedias from '../src/molecule/discipline-scope/test/fixtures/medias';
import DisciplineScopeFixtureWithOnclick from '../src/molecule/discipline-scope/test/fixtures/with-onclick';
import FiltersFixtureDefault from '../src/molecule/filters/test/fixtures/default';
import FiltersFixtureOne from '../src/molecule/filters/test/fixtures/one';
import FiltersFixtureOnlyTimer from '../src/molecule/filters/test/fixtures/only-timer';
import FiltersFixtureOpenSorts from '../src/molecule/filters/test/fixtures/open-sorts';
import FiltersFixtureOpened from '../src/molecule/filters/test/fixtures/opened';
import FiltersFixtureThree from '../src/molecule/filters/test/fixtures/three';
import FiltersFixtureTwoOpened from '../src/molecule/filters/test/fixtures/two-opened';
import FiltersFixtureTwo from '../src/molecule/filters/test/fixtures/two';
import FiltersFixtureZero from '../src/molecule/filters/test/fixtures/zero';
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
import SsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import SsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import SsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import SsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import SubscriptionFreemiumFixtureDefault from '../src/molecule/subscription-freemium/test/fixtures/default';
import SubscriptionPremiumFixtureDefault from '../src/molecule/subscription-premium/test/fixtures/default';
import TableFixtureDefault from '../src/molecule/table/test/fixtures/default';
import TableFixtureNoOptions from '../src/molecule/table/test/fixtures/no-options';
import ThemeImageFixtureBg from '../src/molecule/theme-image/test/fixtures/bg';
import TitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import TitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import TitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
import UnsubscribeFixtureDefault from '../src/molecule/unsubscribe/test/fixtures/default';
import UnsubscribeFixtureSubscribed from '../src/molecule/unsubscribe/test/fixtures/subscribed';
import VideoIframeFixtureDefault from '../src/molecule/video-iframe/test/fixtures/default';
import VideoIframeFixtureEmpty from '../src/molecule/video-iframe/test/fixtures/empty';
import VideoIframeFixtureImagePlaceholder from '../src/molecule/video-iframe/test/fixtures/image-placeholder';
import VideoIframeFixtureYoutube from '../src/molecule/video-iframe/test/fixtures/youtube';
import VideoPlayerFixtureJwplayer from '../src/molecule/video-player/test/fixtures/jwplayer';
import VideoPlayerFixtureKontiki from '../src/molecule/video-player/test/fixtures/kontiki';
import VideoPlayerFixtureVimeo from '../src/molecule/video-player/test/fixtures/vimeo';
import VideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
import PopinHeaderFixtureFailMultipleAnswers from '../src/molecule/app-player/popin/popin-header/test/fixtures/fail-multiple-answers';
import PopinHeaderFixtureFail from '../src/molecule/app-player/popin/popin-header/test/fixtures/fail';
import PopinHeaderFixtureLoading from '../src/molecule/app-player/popin/popin-header/test/fixtures/loading';
import PopinHeaderFixtureStarsRank from '../src/molecule/app-player/popin/popin-header/test/fixtures/stars-rank';
import PopinHeaderFixtureSuccess from '../src/molecule/app-player/popin/popin-header/test/fixtures/success';
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
import DropDownFixtureDefault from '../src/molecule/questions/drop-down/test/fixtures/default';
import DropDownFixtureNoSelected from '../src/molecule/questions/drop-down/test/fixtures/no-selected';
import FreeTextFixtureDefault from '../src/molecule/questions/free-text/test/fixtures/default';
import FreeTextFixtureWithDefaultValue from '../src/molecule/questions/free-text/test/fixtures/with-default-value';
import QcmDragFixtureDefault from '../src/molecule/questions/qcm-drag/test/fixtures/default';
import QcmDragFixtureNoSelected from '../src/molecule/questions/qcm-drag/test/fixtures/no-selected';
import QcmGraphicFixtureDefault from '../src/molecule/questions/qcm-graphic/test/fixtures/default';
import QcmGraphicFixtureNoSelected from '../src/molecule/questions/qcm-graphic/test/fixtures/no-selected';
import QcmFixtureDefault from '../src/molecule/questions/qcm/test/fixtures/default';
import QcmFixtureNoSelected from '../src/molecule/questions/qcm/test/fixtures/no-selected';
import QcmFixtureShortAnswers from '../src/molecule/questions/qcm/test/fixtures/short-answers';
import QuestionRangeFixtureDefault from '../src/molecule/questions/question-range/test/fixtures/default';
import TemplateFixtureDefault from '../src/molecule/questions/template/test/fixtures/default';
import TemplateFixtureMultiple from '../src/molecule/questions/template/test/fixtures/multiple';
import SlidesFooterFixtureClueSelected from '../src/molecule/slides/slides-footer/test/fixtures/clue-selected';
import SlidesFooterFixtureDefault from '../src/molecule/slides/slides-footer/test/fixtures/default';
import SlidesFooterFixtureDisabled from '../src/molecule/slides/slides-footer/test/fixtures/disabled';
import SlidesFooterFixtureHighlighted from '../src/molecule/slides/slides-footer/test/fixtures/highlighted';
import SlidesFooterFixtureMediaSelected from '../src/molecule/slides/slides-footer/test/fixtures/media-selected';
import SlidesFooterFixtureNotify from '../src/molecule/slides/slides-footer/test/fixtures/notify';
import SlidesFooterFixtureOnlyClue from '../src/molecule/slides/slides-footer/test/fixtures/only-clue';
import SlidesFooterFixtureWithContext from '../src/molecule/slides/slides-footer/test/fixtures/with-context';
import SlidesHeaderFixtureDefault from '../src/molecule/slides/slides-header/test/fixtures/default';
import SlidesHeaderFixtureFreerun from '../src/molecule/slides/slides-header/test/fixtures/freerun';
import SlidesHeaderFixtureNoSecondary from '../src/molecule/slides/slides-header/test/fixtures/no-secondary';
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
import SlidesPlayerFixtureOnlyClue from '../src/molecule/slides/slides-player/test/fixtures/only-clue';
import SlidesPlayerFixtureQcmDrag from '../src/molecule/slides/slides-player/test/fixtures/qcm-drag';
import SlidesPlayerFixtureQcmGraphic from '../src/molecule/slides/slides-player/test/fixtures/qcm-graphic';
import SlidesPlayerFixtureQcmShort from '../src/molecule/slides/slides-player/test/fixtures/qcm-short';
import SlidesPlayerFixtureQcmTemplate from '../src/molecule/slides/slides-player/test/fixtures/qcm-template';
import SlidesPlayerFixtureQcm from '../src/molecule/slides/slides-player/test/fixtures/qcm';
import SlidesPlayerFixtureRange from '../src/molecule/slides/slides-player/test/fixtures/range';
import SlidesPlayerFixtureTemplate from '../src/molecule/slides/slides-player/test/fixtures/template';
import SlidesPlayerFixtureWithMinHeight from '../src/molecule/slides/slides-player/test/fixtures/with-min-height';
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
import MoocHeaderFixtureDefault from '../src/organism/mooc-header/test/fixtures/default';
import MoocHeaderFixtureLogged from '../src/organism/mooc-header/test/fixtures/logged';
import MoocHeaderFixtureSliderMultiple from '../src/organism/mooc-header/test/fixtures/slider-multiple';
import MoocHeaderFixtureSlider from '../src/organism/mooc-header/test/fixtures/slider';
import PopinFixtureDefault from '../src/organism/popin/test/fixtures/default';
import ResourceBrowserFixtureJwplayer from '../src/organism/resource-browser/test/fixtures/jwplayer';
import ResourceBrowserFixturePdfSelected from '../src/organism/resource-browser/test/fixtures/pdf-selected';
import ResourceBrowserFixtureVideoSelected from '../src/organism/resource-browser/test/fixtures/video-selected';
import SettingsFixtureDefault from '../src/organism/settings/test/fixtures/default';
import SettingsFixtureFreemium from '../src/organism/settings/test/fixtures/freemium';
import SettingsFixturePremium from '../src/organism/settings/test/fixtures/premium';
import SetupHeaderFixtureDefault from '../src/organism/setup-header/test/fixtures/default';
import SidebarFixtureAnalytics from '../src/organism/sidebar/test/fixtures/analytics';
import SidebarFixtureCustom from '../src/organism/sidebar/test/fixtures/custom';
import SidebarFixtureDefault from '../src/organism/sidebar/test/fixtures/default';
import SliderFixtureDefault from '../src/organism/slider/test/fixtures/default';
import SliderFixtureMultipleSlides from '../src/organism/slider/test/fixtures/multiple-slides';
import ImageSliderFixtureDefault from '../src/organism/mooc/image-slider/test/fixtures/default';
import ImageSliderFixtureMultipleSlides from '../src/organism/mooc/image-slider/test/fixtures/multiple-slides';
import LoadingFixtureDefault from '../src/template/app-player/loading/test/fixtures/default';
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
import PopinCorrectionFixtureFailMultipleAnswers from '../src/template/app-player/popin-correction/test/fixtures/fail-multiple-answers';
import PopinCorrectionFixtureFailOpenKlf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-klf';
import PopinCorrectionFixtureFailOpenResourcesWithPdf from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-pdf';
import PopinCorrectionFixtureFailOpenResourcesWithVideo from '../src/template/app-player/popin-correction/test/fixtures/fail-open-resources-with-video';
import PopinCorrectionFixtureFailOpenTips from '../src/template/app-player/popin-correction/test/fixtures/fail-open-tips';
import PopinCorrectionFixtureLoading from '../src/template/app-player/popin-correction/test/fixtures/loading';
import PopinEndFixtureCorrect from '../src/template/app-player/popin-end/test/fixtures/correct';
import PopinEndFixtureDefault from '../src/template/app-player/popin-end/test/fixtures/default';
import PopinEndFixtureFail from '../src/template/app-player/popin-end/test/fixtures/fail';
import PopinEndFixtureLoading from '../src/template/app-player/popin-end/test/fixtures/loading';
import PopinEndFixtureNextCourse from '../src/template/app-player/popin-end/test/fixtures/next-course';
import PopinEndFixtureSimpleAction from '../src/template/app-player/popin-end/test/fixtures/simple-action';
import PopinEndFixtureSubscribe from '../src/template/app-player/popin-end/test/fixtures/subscribe';
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
    InputReadonly,
    InputSwitch,
    InputText,
    InputTextarea,
    Label,
    Life,
    Link,
    Loader,
    Notification,
    PictureBackground,
    Picture,
    PromoCode,
    Provider,
    Range,
    ResourceMiniature,
    Select,
    Slide,
    SocialLink,
    Spinner,
    TabContent,
    Tab,
    Title
  },
  Molecule: {
    Answer,
    BattleRequest,
    BrandCardCreate,
    BrandCard,
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
    QcmDrag,
    QcmGraphic,
    Qcm,
    QuestionRange,
    Template
  },
  MoleculeSlides: {
    SlidesFooter,
    SlidesHeader,
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
  TemplateAppPlayer: {
    Loading,
    Player,
    PopinCorrection,
    PopinEnd
  },
  TemplateBackOffice: {
    BrandCreate,
    BrandList,
    BrandUpdate
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
      Blue: ButtonFixtureBlue,
      Centered: ButtonFixtureCentered,
      ClassName: ButtonFixtureClassName,
      Clear: ButtonFixtureClear,
      Dark: ButtonFixtureDark,
      Default: ButtonFixtureDefault,
      Disabled: ButtonFixtureDisabled,
      Light: ButtonFixtureLight,
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
      Default: InputDoublestepFixtureDefault
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
      AnimatedFail: LifeFixtureAnimatedFail,
      Default: LifeFixtureDefault,
      Fail: LifeFixtureFail,
      Small: LifeFixtureSmall
    },
    Link: {
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
    PictureBackground: {
      Contain: PictureBackgroundFixtureContain,
      Cover: PictureBackgroundFixtureCover,
      Default: PictureBackgroundFixtureDefault,
      Desktop: PictureBackgroundFixtureDesktop
    },
    Picture: {
      Default: PictureFixtureDefault,
      Empty: PictureFixtureEmpty,
      SimpleSrc: PictureFixtureSimpleSrc
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
      Right: SlideFixtureRight
    },
    SocialLink: {
      Facebook: SocialLinkFixtureFacebook,
      Twitter: SocialLinkFixtureTwitter
    },
    Spinner: {
      Default: SpinnerFixtureDefault
    },
    TabContent: {
      Default: TabContentFixtureDefault,
      HideContentBackground: TabContentFixtureHideContentBackground
    },
    Tab: {
      Default: TabFixtureDefault
    },
    Title: {
      Fixture: TitleFixtureFixture
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
    BrandCardCreate: {
      Default: BrandCardCreateFixtureDefault
    },
    BrandCard: {
      Default: BrandCardFixtureDefault
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
      NoVideo: DisciplineHeaderFixtureNoVideo
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
    Filters: {
      Default: FiltersFixtureDefault,
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
      Default: SubscriptionPremiumFixtureDefault
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
      Default: VideoIframeFixtureDefault,
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
      FailMultipleAnswers: PopinHeaderFixtureFailMultipleAnswers,
      Fail: PopinHeaderFixtureFail,
      Loading: PopinHeaderFixtureLoading,
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
    QcmDrag: {
      Default: QcmDragFixtureDefault,
      NoSelected: QcmDragFixtureNoSelected
    },
    QcmGraphic: {
      Default: QcmGraphicFixtureDefault,
      NoSelected: QcmGraphicFixtureNoSelected
    },
    Qcm: {
      Default: QcmFixtureDefault,
      NoSelected: QcmFixtureNoSelected,
      ShortAnswers: QcmFixtureShortAnswers
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
    SlidesHeader: {
      Default: SlidesHeaderFixtureDefault,
      Freerun: SlidesHeaderFixtureFreerun,
      NoSecondary: SlidesHeaderFixtureNoSecondary
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
      PdfSelected: ResourceBrowserFixturePdfSelected,
      VideoSelected: ResourceBrowserFixtureVideoSelected
    },
    Settings: {
      Default: SettingsFixtureDefault,
      Freemium: SettingsFixtureFreemium,
      Premium: SettingsFixturePremium
    },
    SetupHeader: {
      Default: SetupHeaderFixtureDefault
    },
    Sidebar: {
      Analytics: SidebarFixtureAnalytics,
      Custom: SidebarFixtureCustom,
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
      FailMultipleAnswers: PopinCorrectionFixtureFailMultipleAnswers,
      FailOpenKlf: PopinCorrectionFixtureFailOpenKlf,
      FailOpenResourcesWithPdf: PopinCorrectionFixtureFailOpenResourcesWithPdf,
      FailOpenResourcesWithVideo: PopinCorrectionFixtureFailOpenResourcesWithVideo,
      FailOpenTips: PopinCorrectionFixtureFailOpenTips,
      Loading: PopinCorrectionFixtureLoading
    },
    PopinEnd: {
      Correct: PopinEndFixtureCorrect,
      Default: PopinEndFixtureDefault,
      Fail: PopinEndFixtureFail,
      Loading: PopinEndFixtureLoading,
      NextCourse: PopinEndFixtureNextCourse,
      SimpleAction: PopinEndFixtureSimpleAction,
      Subscribe: PopinEndFixtureSubscribe,
      WithRecommendations: PopinEndFixtureWithRecommendations
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

export const dependencies = {
  "Molecule": {
    "Filters": {
      "parents": {
        "TemplateCommon": {
          "SearchPage": true
        }
      },
      "children": {
        "Atom": {
          "Range": true,
          "Select": true
        }
      }
    },
    "DisciplineCta": {
      "parents": {
        "TemplateCommon": {
          "Discipline": true
        }
      },
      "children": {}
    },
    "DisciplineHeader": {
      "parents": {
        "TemplateCommon": {
          "Discipline": true
        }
      },
      "children": {
        "Molecule": {
          "VideoIframe": true
        }
      }
    },
    "DisciplinePartners": {
      "parents": {
        "TemplateCommon": {
          "Discipline": true
        }
      },
      "children": {
        "Atom": {
          "CatalogSection": true,
          "Link": true,
          "Picture": true,
          "SocialLink": true
        }
      }
    },
    "DisciplineScope": {
      "parents": {
        "TemplateCommon": {
          "Discipline": true
        }
      },
      "children": {
        "Molecule": {
          "ScopeContent": true,
          "ScopeTabs": true
        }
      }
    },
    "SubscriptionFreemium": {
      "parents": {
        "Organism": {
          "Settings": true
        }
      },
      "children": {}
    },
    "SubscriptionPremium": {
      "parents": {
        "Organism": {
          "Settings": true
        }
      },
      "children": {}
    },
    "Pdf": {
      "parents": {
        "Organism": {
          "ResourceBrowser": true
        }
      },
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "MenuList": {
      "parents": {
        "Organism": {
          "Header": true
        }
      },
      "children": {
        "Molecule": {
          "SsmenuList": true
        }
      }
    },
    "PaymentForm": {
      "parents": {
        "Organism": {
          "Cart": true
        }
      },
      "children": {}
    },
    "ProductCard": {
      "parents": {
        "Organism": {
          "Cart": true
        }
      },
      "children": {}
    },
    "Card": {
      "parents": {
        "Organism": {
          "CardsGrid": true
        },
        "MoleculeDashboard": {
          "CardsList": true
        }
      },
      "children": {
        "Atom": {
          "Loader": true
        }
      }
    },
    "BrandDownloadBox": {
      "parents": {
        "Organism": {
          "BrandUpload": true
        }
      },
      "children": {
        "Atom": {
          "Button": true
        }
      }
    },
    "BrandUploadBox": {
      "parents": {
        "Organism": {
          "BrandUpload": true
        }
      },
      "children": {
        "Atom": {
          "Loader": true
        }
      }
    },
    "ProgressBar": {
      "parents": {
        "Organism": {
          "BrandUpload": true
        }
      },
      "children": {}
    },
    "Pagination": {
      "parents": {
        "Organism": {
          "BrandTable": true
        }
      },
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "Search": {
      "parents": {
        "Organism": {
          "BrandTable": true
        }
      },
      "children": {}
    },
    "Table": {
      "parents": {
        "Organism": {
          "BrandTable": true
        }
      },
      "children": {
        "Atom": {
          "Checkbox": true,
          "Link": true
        }
      }
    },
    "BrandFormGroup": {
      "parents": {
        "Organism": {
          "BrandForm": true
        }
      },
      "children": {
        "Molecule": {
          "SetupSections": true,
          "SetupSlider": true
        },
        "Atom": {
          "InputReadonly": true,
          "ImageUpload": true,
          "InputColor": true,
          "InputSwitch": true,
          "InputText": true
        }
      }
    },
    "News": {
      "parents": {
        "MoleculeDashboard": {
          "NewsList": true
        }
      },
      "children": {
        "Atom": {
          "Cta": true,
          "Link": true
        }
      }
    },
    "BattleRequest": {
      "parents": {
        "MoleculeDashboard": {
          "BattleRequestList": true
        }
      },
      "children": {}
    },
    "SetupSlide": {
      "parents": {
        "Molecule": {
          "SetupSlider": true
        }
      },
      "children": {
        "Atom": {
          "ImageUpload": true,
          "InputSwitch": true,
          "Select": true
        }
      }
    },
    "SetupSection": {
      "parents": {
        "Molecule": {
          "SetupSections": true
        }
      },
      "children": {
        "Atom": {
          "InputSwitch": true
        }
      }
    },
    "ModuleBubble": {
      "parents": {
        "Molecule": {
          "ScopeTabs": true,
          "ModuleCard": true
        }
      },
      "children": {}
    },
    "SsmenuList": {
      "parents": {
        "Molecule": {
          "MenuList": true
        }
      },
      "children": {}
    },
    "ScopeContent": {
      "parents": {
        "Molecule": {
          "DisciplineScope": true
        }
      },
      "children": {
        "Atom": {
          "Link": true,
          "Button": true
        }
      }
    },
    "ScopeTabs": {
      "parents": {
        "Molecule": {
          "DisciplineScope": true
        }
      },
      "children": {
        "Molecule": {
          "ModuleBubble": true
        }
      }
    },
    "VideoIframe": {
      "parents": {
        "Molecule": {
          "DisciplineHeader": true
        }
      },
      "children": {}
    },
    "SetupSections": {
      "parents": {
        "Molecule": {
          "BrandFormGroup": true
        }
      },
      "children": {
        "Molecule": {
          "SetupSection": true
        },
        "Atom": {
          "Loader": true
        }
      }
    },
    "SetupSlider": {
      "parents": {
        "Molecule": {
          "BrandFormGroup": true
        }
      },
      "children": {
        "Molecule": {
          "SetupSlide": true
        }
      }
    },
    "Answer": {
      "children": {
        "MoleculeQuestions": {
          "FreeText": true,
          "DropDown": true,
          "QcmDrag": true,
          "QcmGraphic": true,
          "Qcm": true,
          "Template": true
        }
      }
    },
    "BrandCardCreate": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "BrandCard": {
      "children": {
        "Atom": {
          "Link": true,
          "Picture": true
        }
      }
    },
    "BrandCreateForm": {
      "children": {
        "Atom": {
          "Button": true
        }
      }
    },
    "BrandTabs": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "Breadcrumbs": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "ModuleCard": {
      "children": {
        "Molecule": {
          "ModuleBubble": true
        }
      }
    },
    "ThemeImage": {
      "children": {}
    },
    "TitledCheckbox": {
      "children": {
        "Atom": {
          "Checkbox": true
        }
      }
    },
    "Unsubscribe": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "VideoPlayer": {
      "children": {}
    }
  },
  "Organism": {
    "CardsGrid": {
      "parents": {
        "TemplateCommon": {
          "SearchPage": true,
          "Authors": true
        }
      },
      "children": {
        "Molecule": {
          "Card": true
        },
        "Atom": {
          "Loader": true
        }
      }
    },
    "SetupHeader": {
      "parents": {
        "TemplateBackOffice": {
          "BrandUpdate": true,
          "BrandList": true,
          "BrandCreate": true
        }
      },
      "children": {
        "Atom": {
          "Link": true,
          "Picture": true
        }
      }
    },
    "BrandForm": {
      "children": {
        "Molecule": {
          "BrandFormGroup": true
        },
        "Atom": {
          "Button": true,
          "Link": true
        }
      }
    },
    "BrandTable": {
      "children": {
        "Atom": {
          "Link": true,
          "Loader": true
        },
        "Molecule": {
          "Pagination": true,
          "Search": true,
          "Table": true
        }
      }
    },
    "BrandUpload": {
      "children": {
        "Atom": {
          "Link": true
        },
        "Molecule": {
          "BrandDownloadBox": true,
          "BrandUploadBox": true,
          "ProgressBar": true
        }
      }
    },
    "Cart": {
      "children": {
        "Atom": {
          "Link": true,
          "PromoCode": true
        },
        "Molecule": {
          "PaymentForm": true,
          "ProductCard": true
        }
      }
    },
    "Discussion": {
      "children": {
        "MoleculeForum": {
          "ForumComment": true,
          "ForumThread": true
        },
        "Atom": {
          "Loader": true
        }
      }
    },
    "GridList": {
      "children": {}
    },
    "Header": {
      "children": {
        "Atom": {
          "Picture": true
        },
        "Molecule": {
          "MenuList": true
        }
      }
    },
    "Hero": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "MoocHeader": {
      "children": {
        "Atom": {
          "Cta": true,
          "InputSwitch": true,
          "Link": true,
          "Select": true
        },
        "OrganismMooc": {
          "ImageSlider": true
        }
      }
    },
    "Popin": {
      "children": {
        "Atom": {
          "Button": true
        }
      }
    },
    "ResourceBrowser": {
      "children": {
        "Molecule": {
          "Pdf": true
        }
      }
    },
    "Settings": {
      "children": {
        "Atom": {
          "Link": true,
          "TabContent": true,
          "Tab": true
        },
        "Molecule": {
          "SubscriptionFreemium": true,
          "SubscriptionPremium": true
        }
      }
    },
    "Sidebar": {
      "children": {}
    },
    "Slider": {
      "children": {
        "Atom": {
          "Slide": true
        },
        "MoleculeQuestions": {
          "QcmDrag": true,
          "QcmGraphic": true,
          "Qcm": true
        }
      }
    }
  },
  "Atom": {
    "Button": {
      "parents": {
        "TemplateCommon": {
          "SearchPage": true
        },
        "Organism": {
          "Popin": true,
          "BrandForm": true
        },
        "MoleculeForum": {
          "ForumComment": true
        },
        "Molecule": {
          "ScopeContent": true,
          "BrandDownloadBox": true,
          "BrandCreateForm": true
        }
      },
      "children": {}
    },
    "Link": {
      "parents": {
        "TemplateCommon": {
          "Authors": true
        },
        "Organism": {
          "SetupHeader": true,
          "Settings": true,
          "MoocHeader": true,
          "Hero": true,
          "Cart": true,
          "BrandUpload": true,
          "BrandTable": true,
          "BrandForm": true
        },
        "MoleculeSlides": {
          "SlidesHeader": true
        },
        "MoleculeDashboard": {
          "StartBattle": true
        },
        "MoleculeAppPlayerPopin": {
          "PopinHeader": true
        },
        "Molecule": {
          "Unsubscribe": true,
          "Table": true,
          "ScopeContent": true,
          "Pdf": true,
          "Pagination": true,
          "News": true,
          "DisciplinePartners": true,
          "Breadcrumbs": true,
          "BrandTabs": true,
          "BrandCard": true,
          "BrandCardCreate": true
        }
      },
      "children": {}
    },
    "SocialLink": {
      "parents": {
        "TemplateCommon": {
          "Authors": true
        },
        "Molecule": {
          "DisciplinePartners": true
        }
      },
      "children": {}
    },
    "Loader": {
      "parents": {
        "TemplateAppPlayer": {
          "PopinCorrection": true,
          "Loading": true
        },
        "Organism": {
          "Discussion": true,
          "CardsGrid": true,
          "BrandTable": true
        },
        "MoleculeDashboard": {
          "NewsList": true
        },
        "Molecule": {
          "SetupSections": true,
          "Card": true,
          "BrandUploadBox": true
        },
        "Atom": {
          "ImageUpload": true,
          "Clue": true
        }
      },
      "children": {}
    },
    "Slide": {
      "parents": {
        "OrganismMooc": {
          "ImageSlider": true
        },
        "Organism": {
          "Slider": true
        }
      },
      "children": {
        "Atom": {
          "Cta": true
        }
      }
    },
    "Picture": {
      "parents": {
        "Organism": {
          "SetupHeader": true,
          "Header": true
        },
        "MoleculeForum": {
          "ForumPost": true
        },
        "Molecule": {
          "DisciplinePartners": true,
          "BrandCard": true
        },
        "Atom": {
          "CatalogSection": true
        }
      },
      "children": {}
    },
    "TabContent": {
      "parents": {
        "Organism": {
          "Settings": true
        }
      },
      "children": {}
    },
    "Tab": {
      "parents": {
        "Organism": {
          "Settings": true
        }
      },
      "children": {}
    },
    "Cta": {
      "parents": {
        "Organism": {
          "MoocHeader": true
        },
        "Molecule": {
          "News": true
        },
        "Atom": {
          "Slide": true
        }
      },
      "children": {}
    },
    "InputSwitch": {
      "parents": {
        "Organism": {
          "MoocHeader": true
        },
        "Molecule": {
          "SetupSlide": true,
          "SetupSection": true,
          "BrandFormGroup": true
        }
      },
      "children": {}
    },
    "Select": {
      "parents": {
        "Organism": {
          "MoocHeader": true
        },
        "MoleculeQuestions": {
          "DropDown": true
        },
        "Molecule": {
          "SetupSlide": true,
          "Filters": true
        }
      },
      "children": {}
    },
    "PromoCode": {
      "parents": {
        "Organism": {
          "Cart": true
        }
      },
      "children": {}
    },
    "Life": {
      "parents": {
        "MoleculeSlides": {
          "SlidesHeader": true
        }
      },
      "children": {}
    },
    "Range": {
      "parents": {
        "MoleculeQuestions": {
          "QuestionRange": true
        },
        "Molecule": {
          "Filters": true
        }
      },
      "children": {}
    },
    "Checkbox": {
      "parents": {
        "Molecule": {
          "TitledCheckbox": true,
          "Table": true
        }
      },
      "children": {}
    },
    "ImageUpload": {
      "parents": {
        "Molecule": {
          "SetupSlide": true,
          "BrandFormGroup": true
        }
      },
      "children": {
        "Atom": {
          "Loader": true
        }
      }
    },
    "CatalogSection": {
      "parents": {
        "Molecule": {
          "DisciplinePartners": true
        }
      },
      "children": {
        "Atom": {
          "Picture": true
        }
      }
    },
    "InputReadonly": {
      "parents": {
        "Molecule": {
          "BrandFormGroup": true
        }
      },
      "children": {}
    },
    "InputColor": {
      "parents": {
        "Molecule": {
          "BrandFormGroup": true
        }
      },
      "children": {}
    },
    "InputText": {
      "parents": {
        "Molecule": {
          "BrandFormGroup": true
        }
      },
      "children": {}
    },
    "CenteredText": {
      "children": {}
    },
    "Clue": {
      "children": {
        "Atom": {
          "Loader": true
        }
      }
    },
    "InputCheckbox": {
      "children": {}
    },
    "InputDoublestep": {
      "children": {}
    },
    "InputTextarea": {
      "children": {}
    },
    "Label": {
      "children": {}
    },
    "Notification": {
      "children": {}
    },
    "PictureBackground": {
      "children": {}
    },
    "Provider": {
      "children": {}
    },
    "ResourceMiniature": {
      "children": {}
    },
    "Spinner": {
      "children": {}
    },
    "Title": {
      "children": {}
    }
  },
  "MoleculeDashboard": {
    "BattleRequestList": {
      "parents": {
        "TemplateCommon": {
          "Dashboard": true
        }
      },
      "children": {
        "Molecule": {
          "BattleRequest": true
        }
      }
    },
    "CardsList": {
      "parents": {
        "TemplateCommon": {
          "Dashboard": true
        }
      },
      "children": {
        "Molecule": {
          "Card": true
        }
      }
    },
    "NewsList": {
      "parents": {
        "TemplateCommon": {
          "Dashboard": true
        }
      },
      "children": {
        "Molecule": {
          "News": true
        },
        "Atom": {
          "Loader": true
        }
      }
    },
    "StartBattle": {
      "parents": {
        "TemplateCommon": {
          "Dashboard": true
        }
      },
      "children": {
        "Atom": {
          "Link": true
        }
      }
    }
  },
  "MoleculeSlides": {
    "SlidesHeader": {
      "parents": {
        "TemplateAppPlayer": {
          "PopinEnd": true,
          "Player": true
        }
      },
      "children": {
        "Atom": {
          "Life": true,
          "Link": true
        }
      }
    },
    "SlidesPlayer": {
      "parents": {
        "TemplateAppPlayer": {
          "Player": true
        }
      },
      "children": {
        "MoleculeSlides": {
          "SlidesFooter": true
        }
      }
    },
    "SlidesFooter": {
      "parents": {
        "MoleculeSlides": {
          "SlidesPlayer": true
        }
      },
      "children": {}
    }
  },
  "MoleculeAppPlayerPopin": {
    "PopinHeader": {
      "parents": {
        "TemplateAppPlayer": {
          "PopinCorrection": true
        }
      },
      "children": {
        "Atom": {
          "Link": true
        }
      }
    }
  },
  "OrganismAccordion": {
    "Container": {
      "parents": {
        "TemplateAppPlayer": {
          "PopinCorrection": true
        }
      },
      "children": {
        "OrganismAccordion": {
          "Part": true
        }
      }
    },
    "Part": {
      "parents": {
        "OrganismAccordion": {
          "Container": true
        }
      },
      "children": {
        "MoleculeQuestions": {
          "QcmDrag": true
        }
      }
    },
    "Toggler": {
      "children": {
        "MoleculeQuestions": {
          "QcmDrag": true,
          "QcmGraphic": true,
          "Qcm": true
        }
      }
    }
  },
  "MoleculeQuestions": {
    "QcmDrag": {
      "parents": {
        "Organism": {
          "Slider": true
        },
        "OrganismAccordion": {
          "Toggler": true,
          "Part": true
        },
        "Molecule": {
          "Answer": true
        }
      },
      "children": {}
    },
    "QcmGraphic": {
      "parents": {
        "Organism": {
          "Slider": true
        },
        "OrganismAccordion": {
          "Toggler": true
        },
        "Molecule": {
          "Answer": true
        }
      },
      "children": {}
    },
    "Qcm": {
      "parents": {
        "Organism": {
          "Slider": true
        },
        "OrganismAccordion": {
          "Toggler": true
        },
        "Molecule": {
          "Answer": true
        }
      },
      "children": {}
    },
    "DropDown": {
      "parents": {
        "MoleculeQuestions": {
          "Template": true
        },
        "Molecule": {
          "Answer": true
        }
      },
      "children": {
        "Atom": {
          "Select": true
        }
      }
    },
    "FreeText": {
      "parents": {
        "MoleculeQuestions": {
          "Template": true
        },
        "Molecule": {
          "Answer": true
        }
      },
      "children": {}
    },
    "Template": {
      "parents": {
        "Molecule": {
          "Answer": true
        }
      },
      "children": {
        "MoleculeQuestions": {
          "DropDown": true,
          "FreeText": true
        }
      }
    },
    "QuestionRange": {
      "children": {
        "Atom": {
          "Range": true
        }
      }
    }
  },
  "OrganismMooc": {
    "ImageSlider": {
      "parents": {
        "Organism": {
          "MoocHeader": true
        }
      },
      "children": {
        "Atom": {
          "Slide": true
        }
      }
    }
  },
  "MoleculeForum": {
    "ForumComment": {
      "parents": {
        "Organism": {
          "Discussion": true
        },
        "MoleculeForum": {
          "ForumPost": true
        }
      },
      "children": {
        "Atom": {
          "Button": true
        }
      }
    },
    "ForumThread": {
      "parents": {
        "Organism": {
          "Discussion": true
        },
        "MoleculeForum": {
          "ForumThread": true
        }
      },
      "children": {
        "MoleculeForum": {
          "ForumPost": true,
          "ForumThread": true
        }
      }
    },
    "ForumPost": {
      "parents": {
        "MoleculeForum": {
          "ForumThread": true
        }
      },
      "children": {
        "Atom": {
          "Picture": true
        },
        "MoleculeForum": {
          "ForumComment": true
        }
      }
    }
  },
  "TemplateAppPlayer": {
    "Loading": {
      "children": {
        "Atom": {
          "Loader": true
        }
      }
    },
    "Player": {
      "children": {
        "MoleculeSlides": {
          "SlidesHeader": true,
          "SlidesPlayer": true
        }
      }
    },
    "PopinCorrection": {
      "children": {
        "Atom": {
          "Loader": true
        },
        "MoleculeAppPlayerPopin": {
          "PopinHeader": true
        },
        "OrganismAccordion": {
          "Container": true
        }
      }
    },
    "PopinEnd": {
      "children": {
        "MoleculeSlides": {
          "SlidesHeader": true
        }
      }
    }
  },
  "TemplateBackOffice": {
    "BrandCreate": {
      "children": {
        "Organism": {
          "SetupHeader": true
        }
      }
    },
    "BrandList": {
      "children": {
        "Organism": {
          "SetupHeader": true
        }
      }
    },
    "BrandUpdate": {
      "children": {
        "Organism": {
          "SetupHeader": true
        }
      }
    }
  },
  "TemplateCommon": {
    "Authors": {
      "children": {
        "Atom": {
          "Link": true,
          "SocialLink": true
        },
        "Organism": {
          "CardsGrid": true
        }
      }
    },
    "CoorpHeader": {
      "children": {}
    },
    "Dashboard": {
      "children": {
        "MoleculeDashboard": {
          "BattleRequestList": true,
          "CardsList": true,
          "NewsList": true,
          "StartBattle": true
        }
      }
    },
    "Discipline": {
      "children": {
        "Molecule": {
          "DisciplineCta": true,
          "DisciplineHeader": true,
          "DisciplinePartners": true,
          "DisciplineScope": true
        }
      }
    },
    "SearchPage": {
      "children": {
        "Molecule": {
          "Filters": true
        },
        "Organism": {
          "CardsGrid": true
        },
        "Atom": {
          "Button": true
        }
      }
    }
  }
};
