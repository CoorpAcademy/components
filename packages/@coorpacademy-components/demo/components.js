import createCenteredText from '../src/atom/centered-text';
import createForumComment from '../src/atom/forum-comment';
import createLabelModName from '../src/atom/label-mod-name';
import createLabelNormal from '../src/atom/label-normal';
import createLabel from '../src/atom/label';
import createLink from '../src/atom/link';
import createPicture from '../src/atom/picture';
import createSpinner from '../src/atom/spinner';
import createStar from '../src/atom/star';
import createTitle from '../src/atom/title';
import createCatalogCard from '../src/molecule/catalog-card';
import createCatalogCta from '../src/molecule/catalog-cta';
import createCategories from '../src/molecule/categories';
import createCheckboxes from '../src/molecule/checkboxes';
import createCursusHeader from '../src/molecule/cursus-header';
import createCursusList from '../src/molecule/cursus-list';
import createDisciplineCard from '../src/molecule/discipline-card';
import createDisciplineHeader from '../src/molecule/discipline-header';
import createDisciplineScope from '../src/molecule/discipline-scope';
import createModuleBubble from '../src/molecule/module-bubble';
import createScopeContent from '../src/molecule/scope-content';
import createScopeTabs from '../src/molecule/scope-tabs';
import createSelectBox from '../src/molecule/select-box';
import createStarRating from '../src/molecule/star-rating';
import createThemeImage from '../src/molecule/theme-image';
import createTitledCheckbox from '../src/molecule/titled-checkbox';
import createVideoIframe from '../src/molecule/video-iframe';
import createVideoPlayer from '../src/molecule/video-player';
import createCatalogCards from '../src/organism/catalog-cards';
import createCursusRightaside from '../src/organism/cursus-rightaside';
import createDisciplineCards from '../src/organism/discipline-cards';
import createDisciplineRightaside from '../src/organism/discipline-rightaside';
import createHero from '../src/organism/hero';
import createCatalog from '../src/template/app-catalog/catalog';
import createProductCourse from '../src/template/app-catalog/product-course';
import createProductCursus from '../src/template/app-catalog/product-cursus';
import createCenteredTextFixtureDefault from '../src/atom/centered-text/test/fixtures/default';
import createForumCommentFixtureDefault from '../src/atom/forum-comment/test/fixtures/default';
import createLabelModNameFixtureFixture from '../src/atom/label-mod-name/test/fixtures/fixture';
import createLabelNormalFixtureFixture from '../src/atom/label-normal/test/fixtures/fixture';
import createLabelFixtureOneChild from '../src/atom/label/test/fixtures/one-child';
import createLabelFixtureTwoChildren from '../src/atom/label/test/fixtures/two-children';
import createLinkFixtureHref from '../src/atom/link/test/fixtures/href';
import createPictureFixtureDefault from '../src/atom/picture/test/fixtures/default';
import createPictureFixtureEmpty from '../src/atom/picture/test/fixtures/empty';
import createPictureFixtureSimpleSrc from '../src/atom/picture/test/fixtures/simple-src';
import createSpinnerFixtureDefault from '../src/atom/spinner/test/fixtures/default';
import createStarFixtureDisable from '../src/atom/star/test/fixtures/disable';
import createStarFixtureEnable from '../src/atom/star/test/fixtures/enable';
import createTitleFixtureFixture from '../src/atom/title/test/fixtures/fixture';
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
import createDisciplineCardFixtureDefault from '../src/molecule/discipline-card/test/fixtures/default';
import createDisciplineCardFixtureHidden from '../src/molecule/discipline-card/test/fixtures/hidden';
import createDisciplineCardFixtureWithCourseNum from '../src/molecule/discipline-card/test/fixtures/with-course-num';
import createDisciplineCardFixtureWithModules from '../src/molecule/discipline-card/test/fixtures/with-modules';
import createDisciplineHeaderFixtureDefault from '../src/molecule/discipline-header/test/fixtures/default';
import createDisciplineHeaderFixtureNoVideoNoImage from '../src/molecule/discipline-header/test/fixtures/no-video-no-image';
import createDisciplineHeaderFixtureNoVideo from '../src/molecule/discipline-header/test/fixtures/no-video';
import createDisciplineScopeFixtureDefault from '../src/molecule/discipline-scope/test/fixtures/default';
import createDisciplineScopeFixtureEmpty from '../src/molecule/discipline-scope/test/fixtures/empty';
import createModuleBubbleFixtureDefault from '../src/molecule/module-bubble/test/fixtures/default';
import createModuleBubbleFixtureDisabled from '../src/molecule/module-bubble/test/fixtures/disabled';
import createScopeContentFixtureDefault from '../src/molecule/scope-content/test/fixtures/default';
import createScopeContentFixtureEmpty from '../src/molecule/scope-content/test/fixtures/empty';
import createScopeTabsFixtureDefault from '../src/molecule/scope-tabs/test/fixtures/default';
import createScopeTabsFixtureEmpty from '../src/molecule/scope-tabs/test/fixtures/empty';
import createSelectBoxFixtureDefaultTheme from '../src/molecule/select-box/test/fixtures/default-theme';
import createSelectBoxFixturePlainTheme from '../src/molecule/select-box/test/fixtures/plain-theme';
import createSelectBoxFixtureWithItems from '../src/molecule/select-box/test/fixtures/with-items';
import createStarRatingFixtureDefault from '../src/molecule/star-rating/test/fixtures/default';
import createThemeImageFixtureLogo from '../src/molecule/theme-image/test/fixtures/logo';
import createTitledCheckboxFixtureChecked from '../src/molecule/titled-checkbox/test/fixtures/checked';
import createTitledCheckboxFixtureNoBg from '../src/molecule/titled-checkbox/test/fixtures/no-bg';
import createTitledCheckboxFixtureNotChecked from '../src/molecule/titled-checkbox/test/fixtures/not-checked';
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

export const components = {
  Atom: {
    CenteredText: createCenteredText,
    ForumComment: createForumComment,
    LabelModName: createLabelModName,
    LabelNormal: createLabelNormal,
    Label: createLabel,
    Link: createLink,
    Picture: createPicture,
    Spinner: createSpinner,
    Star: createStar,
    Title: createTitle
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
    ModuleBubble: createModuleBubble,
    ScopeContent: createScopeContent,
    ScopeTabs: createScopeTabs,
    SelectBox: createSelectBox,
    StarRating: createStarRating,
    ThemeImage: createThemeImage,
    TitledCheckbox: createTitledCheckbox,
    VideoIframe: createVideoIframe,
    VideoPlayer: createVideoPlayer
  },
  Organism: {
    CatalogCards: createCatalogCards,
    CursusRightaside: createCursusRightaside,
    DisciplineCards: createDisciplineCards,
    DisciplineRightaside: createDisciplineRightaside,
    Hero: createHero
  },
  TemplateAppCatalog: {
    Catalog: createCatalog,
    ProductCourse: createProductCourse,
    ProductCursus: createProductCursus
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
      Default: createDisciplineCardFixtureDefault,
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
  }
};
