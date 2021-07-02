import Card from './card';
import React, { FC } from 'react';
import { McMillerNode } from './typing';
import McMillerProvider from './provider';
import { makeStyles } from '@material-ui/core';

interface IProps {
  path: string;
  width?: number | string;
  height?: number | string;
  onChanged?: (paths: string[]) => void;
  onRequest: (path: string, skip: number) => [McMillerNode[], number];
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    ' & > div:not(:first-child)': {
      marginLeft: -1,
    },
  },
});

const McMiller: FC<IProps> = ({
  path,
  width = '100%',
  height = '100%',
  onRequest,
  onChanged = () => {},
}) => {
  const styles = useStyles();

  return (
    <div style={{ width, height }} className={styles.root}>
      <McMillerProvider onRequest={onRequest} onChanged={onChanged}>
        <Card path={path} />
      </McMillerProvider>
    </div>
  );
};

export default McMiller;
