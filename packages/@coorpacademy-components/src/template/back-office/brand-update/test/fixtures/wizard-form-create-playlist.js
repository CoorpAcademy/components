import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-general-settings-create';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
items[0].selected = false;
items[2].selected = true;
items[2].tabs = [
  {
    title: 'Look & feel',
    href: '/brands/7steps/admin/look-and-feel',
    name: 'brand_tab_admin_look_and_feel',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Content',
    href: '/brands/7steps/admin/content',
    name: 'brand_tab_admin_user',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Dashboard',
    href: '/brands/7steps/admin/user/dashboard',
    name: 'brand_tab_admin_user',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Custom Playlists',
    href: '/brands/7steps/admin/custom-playlist/published',
    name: 'brand_tab_admin_custom_playlist',
    selected: true,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'Published',
        href: '/brands/7steps/admin/custom-playlist/published',
        name: 'published',
        permissions: ['published'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Drafts',
        href: '/brands/7steps/admin/custom-playlist/drafts',
        name: 'drafts',
        permissions: ['drafts'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Archived',
        href: '/brands/7steps/admin/custom-playlist/archived',
        name: 'archived',
        permissions: ['archived'],
        selected: false,
        type: 'simpleTab'
      }
    ]
  }
];
const form = WizardForm.props;

export default {
  props: {
    notifications: [],
    header,
    items,
    content: {
      ...form,
      isLoading: false,
      key: 'general-settings',
      type: 'wizard'
    },
    documentation: {
      show: true,
      onClose: () => console.log('close'),
      content:
        '<div><h2>Markdown Basic</h2><p>Markdown is a lightweight markup language that enables you to benefit from simple styling such as bold &amp; italic texts, &amp; links.</p><div class="Cms__help__body"><h3>Markdown 101</h3><pre class="Cms__help__code_sample"><code># This is a title - This is **Bold** and this is *italic*\n - [Here is a link](https://en.wikipedia.org/wiki/Markdown)\n - all of these in a list\n\n ## This is a secondary title\n 1. you can\n 2. create ordered lists\n \n Markdown also allows you to insert images, or some tabs</code></pre><h3>Coorp Cms Specifics</h3><ul><li><span>If you want to center a text / image body, wrap it with </span><code>&lt;center&gt;Center me&lt;/center&gt;</code></li><li><span>If you want to define the size of your image, use the following syntax: </span><code>&lt;img src="link/to/my-image.jpg" width="22"/&gt;</code><span> (you can also specify the </span><code>width</code><span>)</span></li><li><span>If you want your link to open in another tab, you need to use the following HTML syntax: </span><code>&lt;a href="https://en.wikipedia.org/wiki/Markdown" target="_blank"&gt;Some text&lt;/a&gt;</code></li></ul><div class="Cms__help__more"><h4>For more details, check these links</h4><ul><li><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">📚 Quick Reference</a></li><li><a href="http://daringfireball.net/projects/markdown/syntax" target="_blank" rel="noopener noreferrer" >📚 Full Documentation</a></li></ul></div></div></div>'
    }
  }
};
