import compact from 'lodash/fp/compact';

const reg = /{{(\w+)}}/;

function parseTemplateString(template) {
  if (!template) {
    return [];
  }
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
