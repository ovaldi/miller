import React, { FC } from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
  },
}));

export const McBody: FC = ({ children }) => {
  const styles = useStyles();

  return (
    <Container maxWidth="xl" component="main" className={styles.root}>
      {children}
    </Container>
  );
};

export default McBody;
