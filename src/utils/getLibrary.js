import { Web3Provider } from '@ethersproject/providers';
import { NETWORK_POLLING_INTERVALS } from '../assets/static/static';

export default function getLibrary(provider) {

    const library = new Web3Provider(
        provider,
        typeof provider.chainId === 'number'
            ? provider.chainId
            : typeof provider.chainId === 'string'
                ? parseInt(provider.chainId)
                : 'any'
    );

    library.pollingInterval = 15_000;
    library.detectNetwork().then((network) => {

        const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId];

        if (networkPollingInterval) {

            library.pollingInterval = networkPollingInterval;

        }

    });
    return library;

}
