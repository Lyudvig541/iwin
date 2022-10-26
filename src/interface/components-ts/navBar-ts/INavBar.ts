type INavBar = {
  titleColor?: string,
  title: string,
  activeId: number,
  onToggle: Function,
  icon: any,
  data: {
    coin: string
    chainId: number
    icon: any
    code: string
  }[]
  width?: string
}
type IDropDownItems = {
  data: {
    coin: string
    chainId: number
    icon: any
    code: string
  },
  active?: boolean,
  onChange: Function,
  setShow: Function,
  children: any,
  margin: string | number
}
type IConnectWalletButton = {
  data: {
    coin: string
    chainId: number
    icon: any
    code: string
    balance: any
  }[],
  icon: any,
  selectedNetwork: any,
  setSelectedNetwork: Function,
  balance: any,
  onToggle:Function,
  coinBlockSwitch: boolean
  setCoinBlockSwitch: Function
  setIsAbsolute:Function
}

type IFuncParam = {
  coin: string
  chainId: number
  icon: any
  code: string
}
type INaw = {
  toggleWalletModal?: Function
  toggleYourWalletModal: Function
  setSelectedWallet: Function
  changeMode: Function

}

export type {
    INavBar,
    IDropDownItems,
    IConnectWalletButton,
    IFuncParam,
    INaw
};