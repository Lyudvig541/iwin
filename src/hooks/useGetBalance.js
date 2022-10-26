import { useContext, useEffect, useState } from 'react';
import Web3Context from '../components/Web3ReactManager/web3Context';
import { getUserBalance } from '../components/Web3ReactManager/getBalance';

export const useGetBalance = () => {

    const context = useContext(Web3Context);
    const [balance, setBalance] =useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        setBalance(await getUserBalance(context.account));

    }
    , [context.account, context.chainId]);
    
    return balance;

};

