import {compact} from 'lodash/fp';

const reg = /{{(\w+)}}/;

function parseTemplateString(_template) {
  if (!_template) {
    return [];
  }

  const template = _template.replace(/<br\s*\/*>/g, '<br>').replace(/\r?\n|\r/g, '<br>');

  const res = reg.exec(template);

  if (!res) {
    return [{type: 'string', value: template}];
  }

  return compact([
    res.index === 0 ? null : {type: 'string', value: template.slice(0, res.index)},
    {type: 'answerField', value: res[1]}
  ]).concat(parseTemplateString(template.slice(res.index + res[0].length)));
}

export default parseTemplateString;
