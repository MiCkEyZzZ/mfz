import { slug } from 'github-slugger'

export function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1)
}

export const kebabCase = (str: any) => slug(str)

export function convertName(str: string) {
  if (str === 'css') {
    return str.toUpperCase()
  }

  return capitalize(str)
}
