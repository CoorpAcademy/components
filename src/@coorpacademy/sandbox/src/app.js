import createThemeImage from '../../components/molecule/theme-image';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default treant => {
  const {h} = treant;
  const ThemeImage = createThemeImage(treant, {
    skin: {
      images: {
        logo: 'http://lorempixel.com/g/400/200/abstract'
      },
      properties: {
        logo: {
          height: '400px'
        },
        'logo-mobile': {
          height: '100px'
        },
        'logo-tablet': {
          height: '200px'
        }
      }
    }
  });

  return (props, children) => (
    <ThemeImage
      image= 'logo'
    />
  );
};
