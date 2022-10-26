import produce from 'immer';
import { IKenoInitialState } from '../../interface/store-ts/redducers/keno';
import { generateWinnBlock } from '../../utils/generateWinBlock';
import { getWinArray, winOrLouse } from '../../utils/kenoGetWinCoefficient';
import { randomCheckKeno } from '../../utils/randomCheckKeno';
import { 
    GENERATE_WIN_NUMBERS, 
    GENERATE_RANDOM_CHECK,
    GET_USER_CHECK_NUMBERS,
    CLEAR_WIN_NUMBERS_LIST,
    CLEAR_USER_GET_NUMBERS_LIST,
    KenoActionsType
} from '../../interface/store-ts/actions/keno';


const initialState: IKenoInitialState = {
    kenoList: [
        { id: 1, check: false, number: 1, win: false },
        { id: 2, check: false, number: 2, win:false },
        { id: 3, check: false, number: 3, win:false },
        { id: 4, check: false, number: 4, win:false },
        { id: 5, check: false, number: 5, win:false },
        { id: 6, check: false, number: 6, win:false },
        { id: 7, check: false, number: 7, win:false },
        { id: 8, check: false, number: 8, win:false },
        { id: 9, check: false, number: 9, win:false },
        { id: 10, check: false, number: 10, win:false },
        { id: 11, check: false, number: 11, win:false },
        { id: 12, check: false, number: 12, win:false },
        { id: 13, check: false, number: 13, win:false },
        { id: 14, check: false, number: 14, win:false },
        { id: 15, check: false, number: 15, win:false },
        { id: 16, check: false, number: 16, win:false },
        { id: 17, check: false, number: 17, win:false },
        { id: 18, check: false, number: 18, win:false },
        { id: 19, check: false, number: 19, win:false },
        { id: 20, check: false, number: 20, win:false },
        { id: 21, check: false, number: 21, win: false },
        { id: 22, check: false, number: 22, win: false },
        { id: 23, check: false, number: 23, win: false },
        { id: 24, check: false, number: 24, win: false },
        { id: 25, check: false, number: 25, win: false },
        { id: 26, check: false, number: 26, win: false },
        { id: 27, check: false, number: 27, win: false },
        { id: 28, check: false, number: 28, win: false },
        { id: 29, check: false, number: 29, win: false },
        { id: 30, check: false, number: 30, win: false },
        { id: 31, check: false, number: 31, win: false },
        { id: 32, check: false, number: 32, win: false },
        { id: 33, check: false, number: 33, win: false },
        { id: 34, check: false, number: 34, win: false },
        { id: 35, check: false, number: 35, win: false },
        { id: 36, check: false, number: 36, win: false },
        { id: 37, check: false, number: 37, win: false },
        { id: 38, check: false, number: 38, win: false },
        { id: 39, check: false, number: 39, win: false },
        { id: 40, check: false, number: 40, win: false }
    ],
    winList: [],
    getList: [],
    isWin: null,
    riskButton: [
        { id: 1, text: 'Hard' }, 
        { id: 2, text: 'Medium' },
        { id: 3, text: 'Low' }
    ],
    autoPicks: [
        { id: 1, text: 1 }, 
        { id: 2, text: 2 }, 
        { id: 3, text: 3 }, 
        { id: 4, text: 4 },
        { id: 5, text: 5 },
        { id: 6, text: 6 }, 
        { id: 7, text: 7 },
        { id: 8, text: 8 },
        { id: 9, text: 9 },
        { id: 10, text: 10 }
    ]
};

const kenoResult = produce((draft, action: KenoActionsType) => {

    switch (action.type) {

        case CLEAR_USER_GET_NUMBERS_LIST: {

            draft.winList = [];
            draft.kenoList.forEach(number => number.check = false);

            break;
        
        }

        case CLEAR_WIN_NUMBERS_LIST: {

            draft.getList = [];
            draft.isWin = null;
            draft.kenoList.forEach(number => number.win = false);

            break;

        }

        case GENERATE_WIN_NUMBERS: {

            const type = action.payload;
            const winArray = generateWinnBlock(10, 40);
            const winList = getWinArray(draft.getList, winArray);

            draft.kenoList = randomCheckKeno(winArray, draft.kenoList, 'win');
            draft.isWin = winOrLouse(draft.getList, winList, type);
                
            
            break;

        }

        case GET_USER_CHECK_NUMBERS: {

            const checkIndex = action.payload - 1;
            const index = draft.getList.indexOf(action.payload);

            if (index > 0 && draft.kenoList[ checkIndex ].check) {

                draft.getList.splice(index, 1);

            }

            if (draft.getList.length < 10) {

                draft.kenoList[ checkIndex ].check = index < 0;
            
            }

            if (index < 0 && draft.getList.length !== 10) {

                draft.getList = [ ...draft.getList, action.payload ];

            }

            break;
        
        }

        case GENERATE_RANDOM_CHECK: {

            const randomCheck: number[] = generateWinnBlock(action.payload, 40);

            draft.getList = randomCheck;

            draft.kenoList = randomCheckKeno(randomCheck, draft.kenoList, 'check');

            break;

        }


        default: {

            break;

        }


    }

}, initialState);

export default kenoResult;