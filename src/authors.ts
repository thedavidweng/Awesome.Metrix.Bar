export const authors = Object.entries({
  baranwang: 11427801,
  fatwang2: 134143178,
  "0tt0": 318468762,
  JasonChou0v0: 76592626,
  thedavidweng: 95214375,
}).map(([name, id]) => ({
  name,
  file: `${name}.webp`,
  // sized for the 24 px avatar at 2x: unsized, WebP.se passes small PNG originals through unconverted
  url: `https://avatars-githubusercontent.webp.se/u/${id}?s=48`,
}));

export function avatarPath(name: string): string | undefined {
  const author = authors.find((author) => author.name === name);
  return author ? `/avatars/${author.file}` : undefined;
}
