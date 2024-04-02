import frstSidePanelItem from '../../../skills-chart-side-information-item/test/fixtures/default-courses-completed';
import secondPanelItem from '../../../skills-chart-side-information-item/test/fixtures/default-courses-questions-answered';
import thirdPanelItem from '../../../skills-chart-side-information-item/test/fixtures/default-courses-learning-hours';

export default {
  props: {
    sidePanelItems: [frstSidePanelItem.props, secondPanelItem.props, thirdPanelItem.props]
  }
};
