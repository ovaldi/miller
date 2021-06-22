import { include } from "misc/path";
import McFinderContext from "../context";
import { useContext, useMemo } from "react";
import { McMillerNode, McMillerStatus } from "../typing";

const useStatus = (
  node: McMillerNode,
): McMillerStatus => {
  const { checked } = useContext(McFinderContext);

  return useMemo(() => {
    if (checked.some(x => x === node.path)) {
      return McMillerStatus.Checked;
    }
    if (checked.some(x => include(x, node.path))) {
      return McMillerStatus.Checked;
    }
    if (checked.some(x => include(node.path, x))) {
      return McMillerStatus.Intermediate;
    }
    return McMillerStatus.None;
  }, [node, checked]);
};

export default useStatus;
