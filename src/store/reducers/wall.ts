import produce from 'immer';
import {
    CHANGE_WIN_OR_LOSE,
    CHANGE_BOMB_COUNT,
    START_NEW_GAME,
    WIN_OR_LOUSE,
    START_CHECK,
    CLICK_BOMB,
    WallActionsType
} from '../../interface/store-ts/actions/wall';
import { IState } from '../../interface/store-ts/redducers/wall';
import { addUpPercentage } from '../../utils/generateNumberPercentage';
import { generateWinnBlock } from '../../utils/generateWinBlock';

const initialState: IState = {
    coefficient : [
        { id: 10, coefficient: 0 },
        { id: 9, coefficient: 0 },
        { id: 8, coefficient: 0 },
        { id: 7, coefficient: 0 },
        { id: 6, coefficient: 0 },
        { id: 5, coefficient: 0 },
        { id: 4, coefficient: 0 },
        { id: 3, coefficient: 0 },
        { id: 2, coefficient: 0 },
        { id: 1, coefficient: 0 }
    ],
    bombsCountButton: [
        { id: 1, x:4.85, precent: [400, 400, 399.8, 400.1, 400, 400, 400, 400, 400], text: 'Hard (1 out of 5)' },
        { id: 2, x: 2.42, precent: [150.4, 150, 216.1, 150, 149.1, 150.1, 151.5, 148.5, 150], text: 'Medium (2 out of 5)' },
        { id: 3, x: 1.62, precent: [66.4, 66.9, 66.6, 66.7, 66.7, 66.7, 66.6, 66.4, 66.23], text: 'Easy (3 out of 5)' },
        { id: 4, x: 1.21, precent: [25.7, 24.4, 25.4, 24.9, 25, 24.9, 25.2, 25.1, 24.9], text: 'Basic (4 out of 5)' }
    ],
    game: {
        1:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        2:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        3:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        4:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        5:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        6:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        7:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        8:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        9:  [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ],
        10: [
            { id: 1, isClick: false, win: false },
            { id: 2, isClick: false, win: false },
            { id: 3, isClick: false, win: false },
            { id: 4, isClick: false, win: true },
            { id: 5, isClick: false, win: false }
        ]
    },
    isWin: false,
    startCount: 1,
    isNextClick: null,
    newGame: false,
    started: false,
    winOrLoseCount: {
        win: 0, lose: 0
    }
};

const wall = produce((draft, action: WallActionsType) => {

    switch (action.type) {

        case CHANGE_WIN_OR_LOSE: {

            (action.payload && draft.winOrLoseCount.win++) || draft.winOrLoseCount.lose++;

            break;

        }

        case CHANGE_BOMB_COUNT: {

            const id = action.payload;

            const data = draft.bombsCountButton.filter(item => id === item.id);

            const betX = addUpPercentage(data[0]);
            
            draft.coefficient.forEach((item, index) => {

                item.coefficient = betX[index];

            });
            draft.startCount = action.payload;
            break;

        }

        case START_NEW_GAME: {

            const { winCount } = action.payload;

            Object.keys(draft.game).forEach(key => {

                const winList = generateWinnBlock(winCount);

                draft.game[+key].forEach((block, i) => {

                    block.win = winList.indexOf(i) !== -1;
                    block.isClick = false;

                });

            });
            draft.isNextClick = true;
            draft.newGame = !draft.newGame;
            break;

        }

        case WIN_OR_LOUSE: {

            draft.isWin = action.payload;
            break;

        }

        case START_CHECK: {

            draft.started = (action.payload && action.payload) || !draft.started;

            break;

        }

        case CLICK_BOMB: {

            const id = action.payload;

            draft.game[id].forEach(line => {

                line.isClick = true;

            });

            break;

        }

        default: {

            break;

        }

    }

}, initialState);

export default wall;