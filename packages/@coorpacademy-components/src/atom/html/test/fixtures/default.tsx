import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    fontSize: 20,
    children: `
  Les <font color="# 654654">deux</font> adverbes ont<s>une terminaison</s> qui se <u>prononce "ament"</u>, mais leur orthographe diffère. On écrit ainsi :
  <br/>– <i>vaill<font color="# 654654">a</font>mment</i>, parce que l'adverbe est formé à partir d’un <b>adjectif en <i>-ant</i></b> (<i>vaill<font color="#123">a</font>nt</i>) ;
  <br/>– <i>incid<font color="blue">e</font>mment</i>, parce que l'adverbe est formé à partir d’un <b>adjectif en <i>-ent</i></b> (<i>incid<font color="blue">e</font>nt</i>).
`
  }
};

export default fixture;
