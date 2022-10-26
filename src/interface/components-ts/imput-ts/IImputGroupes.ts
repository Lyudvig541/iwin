type IInputGroups = {
    borderRadius: string,
    background?: string,
    disable: boolean,
    multiplier?: boolean,
    type?: string,
    step: number,
    value: any,
    maxValue?: number,
    minValue?: number,
    player?: any,
    text?: string,
    maxWidth?: string,
    percent?: any,
    width?: string | number,
    inputWidth?: string | number,
    setValue?: Function,
    changePlayer?: Function,
    setInfluenceBalance?: Function,
    balance?: number | string
    lightMode?: boolean,
    height?: string | number,
}
type IMultiplication = {
    disable: boolean,
    maxValue: number,
    minValue: number,
    setValue: Function,
    value: any,
    balance?: number | string,
    setInfluenceBalance: Function
}
type IInput = {
    type: string,
    disable: boolean,
    step: number,
    value: any,
    setValue?: Function,
    text?: string,
    maxValue?: number,
    maxWidth?: string,
    inputWidth?: string | number,
    balance?: number | string,
    setInfluenceBalance: Function,
    minValue: number | string

}

export type {
    IInputGroups,
    IMultiplication,
    IInput
};