// import ethereumLogoUrl from 'assets/images/ethereum-logo.png';
// import arbitrumLogoUrl from 'assets/svg/arbitrum_logo.svg';
// import optimismLogoUrl from 'assets/svg/optimistic_ethereum.svg';
// import ms from 'ms.macro';

export const SupportedChainId = {
    MAINNET: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    GOERLI: 5,
    KOVAN: 42,
    TEST: 97,
    SMART: 56,

    ARBITRUM_ONE: 42161,
    ARBITRUM_RINKEBY: 421611,
    OPTIMISM: 10,
    OPTIMISTIC_KOVAN: 69
};

export const ALL_SUPPORTED_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.SMART,
    SupportedChainId.ROPSTEN,
    SupportedChainId.RINKEBY,
    SupportedChainId.GOERLI,
    SupportedChainId.KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.TEST
];

export const L1_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.ROPSTEN,
    SupportedChainId.RINKEBY,
    SupportedChainId.GOERLI,
    SupportedChainId.KOVAN
];

export const L2_CHAIN_IDS = [
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN
];


export const CHAIN_INFO = {
    [SupportedChainId.ARBITRUM_ONE]: {
        blockWaitMsBeforeWarning: 600000,
        bridge: 'https://bridge.arbitrum.io/',
        docs: 'https://offchainlabs.com/',
        explorer: 'https://arbiscan.io/',
        infoLink: 'https://info.uniswap.org/#/arbitrum',
        label: 'Arbitrum',
        // logoUrl: arbitrumLogoUrl,
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://arb1.arbitrum.io/rpc']
    },
    [SupportedChainId.ARBITRUM_RINKEBY]: {
        blockWaitMsBeforeWarning: 600000,
        bridge: 'https://bridge.arbitrum.io/',
        docs: 'https://offchainlabs.com/',
        explorer: 'https://rinkeby-explorer.arbitrum.io/',
        infoLink: 'https://info.uniswap.org/#/arbitrum/',
        label: 'Arbitrum Rinkeby',
        // logoUrl: arbitrumLogoUrl,
        nativeCurrency: { name: 'Rinkeby ArbETH', symbol: 'rinkArbETH', decimals: 18 },
        rpcUrls: ['https://rinkeby.arbitrum.io/rpc']
    },
    [SupportedChainId.MAINNET]: {
        docs: 'https://docs.uniswap.org/',
        explorer: 'https://etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/',
        label: 'Ethereum',
        // logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 }
    },
    [SupportedChainId.RINKEBY]: {
        docs: 'https://docs.uniswap.org/',
        explorer: 'https://rinkeby.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/',
        label: 'Rinkeby',
        nativeCurrency: { name: 'Rinkeby ETH', symbol: 'rinkETH', decimals: 18 }
    },
    [SupportedChainId.ROPSTEN]: {
        docs: 'https://docs.uniswap.org/',
        explorer: 'https://ropsten.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/',
        label: 'Ropsten',
        nativeCurrency: { name: 'Ropsten ETH', symbol: 'ropETH', decimals: 18 },
        rpcUrls: ['https://api.mycryptoapi.com/eth']
    },
    [SupportedChainId.KOVAN]: {
        docs: 'https://docs.uniswap.org/',
        explorer: 'https://kovan.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/',
        label: 'Kovan',
        nativeCurrency: { name: 'Kovan ETH', symbol: 'kovETH', decimals: 18 }
    },
    [SupportedChainId.GOERLI]: {
        docs: 'https://docs.uniswap.org/',
        explorer: 'https://goerli.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/',
        label: 'Görli',
        nativeCurrency: { name: 'Görli ETH', symbol: 'görETH', decimals: 18 }
    },
    [SupportedChainId.OPTIMISM]: {
        blockWaitMsBeforeWarning: 600000,
        bridge: 'https://gateway.optimism.io/',
        docs: 'https://optimism.io/',
        explorer: 'https://optimistic.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/optimism',
        label: 'OΞ',
        // logoUrl: optimismLogoUrl,
        nativeCurrency: { name: 'Optimistic ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://mainnet.optimism.io']
    },
    [SupportedChainId.OPTIMISTIC_KOVAN]: {
        blockWaitMsBeforeWarning: 600000,
        bridge: 'https://gateway.optimism.io/',
        docs: 'https://optimism.io/',
        explorer: 'https://optimistic.etherscan.io/',
        infoLink: 'https://info.uniswap.org/#/optimism',
        label: 'Optimistic Kovan',
        rpcUrls: ['https://kovan.optimism.io'],
        // logoUrl: optimismLogoUrl,
        nativeCurrency: { name: 'Optimistic kovETH', symbol: 'kovOpETH', decimals: 18 }
    },
    [SupportedChainId.TEST]: {
        chainName: 'bsc-testnet',
        rpcUrls: ['https://data-seed-prebsc-1-s2.binance.org:8545/'],
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18
        },
        blockExplorerUrls: ['https://bscscan.com'],
        blockWaitMsBeforeWarning: 600000
    }
};

export const ARBITRUM_HELP_CENTER_LINK = 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum';
export const OPTIMISM_HELP_CENTER_LINK = 'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ';
