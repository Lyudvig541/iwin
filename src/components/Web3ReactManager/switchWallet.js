import { useState } from 'react';
import { CHAIN_INFO } from '../../constants/chains';


export const useChainId = (supportedChain = '97', selectedCoin = 97) => {

    const [isSwitching, setIsSwitching] = useState(false);
    const [cancel, setCancel] = useState('');

    async function switchChain() {

        setCancel(cancel === false ? '' : false);

        try {

            await window.ethereum?.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: `0x${selectedCoin.toString(16)}`
                    }
                ]
            });

        } catch (switchError) {

            if (switchError?.code === 4902) {

                try {

                    window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: selectedCoin.toString(16),
                                chainName: CHAIN_INFO[selectedCoin].chainName,
                                rpcUrls: CHAIN_INFO[selectedCoin].rpcUrls,
                                nativeCurrency: CHAIN_INFO[selectedCoin].nativeCurrency,
                                blockExplorerUrls: CHAIN_INFO[selectedCoin].blockExplorerUrls
                            }
                        ]
                    });

                } catch (e) {

                    setIsSwitching(true);
                    throw('Error adding chain');

                }

            } else {

                setCancel(true);
                throw('Error switching chain');

            }

        } finally {

            setIsSwitching(false);

        }

    }

    return {
        isSupportedChain: selectedCoin === Number(supportedChain),
        isSwitching,
        switchChain,
        cancel
    };

};
