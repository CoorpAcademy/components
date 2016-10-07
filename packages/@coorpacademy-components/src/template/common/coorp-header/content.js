import join from 'lodash/fp/join';

export default (translate, props) => {
  const {
    rootUrl = '/',
    connexionLink = '/',
    inscriptionLink = '/'
  } = props;

  const url = sub => join('', [rootUrl, sub]);

  return {
    src: 'https://www.coorpacademy.com/assets/img/logo.svg',
    href: rootUrl,
    menuItems: [{
      title: translate('Formations'),
      href: url('/plop'),
      subItems: [
        {
          title: translate('Masterclass Esprit du Temps'),
          href: url('/plop')
        },
        {
          title: translate('Masterclass Digital'),
          href: url('/plop')
        },
        {
          title: translate('Toutes les formations'),
          href: url('/plop')
        },
        {
          title: translate('Abonnement Coorpacademy'),
          href: url('/plop')
        }
      ]
    },
    {
      title: translate('Nos Solutions'),
      href: url('/plop'),
      subItems: [
        {
          title: translate('Masterclass Esprit du Temps'),
          href: url('/plop')
        },
        {
          title: translate('Masterclass Digital'),
          href: url('/plop')
        },
        {
          title: translate('Toutes les formations'),
          href: url('/plop')
        },
        {
          title: translate('Abonnement Coorpacademy'),
          href: url('/plop')
        }
      ]
    },
    {
      title: translate('Coorpacademy'),
      href: url('/plop'),
      subItems: [
        {
          title: translate('Qui sommes-nous ?'),
          href: url('/plop')
        },
        {
          title: translate('Pourquoi Coorpacademy ?'),
          href: url('/plop')
        },
        {
          title: translate('Ils nous ont fait confiance'),
          href: url('/plop')
        },
        {
          title: translate('L\'équipe'),
          href: url('/plop')
        },
        {
          title: translate('Contactez-nous'),
          href: url('/plop')
        }
      ]
    },
    {
      title: translate('Connexion'),
      href: connexionLink
    },
    {
      title: translate('Inscription'),
      href: inscriptionLink
    }]
  };
};
