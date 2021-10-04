// @flow strict

import path from 'path';

export type Icon = {|
  filePath: string,
  replaceColors?: boolean
|};

const icons: Array<Icon> = [
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/adaptive.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/administration.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/analytics.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/animation.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/content-creation.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/dashboard.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/editorialization.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/type-eye.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/open-in-new-tab.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/arrow-down.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/arrow-left.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/arrow-right.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/arrow-top.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/bolt.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/broken-heart.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/charts.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/chat.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/check.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/clock.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/clue.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/cog.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/eye.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/filter-video2.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/funnel.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/less.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/level-0.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/level-1.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/level-2.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/level-3.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/lightbulb.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/scorm.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/coorp-app.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/coorp-logo.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/microphone.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/article.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/video.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/warn.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/facebook.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/google-plus.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/instagram.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/linkedin.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/mail.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/pinterest.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/twitter.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/vimeo.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/youtube.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/list-bullets-3.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/big-flash-left.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/big-flash-right.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/small-flash-right.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/small-flash-left.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/start-battle-shape.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/10sec-back.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/10sec-forward.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/bluetooth.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/next.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/prev.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/pause.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/play.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/queue.svg')},
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/draft.svg'),
    replaceColors: false
  },
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/validate.svg'),
    replaceColors: false
  },
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/lock.svg'),
    replaceColors: false
  },
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/map.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/more.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/pictures.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/search.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/settings.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/spiral.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/star.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/target.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/timer.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/tooltip-corner.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/magic-wand.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/import-icon.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/icon-faq.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/share.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/attention.svg')},
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/trophy-cup.svg'),
    replaceColors: false
  },
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/vote-heart-outline.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/magic-wand.1.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/mail-inbox.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/mail-inbox-document.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/profile.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/login-failed.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/locales.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/address-error.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/reload.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/school-graduation.svg')},
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/information-icon.svg'),
    replaceColors: false
  },
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/logout.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-fast-forward.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-rewind.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-pause.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/bookmark-5.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/bin.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/check-circle-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/circle-view.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/close-circle.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/close.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/computer-screen-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/file-office-pdf.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/interface-alert-circle.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/key-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/pencil-2.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/mobile-phone-broken.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/qr-code.1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/remove-circle-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/quill-circle.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/video-clip-3.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/link-broken.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/ring-planet.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/network-mobile.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/interface-question-mark.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/mobile-phone-close-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/leisure-party-popper.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/wrench-screwdriver.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/hide.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/alarm.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/add-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/add-circle-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-pause.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/bookmark-3.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/bookmark-5.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/chat-bubbles-circle.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/check-circle-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/close.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/compass-3.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/content-book-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/data-upload-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/expand-diagonal-3.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/graduation-hat.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/interface-alert-circle.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/interface-alert-triangle.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/key-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/lightbulb-4.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/space-rocket.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-fast-forward.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-rewind.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-pause.svg')},
  {
    filePath: path.resolve(
      './third-party/nova-solid.iconjar/icons/location-pin-question-mark-1.svg'
    )
  },
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/lock-1.1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/logout-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/content-view-module-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/lock-unlock-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/pencil-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/places-home-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/programming-jigsaw.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/redo.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/rewards-badge-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/rewards-trophy-5.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/shrink-diagonal-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/subtract-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/user-shield-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/video-clip-3.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/video-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/vote-heart.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/vote-star.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/ring-planet.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/video-subtitle.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/interface-question-mark.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/file-upload-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/user.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/paint-brush-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/content-view-list.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/at-sign.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/flash.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/window-application-5.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/content-book-add.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/business-graph-line-2.svg')}
];

export default icons;
