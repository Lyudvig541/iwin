import ETH from '../icons/ether.svg';
import BNB from '../icons/binance.png';
import MATIC from '../icons/matic.png';
import TRX from '../icons/trx.png';
import MetaMask from '../../assets/images/Metamask.png';
import ConnectWallet from '../../assets/images/WalletConnect.png';
import Coinbase from '../../assets/images/CoinBase.png';
import { scroller } from 'react-scroll';

const wheelsData = {
    buttonData: [
        { XWin: `X${2}.00`, type: 'purple' },
        { XWin: `X${3}.00`, type: 'pink' },
        { XWin: `X${5}.00`, type: 'lightblue' },
        { XWin: `X${50}.00`, type: 'orange' }
    ],
    data: [
        {
            type: 'purple',
            XWin: `X${2}.00`,
            countColor: 34
        },
        {
            type: 'pink',
            XWin: `X${3}.00`,
            countColor: 2
        },
        {
            type: 'blue',
            XWin: `X${5}.00`,
            countColor: 16
        },
        {
            type: 'orange',
            XWin: `X${5}0.00`,
            countColor: 2
        },
        {
            type: 'bonus',
            XWin: `X${1.2}0`,
            countColor: 7
        }
    ]

};

const diceData = {
    dataStatisticScoreboard: [
        {
            prediction: '2000-4000',
            count: '33',
            percent: '10'
        },
        {
            prediction: '2000-4000',
            count: '33',
            percent: '10'
        },
        {
            prediction: '2000-4000',
            count: '33',
            percent: '10'
        },
        {
            prediction: '2000-4000',
            count: '33',
            percent: '10'
        }

    ],
    dataStatisticWin: {
        wins: 500,
        loses: 300,
        viewAll: (element, changeTableTab) => {

            scroller.scrollTo(element.current.classList.value, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
            changeTableTab(1);
        
        }
    }
};

const roundData = [
    { label: '50 Rounds', value: 50 }, 
    { label: '100 Rounds', value: 200 }, 
    { label: '500 Rounds', value: 500 }
];

const coinData = [
    { label: 'ETH', icon: ETH },
    { label: 'BNB', icon: BNB },
    { label: 'MATIC', icon: MATIC },
    { label: 'TRX', icon: TRX }
];

const wallets = [
    { label: 'MetaMask', icon: MetaMask, description: 'Easy-to-use browser extension' },
    { label: 'WalletConnect', icon: ConnectWallet, description: 'Easy-to-use browser extension' },
    { label: 'Coinbase Wallet', icon: Coinbase, description: 'Easy-to-use browser extension' }
];

export {
    wheelsData,
    diceData,
    roundData,
    coinData,
    wallets
};