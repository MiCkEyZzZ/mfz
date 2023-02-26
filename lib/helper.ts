const START_WORD = 'стат';
const END_DECLENSIONS = ['ья', 'ьи', 'ей'];

export const capitalize = (word: string): string => word[0].toUpperCase() + word.slice(1);

export const changeTagsPath = (str: string): string => str.replaceAll('.', '');

export const getDeclensionsWorld = (num: number): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  let mod = num % 100;
  let declensionCase = mod > 4 && mod < 20 ? 2 : cases[Math.min(mod % 10, 5)];

  return START_WORD + END_DECLENSIONS[declensionCase];
};

export function convertName(str: string): string {
  let title = '';

  if (str === 'philosophy') {
    title = str.replaceAll('philosophy', 'Философия');
  } else if (str === 'animation') {
    title = str.replaceAll('animation', 'Анимация');
  } else if (str === 'css') {
    return str.toUpperCase().replace(/^\./, '');
  } else {
    title = capitalize(str);
  }

  return title;
}
