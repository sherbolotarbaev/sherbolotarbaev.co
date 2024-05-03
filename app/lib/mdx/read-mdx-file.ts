import { readFileSync } from 'node:fs';

import { parseFrontmatter } from './parse-frontmatter';

export function readMDXFile(filePath: string) {
  const fileContent = readFileSync(filePath, 'utf8');
  return parseFrontmatter(fileContent);
}
