import createCenteredText from '../src/atom/centered-text';
import createInputCheckbox from '../src/atom/input-checkbox';
import createInputColor from '../src/atom/input-color';
import createInputDoublestep from '../src/atom/input-doublestep';
import createInputReadonly from '../src/atom/input-readonly';
import createInputSwitch from '../src/atom/input-switch';
import createInputText from '../src/atom/input-text';
import createInputTextarea from '../src/atom/input-textarea';
import createLabelModName from '../src/atom/label-mod-name';
import createLabelNormal from '../src/atom/label-normal';
import createLabel from '../src/atom/label';
import createLink from '../src/atom/link';
import createNotification from '../src/atom/notification';
import createPicture from '../src/atom/picture';
import createSearch from '../src/atom/search';
import createSelect from '../src/atom/select';
import createSocialLink from '../src/atom/social-link';
import createSpinner from '../src/atom/spinner';
import createStar from '../src/atom/star';
import createTitle from '../src/atom/title';
import createCentered from '../src/behaviour/align/centered';
import createPrimary from '../src/behaviour/color/primary';
import createTextInverted from '../src/behaviour/color/text-inverted';
import createTextNormal from '../src/behaviour/color/text-normal';
import createHoverFill from '../src/behaviour/effects/hover-fill';
import createRadialFocus from '../src/behaviour/effects/radial-focus';
import createEllipsis from '../src/behaviour/font/ellipsis';
import createEmbossed from '../src/behaviour/font/embossed';
import createNormal from '../src/behaviour/font/normal';
import createTiny from '../src/behaviour/font/tiny';
import createUppercase from '../src/behaviour/font/uppercase';
import createBrandCardCreate from '../src/molecule/brand-card-create';
import createBrandCard from '../src/molecule/brand-card';
import createBrandCreateForm from '../src/molecule/brand-create-form';
import createBrandFormGroup from '../src/molecule/brand-form-group';
import createBrandTabs from '../src/molecule/brand-tabs';
import createBreadcrumbs from '../src/molecule/breadcrumbs';
import createCatalogCard from '../src/molecule/catalog-card';
import createCatalogCta from '../src/molecule/catalog-cta';
import createCategories from '../src/molecule/categories';
import createCheckboxes from '../src/molecule/checkboxes';
import createCursusHeader from '../src/molecule/cursus-header';
import createCursusList from '../src/molecule/cursus-list';
import createDisciplineCard from '../src/molecule/discipline-card';
import createDisciplineHeader from '../src/molecule/discipline-header';
import createDisciplineScope from '../src/molecule/discipline-scope';
import createFormGroup from '../src/molecule/form-group';
import createMenuList from '../src/molecule/menu-list';
import createModuleBubble from '../src/molecule/module-bubble';
import createPagination from '../src/molecule/pagination';
import createScopeContent from '../src/molecule/scope-content';
import createScopeTabs from '../src/molecule/scope-tabs';
import createSearch from '../src/molecule/search';
import createSelectBox from '../src/molecule/select-box';
import createSsmenuList from '../src/molecule/ssmenu-list';
import createStarRating from '../src/molecule/star-rating';
import createTable from '../src/molecule/table';
import createThemeImage from '../src/molecule/theme-image';
import createTitledCheckbox from '../src/molecule/titled-checkbox';
import createTransifexList from '../src/molecule/transifex-list';
import createVideoIframe from '../src/molecule/video-iframe';
import createVideoPlayer from '../src/molecule/video-player';
import createForumComment from '../src/molecule/forum/forum-comment';
import createForumPost from '../src/molecule/forum/forum-post';
import createForumThread from '../src/molecule/forum/forum-thread';
import createBrandForm from '../src/organism/brand-form';
import createBrandTable from '../src/organism/brand-table';
import createCatalogCards from '../src/organism/catalog-cards';
import createCursusRightaside from '../src/organism/cursus-rightaside';
import createDisciplineCards from '../src/organism/discipline-cards';
import createDisciplineRightaside from '../src/organism/discipline-rightaside';
import createDiscussion from '../src/organism/discussion';
import createForm from '../src/organism/form';
import createGridList from '../src/organism/grid-list';
import createHeader from '../src/organism/header';
import createHero from '../src/organism/hero';
import createSetupHeader from '../src/organism/setup-header';
import createAuthor from '../src/template/app-catalog/author';
import createCatalog from '../src/template/app-catalog/catalog';
import createProductCourse from '../src/template/app-catalog/product-course';
import createProductCursus from '../src/template/app-catalog/product-cursus';
import createBrandCreate from '../src/template/back-office/brand-create';
import createBrandList from '../src/template/back-office/brand-list';
import createBrandUpdate from '../src/template/back-office/brand-update';
import createLayout from '../src/template/back-office/layout';
import createCoorpHeader from '../src/template/common/coorp-header';
import createCenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import createInputCheckboxFixtureChecked from '../src/atom/input-checkbox/test/fixtures/checked';
import createInputCheckboxFixtureDefault from '../src/atom/input-checkbox/test/fixtures/default';
import createInputCheckboxFixtureDisabled from '../src/atom/input-checkbox/test/fixtures/disabled';
import createInputCheckboxFixtureError from '../src/atom/input-checkbox/test/fixtures/error';
import createInputCheckboxFixtureRequired from '../src/atom/input-checkbox/test/fixtures/required';
import createInputColorFixtureDefault from '../src/atom/input-color/test/fixtures/default';
import createInputColorFixtureEmpty from '../src/atom/input-color/test/fixtures/empty';
import createInputColorFixtureError from '../src/atom/input-color/test/fixtures/error';
import createInputDoublestepFixtureDefault from '../src/atom/input-doublestep/test/fixtures/default';
import createInputReadonlyFixtureDefault from '../src/atom/input-readonly/test/fixtures/default';
import createInputSwitchFixtureChecked from '../src/atom/input-switch/test/fixtures/checked';
import createInputSwitchFixtureUnchecked from '../src/atom/input-switch/test/fixtures/unchecked';
import createInputSwitchFixtureUnset from '../src/atom/input-switch/test/fixtures/unset';
import createInputTextFixtureDefault from '../src/atom/input-text/test/fixtures/default';
import createInputTextFixtureDisabled from '../src/atom/input-text/test/fixtures/disabled';
import createInputTextFixtureEmpty from '../src/atom/input-text/test/fixtures/empty';
import createInputTextFixtureError from '../src/atom/input-text/test/fixtures/error';
import createInputTextFixtureRequired from '../src/atom/input-text/test/fixtures/required';
import createInputTextareaFixtureDefault from '../src/atom/input-textarea/test/fixtures/default';
import createInputTextareaFixtureEmpty from '../src/atom/input-textarea/test/fixtures/empty';
import createInputTextareaFixtureError from '../src/atom/input-textarea/test/fixtures/error';
import createLabelModNameFixtureFixture from '../src/atom/label-mod-name/test/fixtures/fixture';
import createLabelNormalFixtureFixture from '../src/atom/label-normal/test/fixtures/fixture';
import createLabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import createLabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import createLinkFixtureHref from '../src/atom/link/test/fixtures/href';
import createNotificationFixtureDefault from '../src/atom/notification/test/fixtures/default';
import createNotificationFixtureError from '../src/atom/notification/test/fixtures/error';
import createPictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import createPictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import createPictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import createSearchFixtureDefault from '../src/atom/search/test/fixtures/default';
import createSelectFixtureDefault from '../src/atom/select/test/fixtures/default';
import createSelectFixtureDisabled from '../src/atom/select/test/fixtures/disabled';
import createSelectFixtureRequired from '../src/atom/select/test/fixtures/required';
import createSocialLinkFixtureFacebook from '../src/atom/social-link/test/fixtures/facebook';
import createSocialLinkFixtureTwitter from '../src/atom/social-link/test/fixtures/twitter';
import createSpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import createStarFixtureDisable from '../src/atom/star/test/fixtures/disable';
import createStarFixtureEnable from '../src/atom/star/test/fixtures/enable';
import createTitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
import createCenteredFixtureDefault from '../src/behaviour/align/centered/test/fixtures/default';
import createPrimaryFixtureDefault from '../src/behaviour/color/primary/test/fixtures/default';
import createTextInvertedFixtureDefault from '../src/behaviour/color/text-inverted/test/fixtures/default';
import createTextNormalFixtureDefault from '../src/behaviour/color/text-normal/test/fixtures/default';
import createHoverFillFixtureDefault from '../src/behaviour/effects/hover-fill/test/fixtures/default';
import createRadialFocusFixtureDefault from '../src/behaviour/effects/radial-focus/test/fixtures/default';
import createEllipsisFixtureDefault from '../src/behaviour/font/ellipsis/test/fixtures/default';
import createEmbossedFixtureDefault from '../src/behaviour/font/embossed/test/fixtures/default';
import createNormalFixtureDefault from '../src/behaviour/font/normal/test/fixtures/default';
import createTinyFixtureDefault from '../src/behaviour/font/tiny/test/fixtures/default';
import createUppercaseFixtureDefault from '../src/behaviour/font/uppercase/test/fixtures/default';
import createBrandCardCreateFixtureDefault from '../src/molecule/brand-card-create/test/fixtures/default';
import createBrandCardFixtureDefault from '../src/molecule/brand-card/test/fixtures/default';
import createBrandCreateFormFixtureDefault from '../src/molecule/brand-create-form/test/fixtures/default';
import createBrandCreateFormFixtureError from '../src/molecule/brand-create-form/test/fixtures/error';
import createBrandCreateFormFixtureLoading from '../src/molecule/brand-create-form/test/fixtures/loading';
import createBrandCreateFormFixtureModified from '../src/molecule/brand-create-form/test/fixtures/modified';
import createBrandFormGroupFixtureDefault from '../src/molecule/brand-form-group/test/fixtures/default';
import createBrandFormGroupFixtureLookandfeel from '../src/molecule/brand-form-group/test/fixtures/lookandfeel';
import createBrandFormGroupFixtureRoles from '../src/molecule/brand-form-group/test/fixtures/roles';
import createBrandFormGroupFixtureSso from '../src/molecule/brand-form-group/test/fixtures/sso';
import createBrandTabsFixtureDefault from '../src/molecule/brand-tabs/test/fixtures/default';
import createBrandTabsFixtureLookandfeel from '../src/molecule/brand-tabs/test/fixtures/lookandfeel';
import createBrandTabsFixtureSso from '../src/molecule/brand-tabs/test/fixtures/sso';
import createBrandTabsFixtureUsers from '../src/molecule/brand-tabs/test/fixtures/users';
import createBreadcrumbsFixtureDefault from '../src/molecule/breadcrumbs/test/fixtures/default';
import createCatalogCardFixtureDefault from '../src/molecule/catalog-card/test/fixtures/default';
import createCatalogCtaFixtureDefault from '../src/molecule/catalog-cta/test/fixtures/default';
import createCatalogCtaFixtureEmpty from '../src/molecule/catalog-cta/test/fixtures/empty';
import createCategoriesFixtureDefault from '../src/molecule/categories/test/fixtures/default';
import createCheckboxesFixtureClosableAndClosed from '../src/molecule/checkboxes/test/fixtures/closable-and-closed';
import createCheckboxesFixtureClosableAndOpen from '../src/molecule/checkboxes/test/fixtures/closable-and-open';
import createCheckboxesFixtureCoursesTheme from '../src/molecule/checkboxes/test/fixtures/courses-theme';
import createCheckboxesFixtureSimple from '../src/molecule/checkboxes/test/fixtures/simple';
import createCursusHeaderFixtureDefault from '../src/molecule/cursus-header/test/fixtures/default';
import createCursusHeaderFixtureEmpty from '../src/molecule/cursus-header/test/fixtures/empty';
import createCursusListFixtureDefault from '../src/molecule/cursus-list/test/fixtures/default';
import createDisciplineCardFixtureAsRow from '../src/molecule/discipline-card/test/fixtures/as-row';
import createDisciplineCardFixtureHidden from '../src/molecule/discipline-card/test/fixtures/hidden';
import createDisciplineCardFixtureWithCourseNumCircle from '../src/molecule/discipline-card/test/fixtures/with-course-num-circle';
import createDisciplineCardFixtureWithCourseNum from '../src/molecule/discipline-card/test/fixtures/with-course-num';
import createDisciplineCardFixtureWithModulesCircle from '../src/molecule/discipline-card/test/fixtures/with-modules-circle';
import createDisciplineCardFixtureWithModules from '../src/molecule/discipline-card/test/fixtures/with-modules';
import createDisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import createDisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import createDisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import createDisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import createDisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import createFormGroupFixtureDefault from '../src/molecule/form-group/test/fixtures/default';
import createMenuListFixtureBuildTransifex from '../src/molecule/menu-list/test/fixtures/build-transifex';
import createMenuListFixtureDefault from '../src/molecule/menu-list/test/fixtures/default';
import createModuleBubbleFixtureDefault from '../src/molecule/module-bubble/test/fixtures/default';
import createModuleBubbleFixtureDisabled from '../src/molecule/module-bubble/test/fixtures/disabled';
import createPaginationFixtureDefault from '../src/molecule/pagination/test/fixtures/default';
import createScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import createScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import createScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import createScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import createSearchFixtureDefault from '../src/molecule/search/test/fixtures/default';
import createSelectBoxFixtureDefaultTheme from '../src/molecule/select-box/test/fixtures/default-theme';
import createSelectBoxFixturePlainTheme from '../src/molecule/select-box/test/fixtures/plain-theme';
import createSelectBoxFixtureWithItems from '../src/molecule/select-box/test/fixtures/with-items';
import createSsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import createSsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import createSsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import createSsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import createStarRatingFixtureDefault from '../src/molecule/star-rating/test/fixtures/default';
import createTableFixtureDefault from '../src/molecule/table/test/fixtures/default';
import createThemeImageFixtureBg from '../src/molecule/theme-image/test/fixtures/bg';
import createTitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import createTitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import createTitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
import createTransifexListFixtureDefault from '../src/molecule/transifex-list/test/fixtures/default';
import createVideoIframeFixtureDefault from '../src/molecule/video-iframe/test/fixtures/default';
import createVideoIframeFixtureEmpty from '../src/molecule/video-iframe/test/fixtures/empty';
import createVideoIframeFixtureImagePlaceholder from '../src/molecule/video-iframe/test/fixtures/image-placeholder';
import createVideoIframeFixtureYoutube from '../src/molecule/video-iframe/test/fixtures/youtube';
import createVideoPlayerFixtureDefault from '../src/molecule/video-player/test/fixtures/default';
import createVideoPlayerFixtureWithImage from '../src/molecule/video-player/test/fixtures/with-image';
import createVideoPlayerFixtureYoutube from '../src/molecule/video-player/test/fixtures/youtube';
import createForumCommentFixtureDefault from '../src/molecule/forum/forum-comment/test/fixtures/default';
import createForumCommentFixturePostDisabled from '../src/molecule/forum/forum-comment/test/fixtures/post-disabled';
import createForumCommentFixtureTextareaDisabled from '../src/molecule/forum/forum-comment/test/fixtures/textarea-disabled';
import createForumPostFixtureDefault from '../src/molecule/forum/forum-post/test/fixtures/default';
import createForumPostFixtureDeleted from '../src/molecule/forum/forum-post/test/fixtures/deleted';
import createForumPostFixtureEditable from '../src/molecule/forum/forum-post/test/fixtures/editable';
import createForumPostFixtureNotEditableNotRejectable from '../src/molecule/forum/forum-post/test/fixtures/not-editable-not-rejectable';
import createForumPostFixturePostsLocked from '../src/molecule/forum/forum-post/test/fixtures/posts-locked';
import createForumPostFixtureRejectable from '../src/molecule/forum/forum-post/test/fixtures/rejectable';
import createForumPostFixtureRejected from '../src/molecule/forum/forum-post/test/fixtures/rejected';
import createForumPostFixtureTextareasLocked from '../src/molecule/forum/forum-post/test/fixtures/textareas-locked';
import createForumThreadFixtureDeepAnswers from '../src/molecule/forum/forum-thread/test/fixtures/deep-answers';
import createForumThreadFixtureDefault from '../src/molecule/forum/forum-thread/test/fixtures/default';
import createForumThreadFixtureWithAnswers from '../src/molecule/forum/forum-thread/test/fixtures/with-answers';
import createBrandFormFixtureDefault from '../src/organism/brand-form/test/fixtures/default';
import createBrandFormFixtureGeneralSettings from '../src/organism/brand-form/test/fixtures/general-settings';
import createBrandFormFixtureLookandfeel from '../src/organism/brand-form/test/fixtures/lookandfeel';
import createBrandFormFixtureSso from '../src/organism/brand-form/test/fixtures/sso';
import createBrandFormFixtureUserEdit from '../src/organism/brand-form/test/fixtures/user-edit';
import createBrandFormFixtureUserImport from '../src/organism/brand-form/test/fixtures/user-import';
import createBrandTableFixtureDefault from '../src/organism/brand-table/test/fixtures/default';
import createCatalogCardsFixtureDefault from '../src/organism/catalog-cards/test/fixtures/default';
import createCatalogCardsFixtureLoading from '../src/organism/catalog-cards/test/fixtures/loading';
import createCatalogCardsFixtureNoProducts from '../src/organism/catalog-cards/test/fixtures/no-products';
import createCursusRightasideFixtureDefault from '../src/organism/cursus-rightaside/test/fixtures/default';
import createCursusRightasideFixtureEmpty from '../src/organism/cursus-rightaside/test/fixtures/empty';
import createDisciplineCardsFixtureEmpty from '../src/organism/discipline-cards/test/fixtures/empty';
import createDisciplineCardsFixtureManyDisciplinesCircle from '../src/organism/discipline-cards/test/fixtures/many-disciplines-circle';
import createDisciplineCardsFixtureManyDisciplines from '../src/organism/discipline-cards/test/fixtures/many-disciplines';
import createDisciplineRightasideFixtureAuthor from '../src/organism/discipline-rightaside/test/fixtures/author';
import createDisciplineRightasideFixtureDefault from '../src/organism/discipline-rightaside/test/fixtures/default';
import createDisciplineRightasideFixtureEmpty from '../src/organism/discipline-rightaside/test/fixtures/empty';
import createDiscussionFixtureDefault from '../src/organism/discussion/test/fixtures/default';
import createDiscussionFixtureModeration from '../src/organism/discussion/test/fixtures/moderation';
import createDiscussionFixtureNewDiscussion from '../src/organism/discussion/test/fixtures/new-discussion';
import createFormFixtureDefault from '../src/organism/form/test/fixtures/default';
import createGridListFixtureDefault from '../src/organism/grid-list/test/fixtures/default';
import createHeaderFixtureDefault from '../src/organism/header/test/fixtures/default';
import createHeroFixtureDefault from '../src/organism/hero/test/fixtures/default';
import createSetupHeaderFixtureDefault from '../src/organism/setup-header/test/fixtures/default';
import createAuthorFixtureDefault from '../src/template/app-catalog/author/test/fixtures/default';
import createAuthorFixtureLoading from '../src/template/app-catalog/author/test/fixtures/loading';
import createCatalogFixtureDefault from '../src/template/app-catalog/catalog/test/fixtures/default';
import createCatalogFixtureEmpty from '../src/template/app-catalog/catalog/test/fixtures/empty';
import createCatalogFixtureLoading from '../src/template/app-catalog/catalog/test/fixtures/loading';
import createProductCourseFixtureDefault from '../src/template/app-catalog/product-course/test/fixtures/default';
import createProductCourseFixtureEmpty from '../src/template/app-catalog/product-course/test/fixtures/empty';
import createProductCourseFixtureLoading from '../src/template/app-catalog/product-course/test/fixtures/loading';
import createProductCourseFixtureNoVideo from '../src/template/app-catalog/product-course/test/fixtures/no-video';
import createProductCursusFixtureDefault from '../src/template/app-catalog/product-cursus/test/fixtures/default';
import createProductCursusFixtureEmpty from '../src/template/app-catalog/product-cursus/test/fixtures/empty';
import createProductCursusFixtureLoading from '../src/template/app-catalog/product-cursus/test/fixtures/loading';
import createBrandCreateFixtureDefault from '../src/template/back-office/brand-create/test/fixtures/default';
import createBrandCreateFixtureError from '../src/template/back-office/brand-create/test/fixtures/error';
import createBrandCreateFixtureLoading from '../src/template/back-office/brand-create/test/fixtures/loading';
import createBrandCreateFixtureModified from '../src/template/back-office/brand-create/test/fixtures/modified';
import createBrandListFixtureDefault from '../src/template/back-office/brand-list/test/fixtures/default';
import createBrandListFixtureLoading from '../src/template/back-office/brand-list/test/fixtures/loading';
import createBrandUpdateFixtureDefault from '../src/template/back-office/brand-update/test/fixtures/default';
import createBrandUpdateFixtureGeneralSettingsSuccess from '../src/template/back-office/brand-update/test/fixtures/general-settings-success';
import createBrandUpdateFixtureGeneralSettings from '../src/template/back-office/brand-update/test/fixtures/general-settings';
import createBrandUpdateFixtureLookandfeelError from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-error';
import createBrandUpdateFixtureLookandfeelModified from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-modified';
import createBrandUpdateFixtureLookandfeelPending from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-pending';
import createBrandUpdateFixtureLookandfeelSuccess from '../src/template/back-office/brand-update/test/fixtures/lookandfeel-success';
import createBrandUpdateFixtureLookandfeel from '../src/template/back-office/brand-update/test/fixtures/lookandfeel';
import createBrandUpdateFixtureSsoActivate from '../src/template/back-office/brand-update/test/fixtures/sso-activate';
import createBrandUpdateFixtureSso from '../src/template/back-office/brand-update/test/fixtures/sso';
import createBrandUpdateFixtureUsersEdit from '../src/template/back-office/brand-update/test/fixtures/users-edit';
import createBrandUpdateFixtureUsersImport from '../src/template/back-office/brand-update/test/fixtures/users-import';
import createBrandUpdateFixtureUsersList from '../src/template/back-office/brand-update/test/fixtures/users-list';
import createBrandUpdateFixtureUsers from '../src/template/back-office/brand-update/test/fixtures/users';
import createLayoutFixtureDefault from '../src/template/back-office/layout/test/fixtures/default';
import createCoorpHeaderFixtureProduction from '../src/template/common/coorp-header/test/fixtures/production';
import createCoorpHeaderFixtureStaging from '../src/template/common/coorp-header/test/fixtures/staging';

export const components = {
  Atom: {
    CenteredText: createCenteredText,
    InputCheckbox: createInputCheckbox,
    InputColor: createInputColor,
    InputDoublestep: createInputDoublestep,
    InputReadonly: createInputReadonly,
    InputSwitch: createInputSwitch,
    InputText: createInputText,
    InputTextarea: createInputTextarea,
    LabelModName: createLabelModName,
    LabelNormal: createLabelNormal,
    Label: createLabel,
    Link: createLink,
    Notification: createNotification,
    Picture: createPicture,
    Search: createSearch,
    Select: createSelect,
    SocialLink: createSocialLink,
    Spinner: createSpinner,
    Star: createStar,
    Title: createTitle
  },
  BehaviourAlign: {
    Centered: createCentered
  },
  BehaviourColor: {
    Primary: createPrimary,
    TextInverted: createTextInverted,
    TextNormal: createTextNormal
  },
  BehaviourEffects: {
    HoverFill: createHoverFill,
    RadialFocus: createRadialFocus
  },
  BehaviourFont: {
    Ellipsis: createEllipsis,
    Embossed: createEmbossed,
    Normal: createNormal,
    Tiny: createTiny,
    Uppercase: createUppercase
  },
  Molecule: {
    BrandCardCreate: createBrandCardCreate,
    BrandCard: createBrandCard,
    BrandCreateForm: createBrandCreateForm,
    BrandFormGroup: createBrandFormGroup,
    BrandTabs: createBrandTabs,
    Breadcrumbs: createBreadcrumbs,
    CatalogCard: createCatalogCard,
    CatalogCta: createCatalogCta,
    Categories: createCategories,
    Checkboxes: createCheckboxes,
    CursusHeader: createCursusHeader,
    CursusList: createCursusList,
    DisciplineCard: createDisciplineCard,
    DisciplineHeader: createDisciplineHeader,
    DisciplineScope: createDisciplineScope,
    FormGroup: createFormGroup,
    MenuList: createMenuList,
    ModuleBubble: createModuleBubble,
    Pagination: createPagination,
    ScopeContent: createScopeContent,
    ScopeTabs: createScopeTabs,
    Search: createSearch,
    SelectBox: createSelectBox,
    SsmenuList: createSsmenuList,
    StarRating: createStarRating,
    Table: createTable,
    ThemeImage: createThemeImage,
    TitledCheckbox: createTitledCheckbox,
    TransifexList: createTransifexList,
    VideoIframe: createVideoIframe,
    VideoPlayer: createVideoPlayer
  },
  MoleculeForum: {
    ForumComment: createForumComment,
    ForumPost: createForumPost,
    ForumThread: createForumThread
  },
  Organism: {
    BrandForm: createBrandForm,
    BrandTable: createBrandTable,
    CatalogCards: createCatalogCards,
    CursusRightaside: createCursusRightaside,
    DisciplineCards: createDisciplineCards,
    DisciplineRightaside: createDisciplineRightaside,
    Discussion: createDiscussion,
    Form: createForm,
    GridList: createGridList,
    Header: createHeader,
    Hero: createHero,
    SetupHeader: createSetupHeader
  },
  TemplateAppCatalog: {
    Author: createAuthor,
    Catalog: createCatalog,
    ProductCourse: createProductCourse,
    ProductCursus: createProductCursus
  },
  TemplateBackOffice: {
    BrandCreate: createBrandCreate,
    BrandList: createBrandList,
    BrandUpdate: createBrandUpdate,
    Layout: createLayout
  },
  TemplateCommon: {
    CoorpHeader: createCoorpHeader
  }
};
export const fixtures = {
  Atom: {
    CenteredText: {
      Default: createCenteredTextFixtureDefault
    },
    InputCheckbox: {
      Checked: createInputCheckboxFixtureChecked,
      Default: createInputCheckboxFixtureDefault,
      Disabled: createInputCheckboxFixtureDisabled,
      Error: createInputCheckboxFixtureError,
      Required: createInputCheckboxFixtureRequired
    },
    InputColor: {
      Default: createInputColorFixtureDefault,
      Empty: createInputColorFixtureEmpty,
      Error: createInputColorFixtureError
    },
    InputDoublestep: {
      Default: createInputDoublestepFixtureDefault
    },
    InputReadonly: {
      Default: createInputReadonlyFixtureDefault
    },
    InputSwitch: {
      Checked: createInputSwitchFixtureChecked,
      Unchecked: createInputSwitchFixtureUnchecked,
      Unset: createInputSwitchFixtureUnset
    },
    InputText: {
      Default: createInputTextFixtureDefault,
      Disabled: createInputTextFixtureDisabled,
      Empty: createInputTextFixtureEmpty,
      Error: createInputTextFixtureError,
      Required: createInputTextFixtureRequired
    },
    InputTextarea: {
      Default: createInputTextareaFixtureDefault,
      Empty: createInputTextareaFixtureEmpty,
      Error: createInputTextareaFixtureError
    },
    LabelModName: {
      Fixture: createLabelModNameFixtureFixture
    },
    LabelNormal: {
      Fixture: createLabelNormalFixtureFixture
    },
    Label: {
      OneChild: createLabelFixtureOneChild,
      TwoChildren: createLabelFixtureTwoChildren
    },
    Link: {
      Href: createLinkFixtureHref
    },
    Notification: {
      Default: createNotificationFixtureDefault,
      Error: createNotificationFixtureError
    },
    Picture: {
      Default: createPictureFixtureDefault,
      Empty: createPictureFixtureEmpty,
      SimpleSrc: createPictureFixtureSimpleSrc
    },
    Search: {
      Default: createSearchFixtureDefault
    },
    Select: {
      Default: createSelectFixtureDefault,
      Disabled: createSelectFixtureDisabled,
      Required: createSelectFixtureRequired
    },
    SocialLink: {
      Facebook: createSocialLinkFixtureFacebook,
      Twitter: createSocialLinkFixtureTwitter
    },
    Spinner: {
      Default: createSpinnerFixtureDefault
    },
    Star: {
      Disable: createStarFixtureDisable,
      Enable: createStarFixtureEnable
    },
    Title: {
      Fixture: createTitleFixtureFixture
    }
  },
  BehaviourAlign: {
    Centered: {
      Default: createCenteredFixtureDefault
    }
  },
  BehaviourColor: {
    Primary: {
      Default: createPrimaryFixtureDefault
    },
    TextInverted: {
      Default: createTextInvertedFixtureDefault
    },
    TextNormal: {
      Default: createTextNormalFixtureDefault
    }
  },
  BehaviourEffects: {
    HoverFill: {
      Default: createHoverFillFixtureDefault
    },
    RadialFocus: {
      Default: createRadialFocusFixtureDefault
    }
  },
  BehaviourFont: {
    Ellipsis: {
      Default: createEllipsisFixtureDefault
    },
    Embossed: {
      Default: createEmbossedFixtureDefault
    },
    Normal: {
      Default: createNormalFixtureDefault
    },
    Tiny: {
      Default: createTinyFixtureDefault
    },
    Uppercase: {
      Default: createUppercaseFixtureDefault
    }
  },
  Molecule: {
    BrandCardCreate: {
      Default: createBrandCardCreateFixtureDefault
    },
    BrandCard: {
      Default: createBrandCardFixtureDefault
    },
    BrandCreateForm: {
      Default: createBrandCreateFormFixtureDefault,
      Error: createBrandCreateFormFixtureError,
      Loading: createBrandCreateFormFixtureLoading,
      Modified: createBrandCreateFormFixtureModified
    },
    BrandFormGroup: {
      Default: createBrandFormGroupFixtureDefault,
      Lookandfeel: createBrandFormGroupFixtureLookandfeel,
      Roles: createBrandFormGroupFixtureRoles,
      Sso: createBrandFormGroupFixtureSso
    },
    BrandTabs: {
      Default: createBrandTabsFixtureDefault,
      Lookandfeel: createBrandTabsFixtureLookandfeel,
      Sso: createBrandTabsFixtureSso,
      Users: createBrandTabsFixtureUsers
    },
    Breadcrumbs: {
      Default: createBreadcrumbsFixtureDefault
    },
    CatalogCard: {
      Default: createCatalogCardFixtureDefault
    },
    CatalogCta: {
      Default: createCatalogCtaFixtureDefault,
      Empty: createCatalogCtaFixtureEmpty
    },
    Categories: {
      Default: createCategoriesFixtureDefault
    },
    Checkboxes: {
      ClosableAndClosed: createCheckboxesFixtureClosableAndClosed,
      ClosableAndOpen: createCheckboxesFixtureClosableAndOpen,
      CoursesTheme: createCheckboxesFixtureCoursesTheme,
      Simple: createCheckboxesFixtureSimple
    },
    CursusHeader: {
      Default: createCursusHeaderFixtureDefault,
      Empty: createCursusHeaderFixtureEmpty
    },
    CursusList: {
      Default: createCursusListFixtureDefault
    },
    DisciplineCard: {
      AsRow: createDisciplineCardFixtureAsRow,
      Hidden: createDisciplineCardFixtureHidden,
      WithCourseNumCircle: createDisciplineCardFixtureWithCourseNumCircle,
      WithCourseNum: createDisciplineCardFixtureWithCourseNum,
      WithModulesCircle: createDisciplineCardFixtureWithModulesCircle,
      WithModules: createDisciplineCardFixtureWithModules
    },
    DisciplineHeader: {
      Default: createDisciplineHeaderFixtureDefault,
      NoVideoNoImage: createDisciplineHeaderFixtureNoVideoNoImage,
      NoVideo: createDisciplineHeaderFixtureNoVideo
    },
    DisciplineScope: {
      Default: createDisciplineScopeFixtureDefault,
      Empty: createDisciplineScopeFixtureEmpty
    },
    FormGroup: {
      Default: createFormGroupFixtureDefault
    },
    MenuList: {
      BuildTransifex: createMenuListFixtureBuildTransifex,
      Default: createMenuListFixtureDefault
    },
    ModuleBubble: {
      Default: createModuleBubbleFixtureDefault,
      Disabled: createModuleBubbleFixtureDisabled
    },
    Pagination: {
      Default: createPaginationFixtureDefault
    },
    ScopeContent: {
      Default: createScopeContentFixtureDefault,
      Empty: createScopeContentFixtureEmpty
    },
    ScopeTabs: {
      Default: createScopeTabsFixtureDefault,
      Empty: createScopeTabsFixtureEmpty
    },
    Search: {
      Default: createSearchFixtureDefault
    },
    SelectBox: {
      DefaultTheme: createSelectBoxFixtureDefaultTheme,
      PlainTheme: createSelectBoxFixturePlainTheme,
      WithItems: createSelectBoxFixtureWithItems
    },
    SsmenuList: {
      Coorpacademy: createSsmenuListFixtureCoorpacademy,
      Empty: createSsmenuListFixtureEmpty,
      Formations: createSsmenuListFixtureFormations,
      Solutions: createSsmenuListFixtureSolutions
    },
    StarRating: {
      Default: createStarRatingFixtureDefault
    },
    Table: {
      Default: createTableFixtureDefault
    },
    ThemeImage: {
      Bg: createThemeImageFixtureBg
    },
    TitledCheckbox: {
      Checked: createTitledCheckboxFixtureChecked,
      NoBg: createTitledCheckboxFixtureNoBg,
      NotChecked: createTitledCheckboxFixtureNotChecked
    },
    TransifexList: {
      Default: createTransifexListFixtureDefault
    },
    VideoIframe: {
      Default: createVideoIframeFixtureDefault,
      Empty: createVideoIframeFixtureEmpty,
      ImagePlaceholder: createVideoIframeFixtureImagePlaceholder,
      Youtube: createVideoIframeFixtureYoutube
    },
    VideoPlayer: {
      Default: createVideoPlayerFixtureDefault,
      WithImage: createVideoPlayerFixtureWithImage,
      Youtube: createVideoPlayerFixtureYoutube
    }
  },
  MoleculeForum: {
    ForumComment: {
      Default: createForumCommentFixtureDefault,
      PostDisabled: createForumCommentFixturePostDisabled,
      TextareaDisabled: createForumCommentFixtureTextareaDisabled
    },
    ForumPost: {
      Default: createForumPostFixtureDefault,
      Deleted: createForumPostFixtureDeleted,
      Editable: createForumPostFixtureEditable,
      NotEditableNotRejectable: createForumPostFixtureNotEditableNotRejectable,
      PostsLocked: createForumPostFixturePostsLocked,
      Rejectable: createForumPostFixtureRejectable,
      Rejected: createForumPostFixtureRejected,
      TextareasLocked: createForumPostFixtureTextareasLocked
    },
    ForumThread: {
      DeepAnswers: createForumThreadFixtureDeepAnswers,
      Default: createForumThreadFixtureDefault,
      WithAnswers: createForumThreadFixtureWithAnswers
    }
  },
  Organism: {
    BrandForm: {
      Default: createBrandFormFixtureDefault,
      GeneralSettings: createBrandFormFixtureGeneralSettings,
      Lookandfeel: createBrandFormFixtureLookandfeel,
      Sso: createBrandFormFixtureSso,
      UserEdit: createBrandFormFixtureUserEdit,
      UserImport: createBrandFormFixtureUserImport
    },
    BrandTable: {
      Default: createBrandTableFixtureDefault
    },
    CatalogCards: {
      Default: createCatalogCardsFixtureDefault,
      Loading: createCatalogCardsFixtureLoading,
      NoProducts: createCatalogCardsFixtureNoProducts
    },
    CursusRightaside: {
      Default: createCursusRightasideFixtureDefault,
      Empty: createCursusRightasideFixtureEmpty
    },
    DisciplineCards: {
      Empty: createDisciplineCardsFixtureEmpty,
      ManyDisciplinesCircle: createDisciplineCardsFixtureManyDisciplinesCircle,
      ManyDisciplines: createDisciplineCardsFixtureManyDisciplines
    },
    DisciplineRightaside: {
      Author: createDisciplineRightasideFixtureAuthor,
      Default: createDisciplineRightasideFixtureDefault,
      Empty: createDisciplineRightasideFixtureEmpty
    },
    Discussion: {
      Default: createDiscussionFixtureDefault,
      Moderation: createDiscussionFixtureModeration,
      NewDiscussion: createDiscussionFixtureNewDiscussion
    },
    Form: {
      Default: createFormFixtureDefault
    },
    GridList: {
      Default: createGridListFixtureDefault
    },
    Header: {
      Default: createHeaderFixtureDefault
    },
    Hero: {
      Default: createHeroFixtureDefault
    },
    SetupHeader: {
      Default: createSetupHeaderFixtureDefault
    }
  },
  TemplateAppCatalog: {
    Author: {
      Default: createAuthorFixtureDefault,
      Loading: createAuthorFixtureLoading
    },
    Catalog: {
      Default: createCatalogFixtureDefault,
      Empty: createCatalogFixtureEmpty,
      Loading: createCatalogFixtureLoading
    },
    ProductCourse: {
      Default: createProductCourseFixtureDefault,
      Empty: createProductCourseFixtureEmpty,
      Loading: createProductCourseFixtureLoading,
      NoVideo: createProductCourseFixtureNoVideo
    },
    ProductCursus: {
      Default: createProductCursusFixtureDefault,
      Empty: createProductCursusFixtureEmpty,
      Loading: createProductCursusFixtureLoading
    }
  },
  TemplateBackOffice: {
    BrandCreate: {
      Default: createBrandCreateFixtureDefault,
      Error: createBrandCreateFixtureError,
      Loading: createBrandCreateFixtureLoading,
      Modified: createBrandCreateFixtureModified
    },
    BrandList: {
      Default: createBrandListFixtureDefault,
      Loading: createBrandListFixtureLoading
    },
    BrandUpdate: {
      Default: createBrandUpdateFixtureDefault,
      GeneralSettingsSuccess: createBrandUpdateFixtureGeneralSettingsSuccess,
      GeneralSettings: createBrandUpdateFixtureGeneralSettings,
      LookandfeelError: createBrandUpdateFixtureLookandfeelError,
      LookandfeelModified: createBrandUpdateFixtureLookandfeelModified,
      LookandfeelPending: createBrandUpdateFixtureLookandfeelPending,
      LookandfeelSuccess: createBrandUpdateFixtureLookandfeelSuccess,
      Lookandfeel: createBrandUpdateFixtureLookandfeel,
      SsoActivate: createBrandUpdateFixtureSsoActivate,
      Sso: createBrandUpdateFixtureSso,
      UsersEdit: createBrandUpdateFixtureUsersEdit,
      UsersImport: createBrandUpdateFixtureUsersImport,
      UsersList: createBrandUpdateFixtureUsersList,
      Users: createBrandUpdateFixtureUsers
    },
    Layout: {
      Default: createLayoutFixtureDefault
    }
  },
  TemplateCommon: {
    CoorpHeader: {
      Production: createCoorpHeaderFixtureProduction,
      Staging: createCoorpHeaderFixtureStaging
    }
  }
};
