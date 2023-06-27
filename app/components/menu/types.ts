
// interface HeaderInterface {
//   onChangeLayoutMode: (param: typeLayoutModeTypes) => void
//   layoutModeType: typeLayoutModeTypes
// }

// Menu's entries
export enum MenuState {
  main = 'main',
  base = 'base',
  multilevel = 'multilevel',
  path1 = 'path1',
  path2 = 'path2',
}

export type MenuItem = {
  label: string
  link: string
}

export type ChildrenMenuItem = MenuItem & {
  id: number;
  parentId: string; //inutile
}

export type SubMenuItem = MenuItem & {
  id: string;
  parentId: string; //to enum
  isChildItem: boolean; //true solo chi ha sub children
  //solo quelli che hanno sub-subItem
  stateVariables?: boolean; //to enum
  childItems?: ChildrenMenuItem[];
  click?: (event: React.MouseEvent<HTMLAnchorElement>) => void; //to declare
}

export type ContainerMenuItem = MenuItem & {
  id: MenuState;
  icon: string;
  click: (event: React.MouseEvent<HTMLAnchorElement>) => void; //to declare
  stateVariables?: boolean;
  subItems?: SubMenuItem[];
  // isHeader: false// deve essere sempre false per i parentItem
}

export type MenuTitle = {
  label: string;
  isHeader: boolean;
}
