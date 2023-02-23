export const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1)

export const convertName = (str: string): string =>
  str === 'css' ? str.toUpperCase().replace(/^\./, '') : capitalize(str)

export const changeTagsPath = (str: string) => str.replaceAll('.', '')
