import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';
import cover from '../../../../../atom/picture/test/fixtures/default';

const image = cover.props;
const cards = cardsGrid.props;

/* eslint-disable max-len */

export default {
  props: {
    socialTitle: 'Social :',
    cards,
    cardsTitle: 'All courses from Nexstage',
    title: 'Nexstage AM',
    website: 'Website :',
    urlcontent: 'www.nextstage.com',
    urlwebsite: 'http://www.nextstage.com/',
    description: 'NextStage AM est société de gestion indépendante, agréée par l’AMF en 2002 et l’un des pionniers et leaders du capital développement en France. Elle investit dans un nombre limité de PME et d’ETI (61 en portefeuille au 30/06/2016), françaises et européennes, innovantes, auxquelles elle apporte une expertise entrepreneuriale d’investisseur et une expérience opérationnelle et internationale forte. Elle accompagne dans la durée ces Entreprises de Taille Moyenne (ETM), non cotées et cotées sur Alternext et Euronext B et C. NextStage AM s’est vue remettre en décembre 2015 le Gold Award pour le meilleur acteur du capital développement en Europe par Private Equity Awards (méthodologie disponible sur www.private-equity-exchange.com - Ce prix ne préjuge pas des résultats futurs des fonds ou de la société de gestion.)',
    image: 'https://s3-eu-west-1.amazonaws.com/static.coorpacademy.com/content/CoorpAcademy/content/cockpit-up/poster/ns2x-1477319801703.png'
  }
};
