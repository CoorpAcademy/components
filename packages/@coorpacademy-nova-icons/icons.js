// @flow strict

import path from 'path';

export type Icon = {|
  filePath: string,
  replaceColors?: boolean
|};

const icons: Array<Icon> = [
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/adaptive.svg')},
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
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/lightbulb.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/list-bullets-3.svg')},
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
  {
    filePath: path.resolve('./third-party/nova-composition.iconjar/icons/trophy-cup.svg'),
    replaceColors: false
  },
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/vote-heart-outline.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/magic-wand.1.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/mail-inbox.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/mail-inbox-document.svg')},
  {filePath: path.resolve('./third-party/nova-composition.iconjar/icons/profile.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/audio-control-play.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/bookmark-5.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/check-circle-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/circle-view.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/close-circle.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/computer-screen-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/file-office-pdf.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/interface-alert-circle.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/key-1.svg')},
  {filePath: path.resolve('./third-party/nova-line.iconjar/icons/pencil-2.svg')},
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
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/add-1.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/add-circle-2.svg')},
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/audio-control-play.svg')},
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
  {
    filePath: path.resolve(
      './third-party/nova-solid.iconjar/icons/location-pin-question-mark-1.svg'
    )
  },
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/lock-1.1.svg')},
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
  {filePath: path.resolve('./third-party/nova-solid.iconjar/icons/video-subtitle.svg')}
];

export default icons;
