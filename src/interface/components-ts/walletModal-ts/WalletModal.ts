type IWalletModal = {
  navBar: boolean
  selectedWallet: any
  setSelectedWallet: Function
}
type IConnectionState = { modal: {connectWallet: boolean} }

type IWalletModalA = {
  open: boolean,
  onClose: Function,
  navBar: boolean
}


type IConnectItem = {
  onClick: Function,
  icon: any,
  text: string,
  done: boolean
}

export type {
    IWalletModal,
    IConnectItem,
    IWalletModalA,
    IConnectionState
};