import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/with-context';
import Header from '../../header/test/fixtures/arabic-learner';
import ResourceBrowser from '../../../../../../organism/resource-browser/test/fixtures/vimeo';

const {props} = Cta;
const footerProps = Footer.props;
const headerProps = Header.props;
const resourceProps = ResourceBrowser.props;

export default {
  props: {
    ...resourceProps,
    ...footerProps,
    typeClue: 'context',
    answerType: {
      model: []
    },
    showNewMedia: false,
    starsDiff: 4,
    step: {
      current: 2,
      total: 6
    },
    question: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
    slideContext: {
      title: '<p align="right"> وضع النصوص بالتعه</p>',
      description:
        '<p align="right">ما هو لوريم ايبسوم  <b>Lorem ipsum</b>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي الخير والشر</p>',
      media: {
        src: [{}]
      }
    },
    cta: {
      ...props,
      submitValue: 'Back to Question'
    },
    header: headerProps
  }
};
