// @flow strict

export const formatKebabCase = (name: string, removeNumbers?: boolean = false): string => {
  let formattedName;
  if (removeNumbers) {
    formattedName = formattedName.replace(/[0-9]/g, '');
  }
  formattedName = name
    .replace(/[\s_]+/g, '-')
    .replace(/([^a-zA-Z-\.])/g, '')
    .toLowerCase()
    .replace(/^(-*)/g, '')
    .replace(/(-*)$/g, '')
    .replace(/-\./g, '.');

  return formattedName;
};
