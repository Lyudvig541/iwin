// import { InjectedConnector } from '@web3-react/injected-connector';
//
// export const injected = new InjectedConnector({
//     supportedChainIds: [\1, 3, 4, 5, 42]
// });

// import { Web3Provider } from '@ethersproject/providers';
// import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chains';
import getLibrary from '../utils/getLibrary';
// import { FortmaticConnector } from './Formatic';
import { NetworkConnector } from './NetworkConnector';
import { infuraKey } from '../utils/getEnv';

const INFURA_KEY = infuraKey;
// const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY;
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID;

// if (typeof INFURA_KEY === 'undefined') {
//
//     throw new Error('REACT_APP_INFURA_KEY must be a defined environment variable');
//
// }

const NETWORK_URLS = {
    [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
    [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`
};

export const network = new NetworkConnector({
    urls: NETWORK_URLS,
    defaultChainId: 1
});

let networkLibrary;

export function getNetworkLibrary() {

    return (networkLibrary = networkLibrary ?? getLibrary(network.provider));

}

export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS
});

// export const gnosisSafe = new SafeAppConnector();


export const walletconnect = new WalletConnectConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
    rpc: NETWORK_URLS,
    qrcode: true
});

// // mainnet only
// export const fortmatic = new FortmaticConnector({
//     apiKey: FORMATIC_KEY ?? '',
//     chainId: 1
// });

// mainnet only
export const portis = new PortisConnector({
    dAppId: PORTIS_ID ?? '',
    networks: [1]
});

