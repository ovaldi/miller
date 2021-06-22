import { createContext } from "react";
import { McMillerNode } from "./typing";

export interface McMillerContextProps {
  checked: string[],
  onRequest: (path: string, skip: number) => [McMillerNode[], number],
  setChecked: (list: string[]) => void,
}

const McMillerContext = createContext<McMillerContextProps>({
  checked: [],
  onRequest: () => [[], 0],
  setChecked: () => {},
});

export default McMillerContext;
