import { createContext } from 'react';

const Web3Context = createContext({
    userWallet: '',
    setUserWallet: () => {},
    chainId: '',
    account: ''
});


export default Web3Context;
