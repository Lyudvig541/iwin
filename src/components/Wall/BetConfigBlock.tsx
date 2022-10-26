import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import * as BetControlStyles from './styles/betConfigStyle';
import { ThemeNew } from '../../constants/themeNew';
import { IState } from '../../interface/store-ts/actions/lightMode';
import { IRealMode } from '../../interface/store-ts/actions/realMode';

import { IBetConfigBlock } from '../../interface/components-ts/wall-ts/IWall';
import { useGetBalance } from '../../hooks/useGetBalance';

import InputGroups from '../InputGroups';
import SelectCoefficient from './bet-confog/SelectCoefficient';
import ButtonGroup from './bet-confog/ButtonGroup';

const BetConfigBlock = ({ 
    disable,
    setCount,
    buttonText,
    setDisable,
    setButtonText,
    setOpenWinModal
}: IBetConfigBlock) => {

    const balance = useGetBalance();

    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const { lightMode } = useSelector((state: IState) => state.lightMode);

    const [value, setValue] = useState(0);
    const [, setInfluenceBalance] = useState(false);

    const inputBackground = useMemo(() =>
        (lightMode && ThemeNew.lightMode.bgColors.color43) || ThemeNew.lightMode.bgColors.color43,
    [lightMode]);

    return( 
        <BetControlStyles.BetControl>
            <BetControlStyles.BetInput>
                <SelectCoefficient 
                    lightMode={lightMode}
                />
                <BetControlStyles.BetAmount>
                    <BetControlStyles.InputWithLabel>
                        <BetControlStyles.Label>Bet Amount</BetControlStyles.Label>
                        <InputGroups
                            minValue={1}
                            maxValue={12}
                            value={value}
                            setValue={setValue}
                            disable={!realMode}
                            borderRadius="4px"
                            step={0.1}
                            type="MultiplicationButtons"
                            maxWidth="128px"
                            balance={balance}
                            height={'48px'}
                            setInfluenceBalance={setInfluenceBalance}
                            background={inputBackground}
                        />
                    </BetControlStyles.InputWithLabel>
                </BetControlStyles.BetAmount>
                <ButtonGroup
                    setOpenWinModal={setOpenWinModal}
                    setCount={setCount}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    disable={disable}
                    setDisable={setDisable}
                />
            </BetControlStyles.BetInput>
        </BetControlStyles.BetControl>
    );

};

export default BetConfigBlock;
