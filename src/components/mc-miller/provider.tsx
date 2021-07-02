import McMillerContext from './context';
import React, { FC, useEffect, useState } from 'react';
import { McMillerNode } from './typing';

interface IProps {
  onRequest: (path: string, skip: number) => [McMillerNode[], number];
  onChanged: (paths: string[]) => void;
}

const McMillerProvider: FC<IProps> = ({ children, onRequest, onChanged }) => {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    onChanged(checked);
  }, [checked, onChanged]);

  return (
    <McMillerContext.Provider
      value={{
        checked,
        onRequest,
        setChecked,
      }}
    >
      {children}
    </McMillerContext.Provider>
  );
};

export default McMillerProvider;
