// @flow strict

export const formatKebabCase = (name: string, removeNumbers?: boolean = false): string => {
  let formattedName = name;
  if (removeNumbers) {
    formattedName = formattedName.replace(/[0-9]+/g, '');
  }
  formattedName = formattedName
    .replace(/[\s_]+/g, '-')
    .replace(/([^a-zA-Z0-9-\.])/g, '')
    .toLowerCase()
    .replace(/^(-*)/g, '')
    .replace(/(-*)$/g, '')
    .replace(/-\./g, '.');

  return formattedName;
};
