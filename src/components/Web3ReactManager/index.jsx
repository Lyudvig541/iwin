import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import Web3Context from './web3Context';
import { network } from '../../connectors';
import { useEagerConnect, useInactiveListener } from '../../hooks/web3';

export default function Web3ReactManager({ children }) {

    const { active, chainId, account } = useWeb3React();
    const [ userWallet, setUserWallet ] = useState('');
    const [ wrongNetwork, setWrongNetwork ] = useState(false);
    const contextValue = { account, userWallet, setUserWallet, chainId, wrongNetwork };
    const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React();
    // try to eagerly connect to an injected provider, if it exists and has granted access already
    const triedEager = useEagerConnect();

    // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
    useEffect(() => {

        if (triedEager && !networkActive && !networkError && !active) {

            activateNetwork(network);

        }

    }, [ triedEager, networkActive, networkError, activateNetwork, active ]);

    // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
    useInactiveListener(!triedEager);

    // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
    useEffect(() => {

        setWrongNetwork(!!(triedEager && !active && networkError));

    }, [ networkError ]);


    return <Web3Context.Provider value={contextValue}>
        {children}
    </Web3Context.Provider>;

}
