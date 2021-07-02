import { useLocation } from 'react-router';
import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const McApp: FC = ({ children }) => {
  const styles = useStyles();
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);

  return <div className={styles.app}>{children}</div>;
};

export default McApp;
