import Cta from '../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../../slides-footer/test/fixtures/with-context';
import ResourceBrowser from '../../../../../organism/resource-browser/test/fixtures/video-selected';

const {props} = Cta;
const footerProps = Footer.props;
const resourceProps = ResourceBrowser.props;

export default {
  props: {
    typeClue: 'context',
    starsDiff: 4,
    step: {
      current: 2,
      total: 6
    },
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    slideContext: {
      title: 'A little bit of context',
      description:
        'Lorem ipsum dolor sit amet, vim ad probatus conceptam philosophia. Ea omnes forensibus elaboraret usu. Audire salutatus ex per. Ei vero ludus duo.\nTibique nominati sed ei, eripuit adipiscing intellegebat cu qui. Ne vim tale dicat, nec ut noluisse invidunt. Sit cu persecuti constituto delicatissimi. Vidisse expetenda eos eu, cum zril euripidis prodesset no.\nTe vix mollis accommodare, ad omnes deterruisset usu, ex eam diceret euismod. Rationibus complectitur ei vel, qui scribentur philosophia conclusionemque id, eius ullum nominavi est ad. Per prima simul accusata no. Eum quot tollit et. Eos in animal delicata, cum cu dicat vivendum.\nMel utinam aeterno singulis et, at has noster mentitum necessitatibus. Cu his alia senserit, putent dictas electram cu vel, tota dolore in ius. Nec semper partiendo hendrerit ei. Sit sonet eloquentiam no, qui id malorum graecis perfecto, offendit ponderum est ut. Vocent expetendis at pri.\nVocent accusata voluptatum ex per, per at esse debitis. Augue putent nonumes vel ea, et sale corrumpit voluptaria pri. Mei in ferri eligendi mediocrem. Nam justo homero facete ei. Ea eam inani scaevola, vel ad vidisse virtute. Qui quis habeo modus eu, laudem utamur complectitur vis eu, nec cibo incorrupte cu. Nibh semper commune sea cu, vix solum discere recteque in, eos eu atomorum accusamus similique.',
      media: undefined
    },
    cta: {
      ...props,
      submitValue: 'Back to Question'
    },
    ...resourceProps,
    ...footerProps
  }
};
