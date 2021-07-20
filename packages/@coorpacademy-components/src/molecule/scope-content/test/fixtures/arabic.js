import ResourceBrowser from '../../../../organism/resource-browser/test/fixtures/arabic';

const {
  props: {resources}
} = ResourceBrowser;

export default {
  props: {
    content: {
      title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
      course_scope: ['24 QUESTIONS', '3 VIDÉOS'],
      time: '2H20',
      skills: [
        '<p align="right">التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص</p>',
        '<p align="right">في الأدب اللاتيني الكلاسيكي منذ العام </p>'
      ],
      chapters: [
        {name: '<p align="right">سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو.</p>'},
        {
          name: '<p align="right">أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد</p>'
        },
        {name: '<p align="right">إن ريبريهينديرأيت فوليوبتاتي فيلايت</p>'}
      ],
      resources
    }
  }
};
