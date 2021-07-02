import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 10,
    '&:hover': {
      backgroundColor: '#ccc',
    },
  },
  name: {
    flex: 1,
    marginRight: 5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  dir: {
    color: '#e1ba8b',
    marginLeft: 5,
    marginRight: 10,
  },
  doc: {
    color: '#a4a4aa',
    marginLeft: 5,
    marginRight: 10,
  },
  highlight: {
    backgroundColor: '#ccc',
  },
}));

export default useStyles;
