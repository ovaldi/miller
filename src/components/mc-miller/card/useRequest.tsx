import useData from './useData';
import McMillerContext from '../context';
import { McMillerNode } from '../typing';
import { useCallback, useContext } from 'react';

const useRequest = (
  path: string,
): [number, McMillerNode[], (skip?: number) => void] => {
  const [data, setData] = useData(path);
  const { onRequest } = useContext(McMillerContext);
  const request = useCallback(
    (skip = 0) => {
      const [items, count] = onRequest(path, skip);
      setData(prev => ({
        count,
        items: skip === 0 ? items : [...prev.items, ...items],
      }));
    },
    [path, setData, onRequest],
  );
  return [data.count, data.items, request];
};

export default useRequest;
