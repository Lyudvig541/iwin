export type IKenoInitialState = {
  kenoList: {
    id: number;
    check: boolean;
    number: number;
    win: boolean
  }[];
  winList: number[];
  getList: number[];
  isWin: { isWin: boolean, winX: number } | null;
  riskButton: {
    id: number;
    text: 'Low' | 'Medium' | 'Hard';
  } [];
  autoPicks: {
    id: number;
    text: any;
  } [];
}
export type IKenoList = {
  keno: {
    kenoList: {
      id: number;
      check: boolean;
      number: number;
      win: boolean;
  }[],
    riskButton:{
      id: number;
      text: string;
    } [];
    getList: number[];
    isWin: { isWin: boolean, winX: number } | null;
    autoPicks:{
      id: number;
      text: any;
    } [];
  },

}