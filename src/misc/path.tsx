// TODO: Windows or POSIX
// https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_windows_vs_posix
const kSeparator = '/';

export const include = (src: string, dst: string): boolean => {
  const a = src.split(kSeparator).filter(x => x);
  const b = dst.split(kSeparator).filter(x => x);
  return a.every((it, ix) => b[ix] === it);
};

export const dirname = (path: string): string => {
  const bunch = path.split(kSeparator);
  return bunch.slice(0, bunch.length - 1).join(kSeparator);
};

export const basename = (path: string): string => {
  return path.split(kSeparator).reverse()[0];
};
