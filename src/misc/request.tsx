import faker from "faker";
import { McMillerNode, McMillerMode } from "components/mc-miller/typing";

const _cache: {
  [x: string]: {
    count: number,
    items: McMillerNode[],
  },
} = {};

const _touch = (path: string) => ({
  mode: McMillerMode.Doc,
  path: path + "/" + faker.system.commonFileName(),
});

const _mkdir = (path: string) => ({
  mode: McMillerMode.Dir,
  path: path + "/" + faker.random.word(),
});


const _random = (path: string) => {
  const random = Math.floor(Math.random() * 10 + 1);
  if (random % 2 === 0) {
    return _touch(path);
  }
  return _mkdir(path);
};

const request = (path: string, skip = 0): [McMillerNode[], number] => {
  if (!_cache[path]) {
    let index = 0;
    const items: McMillerNode[] = [];
    const depth = path.split('/').length;
    const count = Math.floor(Math.random() * 30 + 1);
    while (index < count) {
      const item = depth > 4 ? _touch(path) : _random(path);
      if (items.find(x => x.path === item.path)) {
        continue;
      }
      items.push(item);
      index++;
    }
    _cache[path] = {
      count,
      items,
    };
  }
  return [
    _cache[path].items.slice(skip, skip + 10),
    _cache[path].count,
  ];
};

export default request;
