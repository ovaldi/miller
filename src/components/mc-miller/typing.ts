export enum McMillerMode {
  Doc = 0,
  Dir = 1,
}

export enum McMillerStatus {
  None = 0,
  Intermediate = 1,
  Checked = 2,
}

export interface McMillerNode {
  path: string,
  mode: McMillerMode,
}
