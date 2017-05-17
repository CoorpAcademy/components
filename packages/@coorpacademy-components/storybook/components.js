/* eslint-disable max-len */

import Button from '../src/atom/button';
import CatalogSection from '../src/atom/catalog-section';
import CenteredText from '../src/atom/centered-text';
import Checkbox from '../src/atom/checkbox';
import Cta from '../src/atom/cta';
import Handle from '../src/atom/handle';
import ImageUpload from '../src/atom/image-upload';
import InputCheckbox from '../src/atom/input-checkbox';
import InputColor from '../src/atom/input-color';
import InputDoublestep from '../src/atom/input-doublestep';
import InputReadonly from '../src/atom/input-readonly';
import InputSwitch from '../src/atom/input-switch';
import InputText from '../src/atom/input-text';
import InputTextarea from '../src/atom/input-textarea';
import Label from '../src/atom/label';
import Link from '../src/atom/link';
import Loader from '../src/atom/loader';
import Notification from '../src/atom/notification';
import Picture from '../src/atom/picture';
import PromoCode from '../src/atom/promo-code';
import Provider from '../src/atom/provider';
import Select from '../src/atom/select';
import Slide from '../src/atom/slide';
import SocialLink from '../src/atom/social-link';
import Spinner from '../src/atom/spinner';
import Star from '../src/atom/star';
import TabContent from '../src/atom/tab-content';
import Tab from '../src/atom/tab';
import Title from '../src/atom/title';
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
import CatalogAssets from '../src/molecule/catalog-assets';
import CatalogBadge from '../src/molecule/catalog-badge';
import CatalogCard from '../src/molecule/catalog-card';
import CatalogCta from '../src/molecule/catalog-cta';
import Categories from '../src/molecule/categories';
import Checkboxes from '../src/molecule/checkboxes';
import CursusHeader from '../src/molecule/cursus-header';
import CursusList from '../src/molecule/cursus-list';
import DisciplineCard from '../src/molecule/discipline-card';
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
import ProductCard from '../src/molecule/product-card';
import ProgressBar from '../src/molecule/progress-bar';
import RangeSlider from '../src/molecule/range-slider';
import ScopeContent from '../src/molecule/scope-content';
import ScopeTabs from '../src/molecule/scope-tabs';
import Search from '../src/molecule/search';
import SelectMultiple from '../src/molecule/select-multiple';
import SetupSection from '../src/molecule/setup-section';
import SetupSections from '../src/molecule/setup-sections';
import SetupSlide from '../src/molecule/setup-slide';
import SetupSlider from '../src/molecule/setup-slider';
import Slider from '../src/molecule/slider';
import SsmenuList from '../src/molecule/ssmenu-list';
import StarRating from '../src/molecule/star-rating';
import SubscriptionFreemium from '../src/molecule/subscription-freemium';
import SubscriptionPremium from '../src/molecule/subscription-premium';
import Table from '../src/molecule/table';
import ThemeImage from '../src/molecule/theme-image';
import TitledCheckbox from '../src/molecule/titled-checkbox';
import Unsubscribe from '../src/molecule/unsubscribe';
import VideoIframe from '../src/molecule/video-iframe';
import VideoPlayer from '../src/molecule/video-player';
import BattleRequestList from '../src/molecule/dashboard/battle-request-list';
import CardsList from '../src/molecule/dashboard/cards-list';
import NewsList from '../src/molecule/dashboard/news-list';
import StartBattle from '../src/molecule/dashboard/start-battle';
import ForumComment from '../src/molecule/forum/forum-comment';
import ForumPost from '../src/molecule/forum/forum-post';
import ForumThread from '../src/molecule/forum/forum-thread';
import BrandForm from '../src/organism/brand-form';
import BrandTable from '../src/organism/brand-table';
import BrandUpload from '../src/organism/brand-upload';
import CardsGrid from '../src/organism/cards-grid';
import Cart from '../src/organism/cart';
import CatalogCards from '../src/organism/catalog-cards';
import DisciplineCards from '../src/organism/discipline-cards';
import Discussion from '../src/organism/discussion';
import GridList from '../src/organism/grid-list';
import Header from '../src/organism/header';
import Hero from '../src/organism/hero';
import MoocHeader from '../src/organism/mooc-header';
import Popin from '../src/organism/popin';
import Settings from '../src/organism/settings';
import SetupHeader from '../src/organism/setup-header';
import Author from '../src/template/app-catalog/author';
import Catalog from '../src/template/app-catalog/catalog';
import ProductCourse from '../src/template/app-catalog/product-course';
import ProductCursus from '../src/template/app-catalog/product-cursus';
import Demo from '../src/template/app-player/demo';
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
import CatalogSectionFixtureList from '../src/atom/catalog-section/test/fixtures/list';
import CatalogSectionFixturePicture from '../src/atom/catalog-section/test/fixtures/picture';
import CenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import CheckboxFixtureChecked from '../src/atom/checkbox/test/fixtures/checked';
import CheckboxFixtureDefault from '../src/atom/checkbox/test/fixtures/default';
import CheckboxFixtureDisabled from '../src/atom/checkbox/test/fixtures/disabled';
import CheckboxFixtureRequired from '../src/atom/checkbox/test/fixtures/required';
import CtaFixtureDefaultSmall from '../src/atom/cta/test/fixtures/default-small';
import CtaFixtureDefault from '../src/atom/cta/test/fixtures/default';
import CtaFixtureLight from '../src/atom/cta/test/fixtures/light';
import CtaFixtureSecondaryLight from '../src/atom/cta/test/fixtures/secondary-light';
import CtaFixtureSecondary from '../src/atom/cta/test/fixtures/secondary';
import HandleFixtureAxisX from '../src/atom/handle/test/fixtures/axis-x';
import HandleFixtureAxisY from '../src/atom/handle/test/fixtures/axis-y';
import HandleFixtureDefault from '../src/atom/handle/test/fixtures/default';
import ImageUploadFixtureDesktop from '../src/atom/image-upload/test/fixtures/desktop';
import ImageUploadFixtureEmail from '../src/atom/image-upload/test/fixtures/email';
import ImageUploadFixtureLoading from '../src/atom/image-upload/test/fixtures/loading';
import ImageUploadFixtureMobile from '../src/atom/image-upload/test/fixtures/mobile';
import ImageUploadFixtureModified from '../src/atom/image-upload/test/fixtures/modified';
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
import InputSwitchFixtureModified from '../src/atom/input-switch/test/fixtures/modified';
import InputSwitchFixtureNoTitle from '../src/atom/input-switch/test/fixtures/no-title';
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
import LinkFixtureHref from '../src/atom/link/test/fixtures/href';
import LoaderFixtureDefault from '../src/atom/loader/test/fixtures/default';
import NotificationFixtureDefault from '../src/atom/notification/test/fixtures/default';
import NotificationFixtureError from '../src/atom/notification/test/fixtures/error';
import NotificationFixtureWarning from '../src/atom/notification/test/fixtures/warning';
import PictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import PictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import PictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import PromoCodeFixtureDefault from '../src/atom/promo-code/test/fixtures/default';
import PromoCodeFixtureError from '../src/atom/promo-code/test/fixtures/error';
import PromoCodeFixtureSuccess from '../src/atom/promo-code/test/fixtures/success';
import ProviderFixtureDefault from '../src/atom/provider/test/fixtures/default';
import SelectFixtureDefault from '../src/atom/select/test/fixtures/default';
import SelectFixtureDisabled from '../src/atom/select/test/fixtures/disabled';
import SelectFixtureFilter from '../src/atom/select/test/fixtures/filter';
import SelectFixtureModified from '../src/atom/select/test/fixtures/modified';
import SelectFixtureMooc from '../src/atom/select/test/fixtures/mooc';
import SelectFixtureMultipleSelected from '../src/atom/select/test/fixtures/multiple-selected';
import SelectFixtureMultiple from '../src/atom/select/test/fixtures/multiple';
import SelectFixtureNolabel from '../src/atom/select/test/fixtures/nolabel';
import SelectFixtureRequired from '../src/atom/select/test/fixtures/required';
import SelectFixtureSort from '../src/atom/select/test/fixtures/sort';
import SelectFixtureThematiqueLong from '../src/atom/select/test/fixtures/thematique-long';
import SelectFixtureThematique from '../src/atom/select/test/fixtures/thematique';
import SlideFixtureDefault from '../src/atom/slide/test/fixtures/default';
import SlideFixtureLeft from '../src/atom/slide/test/fixtures/left';
import SlideFixtureLight from '../src/atom/slide/test/fixtures/light';
import SlideFixtureRight from '../src/atom/slide/test/fixtures/right';
import SocialLinkFixtureFacebook from '../src/atom/social-link/test/fixtures/facebook';
import SocialLinkFixtureTwitter from '../src/atom/social-link/test/fixtures/twitter';
import SpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import StarFixtureDisable from '../src/atom/star/test/fixtures/disable';
import StarFixtureEnable from '../src/atom/star/test/fixtures/enable';
import TabContentFixtureDefault from '../src/atom/tab-content/test/fixtures/default';
import TabFixtureDefault from '../src/atom/tab/test/fixtures/default';
import TitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
import BattleRequestFixtureDefault from '../src/molecule/battle-request/test/fixtures/default';
import BrandCardCreateFixtureDefault from '../src/molecule/brand-card-create/test/fixtures/default';
import BrandCardFixtureDefault from '../src/molecule/brand-card/test/fixtures/default';
import BrandCreateFormFixtureDefault from '../src/molecule/brand-create-form/test/fixtures/default';
import BrandCreateFormFixtureError from '../src/molecule/brand-create-form/test/fixtures/error';
import BrandCreateFormFixtureLoading from '../src/molecule/brand-create-form/test/fixtures/loading';
import BrandCreateFormFixtureModified from '../src/molecule/brand-create-form/test/fixtures/modified';
import BrandDownloadBoxFixtureDefault from '../src/molecule/brand-download-box/test/fixtures/default';
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
import BreadcrumbsFixtureDefault from '../src/molecule/breadcrumbs/test/fixtures/default';
import CardFixtureAdaptivAndDisabled from '../src/molecule/card/test/fixtures/adaptiv-and-disabled';
import CardFixtureAdaptiv from '../src/molecule/card/test/fixtures/adaptiv';
import CardFixtureCatalogue from '../src/molecule/card/test/fixtures/catalogue';
import CardFixtureDefault from '../src/molecule/card/test/fixtures/default';
import CardFixtureDisabled from '../src/molecule/card/test/fixtures/disabled';
import CardFixtureEmpty from '../src/molecule/card/test/fixtures/empty';
import CatalogAssetsFixtureDefault from '../src/molecule/catalog-assets/test/fixtures/default';
import CatalogAssetsFixtureEmpty from '../src/molecule/catalog-assets/test/fixtures/empty';
import CatalogBadgeFixtureDefault from '../src/molecule/catalog-badge/test/fixtures/default';
import CatalogBadgeFixtureEmpty from '../src/molecule/catalog-badge/test/fixtures/empty';
import CatalogCardFixtureDefault from '../src/molecule/catalog-card/test/fixtures/default';
import CatalogCtaFixtureDefault from '../src/molecule/catalog-cta/test/fixtures/default';
import CatalogCtaFixtureEmpty from '../src/molecule/catalog-cta/test/fixtures/empty';
import CatalogCtaFixtureNorating from '../src/molecule/catalog-cta/test/fixtures/norating';
import CategoriesFixtureDefault from '../src/molecule/categories/test/fixtures/default';
import CheckboxesFixtureClosableAndClosed from '../src/molecule/checkboxes/test/fixtures/closable-and-closed';
import CheckboxesFixtureClosableAndOpen from '../src/molecule/checkboxes/test/fixtures/closable-and-open';
import CheckboxesFixtureCoursesTheme from '../src/molecule/checkboxes/test/fixtures/courses-theme';
import CheckboxesFixtureSimple from '../src/molecule/checkboxes/test/fixtures/simple';
import CursusHeaderFixtureDefault from '../src/molecule/cursus-header/test/fixtures/default';
import CursusHeaderFixtureEmpty from '../src/molecule/cursus-header/test/fixtures/empty';
import CursusListFixtureDefault from '../src/molecule/cursus-list/test/fixtures/default';
import DisciplineCardFixtureHidden from '../src/molecule/discipline-card/test/fixtures/hidden';
import DisciplineCardFixtureWithCourseNum from '../src/molecule/discipline-card/test/fixtures/with-course-num';
import DisciplineCardFixtureWithModulesNoimage from '../src/molecule/discipline-card/test/fixtures/with-modules-noimage';
import DisciplineCardFixtureWithModules from '../src/molecule/discipline-card/test/fixtures/with-modules';
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
import NewsFixtureLongDesciption from '../src/molecule/news/test/fixtures/long-desciption';
import NewsFixtureLongTitle from '../src/molecule/news/test/fixtures/long-title';
import NewsFixtureSmallDesciption from '../src/molecule/news/test/fixtures/small-desciption';
import NewsFixtureSmallTitle from '../src/molecule/news/test/fixtures/small-title';
import PaginationFixtureDefault from '../src/molecule/pagination/test/fixtures/default';
import PaginationFixtureDisabled from '../src/molecule/pagination/test/fixtures/disabled';
import PaymentFormFixtureDefault from '../src/molecule/payment-form/test/fixtures/default';
import PaymentFormFixtureError from '../src/molecule/payment-form/test/fixtures/error';
import PaymentFormFixtureWarning from '../src/molecule/payment-form/test/fixtures/warning';
import ProductCardFixtureDefault from '../src/molecule/product-card/test/fixtures/default';
import ProgressBarFixtureDefault from '../src/molecule/progress-bar/test/fixtures/default';
import ProgressBarFixtureMax from '../src/molecule/progress-bar/test/fixtures/max';
import RangeSliderFixtureDefault from '../src/molecule/range-slider/test/fixtures/default';
import RangeSliderFixtureMinmax from '../src/molecule/range-slider/test/fixtures/minmax';
import RangeSliderFixtureStepsForceRange from '../src/molecule/range-slider/test/fixtures/steps-force-range';
import RangeSliderFixtureSteps from '../src/molecule/range-slider/test/fixtures/steps';
import ScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import ScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import ScopeContentFixtureMedias from '../src/molecule/scope-content/test/fixtures/medias';
import ScopeContentFixtureWithOnclick from '../src/molecule/scope-content/test/fixtures/with-onclick';
import ScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import ScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import SearchFixtureDefault from '../src/molecule/search/test/fixtures/default';
import SelectMultipleFixtureChecked from '../src/molecule/select-multiple/test/fixtures/checked';
import SelectMultipleFixtureDefault from '../src/molecule/select-multiple/test/fixtures/default';
import SetupSectionFixtureDefault from '../src/molecule/setup-section/test/fixtures/default';
import SetupSectionFixtureFirst from '../src/molecule/setup-section/test/fixtures/first';
import SetupSectionFixtureOther from '../src/molecule/setup-section/test/fixtures/other';
import SetupSectionsFixtureDefault from '../src/molecule/setup-sections/test/fixtures/default';
import SetupSectionsFixtureLoading from '../src/molecule/setup-sections/test/fixtures/loading';
import SetupSlideFixtureDefault from '../src/molecule/setup-slide/test/fixtures/default';
import SetupSliderFixtureDefault from '../src/molecule/setup-slider/test/fixtures/default';
import SliderFixtureDefault from '../src/molecule/slider/test/fixtures/default';
import SliderFixtureMultipleSlides from '../src/molecule/slider/test/fixtures/multiple-slides';
import SsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import SsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import SsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import SsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import StarRatingFixtureDefault from '../src/molecule/star-rating/test/fixtures/default';
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
import VideoPlayerFixtureDefault from '../src/molecule/video-player/test/fixtures/default';
import VideoPlayerFixtureWithImage from '../src/molecule/video-player/test/fixtures/with-image';
import VideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
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
import CatalogCardsFixtureDefault from '../src/organism/catalog-cards/test/fixtures/default';
import CatalogCardsFixtureLoading from '../src/organism/catalog-cards/test/fixtures/loading';
import CatalogCardsFixtureNoProducts from '../src/organism/catalog-cards/test/fixtures/no-products';
import DisciplineCardsFixtureEmpty from '../src/organism/discipline-cards/test/fixtures/empty';
import DisciplineCardsFixtureManyDisciplines from '../src/organism/discipline-cards/test/fixtures/many-disciplines';
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
import SettingsFixtureDefault from '../src/organism/settings/test/fixtures/default';
import SettingsFixtureFreemium from '../src/organism/settings/test/fixtures/freemium';
import SettingsFixturePremium from '../src/organism/settings/test/fixtures/premium';
import SetupHeaderFixtureDefault from '../src/organism/setup-header/test/fixtures/default';
import AuthorFixtureDefault from '../src/template/app-catalog/author/test/fixtures/default';
import AuthorFixtureLoading from '../src/template/app-catalog/author/test/fixtures/loading';
import CatalogFixtureDefault from '../src/template/app-catalog/catalog/test/fixtures/default';
import CatalogFixtureEmpty from '../src/template/app-catalog/catalog/test/fixtures/empty';
import CatalogFixtureLoading from '../src/template/app-catalog/catalog/test/fixtures/loading';
import ProductCourseFixtureDefault from '../src/template/app-catalog/product-course/test/fixtures/default';
import ProductCourseFixtureEmpty from '../src/template/app-catalog/product-course/test/fixtures/empty';
import ProductCourseFixtureLoading from '../src/template/app-catalog/product-course/test/fixtures/loading';
import ProductCourseFixtureNoVideo from '../src/template/app-catalog/product-course/test/fixtures/no-video';
import ProductCursusFixtureDefault from '../src/template/app-catalog/product-cursus/test/fixtures/default';
import ProductCursusFixtureEmpty from '../src/template/app-catalog/product-cursus/test/fixtures/empty';
import ProductCursusFixtureLoading from '../src/template/app-catalog/product-cursus/test/fixtures/loading';
import ProductCursusFixtureWithoutAssets from '../src/template/app-catalog/product-cursus/test/fixtures/without-assets';
import ProductCursusFixtureWithoutBadge from '../src/template/app-catalog/product-cursus/test/fixtures/without-badge';
import DemoFixtureDefault from '../src/template/app-player/demo/test/fixtures/default';
import LayoutPlayerFixtureDefault from '../src/template/app-player/layout-player/test/fixtures/default';
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
    Cta,
    Handle,
    ImageUpload,
    InputCheckbox,
    InputColor,
    InputDoublestep,
    InputReadonly,
    InputSwitch,
    InputText,
    InputTextarea,
    Label,
    Link,
    Loader,
    Notification,
    Picture,
    PromoCode,
    Provider,
    Select,
    Slide,
    SocialLink,
    Spinner,
    Star,
    TabContent,
    Tab,
    Title
  },
  Molecule: {
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
    CatalogAssets,
    CatalogBadge,
    CatalogCard,
    CatalogCta,
    Categories,
    Checkboxes,
    CursusHeader,
    CursusList,
    DisciplineCard,
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
    ProductCard,
    ProgressBar,
    RangeSlider,
    ScopeContent,
    ScopeTabs,
    Search,
    SelectMultiple,
    SetupSection,
    SetupSections,
    SetupSlide,
    SetupSlider,
    Slider,
    SsmenuList,
    StarRating,
    SubscriptionFreemium,
    SubscriptionPremium,
    Table,
    ThemeImage,
    TitledCheckbox,
    Unsubscribe,
    VideoIframe,
    VideoPlayer
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
  Organism: {
    BrandForm,
    BrandTable,
    BrandUpload,
    CardsGrid,
    Cart,
    CatalogCards,
    DisciplineCards,
    Discussion,
    GridList,
    Header,
    Hero,
    MoocHeader,
    Popin,
    Settings,
    SetupHeader
  },
  TemplateAppCatalog: {
    Author,
    Catalog,
    ProductCourse,
    ProductCursus
  },
  TemplateAppPlayer: {
    Demo
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
      Link: ButtonFixtureLink
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
    Cta: {
      DefaultSmall: CtaFixtureDefaultSmall,
      Default: CtaFixtureDefault,
      Light: CtaFixtureLight,
      SecondaryLight: CtaFixtureSecondaryLight,
      Secondary: CtaFixtureSecondary
    },
    Handle: {
      AxisX: HandleFixtureAxisX,
      AxisY: HandleFixtureAxisY,
      Default: HandleFixtureDefault
    },
    ImageUpload: {
      Desktop: ImageUploadFixtureDesktop,
      Email: ImageUploadFixtureEmail,
      Loading: ImageUploadFixtureLoading,
      Mobile: ImageUploadFixtureMobile,
      Modified: ImageUploadFixtureModified,
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
      Modified: InputSwitchFixtureModified,
      NoTitle: InputSwitchFixtureNoTitle,
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
    Link: {
      Href: LinkFixtureHref
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
    PromoCode: {
      Default: PromoCodeFixtureDefault,
      Error: PromoCodeFixtureError,
      Success: PromoCodeFixtureSuccess
    },
    Provider: {
      Default: ProviderFixtureDefault
    },
    Select: {
      Default: SelectFixtureDefault,
      Disabled: SelectFixtureDisabled,
      Filter: SelectFixtureFilter,
      Modified: SelectFixtureModified,
      Mooc: SelectFixtureMooc,
      MultipleSelected: SelectFixtureMultipleSelected,
      Multiple: SelectFixtureMultiple,
      Nolabel: SelectFixtureNolabel,
      Required: SelectFixtureRequired,
      Sort: SelectFixtureSort,
      ThematiqueLong: SelectFixtureThematiqueLong,
      Thematique: SelectFixtureThematique
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
    Star: {
      Disable: StarFixtureDisable,
      Enable: StarFixtureEnable
    },
    TabContent: {
      Default: TabContentFixtureDefault
    },
    Tab: {
      Default: TabFixtureDefault
    },
    Title: {
      Fixture: TitleFixtureFixture
    }
  },
  Molecule: {
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
      Default: BrandDownloadBoxFixtureDefault
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
      Loading: BrandUploadBoxFixtureLoading
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
      Empty: CardFixtureEmpty
    },
    CatalogAssets: {
      Default: CatalogAssetsFixtureDefault,
      Empty: CatalogAssetsFixtureEmpty
    },
    CatalogBadge: {
      Default: CatalogBadgeFixtureDefault,
      Empty: CatalogBadgeFixtureEmpty
    },
    CatalogCard: {
      Default: CatalogCardFixtureDefault
    },
    CatalogCta: {
      Default: CatalogCtaFixtureDefault,
      Empty: CatalogCtaFixtureEmpty,
      Norating: CatalogCtaFixtureNorating
    },
    Categories: {
      Default: CategoriesFixtureDefault
    },
    Checkboxes: {
      ClosableAndClosed: CheckboxesFixtureClosableAndClosed,
      ClosableAndOpen: CheckboxesFixtureClosableAndOpen,
      CoursesTheme: CheckboxesFixtureCoursesTheme,
      Simple: CheckboxesFixtureSimple
    },
    CursusHeader: {
      Default: CursusHeaderFixtureDefault,
      Empty: CursusHeaderFixtureEmpty
    },
    CursusList: {
      Default: CursusListFixtureDefault
    },
    DisciplineCard: {
      Hidden: DisciplineCardFixtureHidden,
      WithCourseNum: DisciplineCardFixtureWithCourseNum,
      WithModulesNoimage: DisciplineCardFixtureWithModulesNoimage,
      WithModules: DisciplineCardFixtureWithModules
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
      LongDesciption: NewsFixtureLongDesciption,
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
    ProductCard: {
      Default: ProductCardFixtureDefault
    },
    ProgressBar: {
      Default: ProgressBarFixtureDefault,
      Max: ProgressBarFixtureMax
    },
    RangeSlider: {
      Default: RangeSliderFixtureDefault,
      Minmax: RangeSliderFixtureMinmax,
      StepsForceRange: RangeSliderFixtureStepsForceRange,
      Steps: RangeSliderFixtureSteps
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
    SelectMultiple: {
      Checked: SelectMultipleFixtureChecked,
      Default: SelectMultipleFixtureDefault
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
    Slider: {
      Default: SliderFixtureDefault,
      MultipleSlides: SliderFixtureMultipleSlides
    },
    SsmenuList: {
      Coorpacademy: SsmenuListFixtureCoorpacademy,
      Empty: SsmenuListFixtureEmpty,
      Formations: SsmenuListFixtureFormations,
      Solutions: SsmenuListFixtureSolutions
    },
    StarRating: {
      Default: StarRatingFixtureDefault
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
      Default: VideoPlayerFixtureDefault,
      WithImage: VideoPlayerFixtureWithImage,
      Youtube: VideoPlayerFixtureYoutube
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
    CatalogCards: {
      Default: CatalogCardsFixtureDefault,
      Loading: CatalogCardsFixtureLoading,
      NoProducts: CatalogCardsFixtureNoProducts
    },
    DisciplineCards: {
      Empty: DisciplineCardsFixtureEmpty,
      ManyDisciplines: DisciplineCardsFixtureManyDisciplines
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
    Settings: {
      Default: SettingsFixtureDefault,
      Freemium: SettingsFixtureFreemium,
      Premium: SettingsFixturePremium
    },
    SetupHeader: {
      Default: SetupHeaderFixtureDefault
    }
  },
  TemplateAppCatalog: {
    Author: {
      Default: AuthorFixtureDefault,
      Loading: AuthorFixtureLoading
    },
    Catalog: {
      Default: CatalogFixtureDefault,
      Empty: CatalogFixtureEmpty,
      Loading: CatalogFixtureLoading
    },
    ProductCourse: {
      Default: ProductCourseFixtureDefault,
      Empty: ProductCourseFixtureEmpty,
      Loading: ProductCourseFixtureLoading,
      NoVideo: ProductCourseFixtureNoVideo
    },
    ProductCursus: {
      Default: ProductCursusFixtureDefault,
      Empty: ProductCursusFixtureEmpty,
      Loading: ProductCursusFixtureLoading,
      WithoutAssets: ProductCursusFixtureWithoutAssets,
      WithoutBadge: ProductCursusFixtureWithoutBadge
    }
  },
  TemplateAppPlayer: {
    Demo: {
      Default: DemoFixtureDefault
    },
    LayoutPlayer: {
      Default: LayoutPlayerFixtureDefault
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
          "Select": true
        },
        "Molecule": {
          "RangeSlider": true
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
        },
        "TemplateAppCatalog": {
          "ProductCourse": true,
          "Author": true
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
        },
        "TemplateAppCatalog": {
          "ProductCourse": true,
          "Author": true
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
        },
        "TemplateAppCatalog": {
          "ProductCourse": true
        }
      },
      "children": {
        "Molecule": {
          "ScopeContent": true,
          "ScopeTabs": true
        }
      }
    },
    "CatalogAssets": {
      "parents": {
        "TemplateAppCatalog": {
          "ProductCursus": true
        }
      },
      "children": {}
    },
    "CatalogBadge": {
      "parents": {
        "TemplateAppCatalog": {
          "ProductCursus": true
        }
      },
      "children": {
        "Atom": {
          "Picture": true
        }
      }
    },
    "CatalogCta": {
      "parents": {
        "TemplateAppCatalog": {
          "ProductCursus": true,
          "ProductCourse": true
        }
      },
      "children": {
        "Molecule": {
          "StarRating": true
        }
      }
    },
    "CursusHeader": {
      "parents": {
        "TemplateAppCatalog": {
          "ProductCursus": true
        }
      },
      "children": {
        "Atom": {
          "Picture": true
        }
      }
    },
    "Categories": {
      "parents": {
        "TemplateAppCatalog": {
          "Catalog": true
        }
      },
      "children": {
        "Atom": {
          "Checkbox": true,
          "Link": true
        }
      }
    },
    "CursusList": {
      "parents": {
        "TemplateAppCatalog": {
          "Catalog": true
        }
      },
      "children": {
        "Atom": {
          "Link": true
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
    "Slider": {
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
    "DisciplineCard": {
      "parents": {
        "Organism": {
          "DisciplineCards": true
        }
      },
      "children": {
        "Molecule": {
          "ModuleBubble": true
        }
      }
    },
    "CatalogCard": {
      "parents": {
        "Organism": {
          "CatalogCards": true
        }
      },
      "children": {
        "Atom": {
          "Link": true,
          "Picture": true
        },
        "Molecule": {
          "StarRating": true
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
    "VideoIframe": {
      "parents": {
        "Molecule": {
          "VideoPlayer": true,
          "DisciplineHeader": true
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
    "TitledCheckbox": {
      "parents": {
        "Molecule": {
          "SelectMultiple": true,
          "Checkboxes": true
        }
      },
      "children": {
        "Atom": {
          "Checkbox": true
        }
      }
    },
    "ModuleBubble": {
      "parents": {
        "Molecule": {
          "ScopeTabs": true,
          "ModuleCard": true,
          "DisciplineCard": true
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
    "RangeSlider": {
      "parents": {
        "Molecule": {
          "Filters": true
        }
      },
      "children": {
        "Atom": {
          "Handle": true
        }
      }
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
    "StarRating": {
      "parents": {
        "Molecule": {
          "CatalogCta": true,
          "CatalogCard": true
        }
      },
      "children": {
        "Atom": {
          "Star": true
        }
      }
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
    "Checkboxes": {
      "children": {
        "Molecule": {
          "TitledCheckbox": true
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
    "SelectMultiple": {
      "children": {
        "Molecule": {
          "TitledCheckbox": true
        }
      }
    },
    "ThemeImage": {
      "children": {}
    },
    "Unsubscribe": {
      "children": {
        "Atom": {
          "Link": true
        }
      }
    },
    "VideoPlayer": {
      "children": {
        "Atom": {
          "Picture": true
        },
        "Molecule": {
          "VideoIframe": true
        }
      }
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
    "CatalogCards": {
      "parents": {
        "TemplateAppCatalog": {
          "ProductCursus": true,
          "ProductCourse": true,
          "Catalog": true,
          "Author": true
        }
      },
      "children": {
        "Molecule": {
          "CatalogCard": true
        },
        "Atom": {
          "Spinner": true
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
    "DisciplineCards": {
      "children": {
        "Molecule": {
          "DisciplineCard": true
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
        "Molecule": {
          "Slider": true
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
      "children": {
        "Atom": {
          "Link": true
        }
      }
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
        "MoleculeDashboard": {
          "StartBattle": true
        },
        "Molecule": {
          "Unsubscribe": true,
          "Table": true,
          "ScopeContent": true,
          "Pagination": true,
          "News": true,
          "DisciplinePartners": true,
          "CursusList": true,
          "Categories": true,
          "CatalogCard": true,
          "Breadcrumbs": true,
          "BrandTabs": true,
          "BrandCard": true,
          "BrandCardCreate": true
        },
        "Atom": {
          "Cta": true,
          "Button": true
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
          "VideoPlayer": true,
          "DisciplinePartners": true,
          "CursusHeader": true,
          "CatalogCard": true,
          "CatalogBadge": true,
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
      "children": {
        "Atom": {
          "Link": true
        }
      }
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
        "Molecule": {
          "SetupSlide": true,
          "Filters": true
        }
      },
      "children": {}
    },
    "Loader": {
      "parents": {
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
          "ImageUpload": true
        }
      },
      "children": {}
    },
    "Spinner": {
      "parents": {
        "Organism": {
          "CatalogCards": true
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
    "Checkbox": {
      "parents": {
        "Molecule": {
          "TitledCheckbox": true,
          "Table": true,
          "Categories": true
        }
      },
      "children": {}
    },
    "Star": {
      "parents": {
        "Molecule": {
          "StarRating": true
        }
      },
      "children": {}
    },
    "Slide": {
      "parents": {
        "Molecule": {
          "Slider": true
        }
      },
      "children": {
        "Atom": {
          "Cta": true
        }
      }
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
    "Handle": {
      "parents": {
        "Molecule": {
          "RangeSlider": true
        }
      },
      "children": {}
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
    "Provider": {
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
  "TemplateAppCatalog": {
    "Author": {
      "children": {
        "Molecule": {
          "DisciplineHeader": true,
          "DisciplinePartners": true
        },
        "Organism": {
          "CatalogCards": true
        }
      }
    },
    "Catalog": {
      "children": {
        "Molecule": {
          "Categories": true,
          "CursusList": true
        },
        "Organism": {
          "CatalogCards": true
        }
      }
    },
    "ProductCourse": {
      "children": {
        "Molecule": {
          "CatalogCta": true,
          "DisciplineHeader": true,
          "DisciplinePartners": true,
          "DisciplineScope": true
        },
        "Organism": {
          "CatalogCards": true
        }
      }
    },
    "ProductCursus": {
      "children": {
        "Molecule": {
          "CatalogAssets": true,
          "CatalogBadge": true,
          "CatalogCta": true,
          "CursusHeader": true
        },
        "Organism": {
          "CatalogCards": true
        }
      }
    }
  },
  "TemplateAppPlayer": {
    "Demo": {
      "children": {}
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
