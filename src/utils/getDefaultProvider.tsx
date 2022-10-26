import { FC } from 'react';
import { createWeb3ReactRoot } from '@web3-react/core';
import { NetworkContextName } from '../constants/misc';


const Web3ReactProviderDefault = createWeb3ReactRoot(NetworkContextName);

const Web3ReactProviderDefaultSSR:FC = ({ children, getLibrary }:any) => (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
        {children}
    </Web3ReactProviderDefault>
);

export default Web3ReactProviderDefaultSSR;
