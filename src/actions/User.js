import { getUserBalance } from '../components/Web3ReactManager/getBalance';

export const getTokenBalance = async (account) => await getUserBalance(account);