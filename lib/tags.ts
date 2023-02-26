import { Post } from 'contentlayer/generated';

export async function getAllTags(files: Post[]): Promise<{}> {
  let tagCount = {};

  files.forEach((file) => {
    let formattedTag = file.tag;

    if (formattedTag in tagCount) {
      tagCount[formattedTag] += 1;
    } else {
      tagCount[formattedTag] = 1;
    }
  });

  return tagCount;
}
