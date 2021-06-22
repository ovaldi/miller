import uniq from "lodash/uniq";
import useStyles from "./styles";
import useStatus from "./useStatus";
import classnames from "classnames";
import McFinderContext from "../context";
import { include, basename } from "misc/path";
import React, { FC, useContext } from "react";
import { Icon, Checkbox, Typography } from "@material-ui/core";
import { McMillerMode, McMillerNode, McMillerStatus } from "../typing";

interface IProps {
  node: McMillerNode,
  onClick?: () => void,
  highlight?: boolean,
}

export const Node: FC<IProps> = ({
  node,
  highlight = false,
  onClick = () => {},
}) => {
  const styles = useStyles();
  const status = useStatus(node);
  const context = useContext(McFinderContext);
  const classes = classnames(styles.root, {
    [styles.highlight]: highlight,
  });

  return (
    <div
      onClick={onClick}
      className={classes}
    >
      <Checkbox
        color="primary"
        checked={status === McMillerStatus.Checked || status === McMillerStatus.Intermediate}
        indeterminate={status === McMillerStatus.Intermediate}
        onChange={(_, checked) => {
          if (checked) {
            context.setChecked(uniq([...context.checked, node.path]));
          } else {
            context.setChecked(context.checked.filter(x => !include(node.path, x) && !include(x, node.path)));
          }
        }}
      />
      {
        node.mode === McMillerMode.Dir && (
          <Icon className={styles.dir}>folder</Icon>
        )
      }
      {
        node.mode === McMillerMode.Doc && (
          <Icon className={styles.doc}>insert_drive_file</Icon>
        )
      }
      <Typography
        component="span"
        className={styles.name}
      >{basename(node.path)}</Typography>
      {
        node.mode === McMillerMode.Dir && (
          <Icon>{status !== McMillerStatus.None ? 'remove' : 'add'}</Icon>
        )
      }
    </div>
  );
};

export default Node;
