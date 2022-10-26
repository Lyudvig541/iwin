import { SupportedChainId } from '../../constants/chains';
import GameBlockDice from '../images/DiceGameBlock.svg';
import GameBlockFlip from '../images/FlipGameBlock.svg';
import GameBlockWheel from '../images/WheelGameBlock.svg';
import LeadingSliderDice from '../images/leadingDice.png';
import LeadingSliderFlip from '../images/leadingFlip.svg';
import LeadingSliderWheel from '../images/leadingWheel.png';
import Binance from '../../assets/icons/binance.png';
import Ethereum from '../../assets/icons/ether.svg';
import Mainnet from '../icons/Mainnet.png';
import Polygon from '../icons/Polygon.png';
import TRX from '../icons/trx.png';
import { Theme } from '../../constants/theme';
import { scroller } from 'react-scroll';
import dicePlay from './diceSound/scroller.mp3';
import diceRollPlay from './diceSound/rolling2.mp3';
import diceWin from './diceSound/win.mp3';
import diceLus from './diceSound/lose.mp3';
import flipPlay from './flepSound/coin-flip.mp3';
import flipWin from './flepSound/win.mp3';
import flipLus from './flepSound/lose.mp3';
import wheelPlay from './wheelSound/wheelSpin.mp3';
import wheelWin from './wheelSound/win.mp3';
import wheelLus from './wheelSound/lose.mp3';

const AUDIO_PLAY = {
    audioDiceClick: dicePlay,
    audioDiceRolling: diceRollPlay,
    audioDiceWin: diceWin,
    audioDiceLose: diceLus,
    audioFlipPlay: flipPlay,
    audioFlipWin: flipWin,
    audioFlipLose: flipLus,
    audioWheelPlay: wheelPlay,
    audioWheelWin: wheelWin,
    audioWheelLose :wheelLus
};


const STATUS = Object.freeze({
    NOTSTARTED: 'NOTSTARTED',
    STARTED: 'STARTED',
    WAITING: 'WAITING',
    PLAYED: 'PLAYED'
});


//getLibrary
const NETWORK_POLLING_INTERVALS = {
    [SupportedChainId.ARBITRUM_ONE]: 1000,
    [SupportedChainId.ARBITRUM_RINKEBY]: 1000,
    [SupportedChainId.OPTIMISM]: 1000,
    [SupportedChainId.OPTIMISTIC_KOVAN]: 1000
};
//ScoreboardItems
const scores = [
    {
        circle: Theme.buttonColors.mix4,
        background: Theme.buttonColors.mix5,
        type: 'purple'
    },
    {
        circle: Theme.buttonColors.mix6,
        background: Theme.buttonColors.mix7,
        type: 'pink'
    },
    {
        circle: Theme.buttonColors.mix8,
        background: Theme.buttonColors.mix9,
        type: 'blue'
    },
    {
        circle: Theme.buttonColors.mix10,
        background: Theme.buttonColors.mix11,
        type: 'orange'
    },
    {
        circle: Theme.buttonColors.mix12,
        background: Theme.buttonColors.mix13,
        type: 'bonus'
    }
];

//DiceScoreboard
const columns = ['Type 1', 'Type 2', 'Type 3'];
//DiceTable
const headerTabs = ['All Bets', 'My Bets', 'High Rollers'];
//GamesBlock
const list = [
    {
        id: 1,
        img: GameBlockDice,
        background: Theme.bgColors.diceBg,
        name: 'DICE GAME',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        positionImg: true,
        display: true,
        route: '/dice'
    },
    {
        id: 2,
        img: GameBlockFlip,
        background: Theme.bgColors.flipBg,
        name: 'FLIP GAME',
        centerBlock: true,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        display: true,
        route: '/flip'
    },
    {
        id: 3,
        img: GameBlockWheel,
        background: Theme.bgColors.wheelBg,
        name: 'WHEEL GAME',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        positionImg: false,
        display: true,
        route: '/wheel'

    }
];
//LandingSlider
const sliderList = [
    {
        id: 1,
        img: LeadingSliderDice,
        alt:'dice image',
        title: 'dice',
        background: 'linear-gradient(357.72deg, #61B0FF 1.91%, #11508F 98.08%)',
        active: false,
        route: '/dice'
    },
    {
        id: 2,
        img: LeadingSliderFlip,
        alt:'flip image',
        title: 'flip',
        background:'linear-gradient(357.72deg, #FF50F9 1.91%, #8F118B 98.08%)',
        active: false,
        route: '/flip'
    },
    {
        id: 3,
        img: LeadingSliderWheel,
        alt:'wheel image',
        title: 'wheel',
        background:'linear-gradient(357.74deg, #8740FF 1.89%, #4E288F 98.1%)',
        active: false,
        route: '/wheel'
    }];

//RulesModal
const tabs = [{ label: 'Rules', content: ' rule text' }, { label: 'Limits', content: ' limits text' }];

//NavBar
const data = [
    { coin: 'Ethereum', code: 'ETH', chainId: 1, icon: Ethereum, balance: '0.00000' },
    { coin: 'Binance', code: 'BNB', chainId: 56, icon: Binance, balance: '0.00000' },
    { coin: 'Testnet', code: 'MATIC', chainId: 137, icon: Polygon, balance: '0.00000' },
    { coin: 'Testnet', code: 'TRX', chainId: 12, icon: TRX, balance: '0.00000' }
];

//NetworkData
const networkData = [
    { coin: 'Mainnet', chainId: 1, icon: Mainnet, code: 'ETH' },
    { coin: 'Ropsten', chainId: 3, icon: Ethereum, code: 'ETHT' },
    { coin: 'Rinkeby', chainId: 4, icon: Ethereum, code: 'ETHT' },
    { coin: 'Smart Chain', chainId: 56, icon: Binance, code: 'BNB' },
    { coin: 'Smart Chain Testnet', chainId: 97, icon: Binance, code: 'BNBT' },
    { coin: 'Polygon', chainId: 137, icon: Polygon, code: 'MATIC' },
    { coin: 'Polygon Testnet', chainId: 12, icon: Polygon, code: 'MATIC' }
];

//Pagination
// const dropDataCount = [{ label :10, value: 10 }, { label :20, value: 20 }, { label :30, value: 30 }];
const dropDataCount = [{ label: 10 }, { label: 20 }, { label: 30 }];

//Table
const dropDownData = [
    { label: 'All Bets', value: 0 },
    { label: 'My Bets', value: 1 },
    { label: 'High Rollers', value: 2
    }]
;

//FlipPage
const flipPageData = {
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
};
const minesPageData = {
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
};

// InfoBlock
const InfoBlockData = [
    { id:1, title:'How can i connect my wallet?', toggle:false, text:'Just click on Connect Wallet button then choose wallet and enter your details there.' },
    { id:2, title:'How can i connect my wallet?', toggle:false, text:'Just click on Connect Wallet button then choose wallet and enter your details there.' },
    { id:3, title:'How can i connect my wallet?', toggle:false, text:'Just click on Connect Wallet button then choose wallet and enter your details there.' },
    { id:4, title:'How can i connect my wallet?', toggle:false, text:'Just click on Connect Wallet button then choose wallet and enter your details there.' }
];

//Table
const tableData = {
    0: ['Round ID', 'User', 'Amount(ETH)', 'Multiplier', 'Game', 'Roll', 'Payout (ETH)'],
    1: ['Game', 'User', 'Bet', 'Multiplier', 'Payout (ETH)']
};

//WheelGame
const LData = {
    wins: 1,
    loses: 1,
    viewAll: () => {

    }
};

const diceValues = {
    minRange: 1,
    maxRange: 100,
    defaultValue: 50
};
const minesValues = {
    minCountBomb: 1,
    maxCountBomb: 24
};

export{
    STATUS,
    NETWORK_POLLING_INTERVALS,
    AUDIO_PLAY,
    scores,
    columns,
    headerTabs,
    list,
    sliderList,
    tabs,
    data,
    dropDataCount,
    dropDownData,
    flipPageData,
    InfoBlockData,
    tableData,
    LData,
    networkData,
    diceValues,
    minesPageData,
    minesValues
};