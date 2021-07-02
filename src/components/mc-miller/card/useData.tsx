import { McMillerNode } from '../typing';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IData {
  count: number;
  items: McMillerNode[];
}

export const kInit: IData = {
  count: 0,
  items: [],
};

const useData = (path: string): [IData, Dispatch<SetStateAction<IData>>] => {
  const [data, setData] = useState(kInit);
  useEffect(() => setData(kInit), [path]);
  return [data, setData];
};

export default useData;
