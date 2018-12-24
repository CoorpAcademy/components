// @flow strict

export const formatKebabCase = (name: string, removeNumbers?: boolean = false): string => {
  let formattedName = name;
  if (removeNumbers) {
    formattedName = formattedName.replace(/\d+/g, '');
  }
  formattedName = formattedName
    .replace(/[\s_]+/g, '-')
    .replace(/([^a-zA-Z0-9-.])/g, '')
    .toLowerCase()
    .replace(/^(-*)/g, '')
    .replace(/(-*)$/g, '')
    .replace(/-\./g, '.');

  return formattedName;
};

export const formatPascalCase = (name: string): string =>
  name
    .replace(/(\.native|)\.js/g, '')
    .replace(/(\/|\.)/g, '-')
    .replace(/-(.{1})/g, letter => letter.toUpperCase())
    .replace(/^(.{1})/, letter => letter.toUpperCase())
    .replace(/-/g, '');
