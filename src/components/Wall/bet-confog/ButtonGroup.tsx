import * as BetControlStyles from '../styles/betConfigStyle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ConnectAndBetButton from '../../GameConnectAndBet/ConnectAndBetButton';
import {
    cashOut,
    changeBombCount,
    startCheck,
    startNewGame,
    winOrLouse
} from '../../../store/acions/wall';

import { IButtonGroupWall, IWState } from '../../../interface/components-ts/wall-ts/IWall';
import { IRealMode } from '../../../interface/store-ts/actions/realMode';

const ButtonGroup =({ 
    disable,
    setCount, 
    buttonText,
    setDisable,
    setButtonText,
    setOpenWinModal
}: IButtonGroupWall) => {

    const { isWin, startCount } = useSelector((state: IWState) => state.wall);
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const dispatch = useDispatch();

    const startNewGameOrCashOut = () => {

        if (buttonText === 'bet') {

            setCount(1);
            setDisable(true);
            setOpenWinModal(false);
            setButtonText('Cash Out');
            dispatch(changeBombCount(startCount));
            dispatch(startNewGame(startCount));
            dispatch(startCheck(true));

        } else {

            setButtonText('bet');
            dispatch(winOrLouse(false));
            setDisable(false);
            setOpenWinModal(true);

            if (isWin) {

                dispatch(cashOut());

            }

        }
    
    };

    const runGame = () => {

        if (!realMode) {

            setDisable(true);
            dispatch(startCheck());
            startNewGameOrCashOut();

        }

    };

    return <>
        <BetControlStyles.BetButton>
            <ConnectAndBetButton
                runGame={runGame}
                influenceBalance={false}
                buttonName={buttonText}
                disable={disable}
            />
        </BetControlStyles.BetButton>
    </>;

};

export default ButtonGroup;