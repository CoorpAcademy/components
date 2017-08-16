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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et scelerisque eros, eu gravida nibh. Nunc sodales vulputate maximus. Suspendisse sed libero ligula. Aenean nec ante et turpis sodales dignissim. Quisque a diam ex. Aliquam erat volutpat. Duis et vestibulum elit. Fusce vitae risus leo. Quisque sed egestas nisl, non bibendum sapien. Sed id tempus ante. Nulla dapibus non dui sed bibendum. Pellentesque venenatis justo elit, ac ultricies ligula lobortis eget. Fusce ornare, odio eu lobortis efficitur, tellus justo tristique tellus, eget ultrices elit leo sodales est. Cras egestas enim consequat justo sagittis gravida. Curabitur semper ante eget mi scelerisque, laoreet tincidunt enim pharetra. Integer commodo lorem risus, id ornare arcu pellentesque ac. Vestibulum porta quis dui quis dignissim. Praesent condimentum placerat sem nec commodo. Nam mollis enim ac commodo pellentesque. Sed et semper justo, sed luctus nisi. Maecenas dui nunc, rutrum quis pellentesque in, vehicula nec velit. Cras convallis leo vel enim tempus scelerisque.',
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
