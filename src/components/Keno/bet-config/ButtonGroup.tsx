import * as BetControlStyles from '../styles/settingsStyle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConnectAndBetButton from '../../GameConnectAndBet/ConnectAndBetButton';
import { cashOut, winOrLouse } from '../../../store/acions/wall';
import { IRealMode } from '../../../interface/store-ts/actions/realMode';
import { IButtonGroupKeno, IKenoState } from '../../../interface/components-ts/keno-ts/IKeno';

const ButtonGroup = ({
    disable,
    buttonText,
    setDisable,
    setButtonText,
    setOpenWinModal,
    runGame
}: IButtonGroupKeno) => {

    const { isWin } = useSelector((state: IKenoState) => state.keno);
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const dispatch = useDispatch();

    const startNewGameOrCashOut = () => {

        if (buttonText === 'bet') {

            setDisable(true);
            setOpenWinModal(false);
            setButtonText('Cash Out');

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

    const run = () => {

        if (!realMode) {

            setDisable(true);
            runGame();
            startNewGameOrCashOut();

        }

    };

    return <>
        <BetControlStyles.BetButton>
            <ConnectAndBetButton
                runGame={run}
                influenceBalance={false}
                buttonName={buttonText}
                disable={disable}
            />
        </BetControlStyles.BetButton>
    </>;

};

export default ButtonGroup;