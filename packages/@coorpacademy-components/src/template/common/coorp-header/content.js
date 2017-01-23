import join from 'lodash/fp/join';

export default props => {
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
      title: 'Les formations',
      href: url('catalog/trainings'),
      subItems: [
        {
          title: 'Tous les cursus',
          href: url('home-B2C')
        },
        {
          title: 'Toutes les formations',
          href: url('catalog/trainings')
        },
        {
          title: 'Abonnement Coorpacademy',
          href: url('tarifs-abonnement')
        }
      ]
    },
    {
      title: 'Nos Solutions Entreprises',
      href: url('solutions'),
      subItems: [
        {
          title: 'Solutions Entreprises',
          href: url('solutions')
        },
        {
          title: 'Des formations adaptées à vos enjeux',
          href: url('contenu-adapte-enjeux')
        },
        {
          title: 'Toutes les formations',
          href: url('catalog/trainings/')
        },
        {
          title: 'Tarifs entreprises',
          href: url('tarifs-entreprises')
        }
      ]
    },
    {
      title: 'Coorpacademy',
      href: url('qui-sommes-nous'),
      subItems: [
        {
          title: 'Qui sommes-nous ?',
          href: url('qui-sommes-nous')
        },
        {
          title: 'Pourquoi Coorpacademy ?',
          href: url('home-B2B')
        },
        {
          title: 'Ils nous font confiance',
          href: url('clients')
        },
        {
          title: 'L\'équipe',
          href: url('equipe')
        },
        {
          title: 'Contactez-nous',
          href: url('contact')
        }
      ]
    },
    {
      title: 'Blog',
      href: 'https://blog-fr.coorpacademy.com/',
      outgoing: true
    },
    {
      title: 'Connexion',
      href: connexionLink,
      type: 'secondary'
    },
    {
      title: 'Inscription',
      href: inscriptionLink,
      type: 'primary'
    }]
  };
};
