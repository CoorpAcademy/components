import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    fontSize: 20,
    children: `
  <center>
      <img src="https://static.coorpacademy.com/content/enjoytesting/raw/Anim_Etoile_1.gif"/>
    </center>
    <font>On this platform</font>, you earn 4 stars per right answer.
    If you successfully complete this level, the stars you’ve accumulated so far will be added to your score and you will rise in the ranks!
    Let’s do it! Good luck on your last question, this is a tough one!
  `
  }
};

export default fixture;
