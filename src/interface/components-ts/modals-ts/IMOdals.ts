type IModals = {
    children?: any,
    title?: string,
    icon?: any,
    padding?: boolean | string,
    borderRadius?: string | number,
    navBar?: Function,
    back?: boolean,
    setBack?: Function,
    openFrom?: string
    open?: boolean
    onClose?: Function
    modalKey?: string
}

type IWinningModals = {
    open?: boolean,
    coefficient?: number,
    amount?: number,
    width?: string,
    widthM?: string,
    heightM?: string,
    height?: string,
    pt?: string,
}

type IModalSelector = { modal: { [key: string]: boolean } }

type IWhalletModal ={
    onClick: Function,
    name: string,
    logo: any
}

export type {
    IModals,
    IModalSelector,
    IWhalletModal,
    IWinningModals
};