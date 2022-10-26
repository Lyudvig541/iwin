type ITable = {
  headerTabs: string[],
  onPageChange?:Function,
  data: { [key: string]:number | string}[],
  value?: any,
  tableRef?:any,
  active?: number,
  setActive?:Function
}

type ITabs ={
  tabs: {[key: string]: number | string}[],
  children: any,
  active: number,
  changeActiveTab: Function,
  padding:string,
  background: string,
  activeTabBackground:string
}

export type {
    ITable,
    ITabs
};