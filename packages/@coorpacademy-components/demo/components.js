import createCenteredText from '../src/atom/centered-text';
import createForumComment from '../src/atom/forum-comment';
import createInputColor from '../src/atom/input-color';
import createInputText from '../src/atom/input-text';
import createLabelModName from '../src/atom/label-mod-name';
import createLabelNormal from '../src/atom/label-normal';
import createLabel from '../src/atom/label';
import createLink from '../src/atom/link';
import createPicture from '../src/atom/picture';
import createSelect from '../src/atom/select';
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
import createScopeContent from '../src/molecule/scope-content';
import createScopeTabs from '../src/molecule/scope-tabs';
import createSelectBox from '../src/molecule/select-box';
import createSsmenuList from '../src/molecule/ssmenu-list';
import createStarRating from '../src/molecule/star-rating';
import createThemeImage from '../src/molecule/theme-image';
import createTitledCheckbox from '../src/molecule/titled-checkbox';
import createTransifexList from '../src/molecule/transifex-list';
import createVideoIframe from '../src/molecule/video-iframe';
import createVideoPlayer from '../src/molecule/video-player';
import createCatalogCards from '../src/organism/catalog-cards';
import createCursusRightaside from '../src/organism/cursus-rightaside';
import createDisciplineCards from '../src/organism/discipline-cards';
import createDisciplineRightaside from '../src/organism/discipline-rightaside';
import createForm from '../src/organism/form';
import createHeader from '../src/organism/header';
import createHero from '../src/organism/hero';
import createCatalog from '../src/template/app-catalog/catalog';
import createProductCourse from '../src/template/app-catalog/product-course';
import createProductCursus from '../src/template/app-catalog/product-cursus';
import createUpdateBrand from '../src/template/back-office/update-brand';
import createCoorpHeader from '../src/template/common/coorp-header';
import createCenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import createForumCommentFixtureDefault from '../src/atom/forum-comment/test/fixtures/default';
import createInputColorFixtureDefault from '../src/atom/input-color/test/fixtures/default';
import createInputColorFixtureEmpty from '../src/atom/input-color/test/fixtures/empty';
import createInputColorFixtureError from '../src/atom/input-color/test/fixtures/error';
import createInputTextFixtureDefault from '../src/atom/input-text/test/fixtures/default';
import createInputTextFixtureEmpty from '../src/atom/input-text/test/fixtures/empty';
import createInputTextFixtureError from '../src/atom/input-text/test/fixtures/error';
import createLabelModNameFixtureFixture from '../src/atom/label-mod-name/test/fixtures/fixture';
import createLabelNormalFixtureFixture from '../src/atom/label-normal/test/fixtures/fixture';
import createLabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import createLabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import createLinkFixtureHref from '../src/atom/link/test/fixtures/href';
import createPictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import createPictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import createPictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import createSelectFixtureDefault from '../src/atom/select/test/fixtures/default';
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
import createDisciplineCardFixtureHidden from '../src/molecule/discipline-card/test/fixtures/hidden';
import createDisciplineCardFixtureWithCourseNum from '../src/molecule/discipline-card/test/fixtures/with-course-num';
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
import createScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import createScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import createScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import createScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import createSelectBoxFixtureDefaultTheme from '../src/molecule/select-box/test/fixtures/default-theme';
import createSelectBoxFixturePlainTheme from '../src/molecule/select-box/test/fixtures/plain-theme';
import createSelectBoxFixtureWithItems from '../src/molecule/select-box/test/fixtures/with-items';
import createSsmenuListFixtureCoorpacademy from '../src/molecule/ssmenu-list/test/fixtures/coorpacademy';
import createSsmenuListFixtureEmpty from '../src/molecule/ssmenu-list/test/fixtures/empty';
import createSsmenuListFixtureFormations from '../src/molecule/ssmenu-list/test/fixtures/formations';
import createSsmenuListFixtureSolutions from '../src/molecule/ssmenu-list/test/fixtures/solutions';
import createStarRatingFixtureDefault from '../src/molecule/star-rating/test/fixtures/default';
import createThemeImageFixtureLogo from '../src/molecule/theme-image/test/fixtures/logo';
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
import createCatalogCardsFixtureDefault from '../src/organism/catalog-cards/test/fixtures/default';
import createCatalogCardsFixtureLoading from '../src/organism/catalog-cards/test/fixtures/loading';
import createCatalogCardsFixtureNoProducts from '../src/organism/catalog-cards/test/fixtures/no-products';
import createCursusRightasideFixtureDefault from '../src/organism/cursus-rightaside/test/fixtures/default';
import createCursusRightasideFixtureEmpty from '../src/organism/cursus-rightaside/test/fixtures/empty';
import createDisciplineCardsFixtureEmpty from '../src/organism/discipline-cards/test/fixtures/empty';
import createDisciplineCardsFixtureManyDisciplines from '../src/organism/discipline-cards/test/fixtures/many-disciplines';
import createDisciplineRightasideFixtureDefault from '../src/organism/discipline-rightaside/test/fixtures/default';
import createDisciplineRightasideFixtureEmpty from '../src/organism/discipline-rightaside/test/fixtures/empty';
import createFormFixtureDefault from '../src/organism/form/test/fixtures/default';
import createHeaderFixtureDefault from '../src/organism/header/test/fixtures/default';
import createHeroFixtureDefault from '../src/organism/hero/test/fixtures/default';
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
import createUpdateBrandFixtureDefault from '../src/template/back-office/update-brand/test/fixtures/default';
import createCoorpHeaderFixtureProduction from '../src/template/common/coorp-header/test/fixtures/production';
import createCoorpHeaderFixtureStaging from '../src/template/common/coorp-header/test/fixtures/staging';

export const components = {
  Atom: {
    CenteredText: createCenteredText,
    ForumComment: createForumComment,
    InputColor: createInputColor,
    InputText: createInputText,
    LabelModName: createLabelModName,
    LabelNormal: createLabelNormal,
    Label: createLabel,
    Link: createLink,
    Picture: createPicture,
    Select: createSelect,
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
    ScopeContent: createScopeContent,
    ScopeTabs: createScopeTabs,
    SelectBox: createSelectBox,
    SsmenuList: createSsmenuList,
    StarRating: createStarRating,
    ThemeImage: createThemeImage,
    TitledCheckbox: createTitledCheckbox,
    TransifexList: createTransifexList,
    VideoIframe: createVideoIframe,
    VideoPlayer: createVideoPlayer
  },
  Organism: {
    CatalogCards: createCatalogCards,
    CursusRightaside: createCursusRightaside,
    DisciplineCards: createDisciplineCards,
    DisciplineRightaside: createDisciplineRightaside,
    Form: createForm,
    Header: createHeader,
    Hero: createHero
  },
  TemplateAppCatalog: {
    Catalog: createCatalog,
    ProductCourse: createProductCourse,
    ProductCursus: createProductCursus
  },
  TemplateBackOffice: {
    UpdateBrand: createUpdateBrand
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
    ForumComment: {
      Default: createForumCommentFixtureDefault
    },
    InputColor: {
      Default: createInputColorFixtureDefault,
      Empty: createInputColorFixtureEmpty,
      Error: createInputColorFixtureError
    },
    InputText: {
      Default: createInputTextFixtureDefault,
      Empty: createInputTextFixtureEmpty,
      Error: createInputTextFixtureError
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
    Picture: {
      Default: createPictureFixtureDefault,
      Empty: createPictureFixtureEmpty,
      SimpleSrc: createPictureFixtureSimpleSrc
    },
    Select: {
      Default: createSelectFixtureDefault
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
      Hidden: createDisciplineCardFixtureHidden,
      WithCourseNum: createDisciplineCardFixtureWithCourseNum,
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
    ScopeContent: {
      Default: createScopeContentFixtureDefault,
      Empty: createScopeContentFixtureEmpty
    },
    ScopeTabs: {
      Default: createScopeTabsFixtureDefault,
      Empty: createScopeTabsFixtureEmpty
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
    ThemeImage: {
      Logo: createThemeImageFixtureLogo
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
  Organism: {
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
      ManyDisciplines: createDisciplineCardsFixtureManyDisciplines
    },
    DisciplineRightaside: {
      Default: createDisciplineRightasideFixtureDefault,
      Empty: createDisciplineRightasideFixtureEmpty
    },
    Form: {
      Default: createFormFixtureDefault
    },
    Header: {
      Default: createHeaderFixtureDefault
    },
    Hero: {
      Default: createHeroFixtureDefault
    }
  },
  TemplateAppCatalog: {
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
    UpdateBrand: {
      Default: createUpdateBrandFixtureDefault
    }
  },
  TemplateCommon: {
    CoorpHeader: {
      Production: createCoorpHeaderFixtureProduction,
      Staging: createCoorpHeaderFixtureStaging
    }
  }
};
