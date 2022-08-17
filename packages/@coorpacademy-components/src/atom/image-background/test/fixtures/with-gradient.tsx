import {Props} from '../../index.native';

export const uri =
  '//static.coorpacademy.com/content/CoorpAcademy/content-eyrolles/cockpit-eyrolles/default/shutterstock_123603871-1-1545058448041.jpg';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    source: {uri},
    gradient: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']
  }
};

export default fixture;
