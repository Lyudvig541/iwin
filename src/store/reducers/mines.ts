import produce from 'immer';
import { CHANGE_BOMB_DIAMOND_COUNT, MINES_DEMO, MinesActionsType } from '../../interface/store-ts/actions/mines';
import { IMinesState } from '../../interface/store-ts/redducers/mines';
import { generateWinnBlock } from '../../utils/generateWinBlock';

const initialState: IMinesState = {
    minesCount: {
        diamond: 20,
        mines: 5
    },
    mines: []
};

const mines = produce((draft, action: MinesActionsType) => {

    switch (action.type) {

        case CHANGE_BOMB_DIAMOND_COUNT: {
            
            draft.minesCount = { ...action.payload };
            break;

        }

        case MINES_DEMO: {

            const { numberOfMines } = action.payload;
            const demoMine = [
                { id: 1, mine: false },
                { id: 2, mine: false },
                { id: 3, mine: false },
                { id: 4, mine: false },
                { id: 5, mine: false },
                { id: 6, mine: false },
                { id: 7, mine: false },
                { id: 8, mine: false },
                { id: 9, mine: false },
                { id: 10, mine: false },
                { id: 11, mine: false },
                { id: 12, mine: false },
                { id: 13, mine: false },
                { id: 14, mine: false },
                { id: 15, mine: false },
                { id: 16, mine: false },
                { id: 17, mine: false },
                { id: 18, mine: false },
                { id: 19, mine: false },
                { id: 20, mine: false },
                { id: 21, mine: false },
                { id: 22, mine: false },
                { id: 23, mine: false },
                { id: 24, mine: false },
                { id: 25, mine: false }
            ];
            const bombList = generateWinnBlock(numberOfMines, 24);

            bombList.forEach((id) => {

                demoMine[id].mine = true;

            });

            draft.mines = demoMine;
            break;
        
        } 
        
        default: {

            break;

        }

    }

}, initialState);

export default mines;