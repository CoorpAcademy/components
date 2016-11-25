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
      title: translate('Les formations'),
      href: url('catalog/trainings'),
      subItems: [
        {
          title: translate('Tous les cursus'),
          href: url('home-B2C')
        },
        {
          title: translate('Toutes les formations'),
          href: url('catalog/trainings')
        },
        {
          title: translate('Abonnement Coorpacademy'),
          href: url('tarifs-abonnement')
        }
      ]
    },
    {
      title: translate('Nos Solutions Entreprises'),
      href: url('solutions'),
      subItems: [
        {
          title: translate('Solutions Entreprises'),
          href: url('solutions')
        },
        {
          title: translate('Des formations adaptées à vos enjeux'),
          href: url('contenu-adapte-enjeux')
        },
        {
          title: translate('Toutes les formations'),
          href: url('catalog/trainings/')
        },
        {
          title: translate('Tarifs entreprises'),
          href: url('tarifs-entreprises')
        }
      ]
    },
    {
      title: translate('Coorpacademy'),
      href: url('qui-sommes-nous'),
      subItems: [
        {
          title: translate('Qui sommes-nous ?'),
          href: url('qui-sommes-nous')
        },
        {
          title: translate('Pourquoi Coorpacademy ?'),
          href: url('home-B2B')
        },
        {
          title: translate('Ils nous ont fait confiance'),
          href: url('clients')
        },
        {
          title: translate('L\'équipe'),
          href: url('equipe')
        },
        {
          title: translate('Contactez-nous'),
          href: url('contact')
        }
      ]
    },
    {
      title: translate('Blog'),
      href: 'https://blog-fr.coorpacademy.com/'
    },
    {
      title: translate('Connexion'),
      href: connexionLink,
      type: 'secondary'
    },
    {
      title: translate('Inscription'),
      href: inscriptionLink,
      type: 'primary'
    }]
  };
};
