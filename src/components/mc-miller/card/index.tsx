import Node from '../node';
import useStyles from './styles';
import useRequest from './useRequest';
import { Button } from '@material-ui/core';
import { McMillerMode, McMillerNode } from '../typing';
import React, { FC, useEffect, useState } from 'react';

interface IProps {
  path: string;
}

const Card: FC<IProps> = ({ path }) => {
  const styles = useStyles();
  const [count, items, request] = useRequest(path);
  const [select, setSelect] = useState<McMillerNode | null>(null);

  useEffect(() => {
    request();
    setSelect(null);
  }, [request]);

  return (
    <React.Fragment>
      <div className={styles.root}>
        {items.map(x => (
          <Node
            key={x.path}
            node={x}
            onClick={() => setSelect(x)}
            highlight={select ? select.path === x.path : false}
          />
        ))}
        {count > items.length && (
          <Button onClick={() => request(items.length)} className={styles.more}>
            More
          </Button>
        )}
      </div>
      {select && select.mode === McMillerMode.Dir && (
        <Card path={select.path} />
      )}
    </React.Fragment>
  );
};

export default Card;
