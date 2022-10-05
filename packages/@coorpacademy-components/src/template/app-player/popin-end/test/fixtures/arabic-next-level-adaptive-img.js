import {defaultsDeep} from 'lodash/fp';
import Card from '../../../../../molecule/card/test/fixtures/arabic';
import correct from './arabic-with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      feedback: {
        type: 'success',
        title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
        description:
          '<p align="right">ما هو لوريم ايبسوم  <b>Lorem ipsum</b>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي الخير والشر</p>',
        mediaDescription: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
        media: {
          type: 'img',
          src: [
            {
              url: 'http://www.sommeildavantage.com/img/fauteuil-massage/bienfaits/fauteuil-massage-bienfaits-esprit-vivacite-esprit.jpg'
            }
          ]
        }
      },
      action: {
        type: 'nextCourse',
        prefix: 'Next chapter:',
        title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
        card: Card.props
      },
      header: {
        type: 'popinEnd',
        cta: {
          title: 'Home',
          type: 'home',
          href: '#'
        }
      }
    }
  }
});
