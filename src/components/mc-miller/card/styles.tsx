import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 272,
    height: "100%",
    border: "1PX solid #a4a4aa",
    overflowY: "auto",
    flexShrink: 0,
  },
  more: {
    display: "block",
    margin: "15px auto",
    border: "2px solid #ccc",
  },
}));

export default useStyles;
