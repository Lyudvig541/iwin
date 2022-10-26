type IValue = {[key:string]: string | number }

type IDropDown = {
  data?: IValue[],
  onChange?: Function,
  type?: string,
  children?: any,
  titleColor?:string,
  titleMargin?:string,
  scoreboardData?: IValue[],
  titleNumber?: number | string,
}

type IDropDownItems = {
  onChange: Function,
  value: IValue,
  setShow: Function
  title?: string| number
  key:any
}

export type {
    IDropDown,
    IDropDownItems,
    IValue
};