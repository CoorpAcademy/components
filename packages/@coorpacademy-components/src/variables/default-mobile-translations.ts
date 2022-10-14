type NotificationWording = {
  title: string;
  description: string;
};

export type Translations = {
  accessTheLesson: string;
  appPodcast: {
    infoNewFeature: {
      title: string;
      message: string;
      cta: string;
    };
    podcast: string;
    podcasts: string;
    playlist: string;
    home: string;
    courseMode: string;
    allPlaylists: string;
    seeMore: string;
    podcastCoorpacademy: string;
    podcastCourseMode: string;
    podcastMode: string;
    switchText: string;
    switchCourseText: string;
    cancelSwitch: string;
    switchOk: string;
    seeLess: string;
    play: string;
    noResult: string;
    allEpisodes: string;
    seeAllEpisodes: string;
    addToFavorites: string;
    removeFromFavorites: string;
    shareEpisode: string;
    close: string;
    errorNetwork: string;
    bottomNavigation: {
      home: string;
      search: string;
      favorites: string;
      podcasts: string;
    };
    search: {
      byPlaylists: string;
      searchForPodcasts: string;
      searchTitle: string;
      searchText: string;
      searchSubText: string;
    };
    settings: {
      settings: string;
      wifi: string;
      high: string;
      medium: string;
      low: string;
      mobile: string;
    };
    favorites: {
      title: string;
      podcasts: string;
      addedToFavorites: string;
      removedFromFavorites: string;
      errorFavoriteAdd: string;
      errorFavorite: string;
      errorFavoriteRemove: string;
    };
  };
  appReview: {
    ariaLabel: string;
    presentation: {
      ariaLabel: string;
      title: string;
      text: string;
      labelList: {
        skills: {
          text: string;
          tooltip: string;
        };
        questions: {
          text: string;
          tooltip: string;
        };
        lifes: {
          text: string;
          tooltip: string;
        };
        allright: {
          text: string;
          tooltip: string;
        };
      };
    };
    listTitle: string;
    listAriaLabel: string;
    card: {
      ariaLabel: string;
      text: string;
      buttonText: string;
    };
    noSkills: {
      title: string;
      text: string;
    };
  };
  article: string;
  authenticationMagicLinkHeader: string;
  authenticationMagicLinkStepOneDescription: string;
  authenticationMagicLinkStepTwoDescription: string;
  authenticationMagicLinkStepThreeDescription: string;
  authenticationMagicLinkTitle: string;
  authenticationQRCodeHeader: string;
  authenticationQRCodeStepOneDescription: string;
  authenticationQRCodeStepTwoDescription: string;
  authenticationQRCodeStepThreeDescription: string;
  authenticationQRCodeTitle: string;
  authorizeNotifications: string;
  askForHelp: string;
  backToHome: string;
  bonus: string;
  cancel: string;
  clue: string;
  clueStarsToLoose: string;
  congratulations: string;
  connectionLost: string;
  connectionRestored: string;
  context: string;
  correction: string;
  dataLost: string;
  didYouKnowThat: string;
  finishCourse: string;
  finishCourseWordings: NotificationWording[];
  finishLearning: string;
  forYou: string;
  gameOver: string;
  getAnExtralife: string;
  goodAnswer: string;
  goodJob: string;
  goToQuestion: string;
  highscore: string;
  howToSignIn: string;
  iWantIt: string;
  keyPoint: string;
  lesson: string;
  logOut: string;
  needHelp: string;
  new: string;
  next: string;
  nextLevel: string;
  nextChapter: string;
  noResults: string;
  noResultsDescription: string;
  ok: string;
  ooops: string;
  open: string;
  openBrowser: string;
  openSettings: string;
  ouch: string;
  outOfLives: string;
  permission: string;
  permissionCamera: string;
  notifications: string;
  notificationSamples: NotificationWording[];
  permissionNotificationHeadline: string;
  permissionNotificationDescription: string;
  permissionNotificationAuthorize: string;
  currentlyDoingReminder: string;
  yesNotifyMe: string;
  maybeLater: string;
  platformHasBeenDisabled: string;
  podcast: string;
  question: string;
  quit: string;
  reactivatePlatform: string;
  refresh: string;
  refreshEnjoyLearning: string;
  refreshNotWorking: string;
  resumeLearning: string;
  retryLevel: string;
  retryChapter: string;
  relatedSubjects: string;
  scanQRCode: string;
  scorm: string;
  externalFinishCourse: string;
  search: string;
  seeClue: string;
  selectAnAnswer: string;
  selectSomethingBelow: string;
  settings: string;
  signInDesktop: string;
  signInMobile: string;
  startDemo: string;
  startLearning: string;
  step: string;
  suggestion: string;
  suggestionWordings: NotificationWording[];
  typeHere: string;
  unlockNextLevel: string;
  upgrade: string;
  upgradeDescription: string;
  validate: string;
  version: string;
  video: string;
  videoLoadingError: string;
  welcome: string;
  welcomeDescription: string;
  welcomeUser: string;
  winAdditionalStars: string;
  wrongAnswer: string;
  yourAnswer: string;
  yourAnswers: string;
};

const defaultMobileTranslations: Translations = {
  accessTheLesson: 'Access the lesson',
  appPodcast: {
    podcast: 'Podcast',
    podcasts: 'Podcasts',
    playlist: 'Playlist',
    home: 'Home',
    courseMode: 'Course Mode',
    allPlaylists: 'All Playlists',
    seeMore: 'See more',
    podcastCoorpacademy: 'Coorpacademy',
    podcastCourseMode: 'Course mode',
    podcastMode: 'Podcast mode',
    switchText: 'Switching to Course mode will interrupt the listening.',
    switchCourseText: 'You are about to switch on Podcast mode',
    cancelSwitch: 'No, cancel',
    switchOk: 'Yes, switch',
    seeLess: 'See less',
    play: 'Play',
    noResult: 'No results!',
    allEpisodes: 'All episodes',
    seeAllEpisodes: 'See all episode',
    addToFavorites: 'Add to my favorites',
    removeFromFavorites: 'Remove from my favorites',
    shareEpisode: 'Share this episode',
    close: 'Close',
    errorNetwork: 'something went wrong',
    bottomNavigation: {
      home: 'Home',
      search: 'Search',
      favorites: 'Favorites',
      podcasts: 'podcasts'
    },
    search: {
      byPlaylists: 'By playlists',
      searchForPodcasts: 'Search for podcasts',
      searchTitle: 'Search',
      searchText: 'No results for',
      searchSubText: 'Please check the spelling or use other keywords'
    },
    settings: {
      settings: 'Settings',
      wifi: 'Wifi audio quality',
      high: 'High quality',
      medium: 'Medium quality',
      low: 'Low quality',
      mobile: 'Mobile audio quality'
    },
    favorites: {
      title: 'Favorites',
      podcasts: 'podcasts',
      addedToFavorites: 'Added to your favorites',
      removedFromFavorites: 'Removed from your favorites',
      errorFavoriteAdd: 'Could not add to your favorites. Please try again.',
      errorFavorite: 'There was an error',
      errorFavoriteRemove: 'Could not remove from your favorites. Please try again.'
    },
    infoNewFeature: {
      title: 'Introducing the new Podcast mode',
      message:
        'Click on the button at the top of your app to discover a whole new audio experience',
      cta: 'Start learning'
    }
  },
  appReview: {
    ariaLabel: 'Review Skills Template',
    presentation: {
      ariaLabel: 'Review Presentation Container',
      title: 'What is<br/>Revision Mode ?',
      text: 'Information vanishes from your mind as soon as it enters it? It’s perfectly normal: there is no retention without repetition! To keep your knowledge in the long term, use the Revision Mode to refresh your memory!',
      labelList: {
        skills: {text: 'Choose 1 skill', tooltip: 'You can review one skill at a time.'},
        questions: {
          text: 'Answer 5 questions',
          tooltip: 'Answer the 5 questions correctly to validate your revision mode session.'
        },
        lifes: {
          text: 'You have infinite live',
          tooltip: 'You can answer as many times as you like to complete your session.'
        },
        allright: {
          text: 'Get it all right',
          tooltip: 'To validate your session, you must get a correct answer to each question.'
        }
      }
    },
    listTitle: 'Skills you can review',
    listAriaLabel: 'Review Skills Container',
    card: {
      ariaLabel: 'Skill Card',
      text: '{{total}} questions to review',
      buttonText: 'Review this skill'
    },
    noSkills: {
      title: 'You have no skill to revise yet',
      text: 'First you need to complete courses before you can review different skills.'
    }
  },
  article: 'Documents',
  authenticationMagicLinkHeader:
    'Click on the link you received by email to connect to your platform',
  authenticationMagicLinkStepOneDescription:
    'Go to your <b>professional mailbox</b> with this phone',
  authenticationMagicLinkStepTwoDescription:
    '<b>Open the email</b> with the invitation to download the Coorpacademy App',
  authenticationMagicLinkStepThreeDescription: 'Click on the button <b>"Connect to the App"</b>',
  authenticationMagicLinkTitle: 'Magic link',
  authenticationQRCodeHeader:
    "Didn't receive an email? That's fine! We'll use a computer to verify your identity on the web platform",
  authenticationQRCodeStepOneDescription:
    'Connect to your learning platform <b>with a computer</b>',
  authenticationQRCodeStepTwoDescription:
    'Go to <b>your Account</b> <br/>in the upper right-hand corner',
  authenticationQRCodeStepThreeDescription:
    '<b>Voilà!</b><br/>Scan your QR code using the button below',
  authenticationQRCodeTitle: 'QR Code',
  authorizeNotifications: 'Authorize notifications',
  askForHelp: 'Ask for help',
  backToHome: 'Back to home',
  bonus: 'Bonus!',
  cancel: 'Cancel',
  clue: 'Clue',
  clueStarsToLoose:
    'Unlocking the clue reduces the stars you can gain on this question by {{count}} (if you get it right)',
  congratulations: 'Congratulations!',
  connectionLost: 'No Internet connection',
  connectionRestored: 'You are now connected to the Internet',
  context: 'Context',
  correction: 'Correction',
  currentlyDoingReminder: 'Currently doing reminder',
  dataLost: 'Your data seems to be lost',
  didYouKnowThat: 'Did you know that?',
  finishCourse: 'Finish Course',
  finishCourseWordings: [
    {
      title: "Let's gets it done {{givenName}}! 🚀",
      description: 'Complete this course: \\"{{contentName}}\\"'
    },
    {
      title: 'Your mission, should you choose to accept it 😎',
      description: 'Finish your course: \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, I bet you can do it! 💪',
      description: 'Finish the course: \\"{{contentName}}\\"'
    },
    {
      title: 'Ready to learn {{givenName}}? 💪',
      description: 'Let\'s complete \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, you are close to complete your course 🙃',
      description: 'Let\'s finish \\"{{contentName}}\\"'
    },
    {
      title: 'Do you accept the challenge {{givenName}}? 💪',
      description: 'Complete the course: \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, your challenge of the day! 😉',
      description: 'Complete the course: \\"{{contentName}}\\"'
    },
    {
      title: "{{givenName}}, it's time to learn! 😉",
      description: 'Continue your course: \\"{{contentName}}\\"'
    },
    {
      title: 'How about learning {{givenName}}? 🚀',
      description: 'Complete the course: \\"{{contentName}}\\"'
    },
    {
      title: "Once it's done, it's done 🙃",
      description: 'Complete the course: \\"{{contentName}}\\"'
    },
    {
      title: 'Your course is almost completed! ✓',
      description: 'Complete the course: \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, you are so close! 🙃',
      description: 'Just a few questions to complete \\"{{contentName}}\\"'
    },
    {
      title: 'Come on {{givenName}}, almost finished ☑',
      description: 'Complete your course: \\"{{contentName}}\\"'
    }
  ],
  finishLearning: 'Continue this one first',
  forYou: 'Our top picks for you',
  gameOver: 'Game over',
  getAnExtralife: 'Get an extra life by viewing the lesson',
  goodAnswer: 'Good answer',
  goodJob: 'Good job!',
  goToQuestion: 'Go to question',
  highscore: 'You have a new highscore<br><b>you just won {{score}} stars</b>',
  howToSignIn: 'Did you receive an email to download the app?',
  iWantIt: 'I want it !',
  keyPoint: 'Key point',
  lesson: 'Lesson',
  logOut: 'Log out',
  needHelp: 'Need help?',
  new: 'new',
  next: 'Next',
  nextChapter: 'Next chapter',
  nextLevel: 'Next level',
  noResults: 'No results',
  noResultsDescription: 'Your search did not have any results.<br/>Try searching other keywords.',
  notifications: 'Notifications',
  ok: 'OK',
  ooops: 'Ooops...',
  open: 'Open',
  openBrowser: 'Open <b>my mailbox</b>',
  openSettings: 'Open settings',
  ouch: 'Ouch...',
  outOfLives: 'You are out of lives!',
  notificationSamples: [
    {title: 'Challenge of the day 👊', description: 'Start the course<br><b>Online Customer</b>'}
  ],
  permission: 'Permission',
  permissionCamera:
    'We need to access your camera in order to scan your QR code and authenticate you.',
  permissionNotificationHeadline: 'We help you stay motivated!',
  permissionNotificationDescription:
    'Get notifications and stay on top of your goals. We promise not to blow up your phone a million times a day.',
  permissionNotificationAuthorize: 'Authorize notifications',
  maybeLater: 'Maybe later',
  platformHasBeenDisabled: 'The app has been disabled for your platform',
  podcast: 'Podcasts',
  question: 'Question',
  quit: 'Quit',
  reactivatePlatform:
    'if you want to reactivate it, contact your manager or click on the link below and we will pass the message on',
  refresh: 'Refresh',
  refreshEnjoyLearning:
    'in the network between Saturn and the Earth, please refresh in order to enjoy learning',
  refreshNotWorking: 'Refresh not working?',
  relatedSubjects: 'Recommended for you:',
  resumeLearning: 'Continue Learning',
  retryChapter: 'Retry chapter',
  retryLevel: 'Retry level',
  scanQRCode: 'Scan your <b>QR code</b>',
  scorm: 'Animated resources',
  externalFinishCourse: 'I have completed this course',
  search: 'Search',
  seeClue: 'See clue',
  selectSomethingBelow: 'Select something below',
  settings: 'Settings',
  startDemo: 'No account? <a href="/"><b><u>Start trial!</u></b></a>',
  startLearning: 'You should start with this one',
  selectAnAnswer: 'Select an answer',
  signInDesktop: 'No',
  signInMobile: 'Yes',
  step: 'Step',
  suggestion: 'Course recommendations',
  suggestionWordings: [
    {
      title: '{{givenName}}, here is a course for you! 👀',
      description: 'Find out with this course \\"{{contentName}}\\"'
    },
    {
      title: 'In the mood for learning {{givenName}}? 🚀',
      description: 'Check out \\"{{contentName}}\\"'
    },
    {
      title: 'Your mission, should you choose to accept it 😎',
      description: 'Check out \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, your challenge of the day awaits you! 😉',
      description: 'Start the course \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, take on the challenge 💪',
      description: 'Start the course \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, broaden your horizons!',
      description: 'Find out more about \\"{{contentName}}\\"'
    },
    {
      title: "{{givenName}}, it's time to learn! 😉",
      description: 'Start the course \\"{{contentName}}\\"'
    },
    {
      title: "It's time to (re) launch {{givenName}} 🚀",
      description: 'Start this course \\"{{contentName}}\\"'
    },
    {
      title: '{{givenName}}, I bet you can do it! 💪',
      description: 'Start the course \\"{{contentName}}\\"'
    }
  ],
  typeHere: 'Type here',
  validate: 'Submit',
  version: 'Version',
  video: 'Videos',
  videoLoadingError: 'An error occurred while loading the video, please try again.',
  unlockNextLevel: 'You have just unlocked<br><b>{{levelName}} level</b>',
  upgrade: 'Upgrade',
  upgradeDescription:
    'Your application has been updated! Please download the latest version to enjoy it.',
  winAdditionalStars:
    'Win {{count}} additional stars in this chapter the first time you view a lesson!',
  welcome: 'Welcome',
  welcomeDescription: 'This app is linked to your account on your company’s Learning Platform.',
  welcomeUser: 'Welcome, {{displayname}}!',
  wrongAnswer: 'Wrong answer',
  yesNotifyMe: 'Yes, notify me',
  yourAnswer: 'Your answer:',
  yourAnswers: 'Your answers:'
};

export default defaultMobileTranslations;
