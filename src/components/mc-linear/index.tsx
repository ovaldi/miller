import React, { FC } from "react";
import { LinearProgress, useTheme } from "@material-ui/core";

export const McLinear: FC = () => {
  const theme = useTheme();

  return (
    <LinearProgress
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: theme.zIndex.modal + 1
      }}
    />
  );
};

export default McLinear;
