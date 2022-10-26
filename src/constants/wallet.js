// import { AbstractConnector } from '@web3-react/abstract-connector';

import INJECTED_ICON_URL from '../assets/img/default-wallet-connect-logo.svg';
import COINBASE_ICON_URL from '../assets/img/coinbase-wallet-logo.svg';
// import FORTMATIC_ICON_URL from '../assets/img/fortmatic-logo.png';
import METAMASK_ICON_URL from '../assets/img/metamask-logo.png';
// import PORTIS_ICON_URL from '../assets/img/portis-logo.png';
import WALLETCONNECT_ICON_URL from '../assets/img/wallet-connect-logo.svg';
import { /*fortmatic,*/ injected, /*portis,*/ walletconnect/*, walletlink*/ } from '../connectors';


export const SUPPORTED_WALLETS = {
    INJECTED: {
        connector: injected,
        name: 'Injected',
        iconURL: INJECTED_ICON_URL,
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true
    },
    METAMASK: {
        connector: injected,
        name: 'MetaMask',
        iconURL: METAMASK_ICON_URL,
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D'
    },
    WALLET_CONNECT: {
        connector: walletconnect,
        name: 'WalletConnect',
        iconURL: WALLETCONNECT_ICON_URL,
        description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
        href: null,
        color: '#4196FC',
        mobile: true
    },
    // WALLET_LINK: {
    //     connector: walletlink,
    //     name: 'Coinbase Wallet',
    //     iconURL: COINBASE_ICON_URL,
    //     description: 'Use Coinbase Wallet app on mobile device',
    //     href: null,
    //     color: '#315CF5'
    // },
    COINBASE_LINK: {
        name: 'Open in Coinbase Wallet',
        iconURL: COINBASE_ICON_URL,
        description: 'Open in Coinbase Wallet app.',
        href: 'https://go.cb-w.com/mtUDhEZPy1',
        color: '#315CF5',
        mobile: true,
        mobileOnly: true
    }
    // FORTMATIC: {
    //     connector: fortmatic,
    //     name: 'Fortmatic',
    //     iconURL: FORTMATIC_ICON_URL,
    //     description: 'Login using Fortmatic hosted wallet',
    //     href: null,
    //     color: '#6748FF',
    //     mobile: true
    // },
    // Portis: {
    //     connector: portis,
    //     name: 'Portis',
    //     iconURL: PORTIS_ICON_URL,
    //     description: 'Login using Portis hosted wallet',
    //     href: null,
    //     color: '#4A6C9B',
    //     mobile: true
    // }
};