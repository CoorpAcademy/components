export default {
  props: {
    battles: [
      {
        username: 'Avatar1',
        courseName: 'Les robots au service service service ',
        urlAvatar: 'http://minecraft.fr/wp-content/uploads/2013/05/Pa8WZj1-235x300.jpg',
        backgroundImg:
          'http://www.canalvie.com/polopoly_fs/1.1917585.1474313690!/image/bureau-travail.jpg_gen/derivatives/cvlandscape_670_377/bureau-travail.jpg',
        tagLabel: 'Base',
        onLightButtonClick: () => console.log('test onClickButtonCourse'),
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
        id: '1'
      },

      {
        username: 'Homer2',
        courseName: 'Les Simpson',
        urlAvatar:
          'https://www.punanaamio.fi/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg',
        backgroundImg: 'https://img.bfmtv.com/c/1256/708/c32/01a671c64243d70195cbe64a18f2a.jpg',
        tagLabel: 'Coach',
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle2'),
        onLightButtonClick: () => console.log('test onClickButtonCourse2'),
        id: '2'
      },

      {
        username: 'Unknown3',
        courseName: 'Les robots au service',
        urlAvatar:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        backgroundImg: 'https://consomac.fr/images/news/test-macbookair-2018-header.jpg',
        tagLabel: 'Advanced',
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
        onLightButtonClick: () => console.log('test onClickButtonCourse'),
        id: '3'
      },

      {
        username: 'Avatar4',
        courseName: 'Les robots au service',
        urlAvatar: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565_1280.jpg',
        backgroundImg: 'https://bienobureau.files.wordpress.com/2014/11/bureau-travail.jpg',
        tagLabel: 'Base',
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
        onLightButtonClick: () => console.log('test onClickButtonCourse'),
        id: '4'
      },

      {
        username: 'Avatar5',
        courseName: 'Les robots au service',
        urlAvatar: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
        backgroundImg: 'https://cdn.pixabay.com/photo/2018/02/27/09/19/colors-3185020_1280.jpg',
        tagLabel: 'Base',
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
        onLightButtonClick: () => console.log('test onClickButtonCourse'),
        id: '5'
      },

      {
        username: 'Homer6',
        courseName: 'Les Simpson',
        urlAvatar:
          'https://www.punanaamio.fi/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg',
        backgroundImg: 'https://cdn.pixabay.com/photo/2016/11/06/05/36/landscape-1802337_1280.jpg',
        tagLabel: 'Coach',
        onPrimaryButtonClick: () => console.log('test onClickButtonBattle2'),
        onLightButtonClick: () => console.log('test onClickButtonCourse2'),
        id: '6'
      }
    ],
    trads: {
      reviewCTA: 'Review Course',
      battleCTA: 'Start battle'
    }
  }
};
